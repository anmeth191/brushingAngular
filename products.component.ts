import { Component } from '@angular/core';

@Component({
    selector:'products-app',
    templateUrl:'./products.component.html',
    styleUrls:['./products.component.css']
})

export class ProductsComponent{

    name:string='Angel';
    lastName:string='Rivera';
    isEnabled:boolean = false;
    greet:string = 'Hello';
    returnInput:string = '';
    constructor(){
 
      
    }

    sayHi = ()=>{
        console.log(`${this.name} says: ${this.greet}`)
    }

    getValueInput = (event:any)=>{
        this.returnInput = (<HTMLInputElement>event.target).value;
    }

}