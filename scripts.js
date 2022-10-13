const mainDisplay = document.getElementById('display');
let btn1 = document.getElementById('1');
let btn2 = document.getElementById('2');
let btn3 = document.getElementById('3');
const equal = document.getElementById('enter');
let result = '';
debugger;

//number event listeners
btn2.addEventListener('click', getResult);
btn3.addEventListener('click', getResult);

//operator event listeners
equal.addEventListener('click', getResult);

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
function addNumbers() {
    btn1.addEventListener('click', addNumbers);
    console.log('clicked')
}
//subract numbers
//multiply numbers
//divide numbers
//getResult();