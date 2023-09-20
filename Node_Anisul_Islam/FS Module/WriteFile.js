const fs=require("fs")
fs.writeFile("demo.txt","This is simple text. ",(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("Success")
    }
})