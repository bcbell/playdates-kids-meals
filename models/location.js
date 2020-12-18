const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const locationSchema = new Schema(
    {
        // id: String,
        placename: String,
        placeurl: String,
        placeaddress: String,
        placelocality: String,
        placecity: String,
        placezipcode: Number,
        timings: String,
        locationType: String,
        age : Number,
        highlights: String,
        aggregate_rating: Number,
        user: [{type: Schema.Types.ObjectID, ref:'User'}],
        restaurants:  [{type: Schema.Types.ObjectId, ref: 'Rest'}],

      },
      {
        timestamps: true,
      }
    );



module.exports = mongoose.model("Location", locationSchema);