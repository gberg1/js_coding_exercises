//the below code shows the differences between function and method invocation
//function context changes depending on how the function is invoked, not declared
//purpose: to avoid needing to create separate copies of a function to perform the exact same processing on different objects


/* defines a function that returns its function context to examine the function context
from outside it, after it has been invoked */

function creep() { return this; }

//tests invocation is a function and verifies that function context is the window object global scope

assert(creep() === window,
	"Creeping in the window");

//references same function in the variable sneak

var sneak = creep;

//even though a variable was used the function is still invoked as a function and function context is still window

assert(sneak === window,
	"Sneaking in the window");

//creates an object in apple and creates a property called skulk that references creep() function

var apple = {
	skulk: creep
};

//invokes function through skulk property of apple object, invoking as a method of apple. now function context is apple, not window

assert(apple.skulk === apple,
	"The apple is skulking");

//creates another object orange, that has a skulk property referencing the creep() function
//***ideally we would like to not have to repeat the code used in apple and orange

var orange = {
	skulk: creep
};

//invokes the function as a method of orange with the function context now orange

assert(orange.skulk === orange,
	"The orange is skulking");

