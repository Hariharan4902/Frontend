//JSON

let user ={
    name : 'hari',
    age : 25,
    salary : 20000,
};
console.log(JSON.stringify(user));


let user1 = '{"name1":"hari","age":23}';

console.log(JSON.parse(user1));

/* class User{
    #name;
    #age;
    constructor(name,age){
        this.#name=name;
        this.age=age;
    }
    display(){
        co
    }
} */

//inheritance

class Ani{
    legs;
    tail;
    constructor(legs,tail){
        this.legs=legs;
        this.tail=tail;
    
    }  display(){
        console.log(this.legs);
        console.log(this.tail);
    class Human extends Ani{
        nationality;
    }
    let goms=new Human(4,false)
    console.log(goms);
    }
}