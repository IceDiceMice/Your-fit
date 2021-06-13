const mongoose = require('mongoose')

const perstatShema = mongoose.Schema({
    weight: { type: String,
        required: true},

    height: {type: String,
          required:true   },

          dreamweight:{type: String,
           required:true},

           belly: {type: String,
            required:true},


})

module.exports = mongoose.model('Profile', perstatShema)
