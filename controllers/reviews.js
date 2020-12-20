const Eat = require('../models/eat')
const Rest = require('../models/restaurant')
const Location = require('../models/location')


module.exports={
    create,
   
}

function create(req, res){
    Location.findById(req.params.id), 
        function (err, location){
        location.reviews.push(req.body)
        location.save(function(err){
            res.redirect(`/explorations/${req.params.id}`)
        })
    }
}

// function create(req, res){
//     Location.create(req.body, function(err, location){
//         res.redirect(`/explorations`)
//     })
// }