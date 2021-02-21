
/******************************** number buttons ************************************/ 
const numbers = { 'One': 1, 'Two': 2, 'Three': 3, 'Four': 4, 'Five': 5, 'Six': 6, 'Seven': 7, 'Eight': 8, 'Nine': 9, 'Zero': 0, 'Dot':'.' };
const One = document.querySelector(".one");
const Two = document.querySelector(".two");
const Three = document.querySelector(".three");
const Four = document.querySelector(".four");
const Five = document.querySelector(".five");
const Six = document.querySelector(".six");
const Seven = document.querySelector(".seven");
const Eight = document.querySelector(".eight");
const Nine = document.querySelector(".nine");
const Zero = document.querySelector(".zero");
const Dot = document.querySelector(".dot");

/******************************** operator-btn ************************************/ 
const addBtn = document.querySelector(".add");
const substractBtn = document.querySelector(".substract");
const multiplyBtn = document.querySelector(".multiply");
const divideBtn = document.querySelector(".divide");

/******************************** input ************************************/ 
const input = document.querySelector(".input");
const result = document.querySelector(".result");


/******************************** other buttons ************************************/ 
const initializeBtn = document.querySelector(".initialization-btn");
const inputBtn = document.querySelector(".input-btn");


/******************************** Event Handler ************************************/
const onClickHandler = e => {
    input.value += e.target.innerText;
};

//numbers
One.addEventListener('click', e => onClickHandler(e));
Two.addEventListener('click', e => onClickHandler(e));
Three.addEventListener('click', e => onClickHandler(e));
Four.addEventListener('click', e => onClickHandler(e));
Five.addEventListener('click', e => onClickHandler(e));
Six.addEventListener('click', e => onClickHandler(e));
Seven.addEventListener('click', e => onClickHandler(e));
Eight.addEventListener('click', e => onClickHandler(e));
Nine.addEventListener('click', e => onClickHandler(e));
Zero.addEventListener('click', e => onClickHandler(e));
Dot.addEventListener('click', e => onClickHandler(e));

//operators
addBtn.addEventListener('click', e => onClickHandler(e));
substractBtn.addEventListener('click', e => onClickHandler(e));
multiplyBtn.addEventListener('click', e => onClickHandler(e));
divideBtn.addEventListener('click', e => onClickHandler(e));

function safeEval(val) {
    return Function('"use strict";return (' + val + ')')();
}

function calculate(digits) {
    const validOptions = ['+', '-', '*', '/', '(', ')', ' ', '.'];
    for (let digit of digits) {
        if (Number.isNaN(parseInt(digit)) & (validOptions.indexOf(digit) < 0)) {
            alert('다시 한 번 제대로 입력해주세요.');
            return;
        }
    }
    return safeEval(digits);
}

//inputBnt, initializeBtn
inputBtn.addEventListener('click', () => {
    const inputValue = input.value;
    const returnValue = calculate(inputValue);
    result.innerText = returnValue;
    if (Number.isNaN(parseInt(returnValue))) {
        input.value = null; //NaN, infinity 등 오류 방지.
    } else {
        input.value = returnValue;
    }
})

initializeBtn.addEventListener('click', () => {
    input.value = null;
    result.innerText = null;
})



/******************************** Initialization Setting ************************************/
function Init() {

}


Init();