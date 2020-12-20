const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: String,
    email: String,
    avatar: String,
    googleId: String,
    phone : Number,
    locality: String,
    state: String,
    bio: String,
    parent: {type: String, enum:['Parent', 'Grandparent', 'Foster Parent', 'Adoptive Parent', 'Guardianship', 'Babysitter', 'Nanny','Other']}
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
