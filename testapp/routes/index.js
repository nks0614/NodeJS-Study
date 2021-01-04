var express = require('express');
var router = express.Router();
const controller = require('../controllers')

router.get('/', controller.basicAPI)
router.get('/test', controller.testAPI)
router.post('/post', controller.postTestAPI)

module.exports = router;
