const express= require('express');
const { setPosts, getPosts, editPosts, deletePosts, likePosts, disLikePosts } = require('../controllers/post.controller');
const router =express.Router()


router.get("/",getPosts)
// router.get("/", (req,res)=>{
//     res.json({message: "voici les données"})
// })

router.post("/",setPosts)

// router.post("/", (req,res)=>{
//     res.json({message: "mesage"})
// })

router.put("/:id",editPosts)

// router.put("/:id", (req,res)=>{
//     res.json({messageId:req.params.id})
// })

router.delete("/:id",deletePosts)

// router.delete("/:id", (req,res)=>{
//     res.json({message:'post supprimer id: ' + req.params.id})
// })

router.patch("/like-post/:id/",likePosts)

// router.patch("/like-post/:id/", (req,res)=>{
//     res.json({message:'le post liké id : ' + req.params.id})
// })

router.patch("/dislike-post/:id/",disLikePosts)

// router.patch("/dislike-post/:id/", (req,res)=>{
//     res.json({message:'le post disliké id : ' + req.params.id})
// })

module.exports=router