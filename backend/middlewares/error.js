class ErrorHandler extends Error{
    constructor(massage, statusCode) {
        super(massage);
        this.statusCode = statusCode;
    }
}

export const errorMiddleware = (err, req, res, next) => {
    err.massage = err.massage || "Internal Server Error";
    err.statusCode = err.statusCode || 500;

    if(err.name === "CastError") {
        const message = `Invalid Resource not found: ${err.path}`;
        err = new ErrorHandler(message, 400);
    }
}

export default ErrorHandler;