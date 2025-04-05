const kafka = require("./client");
const producer = kafka.producer(); // Create a Kafka producer

const sendOrderEvent = async (order) => {
  await producer.connect(); // Connect to Kafka broker

  await producer.send({
    topic: "order-events", // Topic to send message to
    messages: [
      { value: JSON.stringify(order) }, // Must be string or buffer
    ],
  });

  console.log("Order event sent:", order);

  await producer.disconnect();
};

module.exports = sendOrderEvent;

// ##Why?
// We're sending the order data to Kafka. It's event-driven communication — loosely coupled.
