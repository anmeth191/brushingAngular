function getSum (x:number,y:number,z:number):number{

    return x+y+z;

}


getSum(1,2,3);

let getSum2 = function(x:number,y:number , z:number):number{
    return x+y+z
} 

getSum2(1,1,1);

//this a quick introduction how to use classes in typeScript 

class User {


        name:string;
        lastName:string;
        age:number;

    constructor(nombre:string , apellido:string , edad:number){

        this.name = nombre;
        this.lastName = apellido;
        this.age = edad;

    }

    showMessage(){
     
        console.log(`Hello ${this.name}`)

    }

}


let newUser = new User('Angel' , 'Rivera' , 29);
console.log(`Hello ${newUser.name} your age is ${newUser.age}`);