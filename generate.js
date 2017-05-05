var nativeCss = require('native-css');
var fs = require('fs');

var basscssJS = nativeCss.convert('./node_modules/basscss/css/basscss.css');

fs.writeFileSync('index.js', `module.exports = ${JSON.stringify(basscssJS, null, 2)}`);
