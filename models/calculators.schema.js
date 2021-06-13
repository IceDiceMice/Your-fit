const mongoose = require('mongoose')

const calculatirsShema = mongoose.Schema({
    pfc: String,
        
    carbs:  String,
   
    belly: String,

    pulse: String,

    water: String

       
})

module.exports = mongoose.model('Profile', calculatirsShema)
