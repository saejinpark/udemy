const mongoose = require("mongoose");
const ciries = require("./cities");
const Campground = require("../models/campground");
const { descriptors, places } = require("./seedHelpers");

mongoose.connect("mongodb://localhost:27017/yelp-camp", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const sample = (array) => array[Math.floor(Math.random() * array.length)];

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database connected");
});

const seedDB = async () => {
  await Campground.deleteMany({});
  for (let i = 0; i < 50; i++) {
    const random1000 = Math.floor(Math.random() * 1000);
    const price = Math.floor(Math.random() * 20) + 10;
    const camp = new Campground({
      location: `${ciries[random1000].city} ${ciries[random1000].state}`,
      title: `${sample(descriptors)} ${sample(places)}`,
      image:
        "https://images.unsplash.com/photo-1536782376847-5c9d14d97cc0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita magni velit pariatur nobis reprehenderit deserunt eos in impedit delectus iure eaque dignissimos enim repudiandae odit ab aut, accusamus obcaecati quidem.",
      price,
    });
    await camp.save();
  }
};

seedDB().then(() => {
  mongoose.connection.close();
});
