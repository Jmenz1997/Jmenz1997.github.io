// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 
 
var products = [
	
	{
		name: "Beurre",
		vegetarian:false,
		glutenFree:false,
		no_nuts:true,
		price: 2.00
	},
	{
		name: "Lait",
		vegetarian:false,
		glutenFree: false,
		no_nuts:true,
		price: 2.00
	},
	{
		name: "Tomate",
		vegetarian:false,
		glutenFree: true,
		no_nuts:true,
		price: 2.00
	},
	
	{
		name: "Noix",
		vegetarian:true,
		glutenFree: true,
		no_nuts:false,
		price: 2.20
	},
	{
		name: "Pain",
		vegetarian: true,
		glutenFree: true,
		no_nuts: true,
		price: 2.35
	},
	{
		name: "Yaourt",
		vegetarian:false,
		glutenFree: false,
		no_nuts:true,
		price: 4.00
	},
	{
		name: "Brocoli Bio",
		vegetarian: true,
		glutenFree: false,
		no_nuts:false,
		price: 6.00
	},
	
	
	{
		name: "Beurre de cacahuète Bio",
		vegetarian: true,
		glutenFree: false,
		no_nuts: false,
		price: 6.00
	},
	
	{
		name: "Fromage",
		vegetarian: false,
		glutenFree: false,
		no_nuts:true,
		price: 7.00
	},
	{
		name: "Yaourt Bio",
		vegetarian:true,
		glutenFree: false,
		no_nuts:false,
		price: 8.00
	},
	{
		name: "Viande",
		vegetarian:false,
		glutenFree: true,
		no_nuts:true,
		price: 10.00
	},
	{
		name: "Fromage Bio",
		vegetarian: true,
		glutenFree: false,
		no_nuts:false,
		price: 14.00
	},
	{
		name: "Saumon",
		vegetarian: false,
		glutenFree: true,
		no_nuts: true,
		price: 15.00
	},


];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "Vegetarian")&& (prods[i].vegetarian == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "LactoseFree") && (prods[i].glutenFree == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "noix")&& (prods[i].no_nuts == true)){
			product_names.push(prods[i].name);
		}
		
		else if ((restriction == "None")){
			product_names.push(prods[i].name);
		}
	}
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}