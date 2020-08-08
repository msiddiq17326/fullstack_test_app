//mongo connection
const mongoose = require('mongoose');
require('dotenv').config();

const uri = process.env.ATLAS_URI;

mongoose.connect(uri,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true
});

const connection = mongoose.connection;
connection.once('open',()=>{
    console.log("connected to mongoDB");
})