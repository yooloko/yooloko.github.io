alert('The exponential function');
function pow(){
	var base = prompt('Please, enter the base', 1);
	var exponent = prompt('and the exponent', 1); 
	var result = 1;
	var counter = 1;

	if(exponent != null && base != null){

		switch(true){

			case exponent > 0 :
		 		debugger;
	 			while(counter <= exponent){
	 			result *= base;
	 			++counter;
	 			}
	 			return result;

			case exponent === 0 :
				result = 1;
	 			return result;

			case exponent < 0 :
				while(counter <= Math.abs(exponent)){
				result *= 1/base;
				++counter;
				}
				return result;
		}

	} else {
		alert('null!');
	}
}
var powResult = pow();
console.log('pow result = ', powResult);