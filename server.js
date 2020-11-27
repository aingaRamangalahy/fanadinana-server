const express = require("express");
const bodyParser = require("body-parser");
const config = require("./config");
const cors = require("cors");

const app = express();

const port = config.SERVER_PORT || 9000;

//define routes
const userRoutes = require("./src/routes/user.route");
const authRoutes = require("./src/routes/auth.route");
const mpiadinaRoutes = require("./src/routes/mpiadina.route");

// config
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(cors());


// mount routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/mpiadina", mpiadinaRoutes);
// start server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
