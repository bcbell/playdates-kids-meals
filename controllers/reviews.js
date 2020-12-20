
const Review = require('../models/review')


module.exports={
    index,
    create,
   
}
function index(req, res){
    Review.find({})
    .then((reviews,users)=>{
        res.render('reviews/reviews', {title: 'Reviews', user: req.user, users, reviews})
    })
}

function create(req, res){
    req.body.postedBy = req.user.name
    req.body.avatar =req.user.avatar
    // req.body.place = req.location.placename
    // req.body.restaurant= req.rest.name
    Review.create(req.body)
    .then(()=>{
       res.redirect(`/reviews`) 
    })
    
} 
 
// function create(req, res){
//     req.body.postedBy = req.user.name
//     req.body.avatar =req.user.avatar
//     Location.findById(req.params.id), 
//         function (err, location){
//         location.reviews.push(req.body)
//         location.save(function(err){
//             res.redirect(`/explorations/${req.params.id}`)
//         })
//     }
// }

// function create(req, res){
//     Location.create(req.body, function(err, location){
//         res.redirect(`/explorations`)
//     })
// }