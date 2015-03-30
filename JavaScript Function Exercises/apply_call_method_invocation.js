//apply() and call() invocation is used to specify any object we want as the function context
//goal of excercise: successfully specify arbitrary objects to serve as function contexts for function invocation

//defines a function called juggle

function juggle() {
	var result = 0;
//sums up arguments
	for (var n = 0; n < arguments.length; n++) {
		result += arguments[n];
	}
//stores result on context
	this.result = result;
}

//creates test objects

var apple = {};
var orange = {};

//applies function

juggle.apply(apple,[1,2,3,4]);

//calls function

juggle.call(orange,5,6,7,8);

//tests the results we expect to get back

assert(apple.result === 10,
	"juggled via apply");

assert(orange.result === 26,
	"juggled via call");

