import User from "../models/userModel.js";
import createError from "../utils/createError.js";

export const getUser= async (req, res, next)=>{

    const user = await User.findById(req.params.id);

    if(!user){
        return next(createError(403, "User Does Not Exist"))
    }

    const {password, ...others}=user?._doc;

    res.status(200).send(others);


}

//delete

export const deleteUser = async (req, res, next)=>{
    
    const user = await User.findById(req.params.id);

    if(req.userId !== user._id.toString()){
        return next(createError(403, "You Can Only Delete You Own Account"));
    }

    await User.findByIdAndDelete(req.params.id);
    res.status(200).send("Deleted.")
}
