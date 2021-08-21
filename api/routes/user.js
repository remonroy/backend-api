const router = require('express').Router()
const {userRegister,userLogin,allUserGet} =require('../../controller/userController')
const authenticate = require('../../middleware/middleware')

router.post('/login',userLogin)

router.post('/register',userRegister)

router.get('/',authenticate,allUserGet)

module.exports = router