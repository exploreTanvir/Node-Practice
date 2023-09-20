const fs=require("fs")
fs.exists("demo1.txt",(result)=>{
    if(result){
        console.log("Found")
    }
    else{
        console.log("Not found")
    } 
})