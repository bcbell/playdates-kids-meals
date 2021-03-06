const router =require('express').Router();
const eatsCtrl =require('../controllers/eats');


router.get('/', eatsCtrl.index)
router.get('/recipes', eatsCtrl.new)
router.post('/', isLoggedIn, eatsCtrl.create)
router.get('/:id', isLoggedIn, eatsCtrl.show)


function isLoggedIn(req, res, next){
    if (req.isAuthenticated()) 
    return next();
    res.redirect('/auth/google')
}


module.exports = router;