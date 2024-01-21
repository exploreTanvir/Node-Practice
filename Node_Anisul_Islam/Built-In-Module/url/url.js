const http=require("http")
const URL=require("url")

const server=http.createServer((req,res)=>{
    const myURL="https://rabbil.com/my-course-details?course_id=1"
    const myURLObj=URL.parse(myURL,true)
    const myHostName=myURLObj.hostname
    const myPathName=myURLObj.pathname
    const myQueryName=myURLObj.search
    res.writeHead(200,{"content-type":"text/html"})
    res.write(myHostName)
    res.write(myPathName)
    res.write(myQueryName)
    res.end()

})
server.listen(3000,()=>{
    console.log("Server is running on the port nb 3000")
})