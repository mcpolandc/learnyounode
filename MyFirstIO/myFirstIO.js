/*

    
    Uses fs module to do a synchronous read of a filename passed as an argument
    and counts the number of lines present in the file

*/

var fs = require('fs');

var buffer = fs.readFileSync(process.argv[2]);

var stringBuffer = buffer.toString();

var splitter = stringBuffer.split('\n');

console.log(splitter.length - 1);