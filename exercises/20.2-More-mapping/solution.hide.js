let myNumbers = [23,234,345,4356234,243,43,56,2];

// Your code here
function myFunction(number) {
    return number * 3
}

let newArray = myNumbers.map(myFunction)
console.log(newArray);

//map agarra el 1er numero y lo manda a myFunction como "number"