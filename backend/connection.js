const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://gayathridevadas27:gayathrikvp@cluster0.jw5km.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(() => {
    console.log("Connected")
})
.catch((err) => {
    console.log(err)
})
