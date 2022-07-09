// internal exports
const News = require("../../models/newsModel")

async function latestNews(req, res) {
  try {

    const news = await News.find()
    const newNews = news.reverse().splice(0, 12)

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

module.exports = latestNews