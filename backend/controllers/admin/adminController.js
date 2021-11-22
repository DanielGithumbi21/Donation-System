const bcrypt = require('bcryptjs');

const Admin = require('../../models/admin');
const Donor = require('../../models/donor');
const Donee = require('../../models/donee');
const Request = require('../../models/donation');


/* 
  REGISTER DONEE SETUP
*/

exports.getAdmin = async (req, res, next) => {
  try {
    let admin = await Admin.find()

    return res.status(200).json(admin)

  } catch (error) {
    console.error(error);
    next(error);
  }
}

exports.postAdmin = async (req, res, next) => {
  try {
    // let { donee, telephone, email, password } = req.body

    await Admin.findOne({ 'email': req.body.email })
      .then((admin) => {
        if(admin) return res.json({ message: 'Donor already exists' })
      } )
      .catch(error => console.error(error))

    let newAdmin = new Admin(req.body)
    newAdmin.save()
      .then((result) => res.status(201).json({
        result
      }))
      .catch(err => console.error(err))

  } catch (error) {
    console.error(error);
    next(error);
  }
}

/* 
  LOGIN DONEE SETUP
*/

exports.loginAdmin = async (req, res, next) => {
  try {
    let { email, password } = req.body
    
    let admin = await Admin.findOne({ email })
    if(!admin) return res.json({ message: 'Kindly register first' })

    let matchPassword = await bcrypt.compare(password, admin.password)
    if(!matchPassword) return res.json({ message: 'Wrong Password' })
    
    res.status(200).json({
      result:admin
    })

  } catch (error) {
    console.error(error);
    next(error);
  }
}

/* 
  GET ALL DONATION REQUESTS SETUP
*/

exports.getAllDonations = async (req, res, next) => {
  try {
    let donations = await Request.find()

    return res.status(200).json(donations)

  } catch (error) {
    console.error(error);
    next(error);
  }
}

/* 
  GET AND VERIFY DONATION REQUEST BY ID SETUP
*/

exports.getRequest = (req, res, next) => {
  try {
    Request.find({ '_id': req.params.id })
      .populate('donee', ['donee', 'email', 'telephone', 'verification'])
      .then((request) => {
        return res.status(200).json(request)
      })
      .catch((error) => console.error(error))
    } catch (error) {
    console.error(error);
    next(error);
  }
}

exports.verifyRequest = async (req, res, next) => {
  try {

    await Request.updateOne({ _id: req.params.id, verification: false },{ $set: { verification: true } }, { new: true, multi:true })
      .then(result => {
        if(!result) return res.json({ message: 'Dontion Request does not exist' })
        return res.status(200).json(result)
      })
      .catch(err => res.json(err))
      
  } catch (error) {
    console.error(error);
    next(error);
  }
}

/*
  UPDATE AND DELETE DONOR BY ID
*/

exports.patchDonor = async (req, res, next) => {
  try {

    await Donor.updateOne({ _id: req.params.id },{ $set: { 
      'donor': req.body.donor,
      'email': req.body.email
    } })
      .then(result => {
        if(!result) return res.json({ message: 'Donor does not exist' })
        return res.status(200).json(result)
      })
      .catch(err => res.json(err))

  } catch (error) {
    console.error(error);
    next(error);
  }
}

exports.deleteDonor = async (req, res, next) => {
  try {

    await Donor.deleteOne({ _id: req.params.id })
      .then((result) => {
        if(!result) return res.json({ message: 'Donor does not exist' })
        return res.status(200).json({ message: 'Donor has been deleted' })
      })

  } catch (error) {
    console.error(error);
    next(error);
  }
}

/*
  UPDATE AND DELETE DONEE BY ID
*/

exports.patchDonee = async (req, res, next) => {
  try {

    await Donee.updateOne({ _id: req.params.id },{ $set: { 
      'donee': req.body.donee,
      'email': req.body.email
    } })
      .then(result => {
        if(!result) return res.json({ message: 'Donee does not exist' })
        return res.status(200).json(result)
      })
      .catch(err => res.json(err))

  } catch (error) {
    console.error(error);
    next(error);
  }
}

exports.deleteDonee = async (req, res, next) => {
  try {

    await Donee.deleteOne({ _id: req.params.id })
      .then((result) => {
        if(!result) return res.json({ message: 'Donee does not exist' })
        return res.status(200).json({ message: 'Donee has been deleted' })
      })

  } catch (error) {
    console.error(error);
    next(error);
  }
}