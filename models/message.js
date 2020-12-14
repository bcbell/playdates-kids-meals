const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const messageSchema = new Schema(
    {
        location: String,
        email: String,
        avatar: String,
        googleId: String,
        bio: String,

      },
      {
        timestamps: true,
      }
    );

module.exports = mongoose.model("Message", messageSchema);