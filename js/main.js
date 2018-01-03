(function(global) {
	
	let count = 0;
	
	const document = global.document,
		countText = document.getElementsByTagName('h1')[0],
		increaseButton = document.getElementById("increase-btn"),
		decreaseButton = document.getElementById("decrease-btn");
	
	
	function updateCount() {
		countText.innerHTML = count;
	}
	
	
	function main() {
		
		increaseButton.addEventListener('click', function() {
			count += 1;
			updateCount();
		});
		
		decreaseButton.addEventListener('click', function() {
			count -= 1;
			updateCount();
		});
	}
		
	updateCount();
	main();
	
}(this));
