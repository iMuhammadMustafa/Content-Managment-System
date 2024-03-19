import express from "express";
const router = express.Router();
const Post = require('../Models/Post');

router.get('/post/:id', (req, res) => {
    
    let slug = req.params.id;

    const data = Post.getPostById({_id, slug});

    res.render('post', {data:data})
})

export default router;
