const fs=require("fs")
const http=require("http")
const url=require("url")
const server=http.createServer((req,res)=>{
    if(req.url==="/"){
        fs.readFile("./pages/home.html",(err,data)=>{
                res.writeHead(200,{"content-type":"text/html"})
                res.write(data)
                res.end()
        })
    }
})
server.listen(3001,()=>[
    console.log("server run success")
])