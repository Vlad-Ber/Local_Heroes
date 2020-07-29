const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const errandSchema = new Schema({
  createdat: {
    required: true,
    timestamp: true,
  },
  closedat: {
    required: true,
    timestamp: true,
  },

  status: String,
  type: String,
  title: String,
  description: String,
  adress: String,
  mobile: Number,
  email: String,
  helper: String,
  requester: String,
  areaID: Number,
});

const Errand = mongoose.model("Errand", errandSchema);
module.exports = Errand;
