// Output UIAddonPack changes

const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'pluginUIAddonPack.js');

const ignoredVariables = {
    'BUTTON_FM_LIST_MOD_MINIMUM_HIDE_DISTANCE': '200',
    'MULTIPLE_USERS_NOTICE_MESSAGE_1': '`This receiver is currently in use.`',
    'MULTIPLE_USERS_NOTICE_MESSAGE_2': '`Please be considerate and mindful of other users before tuning.`',
    'MULTIPATH_ATTACH_TO': '"STEREO"',
    'MULTIPATH_LEFT_PADDING': '-8',
    'TUNE_DELAY': '2',
    'TUNE_DELAY_IF_MORE_THAN_ONE_USER': '45',
    'DEFAULT_SIGNAL_UNIT': '0',
    'PLUGINS_USER_ORDER': '"1"',
    'STEREO_ICON_COLOR': '"default"',
    'STEREO_ICON_COLOR_OFF': '""',
    'RDS_ICON_PRESET': '1',
    'RDS_ICON_SCALE': '"100%"',
    'STEREO_ICON_WIDTH': '2',
    'RDS_INDICATOR_ICON_TYPE': '1',
    'RDS_INDICATOR_ICON_COLOR': '""',
    'RDS_INDICATOR_ICON_COLOR_OFF': '""',
    'BANDWIDTH_UPDATE_INTERVAL': '500',
    'RDS_INDICATOR_ICON_GLOW_INTENSITY': '0.25',
};

// Extract 'user' preset from RDS_ICON_STYLE_PRESETS
function extractUserPreset(lines, startIndex) {
    let insideUser = false;
    let braceDepth = 0;
    const result = [];

    for (let i = startIndex; i < lines.length; i++) {
        const line = lines[i];

        if (!insideUser) {
            if (line.includes('user: {')) {
                insideUser = true;
                braceDepth = 1;
                result.push('const RDS_ICON_STYLE_PRESETS = {');
                result.push(line);
            }
            continue;
        }

        // Count braces safely
        braceDepth += (line.match(/{/g) || []).length;
        braceDepth -= (line.match(/}/g) || []).length;

        if (result[result.length - 1] !== line) {
            result.push(line);
        }

        if (insideUser && braceDepth === 0) {
            result.push('};');
            break;
        }
    }

    return result;
}

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error(
            err.code === 'ENOENT'
                ? `File not found: ${filePath}`
                : 'Error reading file:',
            err
        );
        return;
    }

    const lines = data.split('\n');
    let capturing = false;
    const results = [];

    for (let i = 0; i < lines.length; i++) {
        const originalLine = lines[i];
        const line = originalLine.trim();

        if (!capturing) {
            if (line.startsWith('const ENABLE_PLUGIN')) {
                capturing = true;

                if (!line.includes('= false')) {
                    results.push(originalLine);
                }
            }
            continue;
        }

        if (line.startsWith('if (ENABLE_PLUGIN)')) {
            break;
        }

        if (line.startsWith('const RDS_ICON_STYLE_PRESETS')) {
            const userPreset = extractUserPreset(lines, i);

            if (userPreset.length) {
                results.push(...userPreset);
            }

            while (i < lines.length && !lines[i].trim().endsWith('};')) {
                i++;
            }
            continue;
        }

        const varMatch = line.match(/^const\s+(\w+)\s*=\s*(.+);/);
        if (!varMatch) continue;

        const varName = varMatch[1];
        const value = varMatch[2].trim();

        if (ignoredVariables[varName] === value) {
            continue;
        }

        if (value !== 'false') {
            results.push(originalLine);
        }
    }

    console.log(' Variables changed:\n');
    results.forEach(line => console.log(line));

    if (results.length === 0) {
        console.log('No changes found.');
        return;
    }

    const outputPath = path.join(__dirname, 'changes.txt');
    const outputContent = results.join('\n') + '\n';

    fs.writeFile(outputPath, outputContent, 'utf8', writeErr => {
        if (writeErr) {
            console.error('Error writing to changes.txt:', writeErr);
        } else {
            console.log('\n Changes written to changes.txt');
        }
    });
});
