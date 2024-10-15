let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"
let counts = {};

// Your code here

// Recorrer todo el string
for (let i = 0; i < par.length; i++) {
    // Obtener el carácter actual en minúscula
    let char = par[i].toLowerCase();
    
    // Verifica que el carácter no sea un espacio y sea una letra
    if (char !== ' ' && /[a-z]/.test(char)) {
        if (char in counts) {
            counts[char]++; // Incrementa el conteo si ya existe
        } else {
            counts[char] = 1; // Inicializa el conteo si no existe
        }
    }
    }

console.log(counts); // Imprime el conteo de letras


