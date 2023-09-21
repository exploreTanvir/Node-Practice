const http=require("http")

const myserver=http.createServer((req,res)=>{
    res.end("Hello i am your first server")
})

const port=4000
myserver.listen(port,()=>{
    console.log('server is running on the port number '+port);
})