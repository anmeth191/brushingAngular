import { Component } from '@angular/core';

@Component({
    selector:'app-user',
   //template:'<h2>Hello Angel</h2>'
     templateUrl: './user.component.html', 
     styleUrls:['./user.component.scss']
})


class UserComponent {
//properties

/* in This case we are using variables declaratin but without any type script 
firstName ="Tina";
lastName = "Sadowski";
age = 28;
*/


/*Using variables Properties with TypeScript*/

firstName : string;
lastName: string;
age: number;
address: any ;
//you can set arrays of string , numbers , any or default
hobbies:string[];
constructor(){
//Once you declare the variables you have to set their values in the constructor 
    this.firstName = "Tina";
    this.lastName = "Sadowski";
    this.age = 30;
    this.address = {
        street:'111 Tree Road',
        city:'Hills and Apples',
        state:'California'
    };
    this.hobbies = ['Soccer' , 'coding' , 'Play Guitar'];
    //call the method in the constructor to autoinvoke
    this.sumNumbers;

}

//also in the methods you can declare typescript in the parameters and even in the value to return 
sumNumbers = (number1:number , number2:number)=>{

    return number1 - number2;
}
}


export default UserComponent;