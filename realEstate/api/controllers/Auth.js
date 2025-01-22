import { prisma } from "../lib/prisma.js";
import bcrypt from "bcrypt";
import "dotenv/config";
import JWT from "jsonwebtoken";


const register = async (req, res) => {
  try {
    // Fetch data
    const { username, email, password } = req.body;  // Assume 'avatar' is being sent in the request
    
    const adminEmail = process.env.ADMIN_EMAIL;
    let role;

    // Check if user exists
    const existingUser = await prisma.user.findFirst({
      where: {
        email: email,
      }
    })

    if (existingUser) {
      return res.status(401).json({
        success: false,
        message: "User already exists",
      });
    }

    // Set user role
    role = email === adminEmail ? "Admin" : "User";

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user entry in DB
    const user = await prisma.user.create({
      data: {
        username: username,
        email: email,
        password: hashedPassword,
        role: role,
      },
    });

    // Send response
    return res.status(200).json({
      success: true,
      message: "User created successfully",
      user: user,
    });


  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};

const login = async (req, res) => {
  try {
    //fetch data
    const { email, password } = req.body;

    //validate data
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please provide email and password",
      });
    }

    //check user
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "User not Registered",
      });
    }

    //compare password
    if (await bcrypt.compare(password, user.password)) {
      const payload = {
        id: user.id,
        email: user.email,
        role: user.role,
      };

      const token = JWT.sign(payload, process.env.SECRET_KEY, {
        expiresIn: "72h",
      });

      user.token = token;
      user.password = undefined;

      const options = {
        maxAge: 3 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      };

      //create cookie and send response

      res.cookie("token", token, options).status(200).json({
        success: true,
        message: "User logged in successfully",
        user: user,
        token,
      });
    }else{
      return res.status(401).json({
        success: false,
        message: "Invalid password",
      })
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error,
    });
  }
};

const logout = async (req, res) => {
  try {
    res.clearCookie("token").status(200).json({
      success: true,
      message: "User logged out successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error,
    });
  }
};

const forgotPassword = async (req, res) => {
  try {
    const { email, oldPassword, newPassword, confirmPassword } = req.body;

    //check user
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "User not Registered",
      });
    }

    //compare password

    if (await bcrypt.compare(oldPassword, user.password)) {
      if (newPassword === confirmPassword) {
        const hashedPassword = await bcrypt.hash(newPassword, 10);

        //create user entry in db
        const user = await prisma.user.update({
          where: {
            email: email,
          },
          data: {
            password: hashedPassword,
          },
        });

        //send response
        return res.status(200).json({
          success: true,
          message: "Password updated successfully",
          user: user,
        });
      } else {
        return res.status(400).json({
          success: false,
          message: "New password and confirm password does not match",
        });
      }
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error,
    });
  }
};

export { register, login, logout,forgotPassword };
