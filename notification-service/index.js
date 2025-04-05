const express = require("express");

const app = express();
app.use(express.json());

const startConsumer = require("./kafka/consumer");

startConsumer().then(() => {
  console.log("Notification Service is listening for order events...");
});

app.listen(4001, () => {
  console.log("Notification Service running at http://localhost:4001");
});
