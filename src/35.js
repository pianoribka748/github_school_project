let express = require('express');

// Create an Express server instance
const app = express();

// Define routes
app.get('/', (req, res) => {
  // Respond with a simple "Hello, World!" response
  res.send('Hello, World!');
});

// Start the server
app.listen(3000, () => console.log('Server is running on http://localhost:3000'));
