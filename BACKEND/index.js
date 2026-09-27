const express= require('express')
var cors = require('cors')
require("./connection")
const ProModel=require("./models/product")

const app = express()

//middleware
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello ict')
})
//add
app.post("/add",(req,res)=>{
  ProModel(req.body).save()
  res.send("data added")
})

//view
app.get("/view",async(req,res)=>{
  var data=await ProModel.find()
  res.send(data)
})
  //delete
app.delete("/remove/:id",async(req,res)=>{
  await ProModel.findByIdAndDelete(req.params.id)
  res.send("data deleted")
})
//update
app.put("/edit/:id",async(req,res)=>{
  await ProModel.findByIdAndUpdate(req.params.id,req.body)
  res.send("data updated")
})
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})