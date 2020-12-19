const reviewCtrl= require('../controllers/reviews');


router.post('/explorations', reviewCtrl.create)

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
  }

module.exports= router;