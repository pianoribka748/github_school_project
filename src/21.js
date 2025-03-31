const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.post('/students', (req, res) => {
  const { name } = req.body;
  // Student data processing logic here
  res.send({ message: 'Student added successfully' });
});

app.listen(3000, () => console.log('Server is running on http://localhost:3000'));
