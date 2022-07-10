// internal exports
const News = require("../../models/newsModel")

async function getNewsById(req, res) {
  var ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress 

  try {
    const news = await News.findOne({ _id : req.params.id }).populate('publisher', '-password')
    
    const checkVisitor = news.visitors.includes()
    
    if(!checkVisitor){
      news.visitors = [...news.visitors, ip]
      news.save()
    }

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

module.exports = getNewsById
