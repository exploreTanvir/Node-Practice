var http=require("http")
var url=require("url")

var app=http.createServer(function(req,res){
    var myUrl="https://rabbil.com/my-course-details?course_id=1"

    var myUrlObj=url.parse(myUrl,true)
    var urlHostName=myUrlObj.host
    var urlPathName=myUrlObj.pathname
    var urlqueryName=myUrlObj.search
    res.writeHead(200,{"content-type":"text/html"})
    // res.write(urlHostName)
    res.write(urlPathName)
    // res.write(urlqueryName)
    res.end
}
)

app.listen(5009,()=>{
    console.log("Success")
})