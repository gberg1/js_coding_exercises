//Establish an anonymous function as an event handler
//does not need a name as its only being referenced in this location

window.onload =
	function() { assert(true, 'power!');
	}

//create a function to be used as a method for the fruit object
var fruit = {
	peel: function() {
		assert(true, "Fruit");
	}
};

//invoke the method using the property reference

fruit.peel();

//pass a function to the setTimeout() method of window as a callback to be invoked when the timer expires
//still should not need a name and is invoked after half a second has elapsed

setTimeout(
	function() { assert(true, 'Forever!');}, 500);
