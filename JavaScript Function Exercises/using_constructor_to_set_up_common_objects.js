/* when a constructor is invoked 1) a new empty object is created, 
2) the object is passed to the constructor as the this parameter and becomes the function's context
3) in the absenxe of a specified return value the new object is returned as the constructor's value
*/


//defines constructor creating skulk property on whatever objec the function context becomes
//the method returns the function context

function Fruit () {
	this.skulk = function() {return this; };
}

//create two objects by invoking the constructor defined above using new

var apple = new Fruit();
var orange = new Fruit();

//tests the methods of constructed objects to return its own constructed object

assert(apple.skulk() === apple,
	"The apple is skulking");
assert(orange.skulk() === orange,
	"The orange is skulking");

