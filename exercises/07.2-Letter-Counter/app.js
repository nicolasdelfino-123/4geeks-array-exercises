/*Crea un objeto donde las letras son las propiedades y los valores son el 
número de veces que esa letra se repite en toda la cadena.
Recorre todo el string (usa un bucle).
En cada iteración verifica si el objeto counts tiene la letra inicializada como una propiedad.
Si no está inicializada, hazlo y establece el valor en 1 (la primera vez que se encuentra).
Si ya se inicializó, simplemente incrementa el valor de la propiedad en uno.
Recuerda ignorar los espacios en blanco en el string.
Debes colocar en minúscula (lowercase) todas las letras para tener un conteo exacto de todas las letras.
 */

let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"
let counts = {};

// Your code here

for (let i = 0; i < par.length; i++){
    let letra = par[i];
    if (letra === " ")continue;
    else if (letra == Object.keys(counts)){
        Object.keys(counts) + 1
    }else {
        counts = Object.keys(letra) + 1  
    }
}
console.log(counts);
