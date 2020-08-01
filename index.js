/*
Desafio.....
Vamos a crear una calculadora usando Javascript. Debemos pedirle al usuario que ingrese 2 números para operar y finalmente el tipo de operacion a realizar (+,-,*,/)
1 - Pedirle al usuario que ingrese numero A y numero B, luego la operacion y finalmente mostrarle el resultado en pantalla.
2 - Al finalizar la operación, preguntarle si desea continuar o finalizar. Si continua, volver a las instrucciones del punto 1.
3 - Validar que los datos ingresados sean numéricos o alguna de las 4 operaciones.
Mostrar resultados con decimales. Funciones que se pueden usar: parseFloat(), isNaN()
*/


/*
    1- como se pide dato a un usuario? ==> prompt("Ingresa dato");
        como se guarda el dato ingresado? ==> let dato = ...
        como se opera? ==> + (suma) - (resta) / (Division) * (Multiplicacion)
        como se muestra algo al usuario? ==> console.log("mensaje");

        Un detalle importante es que hay que hacer estas preguntas: 
         "si puso + entonces sumo"
         "si puso - entonces resto"


            Esto se hace (si o si) con un par de IF
            
*/



/* 
    Vamos a crear un programa que "depure" datos de entrada: 


    1- Solicitar al usuario que ingrese 10 valores (bucle) y guardarlos en un arreglo. Al finalizar, Mostrar el arreglo.
    2- Recorrer el arreglo (bucle) y crear (push) dos con el siguiente criterio:
        * Un arreglo que contenga los numeros
        * Un arreglo que contenga los textos
    
        Al finalizar, mostrar los 3 arreglos

    3 (extra) - Si no ingresa valor, GUARDAR el dato en el origen pero no colocarlo ni en el arreglo de textos ni en el arreglo de los numeros
    
    Como herramientas pueden utilizar las siguientes:
    isNaN , parseInt , push , arr.length y prompt
*/





//Init variables
let contador = 0;
let arrOrigen = [];
let arrTextos=[];
let arrNumeros=[];


//Ingreso datos
while(contador <10){
    let ingreso=prompt("Ingrese Dato");
    arrOrigen.push(ingreso);
    contador= contador +1;
}


//Recorro datos ingresados
for (let index = 0; index < arrOrigen.length; index++) {
    //Creo variable interna para no repetir "arrOrigen[index]"
    let item = arrOrigen[index];
    
    //isNaN ==> Significa que "No es Un Numero" ==> Entonces es texto
    if(isNaN(parseInt(item))){
        //SI Y SOLO SI es TEXTO "" ==> Es texto ""
       if(item!=="") arrTextos.push(item);
    }else{
        //Numero
        arrNumeros.push(item);
    }
}
/*
for (let index = 0; index < arrOrigen.length; index++) {
    if(isNaN(parseInt(arrOrigen[index]))){
       if(arrOrigen[index]!=="") arrTextos.push(arrOrigen[index]);
    }else{
        arrNumeros.push(arrOrigen[index]);
    }
}
*/

//Imprimo los arreglos}
console.log("Arr Original: " + arrOrigen);
console.log("Arr Textos: " + arrTextos);
console.log("Arr Numeros: "+ arrNumeros);




