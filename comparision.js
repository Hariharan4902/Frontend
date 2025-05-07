// Comparrision

/* let hari=5;
let aathi=6;

let result=hari = aathi;

console.log(result); */

let a = 'dog';
let b = 'cat';
let result = a > b;
console.log(result);


//conditional 

/* let isAduld= false;
let age = 10;

if(age>18){
   isAduld= true;
}

console.log(isAduld);

let isAduld= false;
let age = 10;

if(age>18){
   isAduld= true;
}
else{
    isAduld=false;
}
console.log(isAduld); 


let person= false;
let age = 10;

if(age>18){
   person= 'aduld';
}
else if(age>12){
    person='teenage';
}
else{
    person='child';
}
console.log(person);

 */

let person;
let age = 20;

person = (age > 18) ? 'Adult' : (age > 12) ? 'Teenager' : 'Child';

console.log(person);

//Actual leap year condition

let x = 10;

if (x > 0) {
    console.log('positive');
}
if (x < 0) {
    console.log('negative');
}
if (x == 0) {
    console.log('Zero');
}

//leap yeaar

let year = 2000;

if (year % 4 == 0) {
    if (year % 100 == 0) {
        if (year & 400 == 0) {
            console.log('Leap Year');
        }
        else {
            console.log('Not A Leap Year');
        }
    }
    else {
        console.log('Leap Year');
    }
} else {
    console.log('Not A Leap Year');
}