const display = document.querySelector('.display');
const digits = document.querySelectorAll('.digits button');
digits.forEach( btn => btn.addEventListener('click', digitPressed) );
function digitPressed(e) {
    e.preventDefault();
    display.value += e.target.innerText;
}

const opers = document.querySelectorAll('.opers button');
opers.forEach( btn => btn.addEventListener('click', operPressed) );
function operPressed(e) {
    e.preventDefault();
    let lastChar = display.value.length - 1;
    let operArr = ['+', '-', '*', '/'];
    if ( display.value[lastChar] in operArr ){
        display.value += e.target.innerText;
    }  else {
        display.value = display.value.slice(0, lastChar);
        display.value += e.target.innerText;
    }
}

document.querySelector('.equal').addEventListener('click', equalPressed);
function equalPressed(e) {
    e.preventDefault();
    display.value = eval(display.value);
}

function equalPressed(e) {
        e.preventDefault();
        if (display.value === 'error') {
            return;
        }
        const parsedValue = parseFloat(eval(display.value));
        if (!display.value) {
            display.value = 0;
        }
        else if (!Number.isFinite(parsedValue) || Number.isNaN(parsedValue)) {
            display.value = 'error';
        }
        else {
            display.value = eval(display.value);
        }
    }

document.querySelector('.cleaning').addEventListener('click', cleaningPressed);
function cleaningPressed(e) {
    e.preventDefault();
    display.value = '';
}

