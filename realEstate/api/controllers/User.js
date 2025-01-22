import { prisma } from "../lib/prisma.js";
import bcrypt from "bcrypt";


const getAllUsers = async (req,res) => {
  try {

    const allUsers = await prisma.user.findMany()

    return res.status(200).json({
        success:true,
        message:"All Users Fetched Successfully",
        user:allUsers
    })

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error Fetching All Users",
      error: error.message
    })
  }
};

const getUser = async (req,res) => {
  try {

    const {userId} = req.params; 

    const user = await prisma.user.findUnique({
      where:{
        id:userId
      }
    })

    return res.status(200).json({
        success:true,
        message:"User Fetched Successfully",
        user:user

    })


  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error Fetching User",
      error: error.message
    })
  }
};

const updateUser = async (req,res) => {
  try {

    const{userId} = req.params;
    const{username,email,password} = req.body;

    if(!username || !email || !password){
      return res.status(400).json({
        success:false,
        message:"Please Provide All Fields"
      })
    }

    const hashedPassword = await bcrypt.hash(password,10);

    const user = await prisma.user.update({
      where:{
        id:userId
      },
      data:{
        username:username,
        email:email,
        password:hashedPassword
      }
    })

    return res.status(200).json({
        success:true,
        message:"User Updated Successfully",
        user:user
    })

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error Updating User",
      error: error.message
    })
  }
};

const deleteUser = async (req,res) => {
  try {

    const{userId} = req.params;

    const user = await prisma.user.delete({
      where:{
        id:userId
      }
    })

    return res.status(200).json({
        success:true,
        message:"User Deleted Successfully",
        user:user
    })


  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error Deleting User",
      error: error.message
    })
  }
};

export { getAllUsers, getUser, deleteUser, updateUser };
