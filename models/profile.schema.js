const mongoose = require('mongoose')

const profileShema = mongoose.Schema({
    name: { type: String,
        required: true},
    sex: {type: String,
          required:true   },
    birth:{type: String,
           required:true}
})

const Profile = mongoose.model('Profile', profileShema)

module.exports = Profile