
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();


dotenv.config();

// Middleware
app.use(express.json());


// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("✅ Connected to MongoDB"))
    .catch(err => console.error("❌ MongoDB connection error:", err));

// Sample route
app.get('/', (req, res) => {
    res.send("Job Portal API is running");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
