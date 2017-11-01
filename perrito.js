class perrito{
	constructor(){

	this.colita = 1;
	this.patas =4;
	this.ojos=2;
	this.nombre= "";
	}
	caminar(){
		console.log(`camino con mis ${this.patas} patas`);
	}
	ladrar(){
		console.log(`hola soy ${this.nombre} guau`)
	}

}

var bobby = new perrito();
bobby.nombre = "bobby";
bobby.ladrar(); //hola soy bobby

var lazy = new perrito();
lazy.nombre = "lazy";
lazy.caminar(); //hola soy lazy

$.fn.red = function{ //fn es metodo que permite crear un plugin
	$(this).each(function(){
		$(this).css('border', 'red solid 1px');
	});


}
