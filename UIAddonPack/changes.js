// Output UIAddonPack changes

const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'pluginUIAddonPack.js');

const ignoredVariables = {
    'BUTTON_FM_LIST_MOD_MINIMUM_HIDE_DISTANCE': '200',
    'MULTIPLE_USERS_NOTICE_MESSAGE_1': '`This receiver is currently in use.`',
    'MULTIPLE_USERS_NOTICE_MESSAGE_2': '`Please be considerate and mindful of other users before tuning.`',
    'TUNE_DELAY': '2',
    'TUNE_DELAY_IF_MORE_THAN_ONE_USER': '45',
    'DEFAULT_SIGNAL_UNIT': '0',
    'PLUGINS_USER_ORDER': '"1"',
    'STEREO_ICON_COLOR': '"default"',
    'STEREO_ICON_COLOR_OFF': '""',
};

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        if (err.code === 'ENOENT') {
            console.error(` File not found: ${filePath}`);
        } else {
            console.error(' Error reading file:', err);
        }
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
        } else {
            if (line.startsWith('if (ENABLE_PLUGIN)')) {
                break;
            }

            const varAssignment = line.match(/^const\s+(\w+)\s*=\s*(.+);/);
            if (varAssignment) {
                const varName = varAssignment[1];
                const value = varAssignment[2].trim();

                if (ignoredVariables[varName] === value) {
                    continue;
                }

                if (value !== 'false') {
                    results.push(originalLine);
                }
            }
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

    fs.writeFile(outputPath, outputContent, 'utf8', (writeErr) => {
        if (writeErr) {
            console.error('Error writing to changes.txt:', writeErr);
        } else {
            console.log(`\n Changes written to changes.txt`);
        }
    });
});
