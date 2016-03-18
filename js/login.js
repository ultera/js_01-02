/**
 * login()
 * Выводит сообщение, если имя пользователя входит в logins[],
 * иначе - ошибку.
 *
 * @param {string[]} logins[] имена для сравнения.
 * @param {string} имя пользователя.
 */

function login() {
	var logins = [];
	var inputStr;
	
	for (var i = 0; i < 5; i++) {
		inputStr = prompt('Введите имя номер ' + (i + 1));
		inputStr = myTrim(inputStr);
		if( isEmpty(inputStr) ) {
			alert('Имя не может быть пустым, начните с начала.');
			return;
		} else logins[i] = inputStr.toLowerCase();
	}

	inputStr = prompt('Введите Ваше имя', '');
	inputStr = inputStr.toLowerCase();
	inputStr = myTrim(inputStr);
	
	for (var i = 0; i < 5; i++) {
		if (inputStr.localeCompare(logins[i]) == 0){
			prompt(inputStr + ', Вы успешно вошли.');
			return;
		}
	}
	
	alert('Имени ' + inputStr + ' нет в массиве имен (' + logins + ')');
}

function myTrim(str) {
   if (str != null) return str.replace(/^\s+|\s+$/gm,'');
}

function isEmpty(str) {
	if(str == null || str == '') return true;
	return false;
}