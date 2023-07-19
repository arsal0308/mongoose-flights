const Flight = require("../models/flight");
const Ticket = require("../models/ticket.js");

module.exports = {
  new: newFlight,
  index,
  create,
  delete: deleteFlight,
  show,
};

function deleteFlight(req, res) {
  Flight.deleteOne(req.params.id);
  res.redirect("/flights");
}

async function index(req, res) {
  res.render("flights/index", {
    flights: await Flight.find(),
    title: "All Flights",
  });
}
async function show(req, res) {
  try {
    const flight = await Flight.findById(req.params.id).populate(
      "ticket"
    );
    if (flight) {
    const tickets = await Ticket.find({ _id: { $nin: flight.ticket } }).sort(
      "name"
    );
    console.log(tickets);
    res.render("flights/show", { title: "Flight Detail", flight, tickets });
    }
  } catch (err) {
    console.log(err);
  }
}
function newFlight(req, res) {
  res.render("flights/new", {
    title: "Add Flight",
    errorMsg: "",
  });
}

async function create(req, res) {
  try {
    const flight = await Flight.create(req.body);
    res.redirect(`/flights/${flight._id}`);
  } catch (err) {
    console.log(err);
    res.render("flights/new", { errorMsg: err.message });
  }
}
