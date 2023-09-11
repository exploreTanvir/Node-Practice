var fs=require("fs")
var http=require("http")


// Asynchronous Read File 
 
var server=http.createServer(function(req,res){
    if(req.url="/"){
        fs.readFile("./readFile.html",(err,data)=>{
            res.writeHead(200,{"Content-Type":"text/html"})
            res.write(data)
            res.end()
        })
    }

    // Synchronous Read File 

    else if(req.url="/about"){
        var MyData=fs.readFileSync("./readFile.html")
            res.writeHead(200,{"Content-Type":"text/html"})
            res.write(MyData)
            res.end()
        }
})


server.listen(5003,()=>{
    console.log("Server run success ")
})