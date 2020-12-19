const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema= new Schema({
  reviewer: String,
  reviewerPhoto: String,
  rating: {type: String, enum: ['Would recommend', 'May visit again', 'Would not recommend']},
  content: String,
},{
  timestamps: true
})

const locationSchema = new Schema(
    {
        placename: String,
        placeurl:  String,
        placeaddress: String,
        placelocality: String,
        placecity: String,
        placezipcode: Number,
        timings: String,
        locationType: String,
        age : Number,
        highlights: String,
        aggregate_rating: Number,
        reviews: [reviewSchema],
        user: [{type: Schema.Types.ObjectId, ref:'User'}],
        restaurants:  [{type: Schema.Types.ObjectId, ref: 'Rest'}],
       
      },
      {
        timestamps: true,
      }
    );



module.exports = mongoose.model("Location", locationSchema);