const asyncHandler = (handler) => {
 return (req, res,next) =>
    Promise.resolve(handler(req, res,next)).catch((error) => {
      return res
        .status(500)
        .send({ error, message: error?.message, status: false });
    });
};

export default asyncHandler;