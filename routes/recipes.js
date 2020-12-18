const router =require('express').Router();
const recipesCtrl =require('../controllers/recipes');


router.get('/', recipesCtrl.index)

// router.post('/', recipesCtrl.create)

module.exports = router;