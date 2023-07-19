const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
  airport: {
    type: String,
  },
  arrival: {
  type: Date,
  }
}, {
  timestamps: true
});

const flightSchema = new mongoose.Schema({
    airline: String,
    airport: String,
    flightNo: Number,
    departs: Date, 
    destinations: [destinationSchema],
    ticket: [{
      type: Schema.Types.ObjectId,
      ref: 'Ticket'
    }],
}, {
    timestamps: true
  });

//   function deleteOne(id) {
//     // All properties attached to req.params are strings!
//     id = parseInt(id);
//     // Find the index based on the id of the todo object
//     const idx = flights.findIndex(flight => flight.id === id);
//     flights.splice(idx, 1);
//   }
  module.exports = mongoose.model('Flight', flightSchema)