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
  GET ALL DONATION REQUESTS SETUP
*/

router.route('/donations')
  .get(adminController.getAllDonations)

/* 
  GET AND VERIFY DONATION REQUEST BY ID SETUP
*/

router.route('/request/:id')
  .get(adminController.getRequest)
  .patch(adminController.verifyRequest)

/*
  UPDATE AND DELETE DONOR BY ID
*/

router.route('/donor/:id')
  .patch(adminController.patchDonor)
  .delete(adminController.deleteDonor)

/*
  UPDATE AND DELETE DONEE BY ID
*/

router.route('/donee/:id')
  .patch(adminController.patchDonee)
  .delete(adminController.deleteDonee)

module.exports = router;
