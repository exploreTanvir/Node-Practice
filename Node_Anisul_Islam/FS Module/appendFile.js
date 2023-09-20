const fs=require("fs")
fs.appendFile("demo.txt","This is also a  simple text",(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("Success")
    }
})