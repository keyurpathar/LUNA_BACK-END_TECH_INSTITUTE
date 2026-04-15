const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({

    number: {
        type: Number,
        required: true
    }
    
}, { timestamps: true })

const contactModel = mongoose.model('contact', contactSchema);

module.exports = contactModel

