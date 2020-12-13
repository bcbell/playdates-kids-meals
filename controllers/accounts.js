const User =require('../models/account')

module.exports={
    index,
}

function index(req, res) {
    User.find({}).then((user) => {
      res.render("users/account", {
          title: "Account Settings", user });
    });
  }

// function index(req, res, next){
//     User.find({}).then((user)=>{
//      res.render("users/account", {title: "Account Settings", user: req.user, user}) 
//     })
// }

