const valid = require('validator')
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    email:{
        type:String,
        trim:true,
        unique:true,
        required:true,
        validate:{
            validator:(v) =>{
                return valid.isEmail(v) 
            },
            message:`{VALUE} is not a valid email`
        }
        
    },
    password:String,
    
})
const User = mongoose.model('User',userSchema)

module.exports = User