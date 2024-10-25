/* Instrucciones:
Dado un objeto denominado contact:

Itera sobre todas sus propiedades 
y valores e imprímelos en la consola. Tendrás que recorrer (con un loop) sus 
propiedades para poder imprimirlas. */

let contact = {
    fullName: "Jane Doe",
    phone: "321-321-4321",
    email: "test@test.com"
}



for (let key in contact) {
    // Your code here
     console.log(key + " : " + contact[key])
}


