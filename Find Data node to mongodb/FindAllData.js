const mongoClient=require('mongodb').mongoClient;
var URL="mongodb+srv://TanvirHossenRaju:TANVIRMTHRRAJUMONGODB@cluster0.vdzppud.mongodb.net/?retryWrites=true&w=majority"
var config={useUnifiedTopology: true}

mongoClient.connect(URL,config,function(error,MyMongoClient){
    if(error){
        console.log("connection error")
    }
    else{
        console.log("connection success")
        FindAllData(MyMongoClient)
    }
})


function FindAllData(MyMongoClient){
    var MyDatabase=MyMongoClient.db("School")
    var MyCollection=MyDatabase.collection("Student")
    var myData={Roll:"01"}
    MyCollection.find().toArray(function(error,ResultObj){
        if(error){
            console.log("Find data failed")
            
        }
        else{
            console.log("Find data success")
            console.log(ResultObj)
        }
    })
}