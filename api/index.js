const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: 'http://127.0.0.1:5173',
  })
);

app.get('/test', (req, res) => {
  console.log('web server listening on port 4000');
  res.json({ msg: 'test ok' });
});

console.log(process.env.MONGO_URL);
mongoose.connect(process.env.MONGO_URL);

app.post('/registration', (req, res) => {
  const { name, email, password } = req.body;
  res.json({ name, email, password });
});

app.listen(4000);

/* Password of mongoDB
kumar@789 */
