const fs=require("fs")
const http=require("http")
const url=require("url")
const server=http.createServer((req,res)=>{
    if(req.url==="/"){
        const myData=fs.readFileSync("./pages/home.html")

        res.writeHead(200,{"content-type":"text/html"})
        res.write(myData)
        res.end()
    }
})
server.listen(3002,()=>[
    console.log("server run success")
])