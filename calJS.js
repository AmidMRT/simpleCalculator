let firstVar = new Number;
let secondVar = new Number;
let operator = new Function;
let container ='';
let result = new Number;
firstVar = null;
secondVar = null;

function add (a,b) {
    return (a+b);
}

function sub (a,b) {
    return (a-b);
}

function division (a,b) {
    if (b !== 0) {
        return (a/b);
    } else {
        return 'n0pe';
    }
}

function multi (a,b) {
    return (a*b);
}

function operate (firstVar, secondVar, operator) {
    if (operator(firstVar, secondVar) !== 'n0pe') {
        return parseFloat(parseFloat(operator(firstVar, secondVar)).toFixed(2));
    } else {
        return 'n0pe';
    }
}

function clearAll () {
    display.textContent = '';
    container = '';
    operator = null;
    firstVar = null;
    secondVar = null;
    smallDisplay.textContent = '';
}

const digits = Array.from(document.querySelectorAll(".digits button"));
const display = document.querySelector(".display");
const ops = Array.from(document.querySelectorAll(".ops .op"));
const res = Array.from(document.querySelectorAll(".ops .res"));
const misc = document.querySelector(".ops .misc");
const smallDisplay = document.querySelector(".smallHistory");

misc.addEventListener("click", ()=> {
    if (container !== ''){
        container = (-1)* parseFloat(container);
        display.textContent = container;
    } else {
        result = (-1)* result;
        display.textContent = result;
    }
})

digits.forEach((item)=> (item.addEventListener("click", ()=> {display.text === result ? display.textContent = item.textContent : display.textContent += item.textContent;
    container += item.textContent;
})));

res.forEach((item)=> (item.addEventListener("click", ()=> {
    if (item.textContent == "C") {
        clearAll();
    } else if (item.textContent == "=") {
        if (firstVar == null) {
            firstVar = parseFloat(container);
        } else if (container !== '') {
            secondVar = parseFloat(container);
        }
        container = '';
        (secondVar !== null && secondVar !== NaN) ? result = operate(firstVar, secondVar, operator) : result = firstVar;
        console.log(firstVar, secondVar, operator, result);
        firstVar = result;
        secondVar = null;
        display.textContent = result;
        smallDisplay.textContent = result;
    }
})))

ops.forEach((item)=> (item.addEventListener("click", ()=> {
    if (firstVar == null || firstVar == NaN) {
        firstVar = parseFloat(container);
    } else {
        firstVar = result;
        secondVar = parseFloat(container);
    }
    (container !== '' && (secondVar !== null && secondVar !== NaN)) ? result = operate(firstVar, secondVar, operator) : result = firstVar;
    display.textContent = result;
    console.log(firstVar, secondVar, operator, result);
    switch (item.id) {
        case ("add"):
            operator = add;
            break;
        case ("sub"):
            operator = sub;
            break;
        case ("multi"):
            operator = multi
            break;
        case ("division"):
            operator = division
            break;
    }
    display.textContent = ''
    firstVar = result;
    container = '';
    smallDisplay.textContent = `${result}`+`${item.textContent}`;
})));
