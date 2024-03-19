const hospitalModle = require('../models/hospital');

exports.create = async (req, res) => {
    try {
        req.body.state = req.body.state.toLowerCase()
        
        if(req.body.state==='maharastra' || req.body.state==='rajasthan'){
            req.body.discount=50
        }else if(req.body.state==='karnataka' || req.body.state==='kerala' || req.body.state==='tamilnadu'){
            req.body.discount=60
        }else{
            req.body.discount=40
        }
           
        const data = await hospitalModle.create(req.body);

        res.status(201).json({
            data: data,
            msg: 'Created Successfully'
        })
    } catch (error) {
        if (error.code === 11000 && error.keyPattern.email) {
            res.status(200).json({
                msg: 'Email already exists'
            })
        } else {
            res.status(200).json({
                msg: error
            })
        }
    }
}

exports.getAllData = async (req, res) => {
    try {

        const data = await hospitalModle.find();

        res.status(200).json({
            data: data
        })
    } catch (error) {
        res.status(500).json({
            msg: error
        })
    }
}