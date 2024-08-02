#! /usr/bin/env node

import inquirer from "inquirer";
import {sum} from "./function.js";
import {sub} from "./function.js";
import {mul} from "./function.js";
import {div} from "./function.js";
import  showBanner from "node-banner";
import gradient from "gradient-string";

let answers=  
  [
    {
        name:"num1",
        type:"number",
        message:gradient.fruit(`Enter the first number :`),
        validate:(input:number)=>{
            if(isNaN(input)){ 
            return "Please enter number"
            }
            return true;
        }
        
    },
    {
        name:"num2",
        type:"number",
        message:gradient.fruit( `Enter the second number :`),
        validate:(input:number)=>{
        if(isNaN(input)){ 
            return "Please enter number"
            }
            return true;
        }
    },
    {
        name:"operators",
        type:"list",
        message:gradient.passion(`Select an operation`),
        choices:[`+`,`-`,`*`,`/`]    
    }      
];

let answer=[
    {
        name:"again",
        type:"confirm",
        message:"Do you want to calculate again",
        

    }
];
 
(async () => {
    await showBanner('Calculator', '','blue');
})();
 


async function calculator(){
let condition=true;
while(condition){ 
   
let {num1,num2,operators}=await inquirer.prompt(answers)

if(operators=="+"){
    console.log("Sum =",sum(num1,num2))
}else if(operators=="-"){
    console.log("Difference =",sub(num1,num2))
}else if(operators=="*"){
    console.log("Multiplication =",mul(num1,num2))
}else if(operators=="/"){
    console.log("Division =",div(num1,num2))
}


console.log(gradient.rainbow(`Calculator developed by Saif`))
let {again}=await inquirer.prompt(answer)
condition=again;
}
}


setTimeout(() => {
    calculator();
}, 100);
  