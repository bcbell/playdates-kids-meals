const Rest =require('../models/restaurant')

module.exports={
    index, 
    new : newRestaurant,
    create
}

function index(req, res) {
    Rest.find({})
    .then ((rest, users)=>{
    res.render("eats/restaurants", {
     title: "Kid-Friendly Restaurant", user: req.user,  users, rest})
    })
}

function newRestaurant(req, res){
    res.render('eats/restaurantForm', {title: "Kid-Friendly Recipe", user: req.user
})
}

function create(req, res){
    Rest.create(req.body)
    .then((rest, users)=>{
        res.redirect('/restaurants')
    })

}