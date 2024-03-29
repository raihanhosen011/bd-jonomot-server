// external imports 
const bcrypt = require("bcrypt")

// internal import 
const User = require('../../models/userModel')
const { createAcessToken, createRefreshToken } = require('../../libs/createToken')

const signup  = async (req, res) => {
    try {
      const { email, password } = req.body

      const newPassword = password.replace(/ /g,'').toLowerCase()

      // checked if entered email is already used?
      const checkEmail = await User.findOne({ email })
      if(checkEmail){
        return res.json({
          errors:{
            common : {
              msg : 'this email is already exist!'
            }

          }
        })
      }
      
      if(!checkEmail){
        const hashedPassword = await bcrypt.hash(newPassword, 10)

        const user = new User({
          ...req.body,
          password : hashedPassword
        })
        
        const accessToken = await createAcessToken({ id : user._id })  
        const refreshToken = await createRefreshToken({ id : user._id }) 

        await user.save()
        
        res.json({
          msg : "User successfully created",
          token : accessToken,
          user : {
            ...user._doc,
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

module.exports = signup