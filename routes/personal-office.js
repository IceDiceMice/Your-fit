const express = require('express')
const router = express.Router()

router.get('/', (req,res)=>{

    res.render('personal-office/personal-office')
})
module.exports = router