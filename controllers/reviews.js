const Eat = require('../models/eat')
const Rest = require('../models/restaurant')
const Location = require('../models/location')


module.exports={
    create,
}

function create(req, res){
    Eat.findById(req.params.id).then((eat)=>{
        eat.reviews.push(req.body)
        eat.save().then(()=>{
            res.redirect(`/eats/${eat.id}`)
        })
    })
}
function create(req, res){
    Rest.findById(req.params.id)
    .then((rest)=>{
        rest.reviews.push(req.body)
        rest.save()
        .then(()=>{
            res.redirect(`/restaurants/${rest.id}`)
        })
    })
}
function create(req, res){
    req.body.rating = req.body.rating ==="on" ? true : false
    Location.findById(req.params.id)
    .then((location)=>{
        location.reviews.push(req.body)
        location.save()
        .then(()=>{
            res.redirect(`/explorations/${location.id}`)
        })
    })
}