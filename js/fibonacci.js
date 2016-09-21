function fib() {

	// Check to see if there are li elements on the screen and clear them if there are
  var liOnPage = document.getElementsByTagName('li').length;
  var fib = document.getElementById('fib');

  while (fib.firstChild) {
  	fib.removeChild(fib.firstChild);
  } 

  // Get the User's input and store it in a variable
	var userInput = document.getElementById("userInput").value;

	var fib = [];      // Create and empty array
	fib[0] = 0;	       // Initialize our first two positions in the array per the Fibonacci Sequence
	fib[1] = 1;

	// We will start the for loop on the third number are we are always looking backwards two places
	// This is because the algorithm calls for (n-1) + (n-2)
	for (var i = 2; i <= userInput; i++) {
		fib[i] = fib[i - 2] + fib[i - 1];
	}

	// We Initialize this variable to determine where to place the li elements
	var list = document.getElementById('fib');

	// this is our for loop to place the sequence numbers in the li elements
	for (var i = 0, len = userInput; i < len; i++) {	
		
   	var newElement = document.createElement('li');
   	var newText = document.createTextNode(fib[i]);
   	newElement.appendChild(newText);

   	var position = document.getElementById('fib');
   	position.appendChild(newElement);

	}

}