/*Instrucciones:
Dados los nombres del arreglo names, crea una función que liste 
solo los nombres que contengan el string dado.

Crea una función llamada filterByName que tome dos valores, 
uno es el arreglo, y el segundo es el filtro deseado.
La búsqueda NO debe ser sensible a mayúsculas y minúsculas (case sensitive).

💻 Resultado esperado:
[ 'Liam', 'William', 'James', 'Benjamin', 'Amelia', 'Samuel', 'Camila' ] */

let names = ['Liam','Emma','Noah','Olivia','William','Ava','James','Isabella','Logan','Sophia','Benjamin','Mia','Mason','Charlotte','Elijah','Amelia','Oliver','Evelyn','Jacob','Abigail','Lucas','Harper','Michael','Emily','Alexander','Elizabeth','Ethan','Avery','Daniel','Sofia','Matthew','Ella','Aiden','Madison','Henry','Scarlett','Joseph','Victoria','Jackson','Aria','Samuel','Grace','Sebastian','Chloe','David','Camila','Carter','Penelope','Wyatt','Riley'];


// Your code here

function filterByName(array, filtro){
    let newArray = [];
    let filtroLower = filtro.toLowerCase(); 
    for(let i = 0; i < array.length;i++){
        let item = array[i].toLowerCase()
        if(item.includes(filtroLower)){
            newArray.push(array[i])
        }
        
}
        return newArray
}
console.log(filterByName(names, 'am'));

