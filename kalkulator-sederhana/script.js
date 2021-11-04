const input = document.querySelector('.input');
const output = document.querySelector('.output');
const container = document.querySelector('.container');
const darkmode = document.getElementById('darkmode');
let temp = 0;
let operand = '';
let result = 0;

darkmode.addEventListener('click', () => {
    document.body.classList.toggle('dark');
})

container.addEventListener('click', number => {

    if (number.target.classList.contains('number')) {
        if (input.innerHTML != '' && operand != '') {
            if (output.innerHTML == '') {
                output.innerHTML = input.innerHTML;
                input.innerHTML = '';
            }

            if (number.target.classList.contains('zero') && input.innerHTML.charAt(1) == 0) {
                input.innerHTML = number.target.innerHTML;
            } else {
                input.innerHTML += number.target.innerHTML;
            }
        } else if (input.innerHTML.length != 15) {
            if (number.target.classList.contains('zero') && input.innerHTML.charAt(1) == 0 && input.innerHTML.charAt(0) != '-' && input.innerHTML.charAt(0) != '.') {
                input.innerHTML = number.target.innerHTML;
            } else {
                if (number.target.classList.contains('zero') && input.innerHTML.charAt(0) == '-' && input.innerHTML.charAt(1) == 0 && input.innerHTML.charAt(2) == 0) {
                    input.innerHTML = `-${number.target.innerHTML}`;
                    // alert('lol');
                } else {
                    input.innerHTML += number.target.innerHTML;
                    temp = Number(input.innerHTML);
                }
            }
        }
    }

    if (number.target.classList.contains('dot') && !(input.innerHTML.includes('.'))) {
        if (Number([...input.innerHTML].pop()).toString() == 'NaN' && input.innerHTML.length > 1) {
            output.innerHTML = input.innerHTML;
            input.innerHTML = '';
        }
        input.innerHTML += number.target.innerHTML;
    }

    if (number.target.classList.contains('operand')) {
        if (number.target.innerHTML == '-' && input.innerHTML == '') {
            input.innerHTML = '-';
        }

        if (output.innerHTML != '') {
            switch (operand) {
                case '/':
                    result = temp / Number(input.innerHTML);
                    break;
                case 'x':
                    result = temp * Number(input.innerHTML);
                    break;
                case '+':
                    result = temp + Number(input.innerHTML);
                    break;
                case '-':
                    result = temp - Number(input.innerHTML);
            }
            output.innerHTML = '';
            if (result.toString() == 'NaN') {
                input.innerHTML = 'Aduhh aku pusingg...'
            } else {
                input.innerHTML = result.toString().slice(0, 16);
            }
        }

        if (input.innerHTML != "-" && input.innerHTML != '' && input.innerHTML != '.') {
            operand = number.target.innerHTML;
            (Number([...input.innerHTML].pop()).toString() == 'NaN' && [...input.innerHTML].pop().toString() != '.') ? input.innerHTML = `${[...input.innerHTML].splice(0, input.innerHTML.length - 2).join('')} ${operand}` : input.innerHTML = `${input.innerHTML} ${number.target.innerHTML}`;
        }
    }

    if (number.target.classList.contains('equal') && input.innerHTML != '') {
        output.innerHTML = input.innerHTML;

        switch (operand) {
            case '/':
                result = temp / Number(input.innerHTML);
                break;
            case 'x':
                result = temp * Number(input.innerHTML);
                break;
            case '+':
                result = temp + Number(input.innerHTML);
                break;
            case '-':
                result = temp - Number(input.innerHTML);
                break;
        }
        output.innerHTML = '';
        if (result.toString() == 'NaN') {
            input.innerHTML = 'Aduhh aku pusingg...'
        } else {
            input.innerHTML = result.toString().slice(0, 16);
        }
    }

    if (number.target.classList.contains('all-clear')) {
        input.innerHTML = '';
        output.innerHTML = '';
        temp = 0;
        operand = '';
        result = 0;
    }

    if (number.target.classList.contains('delete')) {
        input.innerHTML = [...input.innerHTML].slice(0, input.innerHTML.length - 1).join('');
    }
});

