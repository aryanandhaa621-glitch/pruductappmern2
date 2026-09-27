const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://aryanandhaa621_db_user:arya@cluster0.yxlqtuu.mongodb.net/?appName=Cluster0")
.then(()=>{
    console.log("db connected")
})

.catch((err)=>{
    console.log(err)
})