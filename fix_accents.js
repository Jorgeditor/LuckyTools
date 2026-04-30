const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf8');

content = content.replace(/Ò©/g, 'é')
                 .replace(/Ò±/g, 'ñ')
                 .replace(/Ò³/g, 'ó')
                 .replace(/Ò­/g, 'í')
                 .replace(/Ò¡/g, 'á')
                 .replace(/Òº/g, 'ú');

fs.writeFileSync('index.html', content, 'utf8');
console.log('Fixed Spanish accents.');
