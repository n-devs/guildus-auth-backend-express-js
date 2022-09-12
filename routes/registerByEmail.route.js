var express = require("express");
var router = express.Router();

async function isRequire(req, res, next) {
  try {
    const { email, password, passwordConfirm } = req.body;

    if (!email) {
      return res.status(401).send({
        statusCode: 401,
        message: "request not allowed because there is no email",
      });
    } else if (!password) {
      return res.status(401).send({
        statusCode: 401,
        message: "request not allowed because there is no password",
      });
    } else if (!passwordConfirm) {
      return res.status(401).send({
        statusCode: 401,
        message: "request not allowed because there is no password confirm",
      });
    } else if(!email && !password && !passwordConfirm) {
      return res.status(400).send({
        statusCode: 400,
        message:
          "The server cannot or will not process the request due to something that is perceived to be a client error",
      });
    }else {
      return next();
    }
  } catch (e) {
    return res.status(400).send({
      statusCode: 400,
      message:
        "The server cannot or will not process the request due to something that is perceived to be a client error",
    });
  }
}

async function isValidation(req, res, next) {
  try {
    const { email } = req.body;
    const _regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (_regex.test(email)) {
      return next();
    } else {
      return res.status(401).send({
        statusCode: 401,
        message: "request not allowed because there is email match",
      });
    }
  } catch (e) {
    return res.status(400).send({
      statusCode: 400,
      message:
        "The server cannot or will not process the request due to something that is perceived to be a client error",
    });
  }
}

async function register(req, res, next) {
  try {
    const { password, passwordConfirm } = req.body;

    if (password !== passwordConfirm) {
      return res.status(401).send({
        statusCode: 401,
        message:
          "The request is not allowed because the password and verification password do not match.",
      });
    } else {
      return res.status(201).send({
        statusCode: 201,
        message: "Created user ok!",
      });
    }
  } catch (e) {
    return res.status(400).send({
      statusCode: 400,
      message:
        "The server cannot or will not process the request due to something that is perceived to be a client error",
    });
  }
}
/* POST Register. */
router.post("/register/email", isRequire, isValidation, register);

module.exports = router;
