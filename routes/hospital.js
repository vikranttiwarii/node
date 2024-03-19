const router = require('express').Router();
const controller = require('../controllers/hospital')

router.post('/add',controller.create);
router.get('/getall',controller.getAllData);

module.exports = router;