var fs=require("fs")
var http=require("http")
var server=http.createServer(function(req,res){

// Asynchronous Write File 

    if(req.url='/'){
        fs.writeFile("./WriteFile.txt","Hello This is from fs write file method Asynchronous",(error)=>{
            if(error){
                res.writeHead(200,{"content-Type":"text/html"})
                res.write("File write Failed")
                res.end()
            }
            else{
                res.writeHead(200,{"content-Type":"text/html"})
                res.write("File write Success")
                res.end()
            }
        })
    }

// Synchronous Write File 
if(req.url='/sync'){
    var error=fs.writeFileSync("./WriteFile.txt","Hello This is from fs write file method Synchronous")
        if(error){
            res.writeHead(200,{"content-Type":"text/html"})
            res.write("File write Failed")
            res.end()
        }
        else{
            res.writeHead(200,{"content-Type":"text/html"})
            res.write("File write Success")
            res.end()
        }
    }
}
)

server.listen(5002,()=>{
    console.log("Server run Success")
})