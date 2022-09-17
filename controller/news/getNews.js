// internal exports
const News = require("../../models/newsModel")

async function getNews(req, res) {
  try {
    
    const news = await News.find({ published : true })

    res.status(200).json({
      news : news
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

module.exports = getNews