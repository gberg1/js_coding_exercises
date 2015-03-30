//forEach function invokes a callback on each element within an array
//defines the forEach function
function forEach (list, callback) {
	for (var n = 0; n < list.length; n++) {
//invokes the callback passing the current iteration entry as the first parameter and the loop index as the second
//this should cause the current entry to become the function context and the index to be passed as the single parameter, which is tested below
		callback.call(list[n],n);
	}
}

//creates a test subject array

var fruit = ['apple', 'orange', 'banana'];

/* tests function calling forEach, passing test array and a 
callback within which tests the expected entry is set as function context for each invocation of the callback */

forEach(
	fruit, 
	function(index) {
		assert(this == fruit [index],
			"Got the expected value of " + fruit[index]);
	)
};