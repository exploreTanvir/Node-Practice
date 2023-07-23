// Asynchronous WRITE File method

var fs=require('fs')
var http=require('http')

var server=http.createServer(function(req,res){


    if(req.url="/"){
            fs.writeFile("demo.txt","Hello world",function(error){
                if(error){
                    res.writeHead(200,{'constent-Type':'text/html'});
                    res.write("File write fail")
                    res.end()
                }
                else{
                    res.writeHead(200,{'constent-Type':'text/html'});
                    res.write("File write success")
                    res.end()
                }
            })
    }

})

server.listen(4042);
console.log('server run successful');
