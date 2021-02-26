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
            if (numbers.indexOf(number) === checkIfValidNum) {
                strike += 1;
            } else {
                ball += 1;
            }
        }
        const hint = document.createElement('li');
        hint.innerText = `${cnt}번째 시도: ${strike}S ${ball}B`;
        hints.appendChild(hint);
    }
}

function getRandom(answer) {
    let randomNum = (parseInt(Math.random()*10)).toString();
    while (answer.indexOf(randomNum) >= 0) {
        randomNum = (parseInt(Math.random()*10)).toString();
    }
    return randomNum;
}

startBtn.addEventListener('click', () => {
    initialize();
    for (let i=0; i<4; i++) answer += getRandom(answer);
    console.log(answer);
})

inputBtn.addEventListener('click', () => {
    if (!answer) {
        alert("시작 버튼을 눌러주세요")
        return;
    };
    //check if number (4 digits)
    const val = input.value;
    if (Number(parseInt(val)) && val.length === 4) {
        checkIfCorrect(val);
    } else {
        alert("제대로 된 값을 눌러주세요.")
    }
})
