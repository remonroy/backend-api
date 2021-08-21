const express = require('express')
const morgan = require('morgan')
const cors =require('cors')
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/demo_data', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection
db.on('error',(err)=>{
    console.log('error',err);
})
db.once('open',()=>{
    console.log('Database connect successfully....!');
})


const app=express()
app.use(express.json())
app.use(morgan('dev'))
app.use(cors())

app.use((req,res,next)=>{
    console.log('I am middleware...');
    next()
})

app.use('/api/contact',require('./api/routes/contact'))
app.use('/api/users',require('./api/routes/user'))

app.get('/',(req,res)=>{
    res.json({
        message:'Welcome server site root rul....!'
    })
})


const PORT =process.env.PORT || 4000
app.listen(PORT,()=>{
    console.log(`This server is running PORT ${PORT}`);
})