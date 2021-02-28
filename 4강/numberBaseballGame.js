const inputBtn = document.querySelector(".inputBtn");
const hints = document.querySelector(".hints");
const startBtn = document.querySelector(".startBtn");
const input = document.querySelector(".input");

let answer = '';
let cnt = 0;

function initialize() {
    answer = '';
    input.value = '';
    cnt = '';
    hints.innerHTML = '';
}

function checkIfCorrect(numbers) {
    cnt ++;
    if (answer === numbers) {
        alert(`${cnt}번째 시도만에 정답입니다!`);
        initialize();
    } else {
        let strike = 0;
        let ball = 0;
        for (let number of numbers) {
            const checkIfValidNum = answer.indexOf(number);
            if (checkIfValidNum < 0) continue;
            if (numbers.indexOf(number) === checkIfValidNum) strike ++;
            else ball++;
        }
        const hint = document.createElement('li');
        hint.innerText = `${cnt}번째: ${input.value} - ${strike}S ${ball}B`;
        hints.appendChild(hint);
    }
}

function createRandomNumber() {
    return (parseInt(Math.random()*10)).toString()
}

function getNumber(answer) {
    let randomNum = createRandomNumber();
    while (answer.indexOf(randomNum) >= 0) randomNum = createRandomNumber();
    return randomNum;
}

/************************* eventListener ***************************/
startBtn.addEventListener('click', () => {
    initialize();
    for (let i=0; i<4; i++) answer += getNumber(answer);
})

inputBtn.addEventListener('click', () => {
    if (!answer) {
        alert("시작 버튼을 눌러주세요");
        return;
    };

    //check if number (4 digits)
    const val = input.value;
    if (Number(parseInt(val)) && val.length === 4) checkIfCorrect(val);
    else alert("제대로 된 값을 입력해주세요.");
    input.value = '';
})
