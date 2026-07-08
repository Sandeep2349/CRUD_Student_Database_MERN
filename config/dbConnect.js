const mongoose = require('mongoose');
require('dotenv').config();

const uri = process.env.DBurl;

const dbConnect =  async () =>{
    try{
        await mongoose.connect(uri);
        console.log('mongoose connection successful');
        console.log("Connected DB",mongoose.connection.name)
    }catch(err){
        console.log(
            "config -> dbConnect -> dbconnect fn -> error ->>",
            err.message,
        )
    }
}

module.exports = dbConnect;