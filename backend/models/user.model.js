const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstname:{
        type:String,
        required:true,
        trim:true,
    },
    lastname:{
        type:String,
        required:true,
        trim:true,
    },  
    telephonenumber:{
        type:String,
        required:true,
        unique:true,
        trim:true,
    },  
    address:{
        type:String,
        required:true,
        trim:true,
    },  
    SSN:{
        type:String,
        required:true,
        unique:true,
        trim:true,
    },    
},{
    timestamps:true
});

//hash the SSN
userSchema.pre("save",async function(next){
    const user = this
    if(user.isModified("SSN")){
        user.SSN = await bcrypt.hash(user.SSN,8)
    }
    next()
})

const User = mongoose.model('User',userSchema);

module.exports = User;