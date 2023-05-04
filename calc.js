let operator = "";
let previousValue = "";
let currentValue = "";


document.addEventListener("DOMContentLoaded", function (){
let clear = document.querySelector(".clear");
let equal = document.querySelector(".equal");
let decimal = document.querySelector(".decimal");

let numbers = document.querySelectorAll(".number");
let operators = document.querySelectorAll(".operator");

let previousScreen = document.querySelector(".previous");
let currentScreen = document.querySelector(".current");


numbers.forEach((number)=> number.addEventListener("click", function (e) {
    handleNumber(e.target.textContent)
    currentScreen.textContent = currentValue;
}))

})

function handleNumber (num) {
    if(currentValue.length <= 5){
    currentValue += num;
    }
}

const add = (num1,num2) => num1 + num2;
const sub = (num1,num2) => num1 - num2;
const mul = (num1,num2) => num1 * num2;
const div = (num1,num2) => num1 / num2;

let num1 = 0;
let num2 = 0;
let op;

function operate (operator,num1,num2) {
    switch (operator) {
        case "add":
            return add(num1,num2);
        break;

        case "sub":
            return sub(num1,num2);
        break;

        case "mul":
            return mul(num1,num2);
          break; 

        case "div":
            return div(num1,num2);
        break; 
    }
}