const mongoClient=require('mongodb').mongoClient;
var URL="mongodb+srv://TanvirHossenRaju:TANVIRMTHRRAJUMONGODB@cluster0.vdzppud.mongodb.net/?retryWrites=true&w=majority"
var config={useUnifiedTopology: true}

mongoClient.connect(URL,config,function(error,MyMongoClient){
    if(error){
        console.log("connection error")
    }
    else{
        console.log("connection success")
        DeleteMyCollection(MyMongoClient)
    }
})


function DeleteMyCollection(MyMongoClient){
    var MyDatabase=MyMongoClient.db("School")
    
    
    MyCollection.dropCollection("Teacher",function(error,Result){
        if(error){
            console.log("Delete Collection  failed")
            
        }
        else{
            console.log("Delete Collection success")
            console.log(Result)
        }
    }) 
}