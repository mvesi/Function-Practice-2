// $(document).on('ready', function() {
  
// });
// 
// 
// #1 - Write a function called 'getName' which takes a single object argument and returns the value of the 'name' property of the given object.
// getName({ name: 'Luisa', age: 25 }) should return 'Luisa'

var person = { name: 'Luisa', age: 25 };

var getName = function(obj){

	return person.name;
};

console.log(getName(person));


// #2 - Write a function called 'totalLetters' which takes an array of strings and returns the total number of letters in all strings.
// totalLetters(['javascript', 'is', 'awesome']) should return 19
// totalLetters(['what', 'happened', 'to', 'my', 'function']) should return 24

var totalLetters = function(arr){
	return arr.join(",").length-(arr.length-1);
};
console.log(totalLetters(['javascript', 'is', 'awesome']));
console.log(totalLetters(['what', 'happened', 'to', 'my', 'function']));

// #3 - Write a function called 'keyValue' which takes two arguments and returns a new object with a key of the first argument and the value of the second argument.
// keyValue('city', 'Denver') should return Object {city: "Denver"}

var keyValue = function(arg1, arg2){

	var obj = new Object({});
	obj[arg1] = arg2;
	return obj;

};

console.log(keyValue('city', 'Denver'));

// #4 - Write a function called 'negativeIndex' which takes an array and a negative number, and returns the value from the array at the given negative index, as if the array was circular, i.e. arr.length+num.
// negativeIndex(['a', 'b', 'c', 'd', 'e'], -2) should return 'd'
// negativeIndex(['jerry', 'sarah', 'sally'], -1) should return 'sally'


var negativeIndex = function(arr,negNum){

	return arr.reverse()[(negNum*-1)-1];
};

console.log(negativeIndex(['a', 'b', 'c', 'd', 'e'], -2));
console.log(negativeIndex(['jerry', 'sarah', 'sally'], -1));


// #5 - Write a function called 'removeM' which takes a single string argument and removes all 'm' characters from the string. The function won't actually modify
// removeM('family') should return 'faily'
// removeM('memory') should return 'eory'

var removeM = function(str){
	strArray = str.split("");
	noM = [];
	for(var i=0 ; i<strArray.length ; i++){
		if(strArray[i] !== 'm'){
			noM.push(strArray[i]);
		}
	}
	return noM.join("");
};
console.log(removeM('family'));
console.log(removeM('memory'));


// #6 - Write a function called 'printObject' which takes a single object argument and console.log's each key-value pair in the format key is value on separate lines.

var printObject = function(obj){

	for(var i in obj){
		console.log(i + " is " + obj[i]);
	}

	};

printObject({ a: 10, b: 20, c: 30 });
printObject({ firstName: 'pork', lastName: 'chops' });

// #7 - Write a function called 'vowels' which takes a string and returns an array of all the vowels in the string, including duplicates.
// vowels('alabama') should return ['a', 'a', 'a', 'a']
// vowels('What evil odd ducks!') should return ['a', 'e', 'i', 'o', 'u']

var vowels = function(str){
	var vowels = ["a","e","i","o","u"];
	var strArray = str.split("");
	var ansArray = [];
	for (var i=0 ; i<strArray.length ; i++){
		for(var j=0 ; j<vowels.length ; j++){
			if(strArray[i] === vowels[j]){
				ansArray.push(strArray[i]);
			}
		}

	}

	return ansArray;
};
console.log(vowels('alabama'));
console.log(vowels('What evil odd ducks!'));

// #8 - Write a function called 'twins' which takes an array and returns true if every adjacent pair of items in the array is the same.

var twins = function(arr){
	var ans = true;
	if(arr.length%2 !== 0){ 
		ans = false; 
	}

	for(var i=0 ; i<arr.length ; i=i+2){
		if(arr[i] !== arr[i+1]){
			ans = false;
			break;
		}

	}
	return ans;
};
console.log(twins(['a', 'a', 'b', 'b', 'c', 'c']));
console.log(twins(['a', 'a', 'b', 'c', 'd', 'd']));
console.log(twins(['a', 'a', 'b', 'z']));
console.log(twins(['a', 'a', undefined]));


// #9 - Write a function called 'or' which takes an array of booleans and returns true if any one of them is true. Given an empty array, return false. If you find an item that is true, the function should return true immediately and not continue checking further values.

var or = function(arr){
	var ans = false;
	if(arr.length === 0){
		return false;
	}
	for(var i=0 ; i<arr.length ; i++){
		if(arr[i] === true){
			ans = true;
			break;
		}
	}
	return ans;
};

console.log(or([false, false, true, false]));
console.log(or([false, false, false]));
console.log(or([]));

// #10 - Write a function called 'unique' which takes an array of strings, and returns a new array consisting of the unique values (no duplicates).

var unique = function(arr){

	var ansArray = [];

for(var i=0 ; i<arr.length ; i++){
	if(ansArray.indexOf(arr[i]) === -1){
		ansArray.push(arr[i]);
	}



}
return ansArray;
};

console.log(unique(['a', 'b', 'a', 'c', 'd', 'd']));
console.log(unique(['todd', 'avery', 'maria', 'avery']));






