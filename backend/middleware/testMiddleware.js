const addOneFieldToProduct = (req, res, next) => {
  req.testField = "Added Via Middleware";

  next();
};

const secondMiddleware = (req, res, next) => {
  req.testField = "Modified";

  next();
};

export { addOneFieldToProduct, secondMiddleware };
