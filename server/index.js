const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

// Load environment variables from config.env
dotenv.config({ path: './config.env' });

// Express
const app = express();
app.use(express.json({ limit: '10mb' }));

// Routes
const userRoutes = require('./routes/PatientRoute.js');
const doctorRoutes = require('./routes/doctorRoute.js');
const ecgRoutes = require('./routes/ecgRoutes.js');

// Cors
app.use(cors());

// Connection to MongoDB
require('./db/connection.js');

// --- ADDED: Serve Static Files ---
// This middleware makes the 'uploads' directory publicly accessible.
// Now, files in 'uploads/ecgs' can be accessed via URLs
// like: http://localhost:5000/uploads/ecgs/your-file-name.png
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Load Routes
app.use('/api/user', userRoutes);
app.use('/api/doctor', doctorRoutes);
app.use('/api/ecg', ecgRoutes);

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

