const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: String,
    email: String,
    avatar: String,
    phoneNumber: Number,
    googleId: String,
    bio: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
