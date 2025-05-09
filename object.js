 //Object Refference
const a = {
    name: 'hari',
    age: '30',
};
a.age = 29;
console.log(a);

//Constructor

let x = {
    name: 'aathi',
}

function User(a) {
    this.name = a;
}

let aathi = new User('aathi');
let shibhu = new User('shibhu');

console.log(aathi, shibhu);


function Add() {
    this.a = 15;
    this.b = 10;
    this.add = function (c) {
        return this.a + this.b + c;
    }
}

let sum = new Add();
console.log(sum.add(4));

//Array

let veg = ['carrot', 'beetroot', 'pumkin'];

for (let i = 0; i < 3; i++) {
    console.log(veg[i]);

}


let mat = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 8]
]
for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; i++) {
        console.log(mat[i][j])
    }
}

//Map

let map = new Map();

map.set(1, 'hari')
    .set(2, 'logi')
    .set(3, 'undefined');

for (key of map.values()) {
    console.log(map);
}

let set = new Set();

set.add('code io')
    .add('logic io')
    .add(1);

console.log(set.size);
console.log(set);


let phn =new Set();

set.add(9)
.add(5)
.add(5)
.add(5)
.add(4)
.add(6)
.add(0)
.add(7);
console.log(set.size);
