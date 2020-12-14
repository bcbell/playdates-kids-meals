const Location = require('../models/location')

module.exports={
    index,
}

function index(req, res){
    Location.find({}).then((users, locations)=>{
        res.render('locations/places',{
            title: "Kid-Friendly Explorations & Experiences", user: req.user, users, locations
        })
    })
}