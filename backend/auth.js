const jwt = require("jsonwebtoken")
const Admin = require("./models/admin.model")

const auth = async (req,res,next) =>{
    try{
        const token = req.header("Authorization").replace("Bearer ","")
        const decoded = jwt.verify(token,"mynewtoken")
        const admin = await Admin.findOne({_id:decoded._id,"tokens.token":token})
        if(!user){
            throw new Error("its over")
        }
        req.token = token
        req.admin = admin
        next()
    }catch(e){
        res.status(401).send({error:"plz authenticate"})
    }
}

module.exports = auth