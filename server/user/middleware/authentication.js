const { confirmPayload } = require('../helpers/jwt');
let { Companies } = require('../models');

async function authantication(req, res, next) {
    try {
        let { access_token } = req.headers

        if (!access_token) throw { name: 'Unauthorized' }
        let token = confirmPayload(access_token)

        const company = await Companies.findByPk(token.id)
        if (!company) {
            throw { name: 'Unauthorized' }
        }
        req.user = {
            id: token.id,
            email: token.email
        }
        next()
    } catch (error) {
        next(error)
    }

}
module.exports = authantication
