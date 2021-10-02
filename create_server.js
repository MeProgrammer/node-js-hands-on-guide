var http = require('http');

function process_request(req, res){
    var body = 'Thanks for calling!\n';
    var contetn_lentth = body.length;
    res.writeHead(200, {
        'Content-Length': contetn_lentth,
        'Content-Type': 'text/plain'
    })
    res.end(body);
}

var s = http.createServer(process_request);
s.listen(8080);