// 1. Crear una función que reciba tu edad y retorne tu edad en años perro. (Multiplicado por 7).

/* let edad = parseInt(prompt("Ingrese su edad"));

function aniosPerro (num1){
    return num1*7;
}

console.log(aniosPerro(edad)); 


// 2. Crear una función que reciba un nombre y devuelva un saludo.

let nombre = prompt("Ingrese su nombre");

function saludo (name){
    return ("Hola "+ name);
}

alert(saludo(nombre));  

// 3. Crear una función que salude.

function saludo (){
    return ("Hola!");
}

alert(saludo()); 


// 4. Crear una función que reciba los parámetros, la temperatura y el sistema (Farenheit o Celsius), 
// y devuelva la temperatura transformada al otro sistema. (Si recibe Farenheit, devolver Celsius, 
// si recibe Celsius devolver Farenheit).

let temperatura = parseInt(prompt("Ingrese una temperatura en números"));
let sistema = (prompt("Si es en Farenheit ingrese 1, si es en Celsius ingrese 2"));

function temp (temp,sis){
   if(sis==="1"){
       return((temp-32)*5/9);
   } else{
       return((temp*9/5)+32);
   }
}
alert(temp(temperatura,sistema));   


// 5. Realizar una función que reciba como parámetro un número. Si esta entre 5 y 10, 
//que le aplique la función de factorial (ejercicio 12 de bucles), si es menor , 
//aplicar una función que muestre su módulo (valor absoluto, valor sin el “-” en caso de ser negativo), 
//y si es mayor que 10 aplicarle una función que muestre su doble. Ejemplos de entrada y salida:
//6 → 6! = 720
//4 → |4| = 4
//-8 → |-8| = 8
//50 → 100            ?????????????
//11 → 22

let numero = parseInt(prompt("Ingrese un número"));
let total;

function factorial (n1){
      if (n1>=5 && n1<=10) {
        }
        for(let i=1;i<=n1;i++){
            total = 1;
            total = total * i;
        }
    return total;
}  console.log(factorial(numero));

function modulo (n2){
    if(numero<5){
        return(n2*(-1));
    }
}  console.log(modulo(numero));

function doble (n3){
    if((numero>10){
        return (n3*2);
    }
} console.log(doble(numero)); 





// 6. Rehacer el ejercicio 12 de condicionales utilizando funciones para validar edad y cobrar. ?????

let edad = parseInt(prompt("Ingrese su edad"));
let bebidaMayor;
let bebidaMenor;
const cerveza = 100;
const jugo = 50;
const agua = 20;
let costo = 0;
let abonar;
let vuelto;


function age (n1){
    if(n1<18){
        return(bebidaMenor = prompt("Desea tomar jugo o agua?"));
    } else {
        return(bebidaMayor = prompt("Desea tomar jugo, agua o cerveza?"));
    }
}  

function cobrar (){
    if(bebidaMenor==="jugo" || bebidaMenor==="Jugo" || bebidaMayor==="jugo" || bebidaMayor==="Jugo"){
        abonar=parseInt(prompt("El jugo está $50, con cuanto va a abonar?"));
        vuelto=(abonar-jugo);
        return ("Su vuelto es " + vuelto);
    } else if (bebidaMenor==="agua" || bebidaMenor==="Agua" || bebidaMayor==="agua" || bebidaMayor==="Agua"){
        abonar=parseInt(prompt("El agua esta $20, con cuanto va a abonar?"));
        vuelto=(abonar-agua);
        return ("Su vuelto es " + vuelto);
    } else {
        abonar=parseInt(prompt("La cerveza está $100, con cuanto va a abonar?"));
        vuelto=(abonar-cerveza);
        return ("Su vuelto es " + vuelto);
    }
}  alert(cobrar());  




// 7. Crear una función que reciba tres parámetros: Horas, minutos y segundos, 
//y devolver todo pasado a segundos.

let horas = parseInt(prompt("Ingrese una hora"));
let minutos = parseInt(prompt("Ingrese un minuto"));
let segundo = parseInt(prompt("Ingrese un segundo"));

function segundos (n1,n2,n3){
    return((n1*3600)+(n2*60)+n3);
}

alert(segundos(horas,minutos,segundo));  


// 8. Realizar una función de carga de notas en un array. Luego realizar otra función que
// calcule el promedio de todas y lo devuelva.

let notas = [];
let total=0;

function carga(nota){
    notas.push(nota);
    return notas;
}

function promedio(prom){
    for(i=0;i<prom;i++){
        total=total+prom[i];
    }
    return promedio = total / prom.lenght;
}

carga(7);
carga(4);
carga(9);
carga(2);

console.log(promedio(notas));   


// 9. Escribir una función para cobrar en caja. Agregando funciones que:
// * Si no es cliente A, agregue el IVA.
// * Se solicite un monto de descuento a aplicar, y lo aplique.
// * Finalmente, realice el cobro solicitando al usuario con cuánto desea abonar.  */































