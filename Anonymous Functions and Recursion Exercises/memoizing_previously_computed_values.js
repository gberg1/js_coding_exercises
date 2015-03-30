//memoization is the process of giving a function the capability of remembering its previously computed values
//readily applicable to expensive computations

//build in an "answer cache" in which the function will save the answers to the computations it performs

function isPrime(value) {
	//check to see if the answers property we will use as a cache has been created, if not we will create it
	//empty object will only occur on the first call to the function, after which the cache will exist
	if (!isPrime.answers) isPrime.answers = {};

	//check to see if the answer for the passed value has already been cached in answers
	//within this catch we will store the computed answer as true or false using the value as the property key
	//if a cached answer is found simply return it
	if (isPrime.answers[value] != null) {
		return isPrime.answers[value];
	}

	//if no cached value is found perform the calculation to determine if the value is prime storing the result in the cache as its returned
	var prime = value != 1; //1 can never be prime
	for (var i = 2; i < value; i++) {
		if (value % i == 0) {
			prime = false;
			break;
		}
	}
	//store the computed value
	return isPrime.answers[value] = prime;
}

//test that it works
assert(isPrime(5),
	"5 Is Prime!");
assert(isPrime.answers[5],
	"The answer was cached!");

/* two major advantages to using a cache such as this:
1) The end user enjoys performance benefits for function calls asking for previously computed values
2) It happens seamlessly behind the scenes. Neither the end user nor the page author need to perform 
any special requests or do any extra initialization

/* disadvantages to weigh by using this method:
1) any sort of caching will certainly sacrifice memory in favor of performance
2) some may consider that caching is a convern that should not be mixed with business logic, meaning
a function or method should do one thing and do it well
3) its difficult to load-test or measure the performance of an algorithim such as this one */

//ANOTHER EXAMPLE
//Memoizing DOM Elements
//build a cache in which we can store DOM element sets in the overall querying process

function getElements(name) {
	if (!getElements.cache) getElements.cache = {};
	return getElements.cache[name] =
	getElements.cache[name] || document.getElementsByTagName(name);
}

/* takeaway: we can store state and cache information in a single and encapsulated location, gaining organizational advantages
as well as performance benefits without external storage or caching objects polluting the scope */ 
