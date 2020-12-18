const Location = require('../models/location')


module.exports={
    index,
    new: newAttraction,
    create
  
}

function index(req, res){
    Location.find({})
    .then((locations, users)=>{
        res.render('locations/places',{
            title: "Kid-Friendly Explorations & Experiences", user: req.user, users, locations
        })
    })
}
function newAttraction(req, res){
    res.render('locations/placesForm', {title: "Kid-Friendly Attraction", user:req.user})
}

function create(req, res){
    Location.create(req.body)
    .then((location, users)=>{
     res.redirect('/explorations')   
    })
}