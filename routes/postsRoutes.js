const express = require('express')
const router = express.Router()
const upload = require('../middlewares/multerMiddleware')
const postsController = require('../controllers/postController')
const { ensureAuth, ensureGuest } = require('../middlewares/authMiddleware');

router.get("/:id", ensureAuth, postsController.getPost);
router.post("/createPost", upload.single("file"), postsController.createPost);
router.put("/likePost/:id", postsController.likePost);
router.delete("/deletePost/:id", postsController.deletePost);


module.exports = router