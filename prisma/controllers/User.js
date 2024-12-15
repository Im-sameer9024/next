import prisma from "../config/database";

export const createUser = async(req,res) =>{

  const {name,email} = req.body;

  const user = await prisma.user.findUnique({
    where:{
      email:email
    }
  })

  if(user){
    return res.json({
      
    })
  }

}