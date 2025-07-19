const mongoose = require('mongoose');
const bcrypt = require('bcryptjs'); // 🔐 Add this

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true, // no duplicate emails
    },
    password: {
        type: String,
        required: true,
    },
});

// 🔐 Hash the password before saving
userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) {
        return next();
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

module.exports = mongoose.model('User', userSchema);
