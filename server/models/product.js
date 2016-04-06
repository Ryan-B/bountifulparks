var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
	first_name: { type: String, trim: true },
	last_name: { type: String, trim: true },
	email: { type: String, trim: true },
	created_at: { type: Date, default: Date.now },
	updated_at: { type: Date, default: Date.now }
});

var Product = mongoose.model('Product', ProductSchema);
ProductSchema.path('first_name').required(true, "First Name is required");
ProductSchema.path('last_name').required(true, "Last Name is required");
ProductSchema.path('email').required(true, "Email is required");