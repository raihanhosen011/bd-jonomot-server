// internal exports
const News = require("../../models/newsModel")

async function createNews(req, res) {
  try {

    const newNews = await News({
      ...req.body,
      publisher : req.user._id
    }).save()

    res.status(200).json({
      succesMsg : "News successfully listed :)",
      post : {
        ...newNews._doc,
        user : req.user
      }
    })

  } catch (err){
    res.status(400).json({
      errors : {
        common : {
          msg : err.message  
        }
      }   
    })  
  } 
}

module.exports = createNews