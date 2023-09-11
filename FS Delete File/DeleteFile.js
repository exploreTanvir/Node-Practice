var fs=require("fs")
var http=require("http")
var server=http.createServer(function(req,res){

// Asynchronous File Rename

    if(req.url="/"){
        fs.unlink("./demo.txt",(error)=>{
            if(error){
                res.writeHead(200,{"content-Type":"text/html"})
                res.write("File Delete Failed")
                res.end()
            }
            else{
                res.writeHead(200,{"content-Type":"text/html"})
                res.write("File Delete Success")
                res.end()
            }
        })
    }
// Synchronous File Rename

    if(req.url="/"){
        var error=fs.unlinkSync("./demo.txt")
            if(error){
                res.writeHead(200,{"content-Type":"text/html"})
                res.write("File rename Failed")
                res.end()
            }
            else{
                res.writeHead(200,{"content-Type":"text/html"})
                res.write("File rename Success")
                res.end()
            }
    }
    

})


server.listen(5012)
console.log("Server run Success");