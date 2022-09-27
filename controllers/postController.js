const cloudinary = require('../middlewares/cloudinaryMiddleware')
const PostModel = require('../models/PostModule')

module.exports = {
  getProfile: async (req, res)=>{
    try {
      const posts = await PostModel.find({user: req.user.id})
      res.render("profile.ejs", {posts: posts, user: req.user})

    } catch (err) {
      console.log(err)
    }
  },
  getFeed: async (req, res)=>{
    try {
      const posts = await PostModel.find().sort({createdAt: 'desc'}).lean()
      res.render('feed.ejs', {posts: posts})
    } catch (err) {
      console.log(err)
    }
  },
  getPost: async (req, res)=>{
    try {
      const post = await PostModel.findById(req.params.id)
      res.render("post.ejs", {post: post, user: req.user})
    } catch (err) {
      console.log(err)
    }
  },
  createPost: async (req, res)=>{
    try {
      // Upload image to cloudinary
      const result = await cloudinary.uploader.upload(req.file.path)

      await PostModel.create({
        title: req.body.title,
        image: result.secure_url,
        cloudinaryId: result.public_id,
        caption: req.body.caption,
        likes: 0,
        user: req.user.id,
      })
      console.log('Post has been added!')
      res.redirect("/profile")
    } catch (err) {
      console.log(err)
    }
  },
  likePost: async (req, res)=>{
    try {
      await PostModel.findOneAndUpdate(
        { _id: req.params.id },
        {
          $inc: { likes: 1 },
        }
      )
      console.log("Likes +1")
      res.redirect(`/post/${req.params.id}`)
    } catch (err) {
      console.log(err)
    }
  },
  deletePost: async (req,res)=>{
    try {
      let post = await PostModel.findById({_id: req.params.id})
      // Delete image from cloudinary
      await cloudinary.uploader.destroy(post.cloudinaryId)
      // Delter post from db
      await PostModel.remove({_id: req.params.id})
      console.log("Delete Post")
      res.redirect('/profile')
    } catch (err) {
      res.redirect('/profile')
    }
  }







}