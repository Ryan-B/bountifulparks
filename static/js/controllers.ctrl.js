app.controller('MainController', function(){
	console.log("MainController");
})

app.controller('MapsController', function(){
	console.log("MapsController loaded");

})

app.controller('HomeController', function($interval, $scope) {

	console.log("HomeController Loaded")

		var dimages= [];
		var numImages=13;

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
		}.bind(this), 5000);

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