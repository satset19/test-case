const router = require("express").Router();
const company = require('./companyRoute');
const container = require('./containerRoute');
const form = require('./formRoute');
router.use('/company', company)
router.use('/container', container)
router.use('/form', form)
module.exports = router