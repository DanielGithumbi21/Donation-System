const bcrypt = require('bcryptjs');

const Donee = require('../../models/donee');

/* 
  REGISTER DONEE SETUP
*/

exports.getDonee = async (req, res, next) => {
  try {
    let donee = await Donee.find()

    return res.status(200).json(donee)

  } catch (error) {
    console.error(error);
    next(error);
  }
}

exports.postDonee = async (req, res, next) => {
  try {
    let { donee, telephone, email, password } = req.body

    await Donee.findOne({ 'name': req.body.donee, 'email': req.body.email })
      .then((donee) => {
        if(donee) return res.json({ message: 'Donor already exists' })
      } )
      .catch(error => console.error(error))

    let newDonee = new Donee(req.body)
    newDonee.save()
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

exports.loginDonee = async (req, res, next) => {
  try {
    let { email, password } = req.body
    
    let donee = await Donee.findOne({ email })
    if(!donee) return res.json({ message: 'Kindly register first' })

    let matchPassword = await bcrypt.compare(password, donee.password)
    if(!matchPassword) return res.json({ message: 'Wrong Password' })
    
    res.status(200).json({
      result:donee
    })

  } catch (error) {
    console.error(error);
    next(error);
  }
}