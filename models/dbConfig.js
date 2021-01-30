const mongoose = require('mongoose');

mongoose.connect(
    "mongodb://localhost:27017/node-api",
    {useNewUrlParser: true, useUnifiedTopology: true},
    (err )=> {
        if (!err) console.log("Mongodb Connected");
        else console.log("Connection error", +err)
    }
)