const fs=require("fs")
const http=require("http")
const url=require("url")
const server=http.createServer((req,res)=>{

    //without stream module data read

        // fs.readFile("./stream.txt",(err,data)=>{
        //     res.writeHead(200,{"content-type":"text/html"})
        //     res.write(data)
        //         res.end()
//         })

// //with stream module data read

        const readStream=fs.createReadStream("./streams.txt")
        readStream.on("data",(chunkData)=>{
            res.write(chunkData)
        })
        readStream.on("end",()=>{
            res.end()
        })
        readStream.on("error",(err)=>{
            console.log(err)
            res.end("file not found")
        })
})


server.listen(3001,()=>[
    console.log("server run success")
])