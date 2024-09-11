let numeros =[1,5,7,2];
let suma = 0;
let cant = 0;
//1
function sumaNum (array){
    array.forEach(num => {
        suma = suma + num;
    });
    return suma;
}
console.log(sumaNum(numeros));

//2
function cantElmnt(array){
    array.forEach(element => {
        cant++;
    });
    return cant;
}

function promNum (array){
    array.forEach(num => {
        suma = suma + num;
    });
    cantElmnt(array);
    return suma/cantElmnt(array);
}
console.log(promNum(numeros));
//3
let palabras = ["kek","cata","checho"]
let palabrasMay = palabras.map(function(palabra){ return palabra.toUpperCase()});
console.log(palabrasMay);

//4
let soloPares = numeros.filter(function(element){return element%2 === 0})
console.log(soloPares);