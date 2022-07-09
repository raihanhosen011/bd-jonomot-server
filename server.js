// external imports
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')
const fs = require('fs')

const app = express()
dotenv.config()

const port = process.env.PORT || 8000

// start mongoose
mongoose
    .connect(process.env.MONGO_CONNNECTION_STRING, {
       useNewUrlParser: true,
       useUnifiedTopology: true
    })
    .then(() => console.log("mongodb connected ..."))
    .catch((e) => console.log(e))


// request parser ...
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(cors())

// setup router
fs.readdirSync(__dirname + '/router').map(route => app.use('/api/', require('./router/' + route)))

// start server
app.listen(port, () => {
  console.log(`App running on ${port} PORT`)
})