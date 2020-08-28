const express = require('express');
const { body } = require('express-validator');

const profileController = require('../controllers/profile.controller');

const router = express.Router();

router.post(
  '/profiles/update',
  [
    body('firstName').exists().withMessage('Value is required').isString(),
    body('lastName').exists().withMessage('Value is required').isString(),
  ],
  profileController.updateProfile
);

router.post(
  '/password/change',
  [
    body('currentPassword')
      .exists()
      .withMessage('Value is required')
      .isString(),
    body('newPassword').exists().withMessage('Value is required').isString(),
    body('confirmPassword')
      .exists()
      .withMessage('Value is required')
      .isString(),
  ],
  profileController.updatePassword
);

router.get('/profiles/mine', profileController.getProfile);

module.exports = router;
