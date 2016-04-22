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
