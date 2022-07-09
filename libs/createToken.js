// external imports 
const jwt = require('jsonwebtoken')

// create access token
const createAcessToken = async ( payload ) => {
    let token = await jwt.sign(payload, process.env.JWT_ACCESS_TOKEN_PK, { expiresIn : "1d" })
    return token
}

// create refresh token 
const createRefreshToken = async ( payload ) => {
    let token = await jwt.sign(payload, process.env.JWT_REFRESH_TOKEN_PK, { expiresIn : "30d" })
    return token
}

// export module
module.exports = {createAcessToken, createRefreshToken}