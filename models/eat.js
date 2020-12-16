const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eatSchema = new Schema(
    {
        id: String,
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

module.exports = mongoose.model("Eat", eatSchema);