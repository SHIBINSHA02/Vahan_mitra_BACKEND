// src/app.js
const express = require('express');
require('dotenv').config(); // Load environment variables from .env file

const app = express();
const port = process.env.PORT || 5617; // Use environment variable for port or default to 3000

app.get('/', (req, res) => {
  res.json({"message":'Car Data API is running!'});
});

app.listen(port, () => {
  console.log(`Server listening on port http://localhost:${port}`);
});