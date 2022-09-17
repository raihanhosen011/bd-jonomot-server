// internal exports
const News = require("../../models/newsModel")

async function updateStatus(req, res) {
  console.log(req.body)

  try {
    const updatedData = await News.findOneAndUpdate(
        { _id: req.params.id} , 
        req.body
    )
    res.json({ updated: updatedData, succesMsg : "News successfully updated :)" })

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

module.exports = updateStatus