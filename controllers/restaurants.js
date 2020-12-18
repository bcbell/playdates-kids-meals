const Rest =require('../models/restaurant')

module.exports={
    index, 
}

function index(req, res) {
    Rest.find({})
    .then ((rest, users)=>{
    res.render("eats/restaurantForm", {
     title: "Kid-Friendly Restaurant", user: req.user,  users, rest})
    })
}