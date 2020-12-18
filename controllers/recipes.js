const axios  = require('axios');
const Eat =require('../models/eat')


module.exports={
    index,
    // create
    
}

function index(req, res) {
    Eat.find({})
    .then ((eats, users)=>{
    res.render("eats/recipeForm", {
     title: "Kid-Friendly Recipe", user: req.user,  users, eats});
    });
}

// function create(req, res){
//     Eat.create(req.body)
//     .then((eat, user)=>{
//         res.redirect('/eats', {user :req.user, user, eat})
//     })

// }