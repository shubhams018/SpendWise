function errorMiddleware(err, req, res, next) {

    console.error(err);

    if (err.code === 11000) {
    return res.status(409).json({
        message: "Username or email already exists"
    });
    }

    if (err.name === "CastError"){

        return res.status(400).json({
            message : " invalid ID"
        });
    }

    return res.status(500).json({
        message: "Internal server error"
    });
}

module.exports = errorMiddleware;