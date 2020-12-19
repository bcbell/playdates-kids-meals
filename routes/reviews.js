const reviewCtrl= require('../controllers/reviews');


router.post('/explorations/:id/reviews', reviewCtrl.create)



module.exports= router;