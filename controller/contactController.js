const Contact =require('../api/modles/contact')
module.exports = {
    contactGet(req,res){
        Contact.find()
        .then(data =>{
            res.status(200).json({
                message:`See all data..! length ${data.length}`,
                data:data
            })
        })
        .catch(error => {
            res.status(500).json({
                error:error
            })
        })
    },
    contactPost(req,res){
        const contact = new Contact({
            name:req.body.name,
            phone:req.body.phone,
            email:req.body.email
        })
        contact.save()
            .then(data =>{
                res.status(201).json({
                    message:'Data create successfully..',
                })
            })
            .catch(error =>{
                console.log(error);
            })
    },
    getSingleData(req,res){
        let id =req.params.id
        Contact.findById(id)
            .then(result => {
                res.status(200).json({
                    message:'This is single data..!',
                    result:result
                })
            })
            .catch(error =>{
                console.log(error);
            })
        
    },
    getSingleDataDelete(req,res){
        let id =req.params.id
        Contact.findByIdAndRemove(id)
            .then(result => {
                res.status(200).json({
                    message:'Single data is delete successfully..!',
                    result:result
                })
            })
            .catch(error =>{
                console.log(error);
            })
    },
    getSingleDataUpdated(req,res){
        let id = req.params.id
        const updatedData = {
            name:req.body.name,
            phone:req.body.phone,
            email:req.body.email,
        }
        Contact.findByIdAndUpdate(id,{ $set : updatedData },{ new:true })
            .then(result =>{
                res.json({
                    message:'Data updated successfully....!',
                    result:result
                })
            })
            .catch(error =>{
                res.json({
                    message :'Server error occurd..?',
                    error:error
                })
            })
    }
}