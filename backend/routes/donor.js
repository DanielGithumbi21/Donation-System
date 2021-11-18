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

/* 
  GET VERIFIED DONATION REQUESTS SETUP
*/

// router.route('/verified')

/* 
  MAKE DONATION TO DONEE BY ID SETUP
*/

router.route('/donate/:id')
  .get(donorController.getVerified)
  .patch(donorController.patchDonate)
  
module.exports = router;
