const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ticketSchema = new Schema({
    seat: {
     type: String, match: /[A-F][1-9]\d?/,
     required: true,
    },
    price: {
     type: Number,
     min: 0
    }, 
    flightNo: {
     type: Number
    }
}, {
  timestamps: true
});

module.exports = mongoose.model('Ticket', ticketSchema);