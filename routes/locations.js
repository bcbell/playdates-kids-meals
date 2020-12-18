const router =require('express').Router();
const locationsCtrl =require('../controllers/locations');


router.get('/', locationsCtrl.index)
router.get('/attractions', locationsCtrl.new)
router.post('/', locationsCtrl.create)
// router.get('/:id', locationsCtrl.show)



function isLoggedIn(req, res, next){
    if (req.isAuthenticated()) 
    return next();
    res.redirect('/auth/google')
}
module.exports = router;