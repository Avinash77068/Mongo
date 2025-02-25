<<<<<<< HEAD
const asyncHandler = (handler) => {
 return (req, res,next) =>
    Promise.resolve(handler(req, res,next)).catch((error) => {
      return res
        .status(500)
        .send({ error, message: error?.message, status: false });
    });
};

=======
const asyncHandler = (handler) => {
 return (req, res,next) =>
    Promise.resolve(handler(req, res,next)).catch((error) => {
      return res
        .status(500)
        .send({ error, message: error?.message, status: false });
    });
};

>>>>>>> 9aa4fe9af5039d6bc34d7790545c9f20d25d8d94
export default asyncHandler;