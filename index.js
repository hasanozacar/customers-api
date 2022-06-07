const Joi = require('joi');
const genres = require('./routes/genres');
const customers = require('./routes/customers');
const express = require('express');
const mongoose = require("mongoose");
const app = express();

mongoose
  .connect("mongodb://localhost/customers")
  .then(() => console.log("Connected MongoDb"))
  .catch((err) => console.log("Could not connect to mongodb", err));
app.use(express.json());
app.use('/api/genres', genres);
app.use('/api/customers', customers);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));