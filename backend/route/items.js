const router = require("express").Router();
const ItemController = require('../controller/items.js');

router.get('/get', ItemController.getItems)
router.post('/post', ItemController.createItem);
router.get("/get/:postId", ItemController.getPost);
router.put("/post/:postId", ItemController.updatePost);
router.delete("/post/:postId", ItemController.deletePost);

module.exports = router;