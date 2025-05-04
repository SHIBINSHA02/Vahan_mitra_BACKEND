// server.js
// Import the Express.js module
const express = require('express');

// Create an Express application instance
const app = express();

// Define the port your server will listen on
const port = 5436;

// Define a basic route for the homepage (/)
app.get('/', (req, res) => {
  res.send('Hello World! This is yogdsr kend');
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});