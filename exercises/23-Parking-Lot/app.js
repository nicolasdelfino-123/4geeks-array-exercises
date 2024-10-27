/*Instrucciones:
Crea una función getParkingLotState() que devuelva un objeto con totalSlots (cantidad 
total de puestos), availableSlots 2 (puestos disponibles) y occupiedSlots 1(puestos ocupados) 
de esta forma: 
USAR BUCLE ANIDADO*/

let parkingState = [
  [1, 0, 1, 1],
  [0, 0, 0, 2],
  [1, 1, 2, 1],
  [2, 1, 1, 1]
]

// Your code here
function getParkingLotState(array){
  let resultado = {
    ocupado: 0,
    disponible: 0,
    total: 0
  }
    for(let i = 0; i < array.length;i++){
      for(let x = 0; x < array[i].length;x++){
        if(array[i][x] === 2){
          resultado.disponible += 1
          resultado.total += 1
        }
        else if( array[i][x] === 1){
          resultado.ocupado += 1
          resultado.total += 1
        }
      }
    }
    return resultado

}
console.log(getParkingLotState(parkingState));