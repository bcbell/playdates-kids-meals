const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema= new Schema({
  postedBy: String,
  model: {type: String, enum: ['Restaurant', 'Recipe', 'Location']},
  avatar: String,
  rating: {type: String, enum: [' Would recommend', 'May visit again', 'Would not recommend']},
  content: String,
  title: String,
  place: String,
  location: String,
  
},{
  timestamps: true
})

module.exports = mongoose.model("Review", reviewSchema);