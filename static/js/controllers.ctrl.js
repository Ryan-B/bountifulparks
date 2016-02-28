app.controller('MainController', function(){
	console.log("MainController");
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