// external imports 
const mongoose = require('mongoose')


// news schema 
const newsSchema = new mongoose.Schema({

   title : {
      type: String,
      required: true,
      trim: true,
      default : ""
   }, 
   
   summery : {
      type: String,
      required: true,
      trim: true,
      default : ""
   }, 
   
   description : {
      type: String,
      required: true,
      trim: true,
      default : ""
   }, 
   
   image : {
      type: String,
      required: true,
      default : "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
   },

   category : {
      type : String,
      required : true
   },

   subCategory : {
      type : String,
      default : ""
   },

   visitors : {
      type : Number,
      default : 0
   },

   tags : {
      type : Array,
      required : true,
      default: []
   },
   
   publisher : { type : mongoose.Types.ObjectId, ref: 'User' },
   comments : [{ type : mongoose.Types.ObjectId, ref: 'Comment' }],
   reactions : [{ type : mongoose.Types.ObjectId, ref: 'User' }],

},{ timestamps : true })

// news model
const news = mongoose.model("News", newsSchema)

module.exports = news