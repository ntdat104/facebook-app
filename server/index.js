require('dotenv').config();

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');

const routes = require('./src/routes');

const app = express();

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URL;

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

// HTTP logger
app.use(morgan('dev'));

// connect to routes
routes(app);

// connect to db
mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to DB 🍕');

    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT} 🍔`);
    });
  })
  .catch((error) => {
    console.log('error', error);
  });
