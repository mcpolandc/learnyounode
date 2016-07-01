
/*


    Require the listfilterer module and call it giving command line args as arguments to the function
    
    Logs a list of filenames in the given directory that match the ext pattern
    
    There is also some error handling here using the err argument of the passed callback
    
    Usage: node ./listFiltererTest.js <some_dir>

*/

var listFilter = require('./listFilterer');

listFilter(process.argv[2],process.argv[3], function(err, list) {
    if(err) {
        console.dir(err);
        process.exit(1);
    }
    list.forEach(function(item) {
        console.log(item);
    })
});