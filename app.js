require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const postsRouter = require('./routes/posts');
const cors = require('cors');
const connectDB = require('./utils/dbConnect');

// Connect to database
connectDB();

// Middleware to allow cross-origin requests
app.use(cors());


// Middleware for parsing request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/api', postsRouter);


// Middleware for error handling
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({ error: err });
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


