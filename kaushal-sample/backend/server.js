const express = require('express');
const authRoutes = require('./routes/auth');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');

const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

connectDB();

app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
