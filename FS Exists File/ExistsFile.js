var fs=require("fs")
var http=require("http")
var server=http.createServer(function(req,res){

// Asynchronous Exists  Rename

    if(req.url="/"){
        fs.exists("damo.txt",(error)=>{
            if(error){
                res.writeHead(200,{"content-Type":"text/html"})
                res.write("False")
                res.end()
            }
            else{
                res.writeHead(200,{"content-Type":"text/html"})
                res.write("True")
                res.end()
            }
        })
    }
// Synchronous Exists  Rename

    if(req.url="/"){
        var error=fs.existsSync("damo.txt")
            if(error){
                res.writeHead(200,{"content-Type":"text/html"})
                res.write("False")
                res.end()
            }
            else{
                res.writeHead(200,{"content-Type":"text/html"})
                res.write("True")
                res.end()
            }
    }
    

})


server.listen(5012)
console.log("Server run Success");