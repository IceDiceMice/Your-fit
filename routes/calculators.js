const express = require('express')
const router = express.Router()

router.get('/', (req,res)=>{
    res.render('calculators/calculators')
})
router.get('/belly', (req,res)=>{
    res.render('calculators/belly')
})
router.get('/carbs', (req,res)=>{
    res.render('calculators/carbs')
})
router.get('/pfc', (req,res)=>{
    res.render('calculators/pfc')
})
router.get('/pulse', (req,res)=>{
    res.render('calculators/pulse')
})
router.get('/water', (req,res)=>{
    res.render('calculators/water')
})
module.exports = router