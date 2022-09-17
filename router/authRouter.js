// external imports 
const router = require('express').Router()

// internal imports 
const signin = require('../controller/auth/signin')
const signup = require('../controller/auth/signup')
const genarateToken = require('../controller/auth/genarateToken')
const updateUser = require('../controller/auth/updateUser')
const auth = require('../middleware/auth/auth')

// set router
router.post('/signup', signup)
router.post('/signin', signin)
router.post('/refresh_token', genarateToken)

router.put('/update-user', auth, updateUser)

module.exports = router