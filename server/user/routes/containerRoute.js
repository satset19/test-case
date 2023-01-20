const AppController = require('../controllers/appController')
const authantication = require('../middleware/authentication')

const router = require('express').Router()

router.get('/', authantication, AppController.getContainer)
router.post('/create', authantication, AppController.createContainer)
router.delete('/:id', authantication, AppController.deleteContainer)
// router.post('/login', CompanyController.loginCompany)



module.exports = router