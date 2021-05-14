//using class and inheritance 


class UserDe {

    name:string;
    lastName:string;
    age:number


    constructor(nombre:string , apellido:string , edad:number){
     this.name = nombre;
     this.lastName = apellido;
     this.age = edad;

    }

    showUserInfo(){
        console.log(`Hello ${this.name} ${this.name} your age is ${this.age}`);
    }
}


class Job extends UserDe {

position:string;
shift:number
name:string;
lastName:string;
age:number;


constructor(posicion:string , turno:number , nombre:string , apellido:string , edad:number){
   super( nombre , apellido , edad );

    this.position = posicion;
    this.shift = turno;
    this.name = nombre;
    this.lastName = apellido;
    this.age = edad;

}


showUser(){
    console.log(`Employee ${this.name} ${this.lastName} works in ${this.position } in ${this.shift} shift`)
}

}// end of the Job Class


let newEmployee = new UserDe('Angel' , 'Rivera' , 29);
newEmployee.showUserInfo();


let newJob = new Job('INVENTORY' , 1 , 'Angel' , 'Rivera' , 29);
newJob.showUser();



