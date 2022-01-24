const bcrypt = require('bcryptjs');

const Donee = require('../../models/donee');
const Request = require('../../models/donation');


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

/* 
  GET AND MAKE DONATION REQUEST BY ID SETUP
*/

exports.getRequest = (req, res, next) => {
  try {
    Request.find({'donee': req.params.id})
      .then((request) => {
        return res.status(200).json(request)
      })
      .catch((error) => console.error(error))
    } catch (error) {
    console.error(error);
    next(error);
  }
}

exports.makeRequest = async (req, res, next) => {
  try {

    let { title, description, donees } = req.body

    if (!title) {
      return res.json({message:"Title field cannot be empty"})
    }
    if (!description) {
      return res.json({message:"Description field cannot be empty"})
    }

    
    if(req.params.id != String(req.body.donee)) return res.json({ message: 'This Donee is not related to the donation request being made' })

    let request = await new Request(req.body)
    request.save()
      .then((result) => res.status(201).json({ result }))
      .catch(err => console.error(err))
      
  } catch (error) {
    console.error(error);
    next(error);
  }
}