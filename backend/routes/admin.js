const express = require('express');
const router = express.Router();

const adminController = require('../controllers/admin/adminController');

/* 
  REGISTER ADMIN SETUP
*/

router.route('/register')
  .get(adminController.getAdmin)
  .post(adminController.postAdmin)

/* 
  LOGIN DONEE SETUP
*/

router.route('/login')
  .post(adminController.loginAdmin)

/* 
  GET AND VERIFY DONATION REQUEST BY ID SETUP
*/

router.route('/request/:id')
  .get(adminController.getRequest)
  .patch(adminController.verifyRequest)

module.exports = router;
