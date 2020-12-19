const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const restSchema = new Schema(
    {
        name: String,
        url: String,
        address: String,
        locality: String,
        city: String,
        zipcode: Number,
        cuisines: String,
        timings: String,
        highlights: String,
        aggregate_rating: Number,
        user: [{type: Schema.Types.ObjectId, ref:'User'}],
        location:  [{type: Schema.Types.ObjectId, ref: 'Location'}], 
        reviews: [{type: Schema.Types.ObjectId, ref: 'Review'}],

      },
      {
        timestamps: true,
      }
    );



module.exports = mongoose.model("Rest", restSchema);