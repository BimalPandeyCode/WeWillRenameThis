import jwt from 'jsonwebtoken';



export default   async function(req, res, next) {
    //Get token from header
    const token = req.header('x-auth-token');
    //check if not token 
    if(!token){
        res.status(401).json({msg: 'No token, authorization denied'});
    }

    //verify token 
    try {
        const decoded = jwt.verify(token, "helloworld");
        req.user = decoded.user;
        next();
    } catch (err) {
        console.log(err);
        res.status(401).json({msg:'Token is not valid'});
        
    }
}