let mix = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];

// Your code here
let newArr = [];

for (let i = 0; i < mix.length; i++){
    let item = mix[i]
    newArr.push(typeof(item));  
}
console.log(newArr)