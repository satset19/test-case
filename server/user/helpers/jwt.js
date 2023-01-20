const jwt = require('jsonwebtoken');

const createPayload = (payload) => {
    return jwt.sign(payload, process.env.JWT_KEY)
}

const confirmPayload = (payload) => {
    return jwt.verify(payload, process.env.JWT_KEY)
}

module.exports = { createPayload, confirmPayload }