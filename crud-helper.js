require('dotenv').config();
require('./config/database');

const Flight = require('./models/flight');
const Ticket = require('./models/ticket');


let flights = await Flight.find({});
console.log(flights);