const Eat =require('../models/eat')


module.exports={
    index,
    new: newRecipe, 
    create,
    show,
   
}   

function index(req, res) {
    Eat.find({})
    .then ((eats, users)=>{
    res.render("eats/meals", {
     title: "Kid-Friendly Meals", user: req.user,  users, eats})
    })
}

function newRecipe(req, res){
    res.render('eats/recipes', {title: "Kid-Friendly Recipe", user: req.user
})
}

function create(req, res){
    Eat.create(req.body)
    .then((eats, users, rest)=>{
        res.redirect('/eats')
    })

}
function show(req, res){
    Eat.findById(req.params.id)
    .then((eats)=>{
     res.render('eats/oneRecipe',{ title: 'good kid-friendly food', user:req.user, eats})   
    })
    
}


