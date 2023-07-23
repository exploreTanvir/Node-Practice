// Synchronous Read File method

var fs=require('fs')
var http=require('http')

var server=http.createServer(function(req,res){


    if(req.url="/"){
           
        var error=fs.writeFileSync("demo2.txt","This is from synchronous.js file")
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
    }

})

server.listen(4044);
console.log('server run success');
