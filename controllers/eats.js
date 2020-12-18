const axios  = require('axios');
const Eat =require('../models/eat')

// const User =require('../models/account')

module.exports={
    index,
    new: newRecipe, 
    create
}

function index(req, res) {
    Eat.find({})
    .then ((eats, users)=>{
    res.render("eats/meals", {
     title: "Kid-Friendly Dining & Meals", user: req.user,  users, eats})
    })
}

function newRecipe(req, res){
    res.render('eats/recipes', {title: "Kid-Friendly Recipe", user: req.user
})
}

function create(req, res){
    Eat.create(req.body)
    .then((eats, users)=>{
        res.redirect('/eats')
    })

}