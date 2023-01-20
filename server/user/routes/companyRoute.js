const CompanyController = require('../controllers/companyController')
const router = require('express').Router()

router.post('/register', CompanyController.createCompanyAccount)
router.post('/login', CompanyController.loginCompany)



module.exports = router