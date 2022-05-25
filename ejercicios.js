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
/* numOLetra = () => {
    const userString = prompt('Escriba su contraseña!','string');
    userString[0].match(/[a-z]/gi) ? console.log('Su código empieza con una letra'): userString[0].match(/[0-9]/gi)? console.log(`Su código empieza con un numero.`): console.log('Ingrese un código con un numero o una letra')
    console.log(typeof userString[0]);
}
numOLetra(); */

// Crear un programa donde se introduzcan los tres ángulos internos de un triángulo y se determine si el triángulo es válido o no.
/* document.forms.form1.addEventListener('submit', 
()=> {
        const a1 = +(document.forms[0][0]['value']);
        const a2 = +(document.forms[0][1]['value']);
        const a3 = +(document.forms[0][2]['value']);
        const suma = a1 + a2 + a3;
        console.log(typeof a1, typeof a2, typeof a3)
        console.log(suma)
        if(suma === 180 && a1>0 && a2>0 && a3>0) { 
            alert('El triangulo es válido');
        } else{
        alert('Los angulos no forman un triangulo');
        }
    }

); */

// Determinar si una palabra empieza con mayúscula o no.
/* window.onload = () => {
    const palabra = prompt('Verificar si una palabra empieza con una mayuscula','Escreva una palabra');
    if (palabra[0].match(/[A-Z]/)) {
        alert('Su palabra empieza con mayuscula');
    } else {
        alert('Su palabra no empieza con mayuscula')
    }
} */

// Determinar si un año dado es bisiesto.
/* let ano = prompt('Ingrese un año para saber si es bisiesto', 'Año');
if(ano>=0 && ano%4===0 && (ano%100!==0 || ano%400===0)) {
    alert(`El año de ${ano} ingresado es bisiesto`);
 } else if(ano>=0) {
    alert(`El año de ${ano} no es bisiesto.`)
} else {
    alert('Ingrese un año válido')
} */

// Escribir un programa JavaScript en el que el programa escoge al azar un entero entre 1 y 10, el usuario , luego a el usuario se le pedirá que introduzca un número en un popup para intentar adivinarlo. Si la entrada del usuario coincide con el número de conjetura, el programa mostrará un mensaje de "buen trabajo" de lo contrario mostrará un mensaje de "No corresponde"
/* const randNum = Math.round(Math.random() * 10);
console.log(randNum)
miNum = prompt('Intente advinar el numero eligido','Numero de 1 al 10');
if(+miNum === randNum) {
    alert('Buen trabajo!');
} else {
    alert('No corresponde');
} */

//Movimientos del Robot - Nucba:
let comando = (string) => {
    let posX = 0;
    let posY = 0;
    strArr = string.match(/[udlr]/gi);
    console.log(strArr)
    strArr.forEach( (item,index) => {
        if(item.match(/u/i)) {
            posY += 1;
            if (posY === 0 && posX === 0) { alert(`Llegó al punto inicial en el ${index+1} movimiento!`)};
            console.log(`posX: ${posX} / posY: ${posY} / ${index+1}`);
        }
        else if(item.match(/d/i)) {
            posY -= 1;
            if (posY === 0 && posX === 0) { alert(`Llegó al punto inicial en el ${index+1} movimiento!`)};
            console.log(`posX: ${posX} / posY: ${posY} / ${index+1}`);
        }
        else if(item.match(/l/i)) {
            posX -= 1;
            if (posY === 0 && posX === 0) { alert(`Llegó al punto inicial en el ${index+1} movimiento!`)};
            console.log(`posX: ${posX} / posY: ${posY} / ${index+1}`);
        }
        else if(item.match(/r/i)) {
            posX += 1;
            if (posY === 0 && posX === 0) { alert(`Llegó al punto inicial en el ${index+1} movimiento!`)};
            console.log(`posX: ${posX} / posY: ${posY} / ${index+1}`);
        }
        else { posX = posX; posY = posY;}
        
    }
    )
    return posX + ' ' + posY
}
console.log(comando('UUDDLRLLLLLUUUUUDDUURR'))