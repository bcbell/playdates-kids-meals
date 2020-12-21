const router =require('express').Router();
const restCtrl =require('../controllers/restaurants');


router.get('/', restCtrl.index)
router.get('/dining', restCtrl.new)
router.post('/', isLoggedIn, restCtrl.create)
router.get('/:id', isLoggedIn, restCtrl.show)

function isLoggedIn(req, res, next){
    if (req.isAuthenticated()) 
    return next();
    res.redirect('/auth/google')
}

module.exports = router;