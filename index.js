// let yourName = prompt('Как тебя зовут?', '');
// alert(`Привет, ${yourName}!`);

function summ(x, y) {
    let firstNumber = prompt('Какое первое число?', '');
    let secondNumber = prompt('Какое второе число?', '');
    alert( `${firstNumber} плюс ${secondNumber} равно ${+firstNumber + +secondNumber}` )
}

function subtract(x, y) {
    let firstNumber = prompt('Какое первое число?', '');
    let secondNumber = prompt('Какое второе число?', '');
    alert( `${firstNumber} минус ${secondNumber} равно ${+firstNumber - +secondNumber}` )
}

function mult(x, y) {
    let firstNumber = prompt('Какое первое число?', '');
    let secondNumber = prompt('Какое второе число?', '');
    alert( `${firstNumber} умножить на ${secondNumber} равно ${+firstNumber * +secondNumber}` )
}

function division(x, y) {
    let firstNumber = prompt('Какое первое число?', '');
    let secondNumber = prompt('Какое второе число?', '');
    alert( `${firstNumber} разделить на ${secondNumber} равно ${+firstNumber / +secondNumber}` )
}