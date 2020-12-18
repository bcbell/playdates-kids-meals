const router =require('express').Router();
const restCtrl =require('../controllers/restaurants');


router.get('/', restCtrl.index)
router.get('/dining', restCtrl.new)
router.post('/', restCtrl.create)
module.exports = router;