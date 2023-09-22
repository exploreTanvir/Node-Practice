const http=require("http")
const fs=require("fs")

const myserver=http.createServer((req,res)=>{
    if(req.url==="/"){
        fs.readFile("./views/index.html",(err,data)=>{
            res.writeHead(200,{"content-Type":"text/html"})
            res.write(data)
            res.end()
        })
    }
   else if(req.url==="/about"){
        fs.readFile("./views/about.html",(err,data)=>{
            res.writeHead(200,{"content-Type":"text/html"})
            res.write(data)
            res.end()
        })
    }
   else if(req.url==="/contact"){
        fs.readFile("./views/contact.html",(err,data)=>{
            res.writeHead(200,{"content-Type":"text/html"})
            res.write(data)
            res.end()
        })
    }
   else{
        fs.readFile("./views/error.html",(err,data)=>{
            res.writeHead(404,{"content-Type":"text/html"})
            res.write(data)
            res.end()
        })
    }
})

const port=4001
myserver.listen(port,()=>{
    console.log('server is running on the port number '+port);
})