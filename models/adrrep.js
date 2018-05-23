const mongoose = require('mongoose');

//ADR Schema
const adrSchema = mongoose.Schema({
	Title :{
		type: String,
		required: true
	},
	Author :{
		type: String,
		required: true
	},
	Description :{
		type: String
	},
	Status :{
		type: String,
		required: true
	},
	Context :{
		type: String
	},
	create_date:{
		type: Date,
		default: Date.now
	},
	update_date:{
		type: Date,
		default: Date.now
	}
});

const Adr = module.exports = mongoose.model('adr', adrSchema);

// Get ADR
module.exports.getadr = (callback, limit) => {
	Adr.find(callback).limit(limit);
}

// Get ADR
module.exports.getadrById = (id, callback) => {
	Adr.findById(id, callback);
}

// Add Book
module.exports.addadr = (adr, callback) => {
	Adr.create(adr, callback);
}

// Update Book
module.exports.updateadr = (id, adr, options, callback) => {
	var query = {_id: id};
	var update = {
		Title : adr.Title ,
		Author : adr.Author ,
		Description  : adr.Description  ,
		Status : adr.Status ,
		Context : adr.Context,
		create_date: adr.create_date
	}
	Adr.findOneAndUpdate(query, update, options, callback);
}

// Delete Book
module.exports.removeadr = (id, callback) => {
	var query = {_id: id};
	Adr.remove(query, callback);
}
