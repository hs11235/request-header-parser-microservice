var express = require('express');
var app = express();

app.get('/', function(req, res) {
    
    var ip = req.headers['x-forwarded-for'] || 
     req.connection.remoteAddress || 
     req.socket.remoteAddress ||
     req.connection.socket.remoteAddress;
     
    var software = req.headers['user-agent'];
    software = software.match(/\((.*)\)/)[1];
    
    var language = req.headers['accept-language'];
    language = language.split(',')[0];
     
    //console.log(ip);
    //console.log(software);
    //console.log(language);
    //console.log(req);
    
    res.json({
        'ipaddress': ip,
        'language': language,
        'software': software
    });
});

app.listen(8080, function() {
    
    console.log('listening on port 8080...');
})