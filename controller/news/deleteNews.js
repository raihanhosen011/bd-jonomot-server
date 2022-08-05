// internal exports
const News = require("../../models/newsModel")

async function deleteNews(req, res) {
  try {

    await News.findByIdAndDelete(req.params.id)
    res.status(200).json({ succesMsg : "News successfully deleted" })

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

module.exports = deleteNews