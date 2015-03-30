//Recursion occurs whenever a function calls itself, or calls a function that in turn calls the original function anywhere in the call tree
//Two criteria for recursion to occur: a reference to self, and convergence towards termination

//implement a palindrome
/*palindrome defined: A single or zero-character string, or any other string where the first and last characters are the same,
and the string that remains, except for those characters */
//Note this definition of a Palindrome is recursive as it uses definition of a Palindrome to determine if the string is a Palindrome

function isPalindrome(text) {
	if (text.length <= 1) return true;
	if (text.charAt(0) != text.charAt(text.length -1)) return false;
	return isPalindrome(text.substr(1,text.length - 2));
}

//Chirping usin ga named function and recursion techniques

//declare a recursive chriping function that calls itself by name until it determines that it is done
function chirp (n) {
	return n > 1 ? chirp(n - 1) + "-chirp" : "chirp";
}

//assert that we can chirp as planned
assert(chirp(3) == "chirp-chirp-chirp",
	"Calling the named function comes naturally.");

//Method recursion within an object

//declare an anonymous recursive chirp function as a property of an object. THIS EXCERCISE IS MEANT TO BE FLAWED (see next example below)
var fruit = {
	chirp: function(n) {
		return n > 1 ? fruit.chirp(n - 1) + "-chirp" : "chirp";
	}
};

assert(fruit.chirp(3) == "chirp-chirp-chirp",
	"An object property isn't too confusing either.");

//what happens if we redefine our fruit object later in the code
//use same example from above adding complications to it

var fruit = {
	chirp: function(n) {
		return n > 1 ? fruit.chirp(n - 1) + "-chirp" : "chirp";
	}
};

//create a chirp method on an object called vegtable by referencing the existing method of the same name from fruit
var vegtable = {chirp: fruit.chirp}

//redefine the fruit object such that it has no properties

fruit = {};

//note: this makes the chirp property go away

//test if things still work
try {
	assert(vegtable.chirp(3) == "chirp-chirp-chirp",
		"is this going to work?");
}
catch(e) {
	assert(false,
		"Uh, this isn't good! Where'd fruit.chirp go?");
}

//this does not work

//SOLUTION
//fix this problem by fixing the initially sloppy definition of the recursive function used earlier
//Instead of explicitly referencing fruit in the anonymous function use instance object of this
//using function context (this) makes the chirp() method much more robust

var fruit = {
	chirp: function(n) {
		return n > 1 ? this.chirp(n - 1) + "-chirp" : "chirp";
	}
};

//***WE HAVE ANOTHER PROBLEM WITH OUR CODE
//solution relied upon the fact that the function would be a method named chirp() of any object within which a method is defined
//What if the properties don't have the same name? 
//What if one of the references to the function isn't even an object property?
//solution only works where the function is used as a method and where the property name is identical in all uses

//try giving the function a name
//declare an inline named function
var fruit = {
	chirp: function signal(n) {
		return n > 1 ? signal(n - 1) + "-chirp" : "chirp";
	}
};

//test that it works as expected
assert(fruit.chirp) == "chirp-chirp-chirp",
	"Works as we would expect it to");

//create a new object again
var vegtable = { chirp: fruit.chirp};

//wipeout the fruit object as we did in the previous example
var fruit = {};

//test that it still works (it should)
assert(vegtable.chirp == "chirp-chirp-chirp",
	"The method correctly calls itself");












