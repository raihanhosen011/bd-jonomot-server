// external imports 
const router = require("express").Router()

// internal imports 
const auth = require('../middleware/auth/auth')
const createNews = require('../controller/news/createNews') 
const getNews = require('../controller/news/getNews') 
const getNewsById = require("../controller/news/getNewsbyId")
const latestNews = require("../controller/news/latestNews")
const latestCategory = require("../controller/news/latestCategory")

// create news
router.post('/create-news', auth, createNews)

router.get('/get-news', getNews)
router.get('/get-news/:id', getNewsById)
router.get('/latest-news', latestNews)
router.get('/latest-category/:category', latestCategory)

module.exports = router