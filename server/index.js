// server.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const taskRoutes = require('./routes/taskRoutes');
const authRoutes = require('./routes/authRoutes');
const app = express();

dotenv.config();

app.use(cors());
app.use(express.json());

app.use('/tasks', taskRoutes); // Mount task routes here
app.use('/auth', authRoutes);  // Mount authentication routes here

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
