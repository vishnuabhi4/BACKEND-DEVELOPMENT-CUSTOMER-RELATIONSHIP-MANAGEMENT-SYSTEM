import jwt from 'jsonwebtoken';

export const verifyToken = (req,res,next) =>{
  //extracting JWT from headers HTTP requests (Bearer Token)
    const token = req.headers["authorization"]?.split(" ")[1];//["Bearer", "abcd1234"], [1]index 1 (token)
    if(!token) return res.status(401).json({message:"Access Denied. No token provided"});
    
    try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // { id, role }
    next();//next function - getAllusers
  } catch (err) {
    res.status(403).json({ message: "Invalid or Expired Token" });
  }

}