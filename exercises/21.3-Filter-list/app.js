/* Instrucciones:
Dados los nombres del arreglo names, crea una función que liste solo los nombres que contengan el string dado.

Crea una función llamada filterByName que tome dos valores, uno es el arreglo, y el segundo es el filtro deseado.
La búsqueda NO debe ser sensible a mayúsculas y minúsculas (case sensitive). */


let names = ['Liam','Emma','Noah','Olivia','William','Ava','James','Isabella','Logan','Sophia','Benjamin','Mia','Mason','Charlotte','Elijah','Amelia','Oliver','Evelyn','Jacob','Abigail','Lucas','Harper','Michael','Emily','Alexander','Elizabeth','Ethan','Avery','Daniel','Sofia','Matthew','Ella','Aiden','Madison','Henry','Scarlett','Joseph','Victoria','Jackson','Aria','Samuel','Grace','Sebastian','Chloe','David','Camila','Carter','Penelope','Wyatt','Riley'];

// Your code here
function filterByName(array, str){
    let filtrado = array.filter(item => item.toLowerCase().includes(str.toLowerCase()));
    return filtrado
    }


console.log(filterByName(names, 'am'));


