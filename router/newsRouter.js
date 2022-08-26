// external imports 
const router = require("express").Router()

// internal imports 
const auth = require('../middleware/auth/auth')
const createNews = require('../controller/news/createNews') 
const getNews = require('../controller/news/getNews') 
const getNewsById = require("../controller/news/getNewsbyId")
const latestNews = require("../controller/news/latestNews")
const latestCategory = require("../controller/news/latestCategory")
const mostReadedCatg = require("../controller/news/MostReadedCatg")
const updateNews = require("../controller/news/updateNews")
const deleteNews = require("../controller/news/deleteNews")

// create news
router.post('/create-news', auth, createNews)

router.get('/get-news', getNews)
router.get('/get-news/:id', getNewsById)
router.get('/latest-news', latestNews)
router.get('/latest-category/:category', latestCategory)
router.get('/mostread-category/:category', mostReadedCatg)

router.patch('/update-news/:id', updateNews)
router.delete('/delete-news/:id', auth, deleteNews)

module.exports = router