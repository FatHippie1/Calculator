
let mainDisplay = document.getElementById('display2');
let btn1 = document.getElementById('1').addEventListener('click', numberPress);
let btn2 = document.getElementById('2').addEventListener('click', numberPress);
let btn3 = document.getElementById('3').addEventListener('click', numberPress);
let btn4 = document.getElementById('4').addEventListener('click', numberPress);
let btn5 = document.getElementById('5').addEventListener('click', numberPress);
let btn6 = document.getElementById('6').addEventListener('click', numberPress);
let btn7 = document.getElementById('7').addEventListener('click', numberPress);
let btn8 = document.getElementById('8').addEventListener('click', numberPress);
let btn9 = document.getElementById('9').addEventListener('click', numberPress);
let btn0 = document.getElementById('0').addEventListener('click', numberPress);
//let btnDec = document.getElementById('.').addEventListener('click', numberPress);
let firstNum = '';
let secondNum = '';
let operator = "";
let result = '';
let equal = document.getElementById('=').addEventListener('click', equalsPress);
let btnClear = document.getElementById('c').addEventListener('click', clear);

document.getElementById("+").addEventListener("click", operatorPress);
document.getElementById("-").addEventListener("click", operatorPress);
document.getElementById("*").addEventListener("click", operatorPress);
document.getElementById("/").addEventListener("click", operatorPress);
//debugger;

function numberPress(e) {

    if (operator == "") {
        firstNum = parseFloat(e.target.value);
        mainDisplay.value += firstNum;
        console.log(firstNum);
    }
    else {
        secondNum = parseFloat(e.target.value);
        mainDisplay.value += secondNum;
        console.log(secondNum);
    }
}
function operatorPress(e) {
    operator = e.target.value;
    mainDisplay.value += operator;

    //return operator;
    console.log(operator);
}

function equalsPress(e) {
    result = firstNum + secondNum;
    //mainDisplay.value += '=';
    mainDisplay.value += ('=' + result);
    console.log('=' + result);
}

function clear() {
    mainDisplay.value = '';
    firstNum = '';
    secondNum = '';
    operator = '';
}

//operator event listeners
//equal.addEventListener('click', addNumbers);

//display results
function getResult() {
    let btn1a = parseFloat(btn1.defaultValue);
    let btn2a = parseFloat(btn2.defaultValue);
    let btn3a = parseFloat(btn3.defaultValue);
    let result = (btn1a + btn2a + btn3a);

    console.log("btn1+btn2: ", (result));

    mainDisplay.value = result;
}
//add numbers
//addNumbers();
//subract numbers
//multiply numbers
//divide numbers
//getResult();