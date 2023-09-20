const fs=require("fs")
fs.unlink("demo1.txt",(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("Success")
    } 
})