const User =require('../models/account')


module.exports={
    index,
   
}

function index(req, res) {
    User.find({}).then((users) => {
      res.render("users/playground", {
     title: "Welcome to the Playground", user: req.user, users});
    });
  }
