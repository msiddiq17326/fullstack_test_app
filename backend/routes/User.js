const router = require('express').Router();
let User = require('../models/user.model');

router.post("/add",async(req,res)=>{
    const user = new User(req.body)
    try{
        await user.save()
        res.status(201).json(user)
    }catch(e){
        res.status(400).send(e)
    }
})

module.exports = router;