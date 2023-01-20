const { Companies, Containers, DaisiForms } = require('../models/');
const bycrypt = require('bcryptjs');
const { createPayload } = require('../helpers/jwt');

class CompanyController {
    static async createCompanyAccount(req, res, next) {
        try {
            const { email, password, company_name, label_company } = req.body
            let company = await Companies.create({ email, password, company_name, label_company })
            res.status(201).json(company)
        } catch (error) {
            next(error)
        }
    }
    static async loginCompany(req, res, next) {
        try {
            const { email, password } = req.body
            const option = {
                where: {
                    email
                }
            }
            let company = await Companies.findOne(option)
            let comparePassword = bycrypt.compareSync(password, company.password)
            if (!comparePassword) throw { name: 'InvalidCredentials' }

            let payload = createPayload({ id: company.id, email: company.email })
            res.status(200).json({ access_token: payload, company_name: company.company_name, label_company: company.label_company })
        } catch (error) {
            next(error)
        }
    }
}

module.exports = CompanyController