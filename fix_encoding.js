const fs = require('fs');
const path = 'index.html';

let content = fs.readFileSync(path, 'utf8');

// After one round of latin1->utf8 fix, remaining broken sequences are 
// 3-byte sequences that partially decoded. We need manual replacement.
// The pattern â\x1a\x9f\u202d (em dash U+2014 partial decode) needs to become —
// Let's use a targeted string replacement using Buffer manipulation.

// Find all occurrences of the broken em-dash pattern
// In the output we see: â\x9a\x1a (bytes: 0xE2 0x80 0x94 = — in UTF-8)
// But the file might have: the UTF-8 bytes of — = E2 80 94
// Let's just do direct character replacements

const replacements = [
  // em dash — (U+2014) - various broken forms
  ['â\u009a\u0016\u202d', '\u2014'],
  ['â\u009a\u0019\u202d', '\u2013'],  // en dash
  ['\u0096', '\u2013'],   // en dash via Windows-1252
  ['\u0097', '\u2014'],   // em dash via Windows-1252
  // The specific broken sequence seen in output: â<1a><9f>⬝ 
  // This is likely â€" = em dash double-encoded
];

// Actually let's look at what bytes are there by checking the specific sequences
// The sequence "basicâ\x1a\x9f⬝just" - the broken part between "basic" and "just"
// Let me replace the actual unicode codepoints we see in the output

// U+001A = control char, U+009F = control char, U+2A1D = JOIN WITH SQUIGGLE (⬝)
// This pattern â + U+001A + U+009F + U+2A1D should be replaced with —

content = content.split('\u001a\u009f\u202d').join('\u2014');  // em dash
content = content.split('\u001a\u0093\u202d').join('\u2013');  // en dash  
content = content.split('\u001a\u00a2\u202d').join('\u2022');  // bullet

// Also fix any remaining Windows-1252 artifacts
content = content.replace(/\u0096/g, '\u2013');
content = content.replace(/\u0097/g, '\u2014');

// Check what we have at the specific locations
const lines = content.split('\n');
console.log('Organize line:', lines[791].trim().substring(140, 200));
console.log('Zoom line:', lines[812].trim().substring(140, 190));

fs.writeFileSync(path, content, 'utf8');
console.log('Targeted fix applied.');
