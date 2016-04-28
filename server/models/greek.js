var mongoose = require('mongoose');

var GreekSchema = new mongoose.Schema({
	user_name: { type: String, trim: true },
	title: { type: String, trim: true },
	message: { type: String, trim: true },
	created_at: { type: Date, default: Date.now },
	updated_at: { type: Date, default: Date.now }
});

var Greek = mongoose.model('Greek', GreekSchema);
GreekSchema.path('user_name').required(true, "User Name is required");
GreekSchema.path('title').required(true, "Headline is required");
GreekSchema.path('message').required(true, "Content is required");

