//Instrucciones:
//Recorre el arreglo (con un bucle) imprimiendo solo las longitudes.
let coordinatesArray = [[33.747252, -112.633853], [-33.867886, -63.987], [41.303921, -81.901693], [-33.350534, -71.653268]];

// Your code here

for (let index in coordinatesArray){
    let longitudes = coordinatesArray[index][1]
    console.log(longitudes)
}
