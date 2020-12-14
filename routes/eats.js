const router =require('express').Router();
const eats = require('../controllers/eats');
const eatsCtrl =require('../controllers/eats');

router.get('/', eatsCtrl.index)
router.get('/', eatsCtrl.index)

function isLoggedIn(req, res, next){
    if (req.isAuthenticated()) 
    return next();
    res.redirect('/auth/google')
}
module.exports = router;