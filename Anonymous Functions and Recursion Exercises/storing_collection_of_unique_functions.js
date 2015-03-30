//this is an example of storing a collection of related, but unique functions, such as during event callback management

var store = {
	//keep track of the next available id to be assigned
	nextId: 1,

	//create an object to serve as a cache in which we will store functions
	cache: {},

	//add functions to the cache, but only if they are unique
	add: function(fn) {
		//we assume the function has an id and if so do nothing
		//if there is no id for the function we assign an id property to the function incrementing the nextId property
		if (!fn.id) {
			fn.id = store.nextId++;

			//add the function as a property of the cache, using the id vaue as the property name
			//then return the value true, which should be computed by converting the function into its Boolean equivalent in order to tell when the function was added after a call to add()
			return !!(store.cache[fn.id] = fn);
			}
		}
	};

	function fruit();

	//test that all works as planned

	assert(store.add(fruit),
		"Function was safely added.");
	assert(!store.add(fruit),
		"But it was only added once");


