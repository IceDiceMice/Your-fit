const express = require('express')
const router = express.Router()
const Profile = require('../models/profile.schema')
router.get('/', (req,res)=>{
    res.render('profile/profile')
})



router.post('/', async (req,res)=>{
    
  const profile = new Profile({
      name: req.body.name,
      birth: req.body.birth,
      sex: req.body.sex
  }) 
  try {await profile.save()
    res.render('profile/profile')
}catch(e){
      console.log(e)
  }

})

module.exports = router