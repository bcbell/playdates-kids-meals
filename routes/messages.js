const router =require('express').Router();
const messagesCtrl =require('../controllers/messages');


router.get('/', messagesCtrl.index)
router.post('/', messagesCtrl.create)
router.get("/:id", messagesCtrl.show);
router.post("/:id", messagesCtrl.respond);

function isLoggedIn(req, res, next){
    if (req.isAuthenticated()) 
    return next();
    res.redirect('/auth/google')
}
module.exports = router;