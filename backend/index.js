// importing
const express = require('express')
require("./connection")
var empModel =require("./model/employee")

// initialize
var app = express();

//midd
app.use(express.json());

// api creation
app.post("/add",async (req, res) => {
    try {
        await empModel(req.body).save()
        console.log(req.body)
        res.send("Data added!!");
    } catch (error) {
        console.log(error);
    }
})
app.get("/view",async (req,res) => {
    try {
        data=await empModel.find()
        res.send(data);
        } catch (error) {
            console.log(error);
}})

app.delete("/remove/:id",async(req,res)=>{
    try {
        await empModel.findByIdAndDelete(req.params.id)
        res.send("data Deleted");
    } catch (error) {
        console.log(error);
    }
})

app.put("/Update/:id",async(req,res)=>{
    try {
        await empModel.findByIdAndUpdate(req.params.id,req.body)
        res.send('data updated');
        } catch (error) {
            console.log(error);
            }
})

// port setting
app.listen(2003, () => {
    console.log("port is running");
});