//  nodemon index.js
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./Models/User');

const bcrypt = require('bcryptjs');
const bcryptSalt = bcrypt.genSaltSync(10);
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: 'http://127.0.0.1:5173',
  })
);

// console.log(process.env.MONGO_URL);
mongoose.connect(process.env.MONGO_URL);

app.get('/test', (req, res) => {
  res.json('test ok');
});

app.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const userDoc = await User.create({
      name,
      email,
      password: bcrypt.hashSync(password, bcryptSalt),
    });
    res.json(userDoc);
  } catch (e) {
    res.status(422).json(e);
  }
});

app.listen(4000);

/* Password of mongoDB => q1qOhi625Oh1LYKe
mongodb+srv://airbnbapp:q1qOhi625Oh1LYKe@cluster0.zim2zo8.mongodb.net
mongodb+srv://airbnbapp:q1qOhi625Oh1LYKe@cluster0.zim2zo8.mongodb.net/test */
