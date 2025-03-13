const express = require('express');
const app = express();
app.get('/', (req, res) => {
  const randNum = Math.floor(Math.random() * 10);
  res.send(`Hello from Nodejs! Random number: ${randNum}`);
});
