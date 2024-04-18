import {User} from "../model/user.model.js"
import { v4 as uuidv4 } from 'uuid';

export const getUser = async (req, res)=>{

    const {id} = req.params;

    const user = await User.findAll({
        where:{
            id
        }
        
    });

    return res.json(user);

}

export const getUsers = async (req, res)=>{

    const users = await User.findAll();

    return res.json(users);

}

export const postUser = async (req, res)=>{

    try{

        const {firstName, lastName, email, password} = await req.body;

        const id = Math.floor(Math.random()* 10000);

        const user = await User.build({
            id, 
            firstName, 
            lastName, 
            email, 
            password, 
        });

        await user.save();

        return res.json({success:1, msg: "user successfully saved"})

    }catch(e){

        return res.json({success:0, msg: "user could not be saved"});

    }


}

export const updateUser = async (req, res)=>{

    const {id} = req.params;
    const {firstName, lastName, email, category_id} = req.body;

    try{

        await User.update({
            firstName,
            lastName,
            email,
            category_id
        },{
            where:{
                id
            }
        })

        return res.json({success:1, msg: "User updated successfully"})

    }catch(e){

        return res.json({success:0, msg: "Can not update user"})
        
    }

}

export const deleteUser = async (req, res)=>{

    const {id} = req.params;

    try{

        const user = await User.findOne({
            where:{
                id
            }
        });

        if(!user) throw new Error("user not found");

        await user.destroy();

        return res.json({success:1 , msg: "Woker deleted"});

    }catch(e){
        return res.json({success:0, msg: "Can not delete user"});
    }

}