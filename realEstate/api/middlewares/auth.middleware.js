import  JWT  from "jsonwebtoken";
import "dotenv/config.js";

const auth = async (req, res, next) => {
  try {
    const token = req.body.token || req.cookie.token || req.headers["x-access-token"];

      console.log("token value is here",token)

    if (!token) {
      return res.status(403).json({
        success: false,
        message: "Token is Invalid ",
      });
    }

    // verify the token

    try {
      const decoded = JWT.verify(token, process.env.SECRET_KEY);
      req.user = decoded;
    } catch (error) {
      return res.status(403).json({
        success: false,
        message: "Token is invalid",
      });
    }

    next();
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

const isUser = async (req, res, next) => {
  try {
    if (req.user.role !== "USER") {
      return res.status(403).json({
        success: false,
        message: "This is Protected route for only User",
      });
    }

    next();
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

const isAdmin = async(req,res,next) => {
    try {

        if(req.user.role !== "ADMIN"){
            return res.status(403).json({
                success: false,
                message: "This is Protected route for only Admin"
            })
        }

        next();
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        })
        
    }
}

export { auth,isUser,isAdmin};
