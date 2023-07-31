const mongoClient=require('mongodb').mongoClient;
var URL="mongodb+srv://TanvirHossenRaju:TANVIRMTHRRAJUMONGODB@cluster0.vdzppud.mongodb.net/?retryWrites=true&w=majority"
var config={useUnifiedTopology: true}

mongoClient.connect(URL,config,function(error,MyMongoClient){
    if(error){
        console.log("connection error")
    }
    else{
        console.log("connection success")
        FindDataByProjection(MyMongoClient)
    }
})


function FindDataByProjection(MyMongoClient){
    var MyDatabase=MyMongoClient.db("School")
    var MyCollection=MyDatabase.collection("Student")
    var myobj={}
    var myProjection={projection:{Roll:""}}
    MyCollection.find(myobj,myProjection).toArray(function(error,ResultObj){
        if(error){
            console.log("Find data failed")
            
        }
        else{
            console.log("Find data success")
            console.log(ResultObj)
        }
    })
}