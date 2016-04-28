app.controller('MainController', function(){
	console.log("MainController");
})

app.controller('MapsController', function(){
	console.log("MapsController loaded");

})

app.controller('HomeController', function($interval, $scope) {

	console.log("HomeController Loaded")

		var dimages= [];
		var numImages=12;

		for (i=0; i<numImages; i++) {
		  // dimages[i]=new Image();
		  dimages.push("img/slideshow/"+(i+1)+".jpg");
		}

		var k = 0;
		this.image = dimages[k];

		var intervalId = $interval(function () {
			console.log('Switching image!');
			k++;
			if (k > numImages) {
				k = 0;
			}
			this.image = dimages[k];
		}.bind(this), 1000);

	$scope.$on('$destroy', function() {
		$interval.cancel(intervalId);
	});
	
})

app.controller('ProductsController', function(ProductsFactory){
	console.log("ProductsController Loaded");
	var _this = this;
	
	var getProducts = function(){
		console.log("ProductsController getProducts");
		
		ProductsFactory.getProducts(function(products){
			console.log(this);
			console.log(products);
			_this.products = products;
		});
	}
	this.addProduct = function(newProduct){
		console.log("Clicked", newProduct);
		if(newProduct){
			ProductsFactory.addProduct(newProduct, function(){
				getProducts();
				_this.newProduct = {};
			})
		}
	}
	getProducts();

	this.removeProduct = function(product){
		console.log("removeProduct", product);
		ProductsFactory.removeProduct(product, function(){
			getProducts();
		})
	}
	this.updateProduct = function(product){
		console.log("updateProduct", product);
		ProductsFactory.updateProduct(product, function(){
			getProducts();
		})
	}
})

app.controller('UsersController', function(UsersFactory){
	console.log("UsersController Loaded");
	var _this = this;
	
	var getUsers = function(){
		console.log("UsersController getUsers");
		
		UsersFactory.getUsers(function(users){
			console.log(this);
			console.log(users);
			_this.users = users;
		});
	}
	this.addUser = function(newUser){
		console.log("Clicked", newUser);
		if(newUser){
			UsersFactory.addUser(newUser, function(){
				getUsers();
				_this.newUser = {};
			})
		}
	}
	getUsers();

	this.removeUser = function(user){
		console.log("removeUser", user);
		UsersFactory.removeUser(user, function(){
			getUsers();
		})
	}
	this.updateUser = function(user){
		console.log("updateUser", user);
		UsersFactory.updateUser(user, function(){
			getUsers();
		})
	}
})

app.controller('ContactsController', function(ContactsFactory){
	console.log("ContactsController Loaded");
	var _this = this;
	
	var getContacts = function(){
		console.log("ContactsController getContacts");
		
		ContactsFactory.getContacts(function(contacts){
			console.log(this);
			console.log(contacts);
			_this.contacts = contacts;
		});
	}
	this.addContact = function(newContact){
		console.log("Clicked", newContact);
		if(newContact){
			ContactsFactory.addContact(newContact, function(){
				getContacts();
				_this.newContact = {};
			})
		}
	}
	getContacts();

	this.removeContact = function(contact){
		console.log("removeContact", contact);
		ContactsFactory.removeContact(contact, function(){
			getContacts();
		})
	}
	this.updateContact = function(contact){
		console.log("updateContact", contact);
		ContactsFactory.updateContact(contact, function(){
			getContacts();
		})
	}
})

app.controller('Business_PostsController', function(Business_PostsFactory){
	console.log("Business_PostsController Loaded");
	var _this = this;
	
	var getBusiness_Posts = function(){
		console.log("Business_PostsController getBusiness_Posts");
		
		Business_PostsFactory.getBusiness_Posts(function(business_posts){
			console.log(this);
			console.log(business_posts);
			_this.business_posts = business_posts;
		});
	}
	this.addBusiness_Post = function(newBusiness_Post){
		console.log("Clicked", newBusiness_Post);
		if(newBusiness_Post){
			Business_PostsFactory.addBusiness_Post(newBusiness_Post, function(){
				getBusiness_Posts();
				_this.newBusiness_Post = {};
			})
		}
	}
	getBusiness_Posts();

	this.removeBusiness_Post = function(business_post){
		console.log("removeBusiness_Post", business_post);
		Business_PostsFactory.removeBusiness_Post(business_post, function(){
			getBusiness_Posts();
		})
	}
	this.updateBusiness_Post = function(business_post){
		console.log("updateBusiness_Post", business_post);
		Business_PostsFactory.updateBusiness_Post(business_post, function(){
			getBusiness_Posts();
		})
	}
})

app.controller('Places_PostsController', function(Places_PostsFactory){
	console.log("Places_PostsController Loaded");
	var _this = this;
	
	var getPlaces_Posts = function(){
		console.log("Places_PostsController getPlaces_Posts");
		
		Places_PostsFactory.getPlaces_Posts(function(places_posts){
			console.log(this);
			console.log(places_posts);
			_this.places_posts = places_posts;
		});
	}
	this.addPlaces_Post = function(newPlaces_Post){
		console.log("Clicked", newPlaces_Post);
		if(newPlaces_Post){
			Places_PostsFactory.addPlaces_Post(newPlaces_Post, function(){
				getPlaces_Posts();
				_this.newPlaces_Post = {};
			})
		}
	}
	getPlaces_Posts();

	this.removePlaces_Post = function(places_post){
		console.log("removePlaces_Post", places_post);
		Places_PostsFactory.removePlaces_Post(places_post, function(){
			getPlaces_Posts();
		})
	}
	this.updatePlaces_Post = function(places_post){
		console.log("updatePlaces_Post", places_post);
		Places_PostsFactory.updatePlaces_Post(places_post, function(){
			getPlaces_Posts();
		})
	}
})

app.controller('SchoolsController', function(SchoolsFactory){
	console.log("SchoolsController Loaded");
	var _this = this;
	
	var getSchools = function(){
		console.log("SchoolsController getSchools");
		
		SchoolsFactory.getSchools(function(schools){
			console.log(this);
			console.log(schools);
			_this.schools = schools;
		});
	}
	this.addSchool = function(newSchool){
		console.log("Clicked", newSchool);
		if(newSchool){
			SchoolsFactory.addSchool(newSchool, function(){
				getSchools();
				_this.newSchool = {};
			})
		}
	}
	getSchools();

	this.removeSchool = function(school){
		console.log("removeSchool", school);
		SchoolsFactory.removeSchool(school, function(){
			getSchools();
		})
	}
	this.updateSchool = function(school){
		console.log("updateSchool", school);
		SchoolsFactory.updateSchool(school, function(){
			getSchools();
		})
	}
})

app.controller('EventtsController', function(EventtsFactory){
	console.log("EventtsController Loaded");
	var _this = this;
	
	var getEventts = function(){
		console.log("EventtsController getEventts");
		
		EventtsFactory.getEventts(function(eventts){
			console.log(this);
			console.log(eventts);
			_this.eventts = eventts;
		});
	}
	this.addEventt = function(newEventt){
		console.log("Clicked", newEventt);
		if(newEventt){
			EventtsFactory.addEventt(newEventt, function(){
				getEventts();
				_this.newEventt = {};
			})
		}
	}
	getEventts();

	this.removeEventt = function(eventt){
		console.log("removeEventt", eventt);
		EventtsFactory.removeEventt(eventt, function(){
			getEventts();
		})
	}
	this.updateEventt = function(eventt){
		console.log("updateEventt", eventt);
		EventtsFactory.updateEventt(eventt, function(){
			getEventts();
		})
	}
})
app.controller('GreeksController', function(GreeksFactory){
	console.log("GreeksController Loaded");
	var _this = this;
	
	var getGreeks = function(){
		console.log("GreeksController getGreeks");
		
		GreeksFactory.getGreeks(function(greeks){
			console.log(this);
			console.log(greeks);
			_this.greeks = greeks;
		});
	}
	this.addGreek = function(newGreek){
		console.log("Clicked", newGreek);
		if(newGreek){
			GreeksFactory.addGreek(newGreek, function(){
				getGreeks();
				_this.newGreek = {};
			})
		}
	}
	getGreeks();

	this.removeGreek = function(greek){
		console.log("removeGreek", greek);
		GreeksFactory.removeGreek(greek, function(){
			getGreeks();
		})
	}
	this.updateGreek = function(greek){
		console.log("updateGreek", greek);
		GreeksFactory.updateGreek(greek, function(){
			getGreeks();
		})
	}
})
