var c = 0; //counter for clicks

function nextPrime() {


	var prime = [];
	var primeDiv = document.getElementById('nextPrime'); 
	
	function isPrime(num) {
	  
	  if(num < 2) return false;
	  
	  for (var i = 2; i < num; i++) {
	      if(num%i==0)
	          return false;
	  }
	  return true;
	}

	for(var i = 0; i < 1000; i++){
	  if(isPrime(i)) {
	  	prime.push(i);
	  }
	}
	if (c == 0) {
		primeDiv.innerHTML = prime[c];	
	} else {	
		primeDiv.innerHTML = prime[(c + 1)];
	}
 	
 	c = c + 1; 
	
}




