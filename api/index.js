/* when your network changes or connects to different networks then restart your mongo server and set your current ip address */

//  nodemon index.js

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./Models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const download = require('image-downloader');
require('dotenv').config();

const bcryptSalt = bcrypt.genSaltSync(10);
const jwtSecret = 'eyJhbGciOiJIUzI1Nioj9HXhilse9gHKMs9If4hhM8u4Bvg';

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use('/uploads', express.static(__dirname + '/uploads'));

app.use(
  cors({
    credentials: true,
    origin: 'http://127.0.0.1:5173',
  })
);

// console.log(process.env.MONGO_URL);
mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URL);

app.get('/test', (req, res) => {
  res.json({ msg: 'This is CORS-enabled for all origins!' });
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

app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const userDoc = await User.findOne({ email });
  if (userDoc) {
    const passOk = bcrypt.compareSync(password, userDoc.password);
    if (passOk) {
      jwt.sign(
        {
          email: userDoc.email,
          id: userDoc._id,
        },
        jwtSecret,
        {},
        (err, token) => {
          if (err) throw err;

          res.cookie('token', token).json(userDoc);
        }
      );
    } else {
      res.status(422).json('pass not ok');
    }
  } else {
    res.json('User not found');
  }
});

app.get('/profile', (req, res) => {
  const { token } = req.cookies;
  if (token) {
    jwt.verify(token, jwtSecret, {}, async (err, userData) => {
      if (err) throw err;
      const { name, email, _id } = await User.findById(userData.id);
      res.json({ name, email, _id });
    });
  } else {
    res.json(null);
  }
});

app.post('/logout', (req, res) => {
  res.cookie('token', '').json(true);
});

app.post('/upload-by-Link', async (req, res) => {
  const { link } = req.body;
  const newName = 'photo' + Date.now() + '.jpg';
  await download.image({
    url: link,
    dest: __dirname + '/uploads/' + newName,
  });
  res.json(newName);
});

app.listen(4000, function () {
  console.log(`CORS-enabled web server listening on port 4000`);
});

/* Password of mongoDB => q1qOhi625Oh1LYKe
mongodb+srv://airbnbapp:q1qOhi625Oh1LYKe@cluster0.zim2zo8.mongodb.net
mongodb+srv://airbnbapp:q1qOhi625Oh1LYKe@cluster0.zim2zo8.mongodb.net/test */
