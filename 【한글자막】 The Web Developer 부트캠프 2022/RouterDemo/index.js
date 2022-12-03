const express = require("express");
const app = express();
const shelterRoutes = require("./routers/shelters");
const dogRoutes = require("./routers/dogs");
const adminRoutes = require("./routers/admin");

// app.use((req, res, next) => {
//   if (req.query.isAdmin) {
//     next();
//   }
//   res.send("SORRY NOT AN ADMIN!");
// });

app.use("/shelters", shelterRoutes);
app.use("/dogs", dogRoutes);
app.use("/admin", adminRoutes)

app.listen(3000, () => {
  console.log("Serving app on localhost:3000");
});
