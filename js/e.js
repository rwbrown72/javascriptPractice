var e = Math.E;

function places()
{
		// Get input from the user
		var userInput = document.getElementById("userInput").value;
		
		if (userInput > 21) {
			// This will be used to provide error feedback
			document.getElementById('error').classList.remove('hidden');
		} else {
			// This will be used to display pi to the user requested digits
	    document.getElementById('e').innerHTML = e.toPrecision(userInput);
	    document.getElementById('error').classList.add('hidden');
		}
    
}