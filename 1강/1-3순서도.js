const former = document.querySelector('.multifly-former-input-bar');
const letter = document.querySelector('.multifly-letter-input-bar');
const btn = document.querySelector('.start-btn');
const result = document.querySelector('.result');
let formerValue = null;
let letterValue = null;

const getValue = (e) => {
    const value = e.target.value;
    if (value && !parseInt(value)) {
        alert('값은 숫자만 가능합니다. (예: 0 ~ 9)')
    }
    return parseInt(e.target.value);
}
const onClickHandler = () => {
    if (! letterValue || ! formerValue) { 
        alert("숫자로 된 값들을 모두 입력해주세요.");
        return
    }
    const multipliedValue = formerValue * letterValue
    alert(`${formerValue}과 ${letterValue}을 곱한 결과는 ${multipliedValue}입니다.`)
    result.innerHTML = `=${multipliedValue}`
}


function GuGuClass() {
    former.addEventListener('change', (e) => formerValue = getValue(e))
    letter.addEventListener('change', (e) => letterValue = getValue(e))
    btn.addEventListener('click', () => onClickHandler())
}

GuGuClass();