const express = require('express')
const router = express.Router()

const {
    contactGet,
    contactPost,
    getSingleData,
    getSingleDataDelete,
    getSingleDataUpdated
}=require('../../controller/contactController')

//Get route
router.get('/',contactGet)

//Post contact route
router.post('/',contactPost)

//Get single data show
router.get('/:id',getSingleData)

//Get single data show
router.put('/:id',getSingleDataUpdated)

//Get single delete show
router.delete('/:id',getSingleDataDelete)

module.exports = router;
