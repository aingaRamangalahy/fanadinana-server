const path = require("path");
const dotenv = require("dotenv");

dotenv.config({ path: path.resolve(__dirname, `${process.env.NODE_ENV}.env`) });
console.log(`[mode] ${process.env.NODE_ENV}`)

const config = {
  NODE_ENV: process.env.NODE_ENV,
  SERVER_PORT: process.env["SERVER_PORT"],
  SERVER_HOST: process.env["SERVER_HOST"],
  DATABASE_NAME: process.env["DATABASE_NAME"],
  DATABASE_PWD: process.env["DATABASE_PWD"],
  DATABASE_USER: process.env["DATABASE_USER"],

};

module.exports = config;