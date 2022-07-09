// internal exports
const News = require("../../models/newsModel")

async function latestCategory(req, res) {
  try {

    const news = await News.find({ category : req.params.category })
    const newNews = news.length > 10 ? news.reverse().splice(0, 12) : news.reverse()

    res.status(200).json({
      news : newNews
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

module.exports = latestCategory