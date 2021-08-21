const mongoose = require('mongoose')
const valid = require('validator')
const Schema = mongoose.Schema

const contactSchema = new Schema({
    name:{
        type:String,
        required: true,
        trim :true
    },
    phone:{
        type: String,
        unique:true,
        required:true
    },
    email:{
        type:String,
        required: true,
        validate:{
            validator:(v) =>{
                return valid.isEmail(v) 
            },
            message:`{VALUE} is not a valid email`
        }
    }
})
const Contact = mongoose.model('Contact',contactSchema)
module.exports = Contact