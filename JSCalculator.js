const screenOfCalculator = document.getElementById("js-calculator-screen");
const buttons = document.getElementById("js-calculator-keys");
var completeNumber ="";
let number1, mathSign;

// screen.textContent = "0"; // solucion de EDTEAM

const calculator = function(){
	// si buttons se vuelve null, acaba la funcion. 
   if (!buttons) return; // aqui se caputa el click
	buttons.addEventListener("click", function (event) {
		//e es la abreviatura de event object. Luego e se pasa a los manejadores de eventos. Cual evento?, en nuestro ejemplo es "click"
		// e.target o event.target es el elemento del dom donde se origino el evento. Ese elemento siempre sera el elemento más profundo en el dom, el hijo más profundo que queremos buscar del evento padre. Ejemplo, el boton donde undi, y si quiero el contenido de su html, es e.target.textContent
		// event.target.className: devuelve el class del objeto que crea el evento. 
		// Detectar si se undio un numero

		if (event.target.dataset.number) {writeOnScreen(event.target.dataset.number);}
		// detectar si se undio una operacion.
		// Ojo aca debe enviar 2 elementos. El elemento donde pulsamos el boton operador y saber cual boton pulso.
		if (event.target.dataset.math) {saveOperator(event.target,event.target.dataset.math);}
		// detectar si se undio tecla de resultado o borrar
		if (event.target.dataset.operation){executeCalculator(event.target.dataset.operation);}
		// con dataset, se leen los atributos data-* del HTML
		})
}

// Esta funcion obviamente necesita el numero pulsado. que sale del If de .number, de otro lugar no sale. Y mostrarlo, obviamente en el textContent del screen.
// textContent es una propiedad, de etiquetas HTML (contenedores como div o p) que se abre, que es el espacio donde va el texto escrito.

 const writeOnScreen = function(number){
 	 
 	 if (!screenOfCalculator.textContent.includes(".")){
 	 completeNumber = completeNumber + number;
	 screenOfCalculator.textContent = completeNumber;
	} else if(screenOfCalculator.textContent.includes(".") && number != "."){
		completeNumber = completeNumber + number;
		screenOfCalculator.textContent = completeNumber;
		} else { null}
}

const saveOperator = function(symbol, mathOperator){
	// aqui me toco quitar la declaracion de aca, porque el valor no me llegaba hasta la funcion que yo queria.

	if(!screenOfCalculator.textContent.includes("+") && !screenOfCalculator.textContent.includes("-") && !screenOfCalculator.textContent.includes("*") && !screenOfCalculator.textContent.includes("/")){
	number1 = Number(screenOfCalculator.textContent);
	}else{null}
	//console.log(number1);
	mathSign = mathOperator;
	screenOfCalculator.textContent = symbol.textContent;
	completeNumber ="";
	
	// console.log(number1,mathSign,completeNumber); 
}

// Si en esta funcion, llego a declarar, las variables number 1 y mathSign. El programa va a creer que esta es otra declaracion de esas variables, y no servira.
const executeCalculator = function(finalOperator){
	
	const result = function (number1, mathSign){
	// en el momento que preciono igual, capturo el numbero 2
	const number2 = Number(screenOfCalculator.textContent);
	// console.log(number1,number2,mathSign); // importante, para descubrir si tus variables llegan a la funcion con valor
	if (mathSign == "add" ) {
		screenOfCalculator.textContent = number1 + number2;
		//return screenOfCalculator.textContent;
	} else if (mathSign == "minus" ) {
		screenOfCalculator.textContent = number1 - number2;		
	} else if (mathSign == "multiply" ){
		screenOfCalculator.textContent = number1 * number2;
	} else {
		if (number2 != 0){
		screenOfCalculator.textContent = number1 / number2;
		}else {
			screenOfCalculator.textContent = alert("La division entre 0 es muy jodida"); // aca la podemos hacer mejor y diferencia entre Division entre 0 y que ambos numeros sean 0. Pero para que alargar la pita.
		}
	}
	completeNumber ="";
	}

	if (finalOperator ==="clear"){
		screenOfCalculator.textContent = "0";
		completeNumber="";
		//number1="0";

		//console.log(completeNumber); 
				
	}else { result (number1,mathSign); }

}


calculator();


/*
________________________________________________________________

Otra forma de escribir funciones 

var calculator = () =>{
	// si buttons se vuelve null, acaba la funcion. 
	buttons.addEventListener("click", e=> {
		var t = e.target;
		var d = t.dataset;
		// Detectar si se undio un numero
		if (d.number) console.log("number")
		// detectar si se undio una operacion
		if (d.math) console.log("math")
		// detectar si se undio tecla de resultado o borrar
		if (d.operation) console.log("operation")
		// con dataset, se agarran los atributos data del HTML
		 
	})

}
________________________________________________________










*/



