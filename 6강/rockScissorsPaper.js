const imageBox = document.querySelector('.imageBox');
const startBtn = document.querySelector('.startBtn');
const rockBtn = document.querySelector('.rockBtn');
const scissorsBtn = document.querySelector('.scissorsBtn');
const paperBtn = document.querySelector('.paperBtn');
const victoryPoint = document.querySelector('.victoryPoint');
const cases = ['scissors', 'rock', 'paper'];
const imageSlice = {rock: '0', scissors: '-142px', paper: '-284px'}

let cnt = 0;
let initailization;
let computerResult; 

/********************** rock-scissors-paper game related function *************************/
function rockScissorsPaper() {
    computerResult = cases[cnt];
    imageBox.style.background = `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imageSlice[computerResult]}`;
    cnt = (cnt + 1) % 3;
}
function makeRepetition() {
    return setInterval(rockScissorsPaper, 50);
}

/**************************** eventHandler related function *******************************/
function checkVictoryPoint(choice) {
    const myChoice = cases.indexOf(choice);
    const computerChoice = cases.indexOf(computerResult);
    const result = myChoice - computerChoice;
    if (result == 2) return -1; // 나: 보, 상대; 가위
    else if (result == -2) return 1; // 나: 가위, 상대: 보
    else if (result == -1) return -1; // 나: 가위 or 바위, 상대: 바위 or 보
    else if (result == 1) return 1; // 나: 바위 or 보, 상대: 가위 or 바위
    else return 0;
}

function choiceBtnHandler(choice) {
    clearInterval(initailization);
    const nowPoint = parseInt(victoryPoint.textContent);
    victoryPoint.textContent = nowPoint + checkVictoryPoint(choice);
    setTimeout(() => initailization = makeRepetition(), 1000);
}

/************************************ eventListener **************************************/
startBtn.addEventListener('click', () => {
    if (computerResult) {
        alert("이미 시작 중입니다.");
        return;
    }
    initailization = makeRepetition()
});
rockBtn.addEventListener('click', () => choiceBtnHandler(cases[1]));
scissorsBtn.addEventListener('click', () => choiceBtnHandler(cases[0]));
paperBtn.addEventListener('click', () => choiceBtnHandler(cases[2]));