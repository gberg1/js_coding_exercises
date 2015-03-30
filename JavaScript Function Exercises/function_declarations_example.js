/* declares a named function and the name is available throughout the current scope.
Its implictly added as a property of window */

function isNimble() {return true; }

/* this test asserts that the window property is established and that the name of the
property isNimble is recorded */

assert(typeof window.isNimble === "function",
	"isNimble() defined");
assert(isNimble.name === "isNimble", 
	"isNimble() has a name");

// creates an anonymous function assigned to variable canFly. name property of the function is empty.

var canFly = function() {return true; };

//tests the variable references to anonymous function and the name of property is set to empty string

assert (typeof window.canFly === "function",
	"canFly() defined");
assert (canFly.name === "",
	"canFly() has no name");


//creates anonymous function referenced by property of window

window.isDeadly = function() { return true; };

//tests property references the function

assert(typeof window.isDeadly === "function",
	"isDeadly() defined");

/* defines an inner function inside the outer function. Tests that inner() is able to be referenced
before and after its declaration and that no global name is created for inner() */

function outer() {
	assert(typeof inner === "function",
		"inner() in scope before declaration");
	function inner() {}
		assert(typeof inner === "function", 
			"inner() in scope after declaration");
		assert(window.inner === undefined,
			"inner() not in global scope");
}

outer();

//tests that outer() can be referenced in global scope, but that inner can't

assert(window.inner === undefined,
	"inner() still not in global scope");

//example of how a variable that we assign to a function has nothing to do with its name. tests this

window.wieldSword = function swingSword () { return true; };

assert(window.wieldSword.name === "swingSword",
	"wieldSword's real name is swingSword");

