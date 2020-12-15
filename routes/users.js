const router =require('express').Router();
const usersCtrl =require('../controllers/accounts');

router.get('/', usersCtrl.index)
router.get('/account/:id', usersCtrl.show)


function isLoggedIn(req, res, next){
    if (req.isAuthenticated()) 
    return next();
    res.redirect('/auth/google')
}
module.exports = router;