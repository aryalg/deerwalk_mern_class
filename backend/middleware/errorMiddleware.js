// Normal Middleware which takes 3 arguments
const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);

  res.status(404);
  next(error);
};

// Error Handler Middleware -> which takes 4 arguments

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;

  res.status(statusCode);

  res.json({
    message: err.message,
    stack: process.env.NODE_ENV == "production" ? undefined : err.stack,
  });
};

export { notFound, errorHandler };
