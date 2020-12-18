const router =require('express').Router();
const restCtrl =require('../controllers/restaurants');


router.get('/', restCtrl.index)

module.exports = router;