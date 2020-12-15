const User =require('../models/account')


module.exports={
    index,
    show
}

function index(req, res) {
    User.find({}).then((users) => {
      res.render("users/account", {
     title: "Account Settings", user: req.user, users});
    });
  }

  function show(req, res){
      User.findById(req.params.id)
        .then((userInfo)=>{
           res,render('users/show', {
              title: "Account Updated",
               userInfo,
               user:req.user
           }) 
        })
  }