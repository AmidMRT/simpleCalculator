let firstVar = '';
let secondVar = '';
let operator ='';
let container ='';
let containerNum;

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

// function equal (a,b) {
//     return a==b;
// }

function operate (firstVar, secondVar, operator) {
    return parseInt(operator(firstVar, secondVar));
}

function clearAll () {
    display.textContent = '';
    container = '';
    firstVar ='';
    secondVar ='';
}

const digits = Array.from(document.querySelectorAll(".digits button"));
const display = document.querySelector(".display");
const ops = Array.from(document.querySelectorAll(".ops .op"));
const res = Array.from(document.querySelectorAll(".ops .res"));

digits.forEach((item)=> (item.addEventListener("click", ()=> {display.textContent += item.textContent;
    container += item.textContent;
})));

res.forEach((item)=> (item.addEventListener("click", ()=> {
    if (item.textContent == "C") {
        clearAll();
    } else if (item.textContent == "=") {
        //clearAll();
        containerNum = parseInt(container);
        secondVar = containerNum;
        result = operate(firstVar, secondVar, operator);
        display.textContent = result;
    }
})))

ops.forEach((item)=> (item.addEventListener("click", ()=> {
    containerNum = parseInt(container);
    ["-", "+", "*", "/"].includes(display.textContent[display.textContent.length-1]) ?
    display.textContent[display.textContent.length-1] = item.textContent : display.textContent += item.textContent;
    firstVar == '' ? firstVar = containerNum : secondVar = containerNum;
    secondVar !== '' ? result = operate(firstVar, secondVar, operator) : result = firstVar;
    firstVar = result;
    container = '';
    secondVar = '';
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
    }
})));