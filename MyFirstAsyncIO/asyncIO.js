/*

    Uses the fs module to do an asynchronous read of a filename as an argument
    and returns the number of lines present in the file

*/


var fs = require('fs');

var buffer = fs.readFile(process.argv[2],'utf8', function(err, data) {
    
    if(err) {
        console.dir(err);
        process.exit(1);
    }
    var splitter = data.split('\n');
    console.log(splitter.length - 1);
    
});

