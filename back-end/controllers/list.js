const activities = require('../models/activity')

//--------------------------CRUD METHODS-------------------------

//create
const post = async (req, res) => {
  const newSchema = new activities(req.body)
  console.log(req.body)
  await newSchema.save()
  res.json({newSchema})
}

//read
const get = function (req, res) {
    activities.find({}).exec().then(function (result) {
    res.json({result})
  })
}

//update
const update = async function (req, res) {
  await activities.findOneAndUpdate({_id: req.params.id}, req.body)
  res.send()
}

//delete
const deleteOne = function (req, res) {
  activities.findOneAndRemove({_id: req.params.id}, function(err, acttivity){
      if(err){
          return res.status(500).send("Something went wrong tryng to delete the activity")
      }
      res.send("Activity deleted")
  })
}

const getOne = async function (req, res) {
    const account = await activities.findOne({_id: req.params.id}, function(err){
        if(err){
            res.status(400).send("The activity doesn't exist")
        }
    })
    res.send(account)    
}

module.exports = {
  post,
  get,
  update,
  deleteOne,
  getOne
}