const router =require('express').Router();
const locationsCtrl =require('../controllers/locations');


router.get('/', locationsCtrl.index)
// router.get('/', locationsCtrl.weatherLocation)
// router.post('/explorations/weatherquery', locationsCtrl.weatherQuery)


function isLoggedIn(req, res, next){
    if (req.isAuthenticated()) 
    return next();
    res.redirect('/auth/google')
}
module.exports = router;