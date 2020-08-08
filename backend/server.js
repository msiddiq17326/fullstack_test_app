const express = require('express');
const cors = require('cors');

//custom sid
const workRouter = require('./routes/Admin');
const userRouter = require('./routes/User');

require('./mongo')

const app = express();
const port = process.env.PORT || 5000;

//middle-ware
app.use(cors());
app.use(express.json());
app.use('/admin',workRouter);
app.use('/user',userRouter);


app.listen(port,()=>{
    console.log(`server is running on port: ${port}`);
})