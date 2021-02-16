const prevWord = document.querySelector(".prev-word");
const input = document.querySelector(".input-bar");
const btn = document.querySelector(".push-next-word-btn");
const result = document.querySelector(".result");
let wordArr = [];

/****** addEventListener Setting ******************/

input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        inputValueHandler();
    }
})
btn.addEventListener('click',() => {
    inputValueHandler();
})

/**************************************************/


// 기존 단어가 이미 나왔는지 확인한다
function checkArr(val) {
    for (let each of wordArr) {
        console.log( each, val)
        if (each === val) return false;
    }
    return true
}

//기존 단어가 있으면 비교한다.
function checkCorrectWord(wordArr, val) {
    const arrLength = wordArr.length;
    if (!val.length) return -1;
    if (arrLength) {
        const lastWord = wordArr[arrLength-1];
        if (lastWord[lastWord.length-1] !== val[0]) return false;
    }
    if (checkArr(val) === false) return false

    wordArr.push(val);
    printLastWord();
    return true;
}

function GameInitialization() {
    wordArr = [];
    printLastWord();
}

function inputValueHandler (e) {
    const check = checkCorrectWord(wordArr,input.value);
    if (!check) {
        alert("규칙에 어긋나는 단어입니다. 지셨습니다.");
        GameInitialization();
    } 
    else if (check === -1) {
        alert("입력하지 않으셨습니다. 다시 입력해주세요.")
    }
    input.value = '';
}

function printLastWord() {
    const arrLength = wordArr.length;
    if (! arrLength) {
        prevWord.innerText = "시작할 단어를 입력해주세요!"
    } else {
        prevWord.innerText = `이전 단어: ${wordArr[arrLength - 1]}`
    }
}

function Init() {
    console.log(wordArr);
    printLastWord();
}

Init();