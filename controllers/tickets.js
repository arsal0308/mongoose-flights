const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
  new: newTicket,
  create,
  addToTicket
};

async function newTicket(req, res) {
  const tickets = await Ticket.find({});
  res.render('tickets/new', { title: 'Add Ticket', tickets });
}

async function create(req, res) {
  try {
    const newTicket = await Ticket.create(req.body);
    console.log("Look here", newTicket)
;  } catch (err) {
    console.log(err);
  }
    res.redirect("/flights");}

async function addToTicket(req, res) {
  const flight = await Flight.findById(req.params.id);
  flight.ticket.push(req.body.ticketId);
  await flight.save();
  res.redirect(`/flights/${flight._id}`)
}