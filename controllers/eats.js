const { axios } = require('axios');
const { response } = require('express');
const Eat =require('../models/eat')
// const User =require('../models/account')

module.exports={
    index,
   
  
}

function index(req, res) {
    Eat.find({})
    .then ((eats, users)=>{
    res.render("eats/meals", {
     title: "Kid-Friendly Dining & Meals", user: req.user,  users, eats});
    });
}
function create(req, res){
    Eat.create(req.body)
    .then((eat, user)=>{
        res.redirect('/eats', {user :req.user, eat})
    })

}