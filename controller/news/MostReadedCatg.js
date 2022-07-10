// internal exports
const News = require("../../models/newsModel")

async function mostReadedCatg(req, res) {
  try {

    const news = await News.find({ category : req.params.category })
    const newNews = news.length > 5 ? news.sort((a, b) => b.visitors - a.visitors).splice(0,5) : news.sort((a, b) => b.visitors - a.visitors)

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

module.exports = mostReadedCatg