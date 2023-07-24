// Asynchronous DELETE File method

var fs=require('fs')
var http=require('http')

var server=http.createServer(function(req,res){


    if(req.url="/"){

        fs.unlink("demoNew.txt",function(error){
            if(error){
                res.writeHead(200,{'constent-Type':'text/html'});
                res.write("File Delete fail")
                res.end()
            }
            else{
                res.writeHead(200,{'constent-Type':'text/html'});
                res.write("File Delete success")
                res.end()
            }
        })

                
    }
})

server.listen(4048);
console.log('server run successful');
