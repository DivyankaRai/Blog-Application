

import { response } from "express"
import User from "../model/user.js"

export const signupUser = async (req,response)=>{
    try {
        const user = req.body
        const newUser = new User(user)
        await newUser.save()

        return response.status(200).json({msg:"signup successfull"})
    } catch (error) {
        return response.status(500)._construct({msg:"error while signup the user"})
    }
}