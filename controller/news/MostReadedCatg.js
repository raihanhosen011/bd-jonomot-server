// internal exports
const News = require("../../models/newsModel")

async function mostReadedCatg(req, res) {
  try {

    const news = await News.find({ category : req.params.category, published : true })
    const newNews = news.length > 5 ? news.sort((a, b) => b.visitors.length - a.visitors.length).splice(0,5) : news.sort((a, b) => b.visitors.length - a.visitors.length)

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