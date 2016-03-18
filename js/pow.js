/**
 * main()
 * Возвращает x в степени n, для целых x и n,
 * больших, меньших, либо равных 0.
 *
 * @param {number} x Число для возведения в степень.
 * @param {number} n Показатель степени.
 * @return {number} x в степени n.
 */
function main() {
	var errors = ['good', 'Вы ввели не число!', 'Вы ввели не целое число!', 'Вы не ввели число!'];
	var errNumber = 0;
	var argumentsPow = [0, 0];
	var promptText = ['Укажите основание степени.\n', 'Укажите степень числа.\n'];
	var str = 'Число должно быть целым; может быть отрицательным, положительным, либо равным 0.';

	for (var i = 0; i < 2; i++) {
		var inputStr;
		inputStr = prompt(promptText[i] + str, '');
		if (inputStr) inputStr = inputStr.replace(',', '.');
		if ( (errNumber = isNumeric(inputStr) ) != 0 || ( errNumber = isInteger(inputStr) ) != 0) {
			alert(errors[errNumber]);
			return;
		} else argumentsPow[i] = inputStr;
	}

	console.log(argumentsPow[0] + ' ^ ' + argumentsPow[1] + ' = ' + pow(argumentsPow[0], argumentsPow[1]) );

}

function isNumeric(num) {
	if ( !isFinite(num) ) return 1;
	if ( isNaN( parseFloat(num) ) )	return 3;
	return 0;
 }

function isInteger(num) {
	if (num - Math.floor(num) == 0) return 0;
	return 2;
}

function pow(x, n) {
  var result = x;
  var exponent = Math.abs(n);
  for (var i = 1; i < exponent; i++) result *= x;
  if (n > 0) return result
  	else if (n < 0) return (1/result);
  return 1;
}

