const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const profileRoutes = require('./routes/profile.routes');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(profileRoutes);
// app.use('/api', orderRoutes);

app.use((error, req, res, next) => {
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;

  console.log(message);
  res.status(200).json({
    statusCode: status,
    message: message,
    data: data,
  });
});

app.listen(process.env.PORT || 5000);
