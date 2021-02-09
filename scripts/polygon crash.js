let element;
function green() {
	element = document.querySelector('ul.crash-history li');
	if (element.textContent == 1.00 || element.textContent == 1.01 || element.textContent == 1.02 ||
		element.textContent == 1.03 || element.textContent == 1.04 || element.textContent == 1.05) {
		var notification = new Notification('Ставка!',
			{ body: 'крыш!', dir: 'auto' }
				);

	}
}
setInterval(green, 3000);
