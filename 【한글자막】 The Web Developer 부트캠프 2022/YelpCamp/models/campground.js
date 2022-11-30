const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CampgroundSchema = new Schema({
  title: String,
  location: String,
  image: String,
  price: Number,
  description: String,
});

module.exports = mongoose.model("Campground", CampgroundSchema);
