const balls = document.querySelector('.balls');
const startBtn = document.querySelector('.startBtn');


let numArr;
let WinningNumArr = new Array();
let timer;

function initialize() {
    balls.innerHTML = '';
    WinningNumArr = [];
    numArr = Array(45).fill().map((num, i) => i + 1);
}

function start() {
    for (let i = 0; i < 7; i++) {
        pushBall()
    }
    showBall();
}

function pushBall() {
    const num = Math.floor(Math.random() * numArr.length);
    WinningNumArr.push(numArr[num]);
    numArr.splice(num,1);
}

function showBall() {
    for (let num=0; num < 7; num++) {
        setTimeout(() => {
            const ball = document.createElement('div');
            ball.classList.add('ball')
            ball.innerText += WinningNumArr[num];
            ball.style.backgroundColor = matchColor(ball, num);
            balls.appendChild(ball);
        }, 1000 * num);
    }
}

function matchColor(ball, order) {
    if (order === 6) return 'red';
    const num = ball.innerText;
    if (num > 36) return 'purple';
    else if (num > 27) return 'orange';
    else if (num > 18) return 'skyblue';
    else if (num > 9) return 'pink';
    else return 'yellowgreen';
}

startBtn.addEventListener('click', () => {
    if (balls.childNodes.length && balls.childNodes.length !== 7) {
        alert("실행 중입니다. 종료할 수 없습니다.")
        return
    }
    initialize();
    start();
})