// Synchronous RENAME File method

var fs=require('fs')
var http=require('http')

var server=http.createServer(function(req,res){


    if(req.url="/"){
           
        var error=fs.renameSync("demoSync.txt","demoSyncNew.txt")
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
    }

})

server.listen(4047);
console.log('server run success');
