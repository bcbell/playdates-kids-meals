const User =require('../models/account')

module.exports={
    index,
}

function index(req, res) {
    User.find({}).then((users) => {
      res.render("users/account", {
     title: "Account Settings", user: req.user, users});
    });
  }


