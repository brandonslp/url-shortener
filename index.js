"use strict";

const express = require("express");
const cors = require("cors");
const RouterV1 = require("./app/routes/V1").Router;
const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/api/v1", RouterV1);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening on port ${port}`);
});
