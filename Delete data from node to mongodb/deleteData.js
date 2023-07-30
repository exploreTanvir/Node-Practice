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
        //InsertData(MyMongoClient)
        DeleteData(MyMongoClient)
    }
})

// function InsertData(MyMongoClient){
//     var MyDatabase=mongoClient.db("School")
//     var MyCollection=MyDatabase.connection("Student")
//     var MyData={name:"Tanvir",
//                 Roll:"01",
//             Address:"Jhenaidah"}
//     MyCollection.insertOne(MyData,function(error){
//         if(error){
//             console.log("Data insert failed")
//         }
//         else{
//             console.log("Data insert success")
//         }
//     })
// }


function DeleteData(MyMongoClient){
    var MyDatabase=mongoClient.db("School")
    var MyCollection=MyDatabase.connection("Student")
    var DltData={
                Roll:"01"}
    MyCollection.deleteOne(DltData,function(error){
        if(error){
            console.log("Data Delete failed")
        }
        else{
            console.log("Data Delete success")
        }
    })
}