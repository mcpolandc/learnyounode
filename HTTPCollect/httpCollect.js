var http = require('http');

http.get(process.argv[2], function(response) {

    var allData = '';
    response.setEncoding('utf8');
    
    response.on('data', function(data) {
        allData += data;
    });
    
    response.on('end', function(err, data) {
        if (err) {
            console.err(err);
        }
        
        console.log(allData.length);
        console.log(allData);
    })
});