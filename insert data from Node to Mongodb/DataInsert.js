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
        InsertData(MyMongoClient)
    }
})

function InsertData(MyMongoClient){
    var MyDatabase=MyMongoClient.db("School")
    var MyCollection=MyDatabase.collection("Student")
    var MyData={name:"Tanvir",
                Roll:"01",
            Address:"Jhenaidah"}
    MyCollection.insertOne(MyData,function(error){
        if(error){
            console.log("Data insert failed")
        }
        else{
            console.log("Data insert success")
        }
    })
}