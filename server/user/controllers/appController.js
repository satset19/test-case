const { Containers, DaisiFroms } = require('../models/');
class AppController {
    static async createContainer(req, res, next) {
        try {
            const { id } = req.user
            const { container_name } = req.body
            await Containers.create({ CompanyId: id, container_name })
            res.status(201).json({ message: 'Success create container' })
        } catch (error) {
            next(error)
        }
    }

    static async getContainer(req, res, next) {
        try {
            const { id } = req.user
            const option = {
                where: {
                    CompanyId: id
                }
            }
            let containers = await Containers.findAll(option)
            res.status(200).json(containers)
        } catch (error) {
            next(error)
        }
    }

    static async deleteContainer(req, res, next) {
        try {
            const { id } = req.params
            const option = {
                where: {
                    id
                }
            }
            await Containers.destroy(option)
            res.status(200).json({ message: 'Delete success' })
        } catch (error) {
            next(error)
        }
    }

    static async createForm(req, res, next) {
        try {
            const { id } = req.user
            const { name } = req.body
            await DaisiFroms.create({ name: name.replace(/\s+/g, ''), CompanyId: id })
            res.status(201).json({ message: 'Success create form' })
        } catch (error) {
            next(error)
        }
    }

    static async getForm(req, res, next) {
        try {
            const { id } = req.user
            const option = {
                where: {
                    CompanyId: id
                }
            }
            let forms = await DaisiFroms.findAll(option)
            res.status(200).json(forms)
        } catch (error) {
            next(error)
        }
    }
}

module.exports = AppController