const express = require("express");
const sendOrderEvent = require("./kafka/producer");

const app = express();
app.use(express.json());

// POST /order - place an order
app.post("/order", async (req, res) => {
  const { userId, items, total } = req.body;

  // Basic validation
  if (!userId || !items || !total) {
    return res.status(400).json({ error: "Missing order fields" });
  }

  // Creating an order object
  const order = {
    orderId: `ORD-${Date.now()}`, // unique order ID
    userId,
    items,
    total,
    status: "PLACED",
    createdAt: new Date(),
  };

  // Send order to Kafka
  await sendOrderEvent(order);

  res.status(201).json({ message: "Order placed!", order });
});

app.listen(4000, () => {
  console.log("Order Service running at http://localhost:4000");
});

// ##Why?
// This is the API endpoint that simulates placing an order. Instead of saving to a database, we send it to Kafka.
