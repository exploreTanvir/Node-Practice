// Asynchronous RENAME File method

var fs=require('fs')
var http=require('http')

var server=http.createServer(function(req,res){


    if(req.url="/"){

                fs.rename("demo.txt","demoNew.txt",function(){
                    if(error){
                        res.writeHead(200,{'constent-Type':'text/html'});
                        res.write("File Rename fail")
                        res.end()
                    }
                    else{
                        res.writeHead(200,{'constent-Type':'text/html'});
                        res.write("File Rename success")
                        res.end()
                    }
                })
    }
})

server.listen(4046);
console.log('server run successful');
