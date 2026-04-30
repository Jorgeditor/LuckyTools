const fs = require('fs');
let lines = fs.readFileSync('index.html', 'utf8').split('\n');

// Line 490 & 600
const fixReview = (line) => {
    return line.replace(/incÒ³modo/g, 'incómodo')
               .replace(/botÒ³n/g, 'botón')
               .replace(/increÒ­ble/g, 'increíble')
               .replace(/\uFFFD/g, '&mdash;');
};
lines[489] = fixReview(lines[489]);
lines[599] = fixReview(lines[599]);

// Line 902
lines[901] = lines[901].replace('⬢', '&bull;');

// Line 905
lines[904] = lines[904].replace('\uFFFD', '&mdash;');

// Line 972
lines[971] = lines[971].replace(/\uFFFD/g, '&mdash;');

// Line 975
lines[974] = lines[974].replace(/\uFFFD/g, '&mdash;');

// Extra safety: run over all lines just in case
for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('\uFFFD')) {
        lines[i] = lines[i].replace(/\uFFFD/g, '&mdash;');
    }
}

fs.writeFileSync('index.html', lines.join('\n'), 'utf8');
console.log('Fixed additional broken lines.');
