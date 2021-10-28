const express = require('express');
const router = express.Router();

const doneeController = require('../controllers/donee/doneeController');

/* 
  REGISTER DONEE SETUP
*/

router.route('/register')
  .get(doneeController.getDonee)
  .post(doneeController.postDonee)

/* 
  LOGIN DONEE SETUP
*/

router.route('/login')
  .post(doneeController.loginDonee)

module.exports = router;
