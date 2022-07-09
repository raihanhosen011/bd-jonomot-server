// external imports 
const mongoose = require('mongoose')

// user Schema
const userSchema = new mongoose.Schema({
  
  fullname: {
    type: String,
    required: true,
    trim: true,
    maxlength: 25,
  },

  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
        
  password: {
    type: String,
    required: true,
    trim: true,
  },

  avatar:{
    type: String,
    default : "https://cutt.ly/UAXRFXO"  
  },
        
  role: {
    type: String,
    default: "reporter",
  },

  address: {
    type: String,
    default: "",
  }
    
  },{ timestamps: true }
)
  
  
// user model
const user = mongoose.model("User", userSchema)

module.exports = user