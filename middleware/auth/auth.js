const jwt = require('jsonwebtoken')
const User = require('../../models/userModel')

// auth middleware 
const auth = async (req, res, next) => {
    try {

      // get token from api header 
      const token = req.headers.authorization

      // check founded token is valid or not
      if(!token){
         return res.json({
            errors : {
              common : {
                msg : "Authorization error. Please do logout and again login"
              }
            }  
         })
      }
      
      // verify checked token with JWT secret
      const verifiedToken = await jwt.verify(token, process.env.JWT_ACCESS_TOKEN_PK)
      if(!verifiedToken){
         return res.json({
            errors : {
              common : {
                msg : "Your authorization is not verified, please do logout and again login"
              }
            }  
         })
      }

      // get user data
      const user = await User.findOne({ _id : verifiedToken.id })

      // save user data to "req.user"
      req.user = user
      next()

    } catch (err){
       res.json({
          errors : {
            common : {
               msg : err.message  
            }
          }   
       }) 
    }
}

module.exports = auth