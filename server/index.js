const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables from config.env
dotenv.config({ path: './config.env' });

// Express
const app = express();
app.use(express.json({ limit: '10mb' }));

// Routes
const userRoutes = require('./routes/PatientRoute.js');
const doctorRoutes = require('./routes/doctorRoute.js');

// Cors
app.use(cors());

// Connection to MongoDB
require('./db/connection.js');

// Load Routes
app.use('/api/user', userRoutes);
app.use('/api/doctor', doctorRoutes);

// For Server Port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running at port http://localhost:${PORT}`);
});

// For Testing
app.post('/createblog', (req, res) => {
  res.send('API is working');
});

app.get('/', (req, res) => {
  res.send('API is working');
});

