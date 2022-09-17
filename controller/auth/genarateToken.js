// external imports 
const jwt = require('jsonwebtoken')

// internal import 
const User = require('../../models/userModel')
const { createAcessToken } = require("../../libs/createToken")

const genarateToken = async (req, res) => {
    try {
      const rf_token = req.body.rf_token
      if(!rf_token){
        return res.status(400).json({
          errors:{
            common : {
              msg : 'Please login now'
            }
          }
        })
      }

      if(rf_token){
        const verifiedToken = await jwt.verify(rf_token, process.env.JWT_REFRESH_TOKEN_PK)
        const user = await User.findOne({ _id : verifiedToken.id })

        if(user){
          const accessToken = await createAcessToken({ id : user._id })

          res.json({
            msg : "successfully login",
            token : accessToken,
            user : {
              ...user._doc,
              password : ""
            }
          })
        }else{
          return res.status(400).json({
            errors:{
              common : {
                msg : 'Please login now'
              }
            }
          })
        }
      }      
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

module.exports = genarateToken