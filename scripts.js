let mainDisplay = document.getElementById('display2');
let btn1 = document.getElementById('1').addEventListener('click', getFirst);
let btn2 = document.getElementById('2').addEventListener('click', getSecond);
let btn3 = document.getElementById('3').addEventListener('click', addNumbers);
let btnClear = document.getElementById('c').addEventListener('click', clear);
let firstNum = '';
let secondNum = '';
const equal = document.getElementById('=')
let result = '';
//debugger;

//number event listeners
//btn1.addEventListener('click', addNumbers);
//btn2.addEventListener('click', addNumbers);
//btn3.addEventListener('click', addNumbers);
function getFirst(e) {
    firstNum = parseFloat(e.target.value);
    mainDisplay.value += firstNum;
    return firstNum;
    console.log(firstNum);
}
function getSecond(e) {
    secondNum = parseFloat(e.target.value);
    mainDisplay.value += secondNum;
    return secondNum;
    console.log(secondNum);
}
function addNumbers() {
    result = firstNum + secondNum;
    mainDisplay.value += result
    console.log(result);
    // console.log('clicked', this.value);

}
function clear() {
    mainDisplay.value = '';
}
//operator event listeners
equal.addEventListener('click', addNumbers);

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