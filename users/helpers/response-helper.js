exports.response = (res, success = false, status, code, message = '', data) => {
    res.status(status).json({
        success,
        status,
        code,
        message,
        data,
    });
}

exports.error = (res, success = false, status, code = 'ERROR', message = 'UNKNOWN_SERVER_ERROR', error) => {
    res.status(status).json({
        success,
        code,
        message,
        error,
    });
}
