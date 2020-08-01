/*
    Ejercicios previos a resolver por separado para adquirir confianza con las herramientas: 

        1- Poner en Mayusculas un String
        2- Imprimir solo el primer caracter de un String
        3- Recorrer un String usando FOR. Imprimir letra a letra el texto. Recordar la propiedad "length" de los textos
        3- Convertir una frase en un Arreglo de Palabras usando split(" ")
        4- Convertir una palabra en un arreglo de letras usando split("")
        5- Convertir el arreglo ["H","o","l","a"] en un string usando join("")
        


    Ejercicio integrador: 


        6-     Vamos a hacer un programa para hacer Camel Case una FRASE y convertirla en una sola Palabra.
    Siendo el ingreso:
        "Que bonito dia"
    La salida debe ser:
        "QueBonitoDia"

    (Ojo)==> Si ingresan doble espacio en el texto ("  ") puede fallarles la logica, no se preocupen.

*/


//1
let string = "Hola";

let stringMayusculas = string.toUpperCase();


//2
let string = "Hola";

let primerLetra = string[0]

console.log(primerLetra)


//3 (a)
let string = "Hola como estas";
for (let i = 0; i < string.length; i++) {
    const letra = string[i];
    console.log(letra)
}

//3
let string = "Hola como estas";
let arrPalabras = string.split(" ")

//4
let string = "palabra";
let arrPalabras = string.split("")

//5
let arrLetras=["H","o","l","a"]
let palabra = arrLetras.join()

//6 (7)
//Inicializo una frase
let frase = "Hola  como estas";

//Para hacerlo "variable segun lo que ingrese el usuario"
// let frase = prompt("Ingrese Frase, Asi la convertimos a CamelCase");

//Separo la frase en palabras
let palabras = frase.split(" ");
//Aca van a ir las palabras Ya con Mayusculas en la Primer Letra
let palabrasMayusculas = [];

//Recorro el arreglo de palabras.
for (let i = 0; i < palabras.length; i++) {
    //Cada item, es una "palabra"
    let palabra = palabras[i];

    //Si la separacion es un espacio (" ") o de largo nulo, ignoro el caso con "continue"
    if(palabra===" " || palabra === "") continue;


    //Separo la palabra actual por letras
    let letras =palabra.split("");
    //Modifico la primer ubicacion del arreglo (Primer Letra)
    letras[0]=letras[0].toUpperCase();
    //Guardo el arreglo (joineado) en el arreglo FINAL
    palabrasMayusculas.push(letras.join("")) 

}

//Muestro el arreglo FINAL, JOINEADO
return (palabrasMayusculas.join("")






let frase = "asd";

//Para hacerlo "variable segun lo que ingrese el usuario"
// let frase = prompt("Ingrese Frase, Asi la convertimos a CamelCase");

//Separo la frase en palabras
let palabras = frase.split(" ");
//Aca van a ir las palabras Ya con Mayusculas en la Primer Letra
let palabrasMayusculas = [];

//Recorro el arreglo de palabras.
for (let i = 0; i < palabras.length; i++) {
    //Cada item, es una "palabra"
    let palabra = palabras[i];

    //Si la separacion es un espacio (" ") o de largo nulo, ignoro el caso con "continue"
    if(palabra===" " || palabra === "") continue;


    //Separo la palabra actual por letras
    let letras =palabra.split("");
    //Modifico la primer ubicacion del arreglo (Primer Letra)
    letras[0]=letras[0].toUpperCase();
    //Guardo el arreglo (joineado) en el arreglo FINAL
    palabrasMayusculas.push(letras.join("")) 

}

//Muestro el arreglo FINAL, JOINEADO
return (palabrasMayusculas.join("")
