// Asynchronous Read File method

var fs=require('fs')
var http=require('http')

var server=http.createServer(function(req,res){


    if(req.url="/"){
            fs.readFile("index.html",function(error,data){
                res.writeHead(200,{'content-Type':'text/html'});
                res.write(data);

                res.end();
            })
    }

})

server.listen(4040);
console.log('server run success');
