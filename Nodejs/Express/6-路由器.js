const express = require("express");

const app = express();
const router = require("./6-router.js");


app.use(router);


app.listen(80);