const mongoClient=require('mongodb').mongoClient;
var URL="mongodb+srv://TanvirHossenRaju:TANVIRMTHRRAJUMONGODB@cluster0.vdzppud.mongodb.net/?retryWrites=true&w=majority"
var config={useUnifiedTopology: true}

mongoClient.connect(URL,config,function(error,MyMongoClient){
    if(error){
        console.log("connection error")
    }
    else{
        console.log("connection success")
        DataUpdate(MyMongoClient)
    }
})


function DataUpdate(MyMongoClient){
    var MyDatabase=MyMongoClient.db("School")
    var MyCollection=MyDatabase.collection("Student")
    var MyQuery={Roll:3}
    var NewValues={$set:{name:"Raju",city:"Magura"}}
    
    MyCollection.update(MyQuery,NewValues,function(error,Result){
        if(error){
            console.log("Update data failed")
            
        }
        else{
            console.log("Update data success")
            console.log(Result)
        }
    }) 
}