// internal exports
const News = require("../../models/newsModel")

async function getAdminNews(req, res) {
  try {
    const user = req.user

    let news

    if(user.role === 'master-admin' || user.role === 'admin'){
        news = await News.find()
    }else{
        news = await News.find({ publisher : user._id })
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

module.exports = getAdminNews