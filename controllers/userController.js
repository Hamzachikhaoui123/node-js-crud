
import expressAsyncHandler from "express-async-handler"

import User from "../models/user.js"

// @desc Auth user/set token

// route POST /api/users/auth
// @access Public 
const authUser = expressAsyncHandler(async (req, res) => {
    // res.status(401);
    // throw new Error('Somthing went wrong')
    res.status(200).json({ message: "Auth user" })
})

// @desc registerUser

// route POST /api/users
// @access Public 
const resgisterUser = expressAsyncHandler(async (req, res) => {
    const { name, email, password } = req.body;
    console.log("body",req.body);
    const userExit = await User.findOne({ email })
    if (userExit) {
        res.status(400)
        throw new Error("Email deja exist")
    }
    const user = await User.create({
        name,

        email,
        password

    })
    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email
        })
    }
    else{
        res.status(400);
        throw new Error('Invalid data user')
    }
    res.status(200).json({ message: "register user" })
})

// @desc logout user

// route POST /api/users/logout
// @access Public 
const logoutUser = expressAsyncHandler(async (req, res) => {
    // res.status(401);
    // throw new Error('Somthing went wrong')
    res.status(200).json({ message: "logout user" })
})
// @desc Get User profile

// route Get /api/users/profile
// @access private 
const getUserProfile = expressAsyncHandler(async (req, res) => {
    // res.status(401);
    // throw new Error('Somthing went wrong')
    res.status(200).json({ message: "user profile" })
})

// @desc Put updateProfileUser

// route Put /api/users/profile
// @access Private 
const updateProfile = expressAsyncHandler(async (req, res) => {
    // res.status(401);
    // throw new Error('Somthing went wrong')
    res.status(200).json({ message: "update  user profile" })
})
export {
    authUser,
    resgisterUser,
    logoutUser,
    getUserProfile,
    updateProfile
}