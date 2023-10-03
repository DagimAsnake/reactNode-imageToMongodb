const router = require("express").Router();
const ItemController = require('../controller/items.js');

router.get('/get', ItemController.getItems)
router.post('/post', ItemController.createItem);

module.exports = router;