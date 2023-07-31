const mongoClient=require('mongodb').mongoClient;
var URL="mongodb+srv://TanvirHossenRaju:TANVIRMTHRRAJUMONGODB@cluster0.vdzppud.mongodb.net/?retryWrites=true&w=majority"
var config={useUnifiedTopology: true}

mongoClient.connect(URL,config,function(error,MyMongoClient){
    if(error){
        console.log("connection error")
    }
    else{
        console.log("connection success")
        CreateMyCollection(MyMongoClient)
    }
})


function CreateMyCollection(MyMongoClient){
    var MyDatabase=MyMongoClient.db("School")
    
    
    MyCollection.CreateCollection("Teacher",function(error,Result){
        if(error){
            console.log("Create Collection  failed")
            
        }
        else{
            console.log("Create Collection success")
            console.log(Result)
        }
    }) 
}