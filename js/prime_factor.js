function factor() {
	
	// Check to see if there are li elements on the screen and clear them if there are
  var liOnPage = document.getElementsByTagName('li').length;
  var fib = document.getElementById('factors');

  while (fib.firstChild) {
  	fib.removeChild(fib.firstChild);
  } 
	
	// Get the User's input and store it in a variable
	var userInput = document.getElementById("userInput").value;

	var factors = []; 

	for (var i = 2, r = userInput; i <= r; i++) {
		while ((r % i) === 0) {
			factors.push(i);
			r /= i;
		}
	}

 
	// Print our sequence of prime numbers to the screen
  for (var i = 0, len = factors.length; i < len; i++) {	
	 	
	 	var newElement = document.createElement('li');
   	var newText = document.createTextNode(factors[i]);
   	newElement.appendChild(newText);

   	var position = document.getElementById('factors');
   	position.appendChild(newElement);

	}


}
