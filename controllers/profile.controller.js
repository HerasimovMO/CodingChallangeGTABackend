const { validationResult } = require('express-validator');

var profile = {
  firstName: 'Johnny B',
  userName: 'iOS User',
  lastName: 'Goode',
};

exports.getProfile = (req, res, next) => {
  res.json({
    message: 'User Retrieved',
    data: profile,
  });
};

exports.updateProfile = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  profile.firstName = req.body.firstName;
  profile.lastName = req.body.lastName;

  if (req.body.userName) {
    profile.userName = req.body.userName;
  }

  res.json({
    message: 'User Retrieved',
    data: profile,
  });
};

exports.updatePassword = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  res.json({
    data: {},
    code: 'string',
    message: 'Password Changed',
    exceptionName: null,
  });
};
