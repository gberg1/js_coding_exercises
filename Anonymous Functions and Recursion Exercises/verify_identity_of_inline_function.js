//verify the identity of an inline function

//declare a named inline function and assign it to a variable
var fruit = function myFruit() {
	//test inside the function that the two names are equivalent
	assert(fruit == myFruit, 
		"This function is named two things at once");
};

//invoke the function to perform the internal test
fruit();

//test that the inline function's name isn't available outside of the inline function

assert(typeof myFruit == "undefined",
	"But myFruit isn't defined outside of the function");

//IMPORTANT POINT: even though inline functions can be named, those names are only visible inside the functions themselves
//their scope is limited to the function in which they're declared

//giving inline functions a name can provide a means to allow for recursive references within the functions it has limited use elsewhere