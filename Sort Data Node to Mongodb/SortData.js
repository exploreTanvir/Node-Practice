const mongoClient=require('mongodb').mongoClient;
var URL="mongodb+srv://TanvirHossenRaju:TANVIRMTHRRAJUMONGODB@cluster0.vdzppud.mongodb.net/?retryWrites=true&w=majority"
var config={useUnifiedTopology: true}

mongoClient.connect(URL,config,function(error,MyMongoClient){
    if(error){
        console.log("connection error")
    }
    else{
        console.log("connection success")
        FindDataBySort(MyMongoClient)
    }
})


function FindDataBySort(MyMongoClient){
    var MyDatabase=MyMongoClient.db("School")
    var MyCollection=MyDatabase.collection("Student")
    
    var sortPattern={Roll:1}// 1 means asending and -1 means desending
    MyCollection.find().sort(sortPattern).toArray(function(error,ResultObj){
        if(error){
            console.log("Sort data failed")
            
        }
        else{
            console.log("Sort data success")
            console.log(ResultObj)
        }
    })
}