let errorHandler = (err, req, res, next) => {
    let { name } = err
    let message = ''
    let code = null

    switch (name) {
        case 'Unauthorized':
            code = 401;
            message = 'Please login first'
            break
        case 'DataNotFound':
            code = 404
            message = 'Data not found'
            break
        case 'SequelizeValidationError':
        case 'SequelizeUniqueConstraintError':
            code = 400;
            message = err.errors.map(el => el.message)
            break;
        case 'InvalidCredentials':
            code = 401;
            message = 'Invalid email or password'
            break;
        case 'BadRequest':
            code = 400;
            message = 'Please input email or password'
            break;
        case 'Forbidden':
            code = 403;
            message = 'You cannot access'
            break
        case "DataNotFound":
            code = 404
            message = 'Data not found'
            break
        default:
            code = 500
            message = 'Internal server error'
            break;
    }
    // console.log(err)
    res.status(code).json({ message })
    // console.log(message)
    // console.log(code, message)
}

module.exports = errorHandler