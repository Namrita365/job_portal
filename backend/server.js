const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes'); // adjust the path if needed
const cors = require('cors');

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // to parse JSON request bodies

// Routes
app.use('/api/auth', authRoutes); // Routes now accessible via /api/auth/signup and /api/auth/login

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('MongoDB connected');
    app.listen(process.env.PORT || 5000, () => {
        console.log(`Server running on port ${process.env.PORT || 5000}`);
    });
})
.catch((err) => {
    console.error('Database connection error:', err);
});
