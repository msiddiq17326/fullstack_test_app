const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Schema = mongoose.Schema;

const adminSchema = new mongoose.Schema({

    email:{
        type: String,
        unique:true,
        required: true,
        trim: true,
        lowercase: true,
    },
    password:{
        required: true,
        trim: true,
        type: String,
    },
    tokens:[{
      token: {
          type: String,
          required: true
      }
    }]
})

//hash the password too
adminSchema.pre("save",async function(next){
    const admin = this
    if(admin.isModified("password")){
        admin.password = await bcrypt.hash(admin.password,8)
    }
    next()
});

//Auth
adminSchema.methods.generateAuthToken = async function (){
    const admin = this
    const token = jwt.sign({_id: admin._id.toString()},"mynewtoken")
    admin.tokens = admin.tokens.concat({token})
    await admin.save()
    return token
}

//Logi In
adminSchema.statics.findByCredentials = async (email,password) =>{
    const admin = await Admin.findOne({email})
    if(!admin){
        alert("unable to login E")
    }
    const isMatch = await bcrypt.compare(password,admin.password)
    if(!isMatch){
        alert("unable to login P")
    }
    return admin
}

const Admin = mongoose.model('Admin',adminSchema);

module.exports = Admin;