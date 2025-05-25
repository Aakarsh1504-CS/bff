const responseBody = (res, statusCode = 400, message = null, data = null, success = null, error_code = null) => {
    return res.status(statusCode).json({
        success,
        error_code,
        message,
        data,
    });
};

module.exports = {
    responseBody,
};
