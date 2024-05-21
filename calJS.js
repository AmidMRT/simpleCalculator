let firstVar = '';
let secondVar = '';
let operator;
let container ='';

function add (a,b) {
    return a+b;
}

function sub (a,b) {
    return a-b;
}

function division (a,b) {
    return a/b;
}

function multi (a,b) {
    return a*b;
}

function operate (firstVar, secondVar, operator) {
    return operator(firstVar, secondVar);
}

function clearAll () {
    display.textContent = '';
    container = '';
}

const digits = Array.from(document.querySelectorAll(".digits button"));
const display = document.querySelector(".display");
const ops = Array.from(document.querySelectorAll(".ops button"))

digits.forEach((item)=> (item.addEventListener("click", ()=> {display.textContent += item.textContent;
    container += item.textContent;
})));

ops.forEach((item)=> (item.addEventListener("click", ()=> {
    firstVar == '' ? firstVar = parseInt(container) : secondVar = parseInt(container);
    console.log(container);
    container ='';
    display.textContent += item.textContent;
    switch (item.textContent) {
        case ("+"):
            operator = add;
            break;
        case ("-"):
            operator = sub;
            break;
        case ("*"):
            operator = multi
            break;
        case ("/"):
            operator = division
            break;
        case ("C"):
            clearAll();
            break;
        default:
            if (secondVar == "") {
                display.textContent = firstVar;
            } else {
                result = operate(firstVar, secondVar, operator);
                firstVar = result;
                console.log(result);
                return result;
            }
            
    }
})))