const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// const weatherSchema = new Schema(
//   {
//     city:String,

//   })
const locationSchema = new Schema(
    {
        city: String,
        email: String,
        sunrise: Number,
        googleId: String,
        bio: String,

      },
      {
        timestamps: true,
      }
    );

module.exports = mongoose.model("Location", locationSchema);