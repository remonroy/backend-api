const User = require('../api/modles/user');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');


module.exports = {
    userRegister(req,res){
        bcrypt.hash(req.body.password,10,(err,hash)=>{
            if (err) {
                res.json({
                    error:err
                })
            }
            const user = new User({
                email:req.body.email,
                password:hash
            })
            user.save()
                .then(result =>{
                    res.json({
                        message : 'User create successfully...!',
                        user : result
                    })
                })
                .catch(error =>{
                    res.json({
                        message : 'Don\'t user created..?',
                        error:error
                    })
                })
        })
    },
    userLogin(req,res){
        User.findOne({email:req.body.email})
            .then(user =>{
                if (user) {
                    bcrypt.compare(req.body.password,user.password,(err,result)=>{
                        if (err) {
                            res.json({
                                message:'server error occured'
                            })
                        }
                        if (result) {
                            let token = jwt.sign({
                                email:user.email,
                                _id:user._id
                            },'SECRET',{expiresIn:'2h'})

                            res.json({
                                message:'login successfully...!',
                                token: `Berar ${token}`
                            })
                        }else{
                            res.json({
                                message:'password Don\'t match'
                            })
                        }
                    })
                }else{
                    res.json({
                        message:'User not found'
                    })
                }
            })
            
    },
    allUserGet(req,res){
        User.find()
        .then(user =>{
            res.status(200).json({
                message:'User all data..!',
                user:user
            })
        })
        .catch(error =>{
            res.json({
                message : 'Server error occured',
                error:error
            })
        })
    }
}