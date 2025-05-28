// kafka.js
const { Kafka } = require('kafkajs');

// Read broker address from environment
const kafka = new Kafka({
  clientId: 'bff-service',
  brokers: [process.env.KAFKA_BROKER],
});

// Create a single producer instance
const producer = kafka.producer();

/**
 * Initialize and connect the producer.
 * Call this once at app startup.
 */
async function initProducer() {
  await producer.connect();
  console.log('⚡️ Kafka Producer connected');
}

/**
 * Publish a JSON-serializable message to a topic.
 * @param {string} topic
 * @param {object} message
 */
async function publish(topic, message) {
  await producer.send({
    topic,
    messages: [
      { value: JSON.stringify(message) }
    ],
  });
  console.log(`📨 Event published to ${topic}`);
}

module.exports = { initProducer, publish };
