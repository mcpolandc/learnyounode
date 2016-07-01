/*


    Takes a command-line arg of a directory. It then filters the list of files in the directory
    to only markdown files
    
*/

var fs = require('fs');

var directory = fs.readdir(process.argv[2], function(err, list) {
    var mdFiles = list.filter(function(filename) {
        var splitter = filename.split('.');
        var ending = splitter[splitter.length - 1];
        if (ending == 'md' && splitter.length != 1) {
            console.log(filename);
            return true;
        }
    });
});
