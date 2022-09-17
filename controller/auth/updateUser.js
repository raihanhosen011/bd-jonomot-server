// internal import 
const User = require('../../models/userModel')

const updateUser  = async (req, res) => {
    try {
        const { avatar, fullname } = req.body
        
        const updatedData = await User.findOneAndUpdate(
          { _id : req.user._id },
          { avatar, fullname }
        ) 

        res.json({
          msg : "User successfully updated",
          updated : updatedData
        })

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

module.exports = updateUser