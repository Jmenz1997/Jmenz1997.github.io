// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 
 
var products = [
	
	{
		name: "Beurre  2.00 $",
		vegetarian:false,
		glutenFree:false,
		no_nuts:true,
		price: 2.00
	},
	{
		name: "Lait  2.00 $",
		vegetarian:false,
		glutenFree: false,
		no_nuts:true,
		price: 2.00
	},
	{
		name: "Tomate 2.00 $",
		vegetarian:false,
		glutenFree: true,
		no_nuts:true,
		nutAndGlu:true,
		price: 2.00
	},
	
	{
		name: "Noix 2.20 $",
		vegetarian:false,
		glutenFree: true,
		no_nuts:false,
		price: 2.20
	},
	{
		name: "Pain 2.35 $",
		vegetarian: true,
		glutenFree: true,
		no_nuts: true,
		all:true,
		nutAndGlu:true,
		price: 2.35
	},
	{
		name: "Yaourt 4.00 $",
		vegetarian:false,
		glutenFree: false,
		no_nuts:true,
		price: 4.00
	},
	{
		name: "Brocoli Bio 6.00 $",
		vegetarian: true,
		glutenFree: false,
		no_nuts:false,
		all:true,
		vegAndGlu:true,
		price: 6.00
	},
	
	
	{
		name: "Beurre d'amande bio 6.00 $",
		vegetarian: true,
		glutenFree: false,
		no_nuts: false,
		vegAndGlu:true,
		price: 6.00
	},
	
	{
		name: "Fromage 7.00 $",
		vegetarian: false,
		glutenFree: false,
		no_nuts:true,
		price: 7.00
	},
	{
		name: "Yaourt Bio 8.00 $",
		vegetarian:true,
		glutenFree: false,
		no_nuts:false,
		vegAndNut:true,
		price: 8.00
	},
	{
		name: "Viande 10.00 $",
		vegetarian:false,
		glutenFree: true,
		no_nuts:true,
		nutAndGlu:true,

		price: 10.00
	},
	{
		name: "Fromage Bio 14.00 $",
		vegetarian: true,
		glutenFree: false,
		no_nuts:false,
		vegAndNut:true,
		price: 14.00
	},
	{
		name: "Saumon 13.00$",
		vegetarian: false,
		glutenFree: true,
		no_nuts: true,
		nutAndGlu:true,
		price: 13.00
	},


];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	var checkBox1 = document.getElementById("lactoseF");
	var checkBox2 = document.getElementById("nutsF");
	var checkBox3 = document.getElementById("organique");
	var checkBox4 = document.getElementById("none");



	for (let i=0; i<prods.length; i+=1) {
		/*if ((document.querySelector(".organiqueCB").checked)&&(document.querySelector(".pasDeNoix").checked) && (document.querySelector(".lactoseFreeCB").checked)&& (prods[i].all == true)){
			product_names.push(prods[i].name);

		}*/
		if (checkBox1.checked==true && checkBox2.checked==true && checkBox3.checked==true && prods[i].all==true){
			product_names.push(prods[i].name);
		}
		else if(checkBox3.checked==true &&checkBox2.checked==true && prods[i].vegAndNut==true){
			product_names.push(prods[i].name);
		}
		else if (checkBox3.checked==true && checkBox1.checked==true && prods[i].vegAndGlu==true){
			product_names.push(prods[i].name);
		}

		else if (checkBox1.checked==true && checkBox2.checked==true && prods[i].nutAndGlu==true){
			product_names.push(prods[i].name);
		}
		else if(checkBox1.checked==true && checkBox2.checked==false && checkBox3.checked==false &&  prods[i].glutenFree==true ){
			product_names.push(prods[i].name);
		}
		else if(checkBox2.checked==true && checkBox1.checked==false && checkBox3.checked==false && prods[i].no_nuts==true){
			product_names.push(prods[i].name);

		}
		else if (checkBox3.checked==true && checkBox1.checked==false&&checkBox2.checked==false && prods[i].vegetarian==true){
			product_names.push(prods[i].name);

		
		}
		else if (checkBox4.checked==true){
			
			product_names.push(prods[i].name);
			
			
		}
		/*if (checkBox1.checked==false && checkBox2.checked==false && checkBox3.checked==false && (prods[i].vegetarian==true || prods[i].glutenFree==true || prods[i].no_nuts==true)){
			product_names.push(prods[i].name);
		}

		/*else if ((document.querySelector(".organiqueCB").checked)&& (prods[i].vegetarian == true)){

			if ((document.querySelector(".lactoseFreeCB").checked) && (prods[i].glutenFree == true)){
				product_names.push(prods[i].name);
			}
			else if ((restriction == "pasDeNoix")&& (prods[i].no_nuts == true)){
				product_names.push(prods[i].name);
			}else{
			product_names.push(prods[i].name);}
		}
		else if ((document.querySelector(".lactoseFreeCB").checked) && (prods[i].glutenFree == true)){
			if ((restriction == "pasDeNoix")&& (prods[i].no_nuts == true)){
				product_names.push(prods[i].name);
			}else{
				product_names.push(prods[i].name);
			}
			
		}
		/*else if ((restriction == "pasDeNoix")&& (prods[i].no_nuts == true)){
			product_names.push(prods[i].name);
		}
		
		else if ((restriction == "none")){
			product_names.push(prods[i].name);
		}*/
		
	}
	return product_names;
}
function checkBoxCheck(e) {
	if ($('input[name="productinfo[]"]:checked').length) {
	  console.log("at least one checked");
	  return true;
	} else {
	  console.error("no checkbox checked");
	  return false;
	}
  }
  
  $('#myForm').on('submit', checkBoxCheck);
function verify(){
	var checkBox1 = document.getElementById("lactoseF");
	var checkBox2 = document.getElementById("nutsF");
	var checkBox3 = document.getElementById("organique");
	var checkBox4 = document.getElementById("none");


	if(checkBox4.checked==true && (checkBox1.checked==true || checkBox2.checked==true || checkBox3.checked==true)){
		alert("Vous ne pouvez pas cocher 'Aucune' et une autre case, SVP réessayer");
	}else{
		alert("Votre choix est confirmé, cliquez sur 'suivant'")
	}


	
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