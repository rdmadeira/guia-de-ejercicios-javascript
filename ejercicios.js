// Escribir un programa que muestre un prompt donde el usuario ingresa un número, luego muestra otro prompt pidiendo otro número, finalmente el programa muestra una alerta con el resultado de la suma.

/* let n1 = window.prompt('Por favor, ingrese un numero', ' ');
let n2 = window.prompt('Por favor, ingrese un segundo numero', ' ');
let suma = Number(n1) + Number(n2)

alert('El resultado de la suma es: ' + suma); */


// Crear un programa donde el usuario ingrese en un prompt la temperatura en Celcius y el programa muestre en una alerta la temperatura en Fahrenheit.

/* const tempFahr = ()=> {
    const tempCelsius = window.prompt('Por favor ingrese la temperatura actual en grados Celsius!', ' ');
    return tempCelsius*(9/5) + 32;
}
alert('La temperatura en Fahrenheit es: ' + tempFahr() + '°F'); */


// Pedir un número a un usuario a través de un prompt y luego dividirlo por 10, ejemplo: 5 / 10  igual 0.5

/* const number = window.prompt('Ingrese un numero para dividir por 10', ' ')/10;
alert('El resultado es: ' + number); */


// Si a = [1,2,3] crear un script que determine de muestre un alert del tipo de dato de a.
/* const a = [1,2,3];
const aType = typeof a;
window.alert('El tipo de data de a es: ' + aType + '.'); */


// Crear un programa que determine si un número introducido en un Prompt es par o no, la respuesta será mostrada en una alerta.
/* const numero = window.prompt('Intruzca un numero para saber si es par: ', ' ');
if (Number.isInteger(numero/2) && numero > 1) {
    alert('El numero ingresado es par!')
} else {
    alert('El numero ingresado no es par!')
} */

// Crear un programa que determine si un número introducido en un Prompt es divisible por 5 o no, mostrar el resultado con console.log
/* const div5 = window.prompt('Ingrese un numero para saber si es divisible por 5', ' ');
if(div5%5 === 0) {
    console.log(`El numero ${div5} es divisible por 5!`)
} else {
    console.log(`El numero ${div5} no es divisible por 5!`)
} */

// Crear un programa que determine si un número introducido en un popup es divisible por 11 y 5 o no, mostrar el resultado con console.log
/* const nro = prompt('Ingrese un numero para saber si es divisible por 11 y por 5', ' ');
if(nro%11 == 0 && nro%5 == 0) {
    console.log(`El numero ${nro} es divisible por 11 y por 5`);
} else {
    console.log(`El numero ${nro} no es divisible por 11 y por 5`);
} */

// Crear un programa  que le pida al usuario dos números en un Prompt y luego muestre en un alerta el número mayor.
/* function mayorNum() {
const number1 = prompt('Ingrese el primer numero','');
const number2 = prompt('Ingrese el segundo numero','');
if(number1 > number2) {
    alert(`El numero ${number1} es el mayor`);
} else if(number2 > number1) {
    alert(`El numero ${number2} es el mayor`);
} else {
    alert(`${number1} y ${number2} son iguales`);
}
}
mayorNum(); */

// Crear un programa que le pida al usuario primero un  números al usuario a través de un prompt y luego un segundo número para luego mostrar en un alerta el número mayor, esta vez realizar el ejercicio ocupando un if ternario
/* function mayorNum() {
    const number1 = prompt('Ingrese el primer numero','');
    const number2 = prompt('Ingrese el segundo numero','');
    number1 > number2? alert(`El numero ${number1} es el mayor`)
    : number2 > number1? alert(`El numero ${number2} es el mayor`)
    : alert(`${number1} y ${number2} son iguales`);
}
mayorNum(); */

// Crear un programa que determine si un string introducido por un usuario empieza con un número o con una letra.
numOLetra = () => {
    const userString = prompt('Escriba su contraseña!','string');
    userString[0].match(/[a-z]/) ? console.log('Su código empieza con una letra'): userString[0].match(/[0-9]/)? console.log(`Su código empieza con un numero.`): console.log('Ingrese un código con un numero o una letra')
    console.log(typeof userString[0]);
}
numOLetra();