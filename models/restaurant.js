const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const restSchema = new Schema(
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
        user: [{type: Schema.Types.ObjectID, ref:'User'}],
        location:  [{type: Schema.Types.ObjectId, ref: 'location'}],

      },
      {
        timestamps: true,
      }
    );



module.exports = mongoose.model("Rest", restSchema);