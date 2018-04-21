const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const inquirySchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: String,
  message: { type: String }
});

const Inquiry = mongoose.model("Inquiry", inquirySchema);

module.exports = Inquiry;
