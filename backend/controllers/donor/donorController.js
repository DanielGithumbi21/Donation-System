const bcrypt = require('bcryptjs');

const Donor = require('../../models/donor');
const Request = require('../../models/donation');

/* 
  REGISTER DONOR SETUP
*/

exports.getDonor = async (req, res, next) => {
  try {
    let donors = await Donor.find()

    return res.status(200).json(donors)

  } catch (error) {
    console.error(error);
    next(error);
  }
}

exports.postDonor = async (req, res, next) => {
  try {
    let { donor, telephone, email, password } = req.body

    await Donor.findOne({ 'name': req.body.donor, 'email': req.body.email })
      .then((donor) => {
        if(donor) return res.json({ message: 'Donor already exists' })
      } )
      .catch(error => console.error(error))

    let newDonor = new Donor(req.body)
    newDonor.save()
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
  LOGIN DONOR SETUP
*/

exports.loginDonor = async (req, res, next) => {
  try {
    let { email, password } = req.body
    
    let donor = await Donor.findOne({ email })
    if(!donor) return res.json({ message: 'Kindly register first' })

    let matchPassword = await bcrypt.compare(password, donor.password)
    if(!matchPassword) return res.json({ message: 'Wrong Password' })
    
    res.status(200).json({
      result:donor
    })

  } catch (error) {
    console.error(error);
    next(error);
  }
}

/* 
  GET VERIFIED DONATION REQUESTS SETUP
*/

exports.getVerified = (req, res, next) => {
  try {
    Request.find({ verification: true })
      .populate('donee', ['donee', 'email', 'telephone'])
      .then((verified) => {
        return res.status(200).json(verified)
      })
      .catch((error) => console.error(error))
    } catch (error) {
    console.error(error);
    next(error);
  }
}

/* 
  MAKE DONATION TO DONEE BY ID SETUP
*/

exports.patchDonate = async (req, res, next) => {
  try {

    await Request.updateOne({ donor: null, verification: true },{ $set: { donor: req.params.id } }, { new: true, multi:true })
      .then(result => {
        if(!result) return res.json({ message: 'Dontion Request does not exist' })
        return res.status(200).json(result)
      })
      .catch(err => res.json(err))
      // 
  } catch (error) {
    console.error(error);
    next(error);
  }
}