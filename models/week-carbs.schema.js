const mongoose = require('mongoose')

const weekcarbsSchema = mongoose.Schema({
    monday: { type: String,
        required: true},

    tuesday: {type: String,
          required:true   },

    wednesday:{type: String,
           required:true},

           thursday:{type: String,
            required:true},

            friday:{type: String,
                required:true},

               saturday :{type: String,
                    required:true},

                    sunday:{type: String,
                        required:true}
})

module.exports = mongoose.model('Profile', weekcarbsSchema)

router.put('/form1', async (req, res) => {
	let name
	try {
	  name = await name.findById(req.params.id)
	  name.name = req.body.name
	  await author.save()
	} catch {
	  if (name == null) {
		console.log('no name find')
	  } 
	}
  })
