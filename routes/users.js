const router =require('express').Router();
const usersCtrl =require('../controllers/accounts');

router.get('/', usersCtrl.index)
router.get('/:id', usersCtrl.show)
router.put('/:id/', usersCtrl.update)
router.get('/:id/update', usersCtrl.edit)
// router.post('/:id/', usersCtrl.create)


function isLoggedIn(req, res, next){
    if (req.isAuthenticated()) 
    return next();
    res.redirect('/auth/google')
}
module.exports = router;