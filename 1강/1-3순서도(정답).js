const btn = document.querySelector('.start-btn');
const result = document.querySelector('.result');

btn.addEventListener('click', () => {
    const formerValue = document.querySelector('.multifly-former-input-bar').value;
    const letterValue = document.querySelector('.multifly-letter-input-bar').value;
    if (parseInt(formerValue) && parseInt(letterValue)) {
        result.innerHTML= `= ${formerValue * letterValue}`
        return 
    } else {
        if (!parseInt(formerValue)) {
            result.innerHTML = `첫 번째 값이 제대로 입력이 되지 않았습니다.`
            return
        } else if (!parseInt(letterValue)) {
            result.innerHTML = `두 번째 값이 제대로 입력이 되지 않았습니다.`
            return
        }
    }
})