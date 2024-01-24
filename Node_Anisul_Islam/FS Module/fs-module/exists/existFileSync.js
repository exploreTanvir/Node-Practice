const fs=require("fs")
const http=require("http")
const url=require("url")
const server=http.createServer((req,res)=>{
    if(req.url==="/"){
       const err= fs.existsSync("demo.txt")
       if(err){
        res.writeHead(404,{"content-type":"text/html"})
        res.write("file exists success")
        res.write(err)
        res.end()
    }
    else{
        res.writeHead(200,{"content-type":"text/html"})
        res.write("file exists failed")
        res.end()
    }
    }
})
server.listen(3001,()=>[
    console.log("server run success")
])