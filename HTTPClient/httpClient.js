/*

    
    Takes a url as a command-line arg and uses the http module the response data
    

*/


var http = require('http');

http.get(process.argv[2], function(response) {
    
    //set encoding to convert Buffer objects (normally the type of response.data objs) to string
    response.setEncoding('utf8');   
    
    response.on('error', console.error);
    
    response.on('data', function(data) {
        console.log(data);
    });
});