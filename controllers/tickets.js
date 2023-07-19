const Ticket = require('../models/ticket.js');
const Flight = require('../models/flight');

module.exports = {
  new: newTicket,
  create,
  addToTicket
};

async function newTicket(req, res) {
  const performers = await Ticket.find({}).sort('name');
  res.render('tickets/new', { title: 'Add Ticket', tickets });
}

async function create(req, res) {
  
//   req.body.seat +=
  try {
    await Ticket.create(req.body);
  } catch (err) {
    console.log(err);
  }
  res.redirect('/tickets/new');
}

async function addToTicket(req, res) {
  const flight = await Flight.findById(req.params.id);
  flight.ticket.push(req.body.ticketId);
  await flight.save();
  res.redirect(`/flights/${flight._id}`)
}