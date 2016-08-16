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



var map = function(arg, callback){
var results = [];
each(arg, function(val){
results.push(callback(val));
});
return results;
}


var filter = function(arg, callback){ 
var results = [];
  each(arg, function(val){
	 if(callback(val)){
		results.push(val);	
		}
	});
return results;
}




