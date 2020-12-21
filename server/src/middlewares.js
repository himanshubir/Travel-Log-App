const notFound = (req, res, next) => { // We could not find the route
    const error = new Error(`The route : ${req.originalUrl} cannot be found`);
    res.status(404);
    next(error); // Next will go on to the next middleware.  Since we passed in an error it sends it to the error handler middleware
};

const errorHandler = (error, req, res, next) => { // Error handler Middleware: Need 4 parameters
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode; // Checks to see if we have we have a notFound error (code 404) or if it is another problem
    res.status(statusCode);
    res.json({
        message: error.message,
        stack: process.env.NODE_ENV === 'production' ? '🥞' : error.stack, // Only makes the error stack visible if we are not in production
    })
};

module.exports = {
    notFound,
    errorHandler
}