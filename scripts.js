let btn1 = document.getElementById('1');
let btn2 = document.getElementById('2');
let btn3 = document.getElementById('3');
const equal = document.getElementById('enter');
let result = '';

equal.addEventListener('click', getResult);
debugger;
function getResult() {
    let btn1a = parseFloat(btn1.defaultValue);
    let btn2a = parseFloat(btn2.defaultValue);
    let btn3a = parseFloat(btn3.defaultValue);
    let result = (btn1a + btn2a + btn3a);
    //console.log(e);
    console.log("btn1+btn2: ", (result)

    );
}
//getResult();