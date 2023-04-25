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