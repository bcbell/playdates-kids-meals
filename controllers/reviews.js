const Eat = require('../models/eat')
const Rest = require('../models/restaurant')
const Location = require('../models/location')


module.exports={
    create,
    new : newRestForm
}

// function create(req, res){
//     Eat.findById(req.params.id).then((eat)=>{
//         eat.reviews.push(req.body)
//         eat.save().then(()=>{
//             res.redirect(`/eats/${eat.id}`)
//         })
//     })
// }
// function create(req, res){
//     Rest.findById(req.params.id)
//     .then((rest)=>{
//         rest.reviews.push(req.body)
//         rest.save()
//         .then(()=>{
//             res.redirect(`/restaurants/${rest.id}`)
//         })
//     })
// }
// function create(req, res, next){
//     Location.findById(req.params.id)
//     .then((location)=>{
//         location.reviews.push(req.body)
//         location.save()
//         .then(()=>{
//             res.redirect(`/explorations/${req.params/}`)
//         })
//     })
// }
function newLocationForm(req, res){
        res.render('location/attReview', {title: 'Restaurant Review', user: req.user})
}


function create(req, res){
    Location.findById(req.params.id, 
        function (err, location){
        location.reviews.push(req.body)
        location.save(function(err){
            res.redirect(`/explorations`)
        })
    })
}