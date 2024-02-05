import User from "../models/userModels.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"


//REGISTER form 
export const register= async(req, res) => {
    try {
      
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(req.body.password, salt);
  
      
      const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword,
      });
  
   
      const user = await newUser.save();
  
     
      res.status(200).json(user);
    } catch (error) {
      // Handle registration failure
      console.error("Registration error:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };
  
  
  //LOGIN 
  
export const login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(404).send("User not found");

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    !validPassword && res.status(400).json("Wrong password");

    
    const token = jwt.sign({ _id: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });

    
    res.status(200).json({ user, token });
  } catch (error) {
    res.status(500).json(error);
  }
};
