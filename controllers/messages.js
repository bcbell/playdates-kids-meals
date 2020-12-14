const Message = require('../models/location')

module.exports={
    index,
}

function index(req, res){
    Message.find({}).then((users, messages)=>{
        res.render('messages/messageboard',{
            title: "Family Q & A Board", user: req.user, users, messages
        })
    })
}