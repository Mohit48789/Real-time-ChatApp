
import User from '../models/User.js';
import bcrypt from 'bcryptjs';

export const signup=async(req,res)={
    const {email,password,fullname,bio}=req.body;
    try{
        if(!fullname || !email || !password || !bio){
            return res.json({success: false, message:"All fields are required"});

        }
        const user=await User.findOne({email});
        if(user){
            return res.json({success:false, message:"User already exists"});
        }
        const salt=await bcrypt.genSalt(10);
        const hashedPassword=await bcrypt.hash(password,salt);
        const newUser=await User.create({
            fullname,email,password : hashedPassword,bio
        });

    } catch(error){

    }

}