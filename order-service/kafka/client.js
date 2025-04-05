const { Kafka } = require("kafkajs");

// Create a Kafka client instance
const kafka = new Kafka({
  clientId: "order-app", // just a name for logging/debugging
  brokers: ["localhost:9092"], // Kafka server address
});

module.exports = kafka;

// ##Why?
// Kafka needs to know who the client is (clientId) and where to connect (brokers).
