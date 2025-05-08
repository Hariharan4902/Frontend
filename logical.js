let age = 19;
let gender = 'F';

if (age >= 21 || (age >= 18 && gender == 'F')) {
    console.log("Eligible");
} else {
    console.log('Not Eligible');
}

// While Do While For

/* let num =1;
while(num<=1){
    console.log(num);
    num++
}
console.log("Outside loop");
 */

/* let num =1;

do{
    console.log(num);
    num++;

}while(num <+ 10);
console.log("Outside loop")
 
for(let num =1; num<=10; num++){
    console.log(num);
}
console.log("Outside loop");
*/

let n = 0;

let ans = 1;

/* for (let i=1; i<=n; i++){
     ans *=i
} */

let i = 1;
while (i <= n) {
    ans *= i;
    i++;
}

console.log(ans);

//Switch

let x=10;

switch(x){
      case 1:
        console.log('one');
        break
        case 2:
        console.log('two');
        break
        case 3:
        console.log('three');
        break
      default:
        console.log("Number greater than 3");

}

let a=12;

function oddEven(a){
    if(a%2==0){
        return "Even";
    }return"odd";
}
console.log(oddEven(a));


function opertion(op,a ,b){
    return op (a,b);
}
let add = (a,b)=>a+b;

function sub (a,b){
    return(a-b);
}
    console.log(opertion(sub,2,3));
    

//Object

let car = {
    name : 'Nexon',
    brand :'Tata',
    driveTrain : 'petrol,diesel,ev',
    price:15,
    onRoadPrice(price){
           return this.price+2
    }
};
car['Modelyear']=2024;
car.price=27
console.log(car.onRoadPrice(11));

let user={
    name:'Hari',
    age:22,
};
console.log(user.name);
user.name='Aathi';

console.log(user.name);
delete user.name;
console.log(user.name);


console.log('dob'in user);

