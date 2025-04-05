# 📢 Notification Service (Kafka + Node.js Microservices)

This is a **Kafka-based Notification Service** built with Node.js and Express. It listens for `order events` from a Kafka topic and handles notifications accordingly. This is a part of a microservices-based architecture.

---

## 🔧 Tech Stack

- **Backend:** Node.js, Express.js
- **Messaging System:** Apache Kafka
- **Broker:** Kafka (via Confluent or local setup)
- **Protocol:** JSON over Kafka
- **Containerization:** Docker (optional)

---

## 📌 Features

- Connects to Kafka and consumes messages from a topic (e.g. `order-events`).
- Can be extended to trigger email, SMS, or push notifications.
- Built to be scalable and event-driven.
- Logs and handles message processing asynchronously.

---

## 📂 Project Structure

```
notification-service/
├── kafka/
│   └── consumer.js       # Kafka consumer setup
├── index.js              # Express server and Kafka consumer starter
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/06-abhishek/notification-service.git
cd notification-service
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Kafka Locally (via Docker)

If you don't have Kafka running already, you can spin it up using Docker:

```bash
docker-compose up -d
```

*Or use a service like [Confluent Cloud](https://www.confluent.io/cloud/)*

---

## ⚙️ Configuration

Update the Kafka configuration in `kafka/consumer.js`:

```js
const kafka = new Kafka({
  clientId: "notification-service",
  brokers: ["localhost:9092"],
});
```

Make sure the broker URL matches your setup.

---

## 📬 Example Kafka Message

Kafka should publish messages like this to the topic (e.g. `order-events`):

```json
{
  "userId": "12345",
  "orderId": "abcde12345",
  "status": "ORDER_PLACED",
  "message": "Your order has been placed successfully!"
}
```

---

## 🧠 How It Works

1. Kafka producer (e.g. order service) sends an event to the `order-events` topic.
2. This service consumes the message and logs or handles it.
3. You can plug in services like:
   - Email (via Nodemailer or Mailgun)
   - SMS (via Twilio)
   - Push notifications

---

## 🏁 Start the Service

```bash
node index.js
```

You should see:

```
📢 Notification Service is listening for order events...
✅ Notification Service running at http://localhost:4001
```

---

## 📦 Sample Kafka Setup with Docker Compose

Here’s a minimal `docker-compose.yml` if needed:

```yaml
version: '3'
services:
  zookeeper:
    image: wurstmeister/zookeeper
    ports:
      - "2181:2181"

  kafka:
    image: wurstmeister/kafka
    ports:
      - "9092:9092"
    environment:
      KAFKA_ADVERTISED_HOST_NAME: localhost
      KAFKA_ZOOKEEPER_CONNECT: zookeeper:2181
```

---

## 📈 Future Improvements

- Add message validation and retry logic
- Integrate Email or SMS gateways
- Add a UI Dashboard to view notifications
- Use Redis or MongoDB for persistent logs

---

## 🧑‍💻 Author

**Abhishek Patil**  
🔗 [LinkedIn](https://www.linkedin.com/in/abhishek-patil-27759630b/) | 🌐 Isampur, Maharashtra, India

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

```
