// Synchronous Read File method

var fs=require('fs')
var http=require('http')

var server=http.createServer(function(req,res){


    if(req.url="/"){
           
            var myData=fs.readFileSync("index.html");
            res.writeHead(200,{'content-Type':'text/html'});
                res.write(myData);
                res.end();
    }

})

server.listen(4041);
console.log('server run success');
