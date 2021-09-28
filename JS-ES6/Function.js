/** luu y giua var/let/const
 *  var: scope la toan bo function khai bao no 
 *  let: scope la block nao khai bao no
 *  const: scope la block nao khai bao no, khai bao xong thi ko doi duoc, 
 *  ko can khoi tao gia tri ban dau khi chay app nhu java const
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

/*some ADVANCE functions/object declaration*/
/*Practising an arrow function*/
/*function sayHi (userName = "Na"){
	console.log("HI " + userName);
}*/
var sayHiArrow = () => {
	console.log("Hi, I am using an arrow function");
}
sayHiArrow();

const multipilier = (num1, num2) => {
	return num1 * num2;
}
//NOTE: neu chi co 1 command, co the bo qua {} va return ===> phien ban ngan nhat tuong duong
const multiplierShortest = (num1, num2) => num1 * num2; //can than khi shorthand qua muc

console.log("multipilier(1,2) = "+ multipilier(1,2));
console.log("multiplierShortest(3,4) = "+ multipilier(3,4));

//cach duyet iteration trong Array of Objects
const users = [
	{name: "Chris", age:60},
	{name: "Henry", age: 15},
	{name: "BanhChuoi", age: 6},
];

//map() se giup minh duyet iterate theo tung Object trong cai Array of Objects users
//return theo tung Object members roi mapping vo lai 1 const userNameList
let userNameList = users.map((user) =>  {
	return user.name;
})
console.log(userNameList);

//shortest version tuong duong function ==> tai su dung duoc
const userNameListShortestCmd = myArr => 
	myArr.map(user => user.name);
console.log(userNameListShortestCmd(users));

/*number.filter()*/
const numbers = [1,2,3,4,5,6,7,8,9,10];
/*auto iteration through the array*/
const filteredNumbers = numbers.filter( num => num%2 !== 0); //filtered odd numbers
console.log(filteredNumbers);

const numberDoubler = num => {
	const numberContainer = [];
	num.forEach( n => {
		const double = n*2;
		numberContainer.push(double);
	})	
	return numberContainer;
}

console.log(numberDoubler(numbers));
const moreNumbers = [5, 10, 15, 20];
console.log(numberDoubler(moreNumbers));






