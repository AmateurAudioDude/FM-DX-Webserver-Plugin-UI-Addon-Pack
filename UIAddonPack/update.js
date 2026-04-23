// Migrate variables from changes.txt into pluginUIAddonPack.js

const fs = require('fs');
const path = require('path');

const txtPath = path.join(__dirname, 'changes.txt');
const jsPath = path.join(__dirname, 'pluginUIAddonPack.js');

function parseChanges(content) {
    const lines = content.split('\n');
    const simpleVars = [];
    const userPresetVars = {};
    let i = 0;

    while (i < lines.length) {
        const trimmed = lines[i].trim();

        if (trimmed.startsWith('const RDS_ICON_STYLE_PRESETS')) {
            let depth = 0;
            let started = false;
            let insideUser = false;
            let userDepth = 0;
            while (i < lines.length) {
                const l = lines[i];
                const t = l.trim();
                const opens = (l.match(/{/g) || []).length;
                const closes = (l.match(/}/g) || []).length;

                if (!insideUser && /^user\s*:\s*\{/.test(t)) {
                    insideUser = true;
                    userDepth = 1;
                } else if (insideUser) {
                    userDepth += opens - closes;
                    if (userDepth <= 0) {
                        insideUser = false;
                    } else {
                        const m = t.match(/^(\w+)\s*:\s*(.+?),?\s*$/);
                        if (m) userPresetVars[m[1]] = m[2];
                    }
                }

                depth += opens - closes;
                if (opens > 0) started = true;
                i++;
                if (started && depth === 0) break;
            }
            continue;
        }

        const m = trimmed.match(/^const\s+(\w+)\s*=\s*(.+);/);
        if (m) simpleVars.push({ name: m[1], value: m[2].trim() });
        i++;
    }

    return { simpleVars, userPresetVars };
}

function migrateSimpleVar(lines, name, newValue) {
    const re = new RegExp(`^(\\s*const\\s+${name}\\s*=\\s*)(.+);(.*)$`);
    for (let i = 0; i < lines.length; i++) {
        const m = lines[i].match(re);
        if (m) {
            const oldValue = m[2];
            if (oldValue === newValue) return { found: true, changed: false, oldValue };
            lines[i] = `${m[1]}${newValue};${m[3]}`;
            return { found: true, changed: true, oldValue };
        }
    }
    return { found: false };
}

function findPresetsRange(lines) {
    let start = -1, end = -1, depth = 0, started = false;
    for (let i = 0; i < lines.length; i++) {
        if (start === -1) {
            if (lines[i].trim().startsWith('const RDS_ICON_STYLE_PRESETS')) start = i;
            else continue;
        }
        const opens = (lines[i].match(/{/g) || []).length;
        const closes = (lines[i].match(/}/g) || []).length;
        depth += opens - closes;
        if (opens > 0) started = true;
        if (started && depth === 0) { end = i; break; }
    }
    return { start, end };
}

function findUserBlockRange(lines, pStart, pEnd) {
    let start = -1, end = -1, depth = 0;
    for (let i = pStart + 1; i <= pEnd; i++) {
        if (start === -1 && /^user\s*:\s*\{/.test(lines[i].trim())) {
            start = i;
            depth = 1;
            continue;
        }
        if (start !== -1) {
            const opens = (lines[i].match(/{/g) || []).length;
            const closes = (lines[i].match(/}/g) || []).length;
            depth += opens - closes;
            if (depth <= 0) { end = i; break; }
        }
    }
    return { start, end };
}

function migrateUserPresetVar(lines, uStart, uEnd, key, newValue) {
    const re = new RegExp(`^(\\s*${key}\\s*:\\s*)(.+)$`);
    for (let i = uStart + 1; i < uEnd; i++) {
        const m = lines[i].match(re);
        if (m) {
            const val = m[2];
            const hasComma = val.endsWith(',');
            const oldValue = hasComma ? val.slice(0, -1) : val;
            if (oldValue === newValue) return { found: true, changed: false, oldValue };
            lines[i] = `${m[1]}${newValue}${hasComma ? ',' : ''}`;
            return { found: true, changed: true, oldValue };
        }
    }
    return { found: false };
}

function extractPresetKeys(lines, pStart, pEnd) {
    const presets = {};
    let name = null, depth = 0;
    for (let i = pStart + 1; i <= pEnd; i++) {
        const t = lines[i].trim();
        if (!name) {
            const m = t.match(/^(\w+)\s*:\s*\{/);
            if (m) { name = m[1]; presets[name] = []; depth = 1; }
            continue;
        }
        const opens = (lines[i].match(/{/g) || []).length;
        const closes = (lines[i].match(/}/g) || []).length;
        depth += opens - closes;
        if (depth <= 0) { name = null; continue; }
        const km = t.match(/^(\w+)\s*:/);
        if (km) presets[name].push(km[1]);
    }
    return presets;
}


function main() {
    const dryRun = process.argv.slice(2).includes('--dry');

    let txt, js;
    try {
        txt = fs.readFileSync(txtPath, 'utf8');
    } catch (err) {
        console.error(err.code === 'ENOENT' ? `File not found: ${txtPath}` : err);
        return;
    }
    try {
        js = fs.readFileSync(jsPath, 'utf8');
    } catch (err) {
        console.error(err.code === 'ENOENT' ? `File not found: ${jsPath}` : err);
        return;
    }

    const { simpleVars, userPresetVars } = parseChanges(txt);
    const lines = js.split('\n');

    const warnings = [];
    const changed = [];
    const unchanged = [];

    for (const { name, value } of simpleVars) {
        const r = migrateSimpleVar(lines, name, value);
        if (!r.found) warnings.push(`Variable '${name}' not found in pluginUIAddonPack.js`);
        else if (r.changed) changed.push(`${name}: ${r.oldValue} -> ${value}`);
        else unchanged.push(name);
    }

    const { start: pStart, end: pEnd } = findPresetsRange(lines);

    if (Object.keys(userPresetVars).length > 0) {
        if (pStart === -1) {
            warnings.push('RDS_ICON_STYLE_PRESETS block not found in pluginUIAddonPack.js');
        } else {
            const { start: uStart, end: uEnd } = findUserBlockRange(lines, pStart, pEnd);
            if (uStart === -1) {
                warnings.push("'user' preset not found inside RDS_ICON_STYLE_PRESETS");
            } else {
                for (const [key, value] of Object.entries(userPresetVars)) {
                    const r = migrateUserPresetVar(lines, uStart, uEnd, key, value);
                    if (!r.found) warnings.push(`User preset key '${key}' not found in pluginUIAddonPack.js`);
                    else if (r.changed) changed.push(`user.${key}: ${r.oldValue} -> ${value}`);
                    else unchanged.push(`user.${key}`);
                }
            }
        }
    }

    if (pStart !== -1) {
        const presets = extractPresetKeys(lines, pStart, pEnd);
        const names = Object.keys(presets);
        if (names.length > 0) {
            const allKeys = new Set();
            for (const n of names) for (const k of presets[n]) allKeys.add(k);
            for (const n of names) {
                const have = new Set(presets[n]);
                const missing = [...allKeys].filter(k => !have.has(k));
                if (missing.length) {
                    warnings.push(`RDS_ICON_STYLE_PRESETS preset '${n}' is missing keys: ${missing.join(', ')}`);
                }
            }
        }
    } else {
        warnings.push('RDS_ICON_STYLE_PRESETS block not found (skipped preset consistency check)');
    }

    console.log(`=== Report${dryRun ? ' (dry run)' : ''} ===`);
    if (changed.length) {
        console.log(dryRun ? '\nWould update:' : '\nUpdated:');
        changed.forEach(c => console.log('  ' + c));
    }
    if (unchanged.length) {
        console.log(`\nUnchanged (already at target value): ${unchanged.length} variable(s)`);
    }
    if (warnings.length) {
        console.log('\nWarnings:');
        warnings.forEach(w => console.log('  ! ' + w));
    }
    if (!changed.length && !warnings.length) {
        console.log('\nNo migration necessary.');
    }

    if (changed.length) {
        if (dryRun) {
            console.log('\nDry run: pluginUIAddonPack.js was not modified.');
        } else {
            try {
                fs.writeFileSync(jsPath, lines.join('\n'), 'utf8');
                console.log('\npluginUIAddonPack.js has been updated.');
            } catch (err) {
                console.error('Error writing to pluginUIAddonPack.js:', err);
            }
        }
    }
}

main();
