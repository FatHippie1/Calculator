
let mainDisplay = document.getElementById('display2');
let numBtns = [document.getElementsByClassName('num')];
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
let btnDec = document.getElementById('.').addEventListener('click', numberPress);

let firstNum = '';
let secondNum = '';
let operator = '';
let result = '';
let equal = document.getElementById('=').addEventListener('click', equalsPress);
let btnClear = document.getElementById('c').addEventListener('click', clear);
/*debugger;
numBtns.forEach(function (item, index, array) {
    addEventListener('click', numberPress);
    console.log(index, item);
});
*/

document.getElementById("+").addEventListener("click", operatorPress);
document.getElementById("-").addEventListener("click", operatorPress);
document.getElementById("*").addEventListener("click", operatorPress);
document.getElementById("/").addEventListener("click", operatorPress);
//debugger;

function numberPress(e) {

    clear();
    if (operator == "") {
        firstNum += e.target.value;
        mainDisplay.value += firstNum;
        console.log("firstNum:  ", firstNum);
        //firstNum = '';
        //secondNum = '';
        //operator = '';
    }
    else {
        secondNum += e.target.value;
        mainDisplay.value += secondNum;
        console.log("secondNum:  ", secondNum);
        //firstNum = '';
        //secondNum = '';
        //operator = '';
    }
}
function operatorPress(e) {
    operator = e.target.value;
    mainDisplay.value += operator;
    console.log("operator:  ", operator);
}

function equalsPress(e) {
    //use switch case
    switch (operator) {
        case '+':
            result = parseFloat(firstNum) + parseFloat(secondNum);
            firstNum = '';
            secondNum = '';
            operator = '';
            break;
        case '-':
            result = parseFloat(firstNum) - parseFloat(secondNum);
            firstNum = '';
            secondNum = '';
            operator = '';
            break;
        case '*':
            result = parseFloat(firstNum) * parseFloat(secondNum);
            firstNum = '';
            secondNum = '';
            operator = '';
            break;
        case '/':
            result = parseFloat(firstNum) / parseFloat(secondNum);
            firstNum = '';
            secondNum = '';
            operator = '';
            break;
    }

    clear();
    mainDisplay.value += (result);
    console.log(result);
}

function clear() {
    mainDisplay.value = '';
    //firstNum = '';
    //secondNum = '';
    //operator = '';
}

//operator event listeners
//equal.addEventListener('click', addNumbers);
