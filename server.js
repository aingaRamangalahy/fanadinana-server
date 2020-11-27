const express = require("express");
const bodyParser = require("body-parser");
const config = require("./config");

const app = express();

const port = config.SERVER_PORT || 9000;

//define routes

// config
this.app.use(bodyParser.json({ limit: "50mb" }));
this.app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
this.app.use(cors());

// root route
app.use("/", (req, res) => {
  res.json({
    success: true,
    message: "api working",
  });
});

// mount routes

// start server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
