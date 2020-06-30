const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
    },
    password: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
    },
    firstname: String,
    surname: String,
    age: Number,
    address: String,
    areaID: Number,
    city: String,
    mobile: Number,
    virtuepoints: Number,
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
