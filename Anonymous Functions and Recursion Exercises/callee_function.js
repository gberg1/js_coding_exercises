//reference arguments.callee property
//this function can serve as a reliable way to always access the function itself
var fruit = {
	chirp: function(n) {

//the arguments parameter is implicitly passed to the function
//arguments contains a property called "callee" that refers to the currently executing function
		return n > 1 ? arguments.callee(n - 1) + "-chirp" : "chirp";
	}
};

//test that we can chirp as much as we would like
assert(fruit.chirp(3) == "chirp-chirp-chirp",
	"arguments.callee is the function itself");