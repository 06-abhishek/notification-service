const kafka = require("./client");
const consumer = kafka.consumer({ groupId: "notification-group" });

const startConsumer = async () => {
  await consumer.connect();
  await consumer.subscribe({ topic: "order-events", fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      const order = JSON.parse(message.value.toString());
      console.log(
        `Notification: Order ${order.orderId} for user ${order.userId} placed successfully!`
      );
    },
  });
};

module.exports = startConsumer;

// ##Why?
// This microservice subscribes to Kafka events and handles them — this is event consumption.
