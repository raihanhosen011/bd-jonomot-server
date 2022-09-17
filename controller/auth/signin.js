// external imports 
const bcrypt = require("bcrypt")

// internal import 
const User = require('../../models/userModel')
const { createAcessToken, createRefreshToken } = require('../../libs/createToken')

const signin  = async (req, res) => {
    try {
      const { email, password } = req.body
      
      const newPassword = password.replace(/ /g,'').toLowerCase()

      // checked if entered email is already used?
      const checkEmail = await User.findOne({ email })
      if(!checkEmail){
        return res.json({
          errors:{
            common : {
              msg : 'You passed an invalid email'
            }
          }
        })
      }
      
      // check password correct or incorrect?
      const checkPass = await bcrypt.compare(newPassword, checkEmail.password) 
      if (!checkPass) {
        return res.json({
          errors : {
            common : {
              msg : "You entered an incorrect password :("
            }
          }  
        })
      }

      if(checkEmail && checkPass){
        const accessToken = await createAcessToken({ id : checkEmail._id })  
        const refreshToken = await createRefreshToken({ id : checkEmail._id }) 

        res.json({
          msg : "successfully login",
          token : accessToken,
          refreshToken,
          user : {
            ...checkEmail._doc,
            password : ""
          }
        })
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

module.exports = signin