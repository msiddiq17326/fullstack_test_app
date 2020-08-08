const router = require('express').Router();
let User = require('../models/user.model');
let Admin = require('../models/admin.model');
const auth = require('../auth')


router.get("/",auth,async(req,res)=>{
    try{
        const users = await User.find({})
        res.send(users)
    }catch(e){
        res.status(500).send(e)
    }
});

router.post("/login",async (req,res)=>{
    try {
        const email = req.body.email
        const pass = req.body.password
        const admin = await Admin.findByCredentials(email,pass)
        const token = await admin.generateAuthToken()

        res.send({admin,token})
    }catch (e) {
        res.status(400).send({error:"error occured plz"})
    }
})

router.post("/signup", async (req,res)=>{
    const user = new Admin(req.body)
    try{
        await user.save()
        res.status(201).send({user})
    }catch(e){
        res.status(400).send(e)
    }
})

module.exports = router;