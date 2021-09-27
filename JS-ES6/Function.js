/**
 * 
 */
const myName = "Henry";

function sayHi (userName = "Na"){
	console.log("HI " + userName);
}

function sayBye (userName) {
	console.log("BYE " + userName);
}

sayHi("Henry");
sayHi();
sayHi();

//moving this declaration around to check the impact
const tina = "Tina";
//the var tina needs to exist before being called; 
//means JS always look backward to search for var and function
sayBye(tina); 

//The function does not need to be delared before the calling, but var doesc
const numTwoDouble = numberDouble(2);//declaration and assignation at the same time
const numFiveDouble = numberDouble(5);//declaration and assignation at the same time

console.log("numberAdder " + numberAdder(numTwoDouble,numFiveDouble));

function numberDouble (num) {
	const doubleValue = num*2.0;
	return doubleValue; //need to have return just like java, just like C/C++
}

function numberAdder(num1, num2){
	return num1 + num2;
}


//declarating a function acting like a variable
//just another way of defining a function
var sayHi_f = function(myName){
	if(!myName){
		var myName = Bob;
	}
	console.log("hi" + " " + myName);
}

//try to move the command to the position before the var declaration
//error will occur sayHi_f is not a function at Object anonymous
//means sayHi_f is not recognized
sayHi_f("Chris");

//demo the way  we use the function as parameter and more
const squareNumber = function(num){
	return num * num;
}

//var variables can be updated and re-declared within its scope;
//let variables can be updated but not re-declared; 
//const variables can neither be updated nor re-declared.
const numberAdder_c = function(squarer, num2){
	const squared = squarer(4);
	return squared + num2;
}

//parsing function inside a function as a parameter, vler
console.log("numberAdder_c " + numberAdder_c(squareNumber, 10));





















