const MongoClient=require('mongodb').MongoClient;
var URL="mongodb+srv://TanvirHossenRaju:TANVIRMTHRRAJUMONGODB@cluster0.vdzppud.mongodb.net/?retryWrites=true&w=majority"
var config={useUnifiedTopology: true}

MongoClient.connect(URL,config,function(error){
    if(error){
        console.log("connection error")
    }
    else{
        console.log("connection success")
    }
})