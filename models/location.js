const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const locationSchema = new Schema(
    {
        // id: String,
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
        user: [{type: Schema.Types.ObjectID, ref:'User'}]

      },
      {
        timestamps: true,
      }
    );



module.exports = mongoose.model("Location", locationSchema);