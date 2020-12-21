const router =require('express').Router();
const usersCtrl =require('../controllers/accounts');

router.get('/', isLoggedIn, usersCtrl.index)
router.get('/:id', isLoggedIn, usersCtrl.show)
router.put('/:id/', isLoggedIn, usersCtrl.update)
router.get('/:id/update', isLoggedIn, usersCtrl.edit)
router.delete('/:id', isLoggedIn, usersCtrl.delete)



function isLoggedIn(req, res, next){
    if (req.isAuthenticated()) 
    return next();
    res.redirect('/auth/google')
}
module.exports = router;