const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema= new Schema({
  reviewer: String,
  reviewerPhoto: String,
  rating: Boolean,
  content: String,
},{
  timestamps: true
})

const locationSchema = new Schema(
    {
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
         reviews: [reviewSchema],restaurants:  [{type: Schema.Types.ObjectId, ref: 'Rest'}],
       

      },
      {
        timestamps: true,
      }
    );



module.exports = mongoose.model("Location", locationSchema);