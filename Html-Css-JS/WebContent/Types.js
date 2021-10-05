/*
 * practising JavaScript
 */
 

console.log(10 + 6);
console.log(Math.PI);
/*phân biệt giữa == và ===, === so sánh cả type và value, nên gọi là strict equality*/
console.log(1 == '1');
console.log(1 === '1');


/*=========================================*/
console.log(parseInt("10", 2) + 213);
console.log(isNaN("Hello"));


/*String as a Squence of Unicode Character*/
console.log("Hello".length);
console.log("Hello".charAt(4));
console.log("Hello" + " World");
console.log("Hello" + " World".toUpperCase());


/*Boolean*/
console.log(true);
var shouldBeTrue = false;
console.log(shouldBeTrue);
console.log(shouldBeTrue === false);


if (shouldBeTrue === true){
	console.log("Hello: this var is true");
}
else {
	console.log("This var is not true"); 
}


var myArray1 = [false, 1, 2 , "3", "ada"];
var myArray2 = false;
/*myArray1 is a pointer/regerence so is always true based on Boolean*/
console.log(Boolean(myArray1));
console.log(Boolean(myArray2));
/*null and undefined are different; null: a reference that null
undefined: a variable that not created. not allocated memory*/
console.log(null === undefined);






















