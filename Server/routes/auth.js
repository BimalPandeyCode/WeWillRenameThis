import express from 'express';
const router = express.Router();
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { check, validationResult } from 'express-validator';
import User from '../model/User.js';
import auth from "../middleware/auth.js";

// @route   GET api/auth
// @desc    Check the token and return  user 
// @access  Private
router.get('/', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        res.json({user});
     } catch (error) {
         console.error(error.message);
         res.status(500).send('Server error')
     }
   

})


// @route   POST api/auth
// @desc    login user 
// @access  Public
router.post('/', [
    check('email','Please add a valid Email').isEmail(),
    check('password','Please add a password of 8 or more characters').isLength({ min : 8 })
],async(req, res) =>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ 
            errors: errors.array()
        })
    }
    
    
    try {
        let {email, password} = req.body;
         //See if user exists
        const user = await User.findOne({ email }).select("+password");
        // console.log(user);
        if(!user){
            return res.status(400).json({
                msg: 'Invalid credentials'
            });
        } 

        const isMatch = await bcrypt.compare(password, user.password);
    

        if(!isMatch) {
            return res.status(400).json({
                msg: 'Invalid credentials'
            });
        }

        //Return jsonwebtooken
        const payload ={
            user:{
                id: user.id
            }
        }
        jwt.sign(payload, "helloworld", {
            expiresIn:360000
        },(err, token) => {
            if(err) throw err;
            res.json({token})
        })
      
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
    
   
} );

export default router;