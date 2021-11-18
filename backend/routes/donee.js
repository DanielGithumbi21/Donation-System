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

/* 
  GET AND MAKE DONATION REQUEST BY ID SETUP
*/

router.route('/request/:id')
  .get(doneeController.getRequest)
  .post(doneeController.makeRequest)

module.exports = router;
