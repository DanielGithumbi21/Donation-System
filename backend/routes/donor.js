const express = require('express');
const router = express.Router();

const donorController = require('../controllers/donor/donorController');

/* 
  REGISTER DONOR SETUP
*/

router.route('/register')
  .get(donorController.getDonor)
  .post(donorController.postDonor)

/* 
  LOGIN DONOR SETUP
*/

router.route('/login')
  .post(donorController.loginDonor)

module.exports = router;
