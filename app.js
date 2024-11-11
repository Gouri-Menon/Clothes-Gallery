const express = require('express');
const mongoose = require('mongoose');
const cors= require('cors');

const app = express();
const path = require('path');

require('dotenv').config();               
mongoose.connect(process.env.MONGODB_URI).then(() =>{
    console.log('Mongoose Connected');
    // useNewUrlParser: true,
    // useUnifiedTopology:true
});                                      
app.use(express.json());

app.use(cors());

const storeRouter = require('./routes/route');
app.use('/api',storeRouter);

app.get('/',(req,res) =>{
    res.sendFile(path.join(__dirname,'views','index.html'));
});





const PORT =process.env.PORT ||3000;
app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`);
});