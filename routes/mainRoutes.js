const express = require('express')
const router = express.Router()
const authController = require('../controllers/authController')
const postsController = require('../controllers/postController')

const {ensureAuth, ensureGuest} = require('../middlewares/authMiddleware')

// mainRoutes
router.get('/', authController.getIndex)
router.get("/profile", ensureAuth, postsController.getProfile);
router.get('/user/:id', ensureAuth, postsController.getUserProfile)
router.get("/feed", ensureAuth, postsController.getFeed);
router.get("/login", authController.getLogin);
router.post("/login", authController.postLogin);
router.get("/logout", authController.logout);
router.get("/signup", authController.getSignup);
router.post("/signup", authController.postSignup);

module.exports = router
