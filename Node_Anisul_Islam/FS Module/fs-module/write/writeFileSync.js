const fs=require("fs")
const http=require("http")
const url=require("url")
const server=http.createServer((req,res)=>{
    if(req.url==="/"){
        const err= fs.writeFileSync("dataSync.txt","Hello this is tanvir")

        if(err){
            res.writeHead(404,{"content-type":"text/html"})
            res.write("file write failed")
            res.end()
        }
        else{
            res.writeHead(200,{"content-type":"text/html"})
            res.write("file write success")
            res.end()
        }
    }
})
server.listen(3001,()=>[
    console.log("server run successful")
])