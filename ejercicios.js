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
/* let comando = (string) => {
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
console.log(comando('UUDDLRLLLLLUUUUUDDUURR'));
 */

// - Mostrar todos los números de 1 a n aumentando de 1 en 1 donde n lo ingresa el usuario en un prompt.
function unoAuno(){
    const n = Number(prompt('Ingrese un numero máximo','solamente numeros menores que 10'));
    let i = 0;
    while(i<=n){
        console.log(i);
        i++;
    }
}
// - Mostrar todos los números de 1 a N aumentando de 2 en 2 donde n lo ingresa el usuario en un prompt.
function dosAdos(){
    const n = Number(prompt('Ingrese un numero máximo','solamente numeros menores que 10'));
    let i = 0;
    while(i<=n){
        console.log(i);
        i += 2;
    }
}
// - Mostrar todos los números de N a 1 disminuyendo de 1 en 1 donde n lo ingresa el usuario en un prompt.
function menosUnoaUno(){
    const n = Number(prompt('Ingrese un numero máximo','solamente numeros menores que 100'));
    let i = n;
    while(i>=1){
        console.log(i);
        i--;
    }
}
// - Escribir utilizando console.log la tabla del 9 hasta 9x10.
function tablaDe9() {
    let a = 0;
    while(a<=10){
        console.log(`9 x ${a} = ${9*a}`);
        a++;
    }
}
// - Pedir al usuario que ingrese un número en un prompt, hacer la suma de todos los dígitos, validar que el número ingresado no contenga letras.
function validarNum(){
    const num = prompt('Ingrese solamente numeros', 'solo numeros');
    let suma;
    sumar = ()=> {
        let i = 0; let result=0;
        while(i < num.length){ result += Number(num[i]); i++};
        return result
    }
    isNaN(num) === true ? suma = validarNum()
    : suma = sumar();
    console.log(suma);
    alert(`La suma de los digitos es: ${suma}`);
}
// - Realizar la suma de todos los números pares entre N y M donde N y M los ingresa un usuario.
function sumarPares(){
    const n = Number(prompt('Ingrese valor de N'));
    const m = Number(prompt('Ingrese valor de M'));
    let i = n + 1;
    let suma = 0;
    while(i < m) {
        i%2 === 0 ? suma += i: suma;
        i++;
    }
    console.log(suma);
}
function sumarPares2(){
    const n = Number(prompt('Ingrese valor de N'));
    const m = Number(prompt('Ingrese valor de M'));
    let i = n + 1;
    let numArr = [];
    while(i < m){
        numArr.push(i);
        numArr = numArr.filter(item => item%2 === 0);
        i++;
    }
    console.log(numArr)
    let suma = 0;
    numArr.forEach(item => suma += item);
    console.log(suma);
}

// Realizar la sumatoria de los primeros N números, donde N es ingresado por el usuario.
function sumarNNumeros(){
    const n = prompt('Ingrese numero maximo');
    let suma = 0;
    let i = 0;
    while(i <= n){
        suma += i;
        i++;
    }
    console.log(suma);
    // const n = prompt('Ingrese numero maximo');
    // let arr = [];
    // let i = 0;
    // while(i <= n){
    //     arr.push(i);
    //     i++;
    // }
    // let suma = 0;
    // arr.forEach((item) => suma += item);
    // console.log(suma);
}

// - Realizar el factorial de los primeros N números.
function factorialN(){
    const n = prompt('Encuentre el factorial de:');
    let i = 1;
    let factorial = 1;
    while(i <= n){
       factorial *= i;
       i++;  
    }
    console.log(factorial)
}

// ### Ejercicios de divisores con while (o for)
// - Encontrar todos los divisores de un número.
function divisoresNum(e){
    e = prompt('Numero para encontrar divisores')
    let arrDiv = [];
    for(i = -Math.abs(e) + 1; i < Math.abs(e); i++){
        e%i === 0 ? arrDiv.push(i) : arrDiv;
    }
    alert(arrDiv.join(', '));
}

// - Determinar si un número ingresado por el usuario en un loop es primo o no, validar que el número ingresado sea mayor o igual a dos.
function esNumPrimo(e) {
    e = Number(prompt('Ingrese un numero para saber si es primo'));
    let suma = 0;
    if(e >= 2) {
        for(i = 1; i < e; i++) {
            e % i === 0 && i!== 1 ? suma++ : suma;
        }
     } else {
        alert('Ingrese un numero mayor o igual a 2!');
        esNumPrimo(e);
    }
    suma === 0 ? alert(`${e} es numero primo`) : alert(`${e} NO es numero primo`);
}

// - Crear un programa que determine si un número es perfecto o no, (se dice que un número es perfecto si el número es igual a sus divisores, ejemplos 6 = 1 + 2 + 3)
function esNumPerf(e){
    e = Number(prompt('Ingrese un numero para saber si es perfecto'));
    sumaDiv = 0;
    for(i = 1; i < e; i++) {
        e % i === 0 ? sumaDiv += i : sumaDiv;
    }
    e === sumaDiv ? alert(`${e} es numero perfecto`) : alert(`${e} no es numero perfecto`);
}

// - Crear una función que reciba un número entero y muestre un error si el tipo de dato pasado es de otro tipo.
function esIntero(e){
    e = Number(prompt('Es numero entero?'));
    Number.isInteger(e) ? console.log(e) : alert('Ingrese un numero entero!')
}

// ## Array
function array() {
// - Dado el array = [1,2,3,4,5,6]
    let arr1 = [1,2,3,4,5,6];
//	- Iterar por todos los elementos dentro de un array utilizando while y mostrarlos en pantalla.
    // let i = 0;
    // while(i < arr1.length){
    //     alert(arr1[i]);
    //     i++;
    // }
    
//	- Iterar por todos los elementos dentro de un array utilizando for y mostrarlos en pantalla.
    // for(i = 0; i < arr1.length; i++){
    //     alert(arr1[i]);    
    // }
//	- Iterar por todos los elementos dentro de un array utilizando .forEach y mostrarlos en pantalla.
	// arr1.forEach(item => alert(item));
//	- Mostrar todos los elementos dentro de un array sumándole uno a cada uno.
    // arr1.forEach(item => alert(item + 1));
//	- Generar una copia de un array pero con todos los elementos incrementado en 1.
    let arr2 = arr1.map(item => item + 1);
    console.log(arr2);
//	- Calcular el promedio
    let suma = 0;
    arr2.forEach(item => (suma += item));
    alert(`Promedio de Arr2 es ${suma/arr1.length}`)
}

// - Crear un array vacío, luego generar N números al azar y guardarlos en un array, N es introducido por el usuario a través de un prompt.

function veinteNum(){
    n = prompt('numero de largo de array');
    let arr = [];
    for(i = 0; i < n; i++){
        arr.push(Math.round(Math.random() * 100));
    }
    console.log(arr);
}

// - Dado un array que contiene ["azul", "amarillo", "rojo", "verde", "café", "rosa"] determinar si un color introducido por el usuario a través de un prompt se encuentra dentro del array o no.
function checkColor(){
    let c = prompt('ingrese un color: ');
    let arrayColor = ["azul", "amarillo", "rojo", "verde", "café", "rosa"];
    arrayColor.find(item => item.match(/c/i)) ? alert(`El color ${c} pertenece al array`) : 
    alert(`El color ${c} no pertenece al array`);
}

// - El usuario ingrese un string con varias palabras separadas por coma en un popup y se deben convertir en un array, (el usuario ingresa: "1,2,3,4,5" y se convierte en [1,2,3,4,5])
function stringToArray(){
    const sta = prompt('Ingrese valores entre commas').split(', ');
    console.log(sta);
}

// - Existen dos arrays, cada uno con 5 palabras, generar un nuevo array con la intersección de ambos elementos. (Ejemplo: [1,2,3] unión [1,2,4] = [1,2]
function intersectionArr(a,b){
    a = ['gal', 'bethania', 'caetano', 'gil', 'joao', 'tom ze', 'moraes'];
    b = ['chico', 'djavan', 'milton', 'caetano', 'bethania'];
    let c = a.filter((item) => (b.includes(item) === true));
    console.log(c);
}

// - Existen dos arrays, cada uno con 5 palabras, generar un nuevo array con la unión de ambos elementos, (Ejemplo: [1,2,3] unión [1,2,4] = [1,1,2,2,3,4]
function unionArr(a,b){
    a = ['gal', 'bethania', 'caetano', 'gil', 'joao'];
    b = ['chico', 'djavan', 'milton', 'caetano', 'bethania'];
    const c = a.concat(b);
    console.log(c);
}

// - El usuario ingresa dos conjuntos de números separados por coma, el programa debe determinar si ambos conjuntos tienen la misma cantidad de números.
function numItems(){
    const a = prompt('Ingrese numeros separados por comma');
    const b = prompt('Ingrese numeros separados por comma');
    a.split(',').length === b.split(',').length ? alert('Cantidad de items iguales') : alert('Cantidad de items distintas');
}

// - El usuario ingresa dos conjuntos de números separados por coma, si ambos conjuntos tienen la misma cantidad de elementos mostrar un arreglo que contenga la suma de cada elemento. (Ejemplo: [1,2,3] + [2,3,4] = [3,5,7])
function sumarSiMismoTamaño(){
    const a = prompt('Ingrese numeros separados por comma').split(',');
    const b = prompt('Ingrese numeros separados por comma').split(',');
    let c;
    a.length === b.length ? c = a.map((item,index) => item = Number(item) + Number(b[index])) : alert('Numeros distintos de elementos');
    console.log(c);
}

// - Crear una función que reciba un arreglo con números y devuelva un nuevo arreglo con solo los números pares:
function showEven(arr){
    return arr.filter(item => item%2 === 0)
}

// - Crear una función que reciba un arreglo con palabras, crear un nuevo arreglo que contenga solo las palabras que empiezan con una vocal.
function showVowelStarts(arr){
    const vowel = new RegExp(/[aeiou]/i)
    let arrVowel = arr.filter((item) => item[0].match(vowel));
    console.log(arrVowel);
}

// - Crear un método que permite intercambiar las posiciones de dos elementos de un arreglo en base a sus índices:
Array.prototype.swapItems = function (in1, in2){
    console.log(this)
    let a = this[in1];
    let b = this[in2];
    this[in1] = b;
    this[in2] = a;
    console.log(this)
    return this;
}

// - Realizar el mismo ejercicio anterior pero que en esta ocasión devuelva un arreglo nuevo con los datos cambiados.
Array.prototype.newSwapItems = function (in1, in2){
    let arr2 = this.slice(0);
    let a = arr2[in1];
    let b = arr2[in2];
    arr2[in1] = b;
    arr2[in2] = a;
    console.log(this)
    console.log(arr2)
}

// - Crear una función que reciba un arreglo y que cree uno nuevo con todos los elementos ordenados de menor a mayor, (sin ocupar el método .sort)
Array.prototype.orderUp = function(){
    console.log(this);
    for(j = 0; j < this.length - 1; j++){    
        for(i = 0; i < this.length; i++){
            let a = this[i];
            let b = this[i + 1];
            this[i] > this[i + 1] ? (this[i] = b, this[i + 1] = a)
            : (this[i], this[i + 1])
        }
    }
    console.log(this);
    return this;
}

// - Crear una función que reciba un arreglo y que cree uno nuevo con todos los elementos ordenados de mayor a menor.
Array.prototype.orderNewDown = function(){
    console.log(this);
    let newArr = this.sort((a,b) => a < b ? 1 : a > b ? -1 : 0);
    console.log(newArr);
    return newArr;
}

window.onload = ()=> {['Holanda', 'Brasil', 'Espanha', 'Argentina', 'Francia', 'Belgica', 'Alemanha'].orderNewDown();}
