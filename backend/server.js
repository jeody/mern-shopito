const dotenv = require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const userRoute = require('./routes/userRoute');
const quizRoute = require('./routes/quizRoute');
const errorHandler = require('./middleware/errorMiddleware');
// const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);
// const axios = require("axios");

const app = express();

// MiddleWares
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: ['http://localhost:3000', 'https://shopitoapp.vercel.app'],
    credentials: true,
  })
);

// Routes
app.use('/api/users', userRoute);
app.use('/api/quiz', quizRoute);

app.get('/', (req, res) => {
  res.send('Home Page...');
});

// Error Middleware
app.use(errorHandler);
const PORT = process.env.PORT || 5000;
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => console.log(err));
