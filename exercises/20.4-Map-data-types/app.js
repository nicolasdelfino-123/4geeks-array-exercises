/*Instrucciones:
Modifica la función de array.map() para que cree un nuevo arreglo que contenga los tipos de datos de cada elemento del arreglo dado.
Pista:
Usa la función typeof para obtener el tipo de dato. */

let mixedDataTypes = ['1', '5', '45', '34', '343', '34', 6556, 323];

let newArray = mixedDataTypes.map(function(item) {
	// Your code here
	item = typeof item
	return item
});

console.log(newArray);
