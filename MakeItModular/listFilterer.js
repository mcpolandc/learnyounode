/*


    Exports a function that takes 3 arguments, a directory, file extension and a callback function.
    It will build a filtered list of files with a specific extension (specifed by the ext arg)

*/

var fs = require('fs');

module.exports = function(dir, ext, callback) {
    fs.readdir(dir, function(err, list) {
        if(err) { return callback(err); }
        
        var filtered_list = list.filter(function(file_name) {
            return file_name.indexOf(ext) > 0;
        });
        callback(null, filtered_list);
    });
}; 
