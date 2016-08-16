//Advanced Funcitons JS


var printHello = function(){
	console.log("Hello");
}

var printAnything = function(word){
	console.log(word);
}

printAnything("Hello World!");


var functionRunner = function(someFunction){
	someFunction();
}

functionRunner(printHello);


var betterFunctionRunner = function(someFunction, word){
	someFunction(word);
}

betterFunctionRunner(printAnything,'Dogs');



var array = ["dogs", "cats", "humans"];

var arrayFunctionRunner = function(someFunction, array){

for(var i=0;i<array.length;i++){
	someFunction(array[i])
}
};

arrayFunctionRunner(printAnything,array);



// for array and object

var loopingFunctionRunner = function(someFunction,collection){

if(Array.isArray(collection)){

for(var i=0;i<collection.length;i++){

	someFunction(collection[i]);

} else{
	
	for(var key in collection){
	
		someFunction(collection[key]);
	}
  }
}


//Higher Order Functions can also return other functions

var functionBuilder = function(word){
	return function(){
		console.log('Look! A '+ word + '!');
	}
}
