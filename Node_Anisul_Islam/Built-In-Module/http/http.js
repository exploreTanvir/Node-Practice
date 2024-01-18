const http=require("http")
const server=http.createServer((req,res)=>{
    res.end("Hello this is my first server")
})
server.listen(3000,()=>{
    console.log("Server is running on the port nb 3000")
})