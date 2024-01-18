const fs=require("fs")
fs.rename("demo.txt","demo1.txt",(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("success")
    }
})