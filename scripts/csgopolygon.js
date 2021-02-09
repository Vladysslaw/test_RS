let ball1, valueRed, valueBlack, i = 0;
function green() {
	valueBlack = document.querySelector('#panel8-14-t .total');
	valueRed = document.querySelector('.total_bet .total');
	ball1 = document.querySelector('.ball:last-child span');
	if (ball1.textContent == 0) {
		i++;

		let event2 = new Event("click", {bubbles: true});
		blackButton = document.querySelector('.green_button.betButton');
		blackButton.dispatchEvent(event2);

	if (i == 14) {
		let event = new Event("click", {bubbles: true});
		blackButton = document.querySelector('.gray_inline.button_amount_r');
		blackButton.dispatchEvent(event);
		i = 0;
	}
	}
}
setInterval(green, 35000);

var notification = new Notification('Ставка!',
			{ body: 'Рулетка Ноль!', dir: 'auto' }
				);


let ball1, valueRed, valueBlack, redButton, blackButton;
function green() {
	valueBlack = document.querySelector('#panel8-14-t .total');
	valueRed = document.querySelector('.total_bet .total');
	ball1 = document.querySelector('.ball:last-child span');

		if (valueRed.textContent > valueBlack.textContent * 2) {
			let event = new Event("click", {bubbles: true});
			blackButton = document.querySelector('.dark_button.betButton');
			blackButton.dispatchEvent(event);
		} else if (valueBlack.textContent > valueRed.textContent * 2) {
			let event = new Event("click", {bubbles: true});
			redButton = document.querySelector('.red_button.betButton');
			redButton.dispatchEvent(event);
		
	}
}
setInterval(green, 35000);

let numberRed, numberBlack;
function green1() {

	valueBlack = document.querySelector('#panel8-14-t .total');
	valueRed = document.querySelector('.total_bet .total');
	numberRed = valueRed.textContent;
	numberBlack = valueBlack.textContent;
	ball1 = document.querySelector('.ball:last-child span');
	if (ball1.textContent == 0) {
		if (numberRed > (numberBlack * 2)) {
				let event = new Event("click", {bubbles: true});
				blackButton = document.querySelector('.dark_button.betButton');
				blackButton.dispatchEvent(event);
		} else if (numberBlack > (numberRed * 2)) {
				let event = new Event("click", {bubbles: true});
				redButton = document.querySelector('.red_button.betButton');
				redButton.dispatchEvent(event);
		}
	}
}
setInterval(green1, 35000);

Notification.requestPermission(function(permission){
// переменная permission содержит результат запроса
console.log('Результат запроса прав:', permission);
});