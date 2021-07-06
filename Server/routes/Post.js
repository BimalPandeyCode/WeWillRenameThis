import express from "express";
const router = express.Router();
import Post from "../model/Post.js";
import User from "../model/User.js";
import auth from '../middleware/auth.js';
import {
    check,
    validationResult
} from 'express-validator';


//@router POST /api/Post
//@description create a post 
//@access private

router.post('/',auth,[
    check('text','Text is required').not().isEmpty(),
], async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({
            errors: errors.array()
        });
    }
   try {
       const {text} = req.body;
       const user = await User.findById(req.user.id).select('-password');
       const newPost = new Post({
           user: req.user.id,
           firstname: user.firstname,
           lastname:user.lastname,
           profilePhoto: user.profilePhoto,
           text:text
       })
       const post = await newPost.save();
        res.json(post);
   } catch (err) {
       console.error(err.message);
       res.status(500).send('Server Error');
       
   }
});

//@router GET /api/Post
//@description Get all posts
//@access private
router.get('/',auth, async (req, res) =>{
    try {
        const posts = await Post.find().sort({createdAt:-1});
        if(!posts){
            return res.status(400).json({message:'No posts found'});
        }
        return res.json(posts);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

//@router GET /api/Post
//@description Get single post
//@access private
router.get('/:id', auth,async (req, res) =>{
    try {
        const post = await Post.findById(req.params.id);
        if(!post){
            return res.status(400).json({message:`No post found with the id of ${req.params.id}`});
        }
        return res.json(post);
    } catch (err) {
        console.error(err.message);
        console.log(err.kind);
        if(err.kind === 'ObjectId'){
            return res.status(400).json({message:`No post found with the id of ${req.params.id}`});
        }
        res.status(500).send('Server Error');
    }
});

//@router GET /api/Post
//description Get all post of the user
//@access private
router.get('/owner/posts', auth, async (req, res) => {
    try {
        const posts = await Post.find({user:req.user.id});
        if(!posts){
            return res.status(404).json({message:"No post from the user till now"});
        }
        res.status(200).json(posts)
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
})
export default router;