/*Compara el elemento. Si es 1, agrega el número en el arreglo return_array.

Compara el elemento. Si es 0, agrega el string 'Yahoo' en el arreglo return_array (en lugar del número).

Por ejemplo, la salida de [0,0,1,1,0] sería: */

let myArray = [ 1, 0, 0, 0, 1, 0, 0, 0, 1, 1 ];

const ZerosToYahoos = (arr) => {
    let return_array = [];
    arr.forEach((item) => {
            // magic goes inside these brackets
            if(item === 1){
                return return_array.push(item)
            }
            else{
                return return_array.push("Yahoo")
            }
    });
    return return_array;
};

console.log(ZerosToYahoos(myArray));
