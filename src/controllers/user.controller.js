import {User} from "../models/user.model.js"


export const getUser = async (req, res)=>{
    const {email} = req.params;

    const user = await User.findAll({
        where:{
            email:email
        }
        
    });

    res.json(user);


}

export const getUsers = async (req, res)=>{

    return res.json({message:`hello ${req.user.email}`});

}