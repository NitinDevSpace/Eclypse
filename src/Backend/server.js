const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5050;

const corsOptions = {
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'OPTIONS'],  // Include OPTIONS
  allowedHeaders: ['Content-Type'],     // Important for preflight
};

app.use(cors(corsOptions));
app.use(express.json());

let orders = [];

app.post('/place-order', (req, res) => {
  const order = req.body;
  console.log('🔥 /place-order endpoint hit');
  console.log('Received order:', order);
  orders.push(order);
  res.json({ message: 'Order received successfully', order });
});

// Start the server normally, do not wrap app.listen in try-catch
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

app.get('/placed-orders', (req, res) => {
  res.json(orders); // return all placed orders
});