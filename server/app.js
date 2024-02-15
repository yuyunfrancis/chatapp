const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");

const app = express();
require("dotenv").config();

app.use(cors());
app.use(express.json());

app.use(express.static(`${__dirname}/public`));

app.use("/api/auth/v1", userRoutes);

module.exports = app;
