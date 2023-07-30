const { error } = require('console');

const mongoClient=require('mongodb').mongoClient;
var URL="mongodb+srv://TanvirHossenRaju:TANVIRMTHRRAJUMONGODB@cluster0.vdzppud.mongodb.net/?retryWrites=true&w=majority"
var config={useUnifiedTopology: true}

mongoClient.connect(URL,config,function(error,MyMongoClient){
    if(error){
        console.log("connection error")
    }
    else{
        console.log("connection success")
        DeleteAllData(MyMongoClient)
    }
})


function DeleteAllData(MyMongoClient){
    var MyDatabase=mongoClient.db("School")
    var MyCollection=MyDatabase.connection("Student")
    MyCollection.deleteOne(MyCollection,function(error,ResultObj){
        if(error){
            console.log("All Data Delete failed")
            
        }
        else{
            console.log("All Data Delete success")
            console.log(ResultObj.result.n + " Item Deleted")
        }
    })
}