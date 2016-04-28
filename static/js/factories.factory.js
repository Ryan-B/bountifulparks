app.factory('ProductsFactory', function($http){
	return {
		getProducts: function(callback){
			console.log("ProductsFactory getProducts");
			$http.get('/products').success(function(response){
				callback(response);
			})
		},
		addProduct: function(newProduct, callback){
			console.log("ProductsFactory addProduct");
			$http.post('/products', newProduct).success(function(response){
				callback();
			})
		},
		removeProduct: function(product, callback){
			console.log("ProductsFactory RemoveProduct", product);
			$http.delete('/products/'+product._id).success(function(response){
				callback();
			})
		}
	}
})

app.factory('UsersFactory', function($http){
	return {
		getUsers: function(callback){
			console.log("UsersFactory getUsers");
			$http.get('/users').success(function(response){
				callback(response);
			})
		},
		addUser: function(newUser, callback){
			console.log("UsersFactory addUser");
			$http.post('/users', newUser).success(function(response){
				callback();
			})
		},
		removeUser: function(user, callback){
			console.log("UsersFactory RemoveUser", user);
			$http.delete('/users/'+user._id).success(function(response){
				callback();
			})
		}
	}
})

app.factory('ContactsFactory', function($http){
	return {
		getContacts: function(callback){
			console.log("ContactsFactory getContacts");
			$http.get('/contacts').success(function(response){
				callback(response);
			})
		},
		addContact: function(newContact, callback){
			console.log("ContactsFactory addContact");
			$http.post('/contacts', newContact).success(function(response){
				callback();
			})
		},
		removeContact: function(contact, callback){
			console.log("ContactsFactory RemoveContact", contact);
			$http.delete('/contacts/'+contact._id).success(function(response){
				callback();
			})
		}
	}
})

app.factory('Business_PostsFactory', function($http){
	return {
		getBusiness_Posts: function(callback){
			console.log("Business_PostsFactory getBusiness_Posts");
			$http.get('/business_posts').success(function(response){
				callback(response);
			})
		},
		addBusiness_Post: function(newBusiness_Post, callback){
			console.log("Business_PostsFactory addBusiness_Post");
			$http.post('/business_posts', newBusiness_Post).success(function(response){
				callback();
			})
		},
		removeBusiness_Post: function(business_post, callback){
			console.log("Business_PostsFactory RemoveBusiness_Post", business_post);
			$http.delete('/business_posts/'+business_post._id).success(function(response){
				callback();
			})
		}
	}
})
app.factory('Places_PostsFactory', function($http){
	return {
		getPlaces_Posts: function(callback){
			console.log("Places_PostsFactory getPlaces_Posts");
			$http.get('/places_posts').success(function(response){
				callback(response);
			})
		},
		addPlaces_Post: function(newPlaces_Post, callback){
			console.log("Places_PostsFactory addPlaces_Post");
			$http.post('/places_posts', newPlaces_Post).success(function(response){
				callback();
			})
		},
		removePlaces_Post: function(place_post, callback){
			console.log("Places_PostsFactory RemovePlaces_Post", place_post);
			$http.delete('/places_posts/'+place_post._id).success(function(response){
				callback();
			})
		}
	}
})

app.factory('SchoolsFactory', function($http){
	return {
		getSchools: function(callback){
			console.log("SchoolsFactory getSchools");
			$http.get('/schools').success(function(response){
				callback(response);
			})
		},
		addSchool: function(newSchool, callback){
			console.log("SchoolsFactory addSchool");
			$http.post('/schools', newSchool).success(function(response){
				callback();
			})
		},
		removeSchool: function(school, callback){
			console.log("SchoolsFactory RemoveSchool", school);
			$http.delete('/schools/'+school._id).success(function(response){
				callback();
			})
		}
	}
})

app.factory('EventtsFactory', function($http){
	return {
		getEventts: function(callback){
			console.log("EventtsFactory getEventts");
			$http.get('/eventts').success(function(response){
				callback(response);
			})
		},
		addEventt: function(newEventt, callback){
			console.log("EventtsFactory addEventt");
			$http.post('/eventts', newEventt).success(function(response){
				callback();
			})
		},
		removeEventt: function(eventt, callback){
			console.log("EventtsFactory RemoveEventt", eventt);
			$http.delete('/eventts/'+eventt._id).success(function(response){
				callback();
			})
		}
	}
})

app.factory('GreeksFactory', function($http){
	return {
		getGreeks: function(callback){
			console.log("GreeksFactory getGreeks");
			$http.get('/greeks').success(function(response){
				callback(response);
			})
		},
		addGreek: function(newGreek, callback){
			console.log("GreeksFactory addGreek");
			$http.post('/greeks', newGreek).success(function(response){
				callback();
			})
		},
		removeGreek: function(greek, callback){
			console.log("GreeksFactory RemoveGreek", greek);
			$http.delete('/greeks/'+greek._id).success(function(response){
				callback();
			})
		}
	}
})
