import express from "express";
const router = express.Router();

//@router GET /api/auth  
//@description test api 
//@access public

router.get('/', (req, res) => {
    res.send(" Hello profile ");
})

export default router;