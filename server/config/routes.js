// var mongoose = require('mongoose');
var users = require('../controllers/users.js');
var products = require('../controllers/products.js');
var contacts = require('../controllers/contacts.js');
var business_posts = require('../controllers/business_posts.js');
var places_posts = require('../controllers/places_posts.js');
var schools = require('../controllers/schools.js');
var eventts = require('../controllers/eventts.js');
module.exports = function(app) {

	app

//User
	// Index
	.get('/users', function(request, response) {users.index(request, response) })
	// New
	.get('/users/new', function(request, response) {users.create(request, response) })
	// Show
	.get('/users/:id', function(request, response) {users.show(request, response) })
	// Edit
	.get('/users/:id/edit', function(request, response) {users.edit(request, response) })
	// Create
	.post('/users', function(request, response) {users.create(request, response) })
	// Destroy
	.delete('/users/:id', function(request, response) {users.destroy(request, response) })
	// Update
	.patch('/users/:id', function(request, response) {users.update(request, response) })
//Product
	// Index
	.get('/products', function(request, response) {products.index(request, response) })
	// New
	.get('/products/new', function(request, response) {products.create(request, response) })
	// Show
	.get('/products/:id', function(request, response) {products.show(request, response) })
	// Edit
	.get('/products/:id/edit', function(request, response) {products.edit(request, response) })
	// Create
	.post('/products', function(request, response) {products.create(request, response) })
	// Destroy
	.delete('/products/:id', function(request, response) {products.destroy(request, response) })
	// Update
	.patch('/products/:id', function(request, response) {products.update(request, response) })
//School
	// Index
	.get('/schools', function(request, response) {schools.index(request, response) })
	// New
	.get('/schools/new', function(request, response) {schools.create(request, response) })
	// Show
	.get('/schools/:id', function(request, response) {schools.show(request, response) })
	// Edit
	.get('/schools/:id/edit', function(request, response) {schools.edit(request, response) })
	// Create
	.post('/schools', function(request, response) {schools.create(request, response) })
	// Destroy
	.delete('/schools/:id', function(request, response) {schools.destroy(request, response) })
	// Update
	.patch('/schools/:id', function(request, response) {schools.update(request, response) })
//Eventt
	// Index
	.get('/eventts', function(request, response) {eventts.index(request, response) })
	// New
	.get('/eventts/new', function(request, response) {eventts.create(request, response) })
	// Show
	.get('/eventts/:id', function(request, response) {eventts.show(request, response) })
	// Edit
	.get('/eventts/:id/edit', function(request, response) {eventts.edit(request, response) })
	// Create
	.post('/eventts', function(request, response) {eventts.create(request, response) })
	// Destroy
	.delete('/eventts/:id', function(request, response) {eventts.destroy(request, response) })
	// Update
	.patch('/eventts/:id', function(request, response) {eventts.update(request, response) })
//Business_Post
	// Index
	.get('/business_posts', function(request, response) {business_posts.index(request, response) })
	// New
	.get('/business_posts/new', function(request, response) {business_posts.create(request, response) })
	// Show
	.get('/business_posts/:id', function(request, response) {business_posts.show(request, response) })
	// Edit
	.get('/business_posts/:id/edit', function(request, response) {business_posts.edit(request, response) })
	// Create
	.post('/business_posts', function(request, response) {business_posts.create(request, response) })
	// Destroy
	.delete('/business_posts/:id', function(request, response) {business_posts.destroy(request, response) })
	// Update
	.patch('/business_posts/:id', function(request, response) {business_posts.update(request, response) })
//Places_posts
	// Index
	.get('/places_posts', function(request, response) {places_posts.index(request, response) })
	// New
	.get('/places_posts/new', function(request, response) {places_posts.create(request, response) })
	// Show
	.get('/places_posts/:id', function(request, response) {places_posts.show(request, response) })
	// Edit
	.get('/places_posts/:id/edit', function(request, response) {places_posts.edit(request, response) })
	// Create
	.post('/places_posts', function(request, response) {places_posts.create(request, response) })
	// Destroy
	.delete('/places_posts/:id', function(request, response) {places_posts.destroy(request, response) })
	// Update
	.patch('/places_posts/:id', function(request, response) {places_posts.update(request, response) })
//Contact
	// Index
	.get('/contacts', function(request, response) {contacts.index(request, response) })
	// New
	.get('/contacts/new', function(request, response) {contacts.create(request, response) })
	// Show
	.get('/contacts/:id', function(request, response) {contacts.show(request, response) })
	// Edit
	.get('/contacts/:id/edit', function(request, response) {contacts.edit(request, response) })
	// Create
	.post('/contacts', function(request, response) {contacts.create(request, response) })
	// Destroy
	.delete('/contacts/:id', function(request, response) {contacts.destroy(request, response) })
	// Update
	.patch('/contacts/:id', function(request, response) {contacts.update(request, response) })
//Order
	// Index
	.get('/orders', function(request, response) {orders.index(request, response) })
	// New
	// .get('/orders/new', function(request, response) {orders.create(request, response) })
	// // Show
	// .get('/orders/:id', function(request, response) {orders.show(request, response) })
	// // Edit
	// .get('/orders/:id/edit', function(request, response) {orders.edit(request, response) })
	// Create
	.post('/orders', function(request, response) {orders.create(request, response) })
	// Destroy
	.delete('/orders/:id', function(request, response) {orders.destroy(request, response) })
	// Update
	.patch('/orders/:id', function(request, response) {orders.update(request, response) })
}
