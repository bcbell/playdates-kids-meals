const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const restSchema = new Schema(
    {
        name: String,
        url: String,
        address: String,
        locality: String,
        city: String,
        state: String,
        zipcode: Number,
        cuisines: String,
        speciality: String,
        timings: String,
        features: {type: String, enum: ['delivery', 'reservations', 'waitlist', 'acceptsCC', 'outdoorSeating', 'goodFamilies','dogsAllowed', 'wheelchairAccessible','genderNeutralRestrooms','familyRestroom', 'changingTable', 'kidsMenu','goodlargeGroups', 'offersAlcohol','freeWifi', 'freeParking', 'noSmoking']},
        service:{type :String, enum :['breakfast', 'brunch', 'lunch', 'dessert', 'late night']},
        user: [{type: Schema.Types.ObjectId, ref:'User'}],
        location:  [{type: Schema.Types.ObjectId, ref: 'Location'}], 
        reviews: [{type: Schema.Types.ObjectId, ref: 'Review'}],

      },
      {
        timestamps: true,
      }
    );



module.exports = mongoose.model("Rest", restSchema);