let arithmeticSign = prompt('Введіть знак арифметичної операції, яку Ви хочете зробити? +, -, *, /');

while (arithmeticSign !== '+' && arithmeticSign !== '-' && arithmeticSign !== '*' && arithmeticSign !== '/') {
  alert('Ви ввели неправильний знак арифметичної операції.');
  arithmeticSign = prompt('Введіть арифметичну операцію: +, -, *, /');
}

let num1 = parseInt(prompt('Введіть перше число:'));
let num2 = parseInt(prompt('Введіть друге число:'));

while (isNaN(num1) || isNaN(num2)) {
  alert('Одне з введених значень не є числом.');
  num1 = parseInt(prompt('Введіть перше число:'));
  num2 = parseInt(prompt('Введіть друге число:'));
}

let operationValue = eval(num1 + arithmeticSign + num2);
alert(num1 + arithmeticSign + num2 + ' = ' + operationValue);
