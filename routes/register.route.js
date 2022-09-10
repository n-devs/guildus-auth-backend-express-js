var express = require("express");
var router = express.Router();

async function isRequest(req, res, next) {
  try {
    const { email, password, passwordConfirm } = req.body;

    if (!email) {
      return res.send({
        statusCode: 401,
        message: "request not allowed because there is no email",
      });
    } else if (!password) {
      return res.send({
        statusCode: 401,
        message: "request not allowed because there is no password",
      });
    } else if (!passwordConfirm) {
      return res.send({
        statusCode: 401,
        message: "request not allowed because there is no password confirm",
      });
    } else if (password !== passwordConfirm) {
      return res.send({
        statusCode: 401,
        message:
          "The request is not allowed because the password and verification password do not match.",
      });
    } else {
      return next();
    }
  } catch (e) {
    return  res.send({
      statusCode: 400,
      message:
        "The server cannot or will not process the request due to something that is perceived to be a client error",
    });
  }
}

async function register(req, res, next) {
  try {
    return res.send({
      statusCode: 201,
      message: "Created user ok!",
    });
  } catch (e) {
    return res.send({
      statusCode: 400,
      message:
        "The server cannot or will not process the request due to something that is perceived to be a client error",
    });
  }
}
/* POST Register. */
router.post("/register", isRequest, register);

module.exports = router;
