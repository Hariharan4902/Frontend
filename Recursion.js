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