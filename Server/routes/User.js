import express from 'express';
const router = express.Router();
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { check, validationResult } from 'express-validator';
import User from '../model/User.js';

// @route   POST api/user
// @desc    Register user 
// @access  Public
router.post('/', [
    check('name','Please add a name').not().isEmpty(),
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
        let {name, email, password} = req.body;
         //See if user exists
        const user = await User.findOne({ email });
        if(user){
            return res.status(400).json({
               errors:[ {msg:'User already exists'} ]
            })
        } 

        user = new User({ 
            name,
            email,
            avatar,
            password
        })

        //Encrypt password
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);
        await user.save();

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