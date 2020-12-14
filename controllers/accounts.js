const User =require('../models/account')

module.exports={
    index,
    update
}

function index(req, res) {
    User.find({}).then((users) => {
      res.render("users/account", {
     title: "Account Settings", user: req.user, users});
    });
  }

  function update(req, res){
      User.findByIdAndUpdate(req.user._id, req.body,{new:true})
      .then(()=>{
          res.redirect("/users/account")
      })
  }

