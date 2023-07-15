let inputValue = document.getElementById('inputValue');
	
document.querySelectorAll('.btn').forEach(button => {
	button.addEventListener('click', function() {
		calc(this.value); //По клику вызывается функция со значением данной кнопки в качестве параметра
	});
});
		
// Делаем ввод с клавиатуры 
document.addEventListener('keydown', event => {
	// /* Условие звучит так: если значением event.key является один из символов, указанных в 
	// квадратных скобках, то вызываем функцию calc с параметром event.key, иначе отбрасываем. */
	if((event.key).match(/[0-9%\/*\-+\(\)=]|Backspace|Enter/)) calc(event.key); 
}); 
		
function calc(enteredValue){
	if(enteredValue.match(/=|Enter/)){
	// пробуем выполнить операцию 
		try {
		/* вычисляем значение строки.  Используем Math.tranc для округления до целого числа */
			//inputValue.focus();
			inputValue.innerText = Math.trunc(math.evaluate(inputValue.innerText));
		}
		// если операцию выполнить невозможно 
		catch {
			// сохраняем значение поля 
			let oldValue = inputValue.innerText;
			// создаем новую переменную 
			let newValue = 'недопустимое значение';
			// выводим значение новой переменной в поле 
			inputValue.innerText = newValue;
			// через полторы секунды возвращаем полю старое значение 
			setTimeout(() => {
				inputValue.innerText = oldValue;
			}, 1500);
		}
	}
		// если нажат символ C 
	else if(enteredValue.match(/C|Backspace/)){
		// очищаем поле 
		inputValue.innerText = '';
	}
	// если нажата любая другая (отфильтрованная) кнопка 
	else {
	// записываем ее значение в поле 
		inputValue.innerText += enteredValue;
	}
}