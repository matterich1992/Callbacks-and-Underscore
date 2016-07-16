// Use the console at underscore.JS website//

var pocketmon = ["Charizard","Bulbizard", "TwoMew"];


var logger = function (val){
	console.log(val);
};

_.each(pocketmon, logger);

var animalMaker = function(name){
return{
	speak: function(){
		console.log("My name is " + name);
	}

};
};

var animalName = ["Smokey", "Fluffy", "Trigger"];
var farm = [];

/*for (var i = 0;i<animalName.length;i++){
	farm.push(animalMaker(animaleName[i]));
}*/

//This is the old way

//using the each.


_.each(animalName, function(name){
farm.push(animalMaker(name));
}
	);

// Makes sense to use it with map as with map you must return something


var farm_.map(animalName, function(name)
{return animalMaker(name);
});

// var farm = _.map (animaleNames, animalMaker);


// Underscore Exercises//

_.each([1,2,3,4,5,6], function(v){
	console.log(v);
});
//2

var helloArray = ["Hello", "Aloha", "Bonjour"];

checker = function(arr, value){
for(var i = 0;i<arr.length;i++){
	if(arr[i]===value){
		return true;
	}
}
}
return false;
};

// Do with each

var checker = function(array,v){
var result = false
_.each(array, function(val){
	if(val===v){
		var result = true;
	}
});
return result;
};

//3// Pushes values from object to array
var obj = {one: 1, two: 2, three: 3, four: 4, five: 5};

var pusher = function(arg){
var arr = [];
for(var num in arg){
	arr.push(arg[num]);

}
return arr;
};
// use _.map
var obj = {two: 2, four: 4, thirty: 30};

var pushy = function(arg,callback){
var array = _.map(arg, callback
);
return array;
};


var arrayMaker = function(key){
	return key;
};

//4// filter returns evens in array or object

var array2 = [1,2,3,4,5,6,7,8]

var filterFunc = function(arg){
var evens = _.filter(arg, function(vals){
if(vals % 2===0){return vals};
});
return evens;
};

//Filter with callback implemented

var array3 = [2,3,7,10,22,26,33,42];

var filtered = function(arg, callback){
var evens = _.filter(arg,callback);
return evens;
};

var isEven = function(num){
	if(num %2===0){
		return num;
	}
};

//////////////////////////
 var groceries = {
 	Milk: 2.50,
 	Eggs: 1.75,
 	Cheese: 4.00,
 	snacks: 2.00
 };

 var price = function(obj){
 	for(var key in obj){
 		if(obj[key]>2.25){
 			console.log(key + " is too expensive!");
 		}
else{
	console.log(key + " is cheap enough!");
}
}
};



var traverse = function(array){
for(var i =0;i<array.length;i++){
	console.log(array[i]);
}

};

traverse([1,2,3,4,5,6]);


var traverse = function(array){
_.each(array, function(val){
console.log(val);	
})
};

traverse([1,2,3,4,5,6]);




	return videoAndTitlePairs;
}



var myArray = [1,2,3,4,5];
var myObject = {blah: 'Matt',
 				blah1: 'Joelle', 
 				blah2: 'Dominic'
 							};



var print = function(arg){
	console.log(arg);
}


print(myObject['blah']);
























