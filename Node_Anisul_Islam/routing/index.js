const http=require("http")
const PORT=3001
const fs=require("fs")



const server=http.createServer((req,res)=>{
    const handleFile=(filename,Status)=>{
        fs.readFile(filename,(err,data)=>{
            res.writeHead(Status,{"content-type":"text/html"})
                res.write(data)
                res.end()
        } )
    }
    
    if(req.url==="/"){
       handleFile("./view/Home.html",200)
    }
    else if(req.url==="/about"){
        handleFile("./view/about.html",200)
    }
    else if(req.url==="/contact"){
        handleFile("./view/Contact.html",200)
    }
    else{
        handleFile("./view/error.html",404)
    }
})
server.listen(PORT,()=>{
    console.log(`server is running on the port nb ${PORT}`)
})