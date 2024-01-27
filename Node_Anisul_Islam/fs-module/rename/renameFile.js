const fs=require("fs")
const http=require("http")
const url=require("url")
const server=http.createServer((req,res)=>{
    if(req.url==="/"){
        fs.rename("../pages/data.txt","../pages/public.txt",(err)=>{
            if(err){
                res.writeHead(404,{"content-type":"text/html"})
                res.write("file rename failed")
                res.end()
            }
            else{
                res.writeHead(200,{"content-type":"text/html"})
                res.write("file rename success")
                res.end()
            }
        })
    }
})
server.listen(3001,()=>[
    console.log("server run success")
])