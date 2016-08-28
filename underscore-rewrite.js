//Reimplementing Underscore JS

//Each
// Will loop through each value in the argument and execute a callback function on that value

var each = function(arr,callback){
if(Array.isArray(arr)){		// this portion addresses that if the arg is an array, use for loop i iteration
	for(var i =0;i<arr.length;i++){
		callback(arr[i]);

	}	
  }
 else{ 
 for(var key in arr){ // this portion indicates that if there is an object as an arg, use for-in loop
 	callback(arr[key]);
 
   }
  } 
}

//Goes through an array or an object using the each funtion and manipulates the array in some way
//I.E - multiply each array num by a certain amount

var map = function(arg, callback){
var results = [];
each(arg, function(val){
results.push(callback(val));
});
return results;
}

//Filters out functions based on a certain"filter" callback that is applied and provides a new array meeting that criteria

var filter = function(arg, callback){ 
var results = [];
  each(arg, function(val){
	 if(callback(val)){
		results.push(val);	
		}
	});
return results;
}



var reduce = function(arr, callback, accumulator){
	each(arr, function(val){
		if(accumulator===undefined){
			accumulator=val;
		
		} else {
			accumulator= callback(val, accumulator);
		}

	});
return accumulator;
}

//Identity
// returns the argument passed into the function
var identity = function(arg){
	return arg;
}

//First
//Returns the first n elements of an array, if undefined then it returns the first value

var first = function(array, n){
	if(n===undefined){
		return array[0];
	} else {
		return array.slice(0,n);
	}
};


//Last is just like first but for the last element

var last = function(array, n){
	if(n===undefined){
		return array[array.length-1];
	} else {
		return array.slice(Math.max(0,array.length-1));
	}
}