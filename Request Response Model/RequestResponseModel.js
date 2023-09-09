var http=require("http")
var app=http.createServer(function(req,res){
        if(req.url=="/"){
            res.writeHead(200,{"content-Type":"text/html"})
            res.write("<h1>This is Home page</h1>")
            res.end()
        }
        else if(req.url=="/about"){
            res.writeHead(200,{"content-Type":"text/html"})
            res.write("<h1>This is About page</h1>")
            res.end()
        }
        else if(req.url=="/contact"){
            res.writeHead(200,{"content-Type":"text/html"})
            res.write("<h1>This is Contact page</h1>")
            res.end()
        }
})

app.listen(5000,()=>{
    console.log("Success")
})