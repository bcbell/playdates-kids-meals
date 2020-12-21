const User =require('../models/account')


module.exports={
    index,
   show,
   update,
    edit, 
    delete :deleteProfile
    
}

function index(req, res) {
    User.find({}).then((users) => {
      res.render("users/playground", {
     title: "Welcome to the Playground", user: req.user, users});
    });
  }
function show (req, res){
    
    User. findById(req.params.id)
    .then((users)=>{
        res.render('users/account', {title: 'Account Details', user:req.user, users})
    })
}
function update(req, res, next){
    User.findByIdAndUpdate(req.params.id, req.body, {new:true})
    .then(()=>{
            res.redirect(`/playground/${req.params.id}`)
        }) 
}
function edit(req, res){
    User.findById(req.params.id)
    .then((users)=>{
        res.render('users/updated', {title: 'Account Settings', user: req.user, users})
    })
}
function deleteProfile(req, res){
    User.findByIdAndDelete(req.params.id)
    .then(()=>{
        res.redirect(`/playground/${req.params.id}`)
    })
}
