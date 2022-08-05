// internal exports
const News = require("../../models/newsModel")

async function updateNews(req, res) {
  try {

    await News.findByIdAndUpdate(req.params.id ,{...req.body})
    res.status(200).json({ succesMsg : "News successfully updated :)" })

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

module.exports = updateNews