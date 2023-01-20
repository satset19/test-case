const AppController = require('../controllers/appController')
const authantication = require('../middleware/authentication')

const router = require('express').Router()

router.get('/', authantication, AppController.getForm)
router.post('/create', authantication, AppController.createForm)



module.exports = router