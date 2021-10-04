/*
	- String literals allowing embedded expressions
	- Make is esier to create multiline strings and allstring interpolation :: nội suy chuỗi ??
	- Enclosed in back-ticks "String goes here"
	- Can contain placed holders
*/

var myFirstName = "Chris";
var myFirstName = "Jones";
var myAge = "30";

//console.log("My first name is "+ myFirstName + " My last name is" +myFirstName + " my age is "+myAge)

var myNewList =
	"<ul>\n" +
		"<li>I am item 1</li>\n" + 
		"<li>I am item 2</li>\n" + 
		"<li>I am item 3</li>\n" + 
	"</ul>" ;
	
//console.log(myNewList);
const myDiv = document.getElementById("myDiv");
myDiv.innerHTML = myNewList;

//cách này khiến cho việc thay đổi cấu trúc file html là khả thi nhưng rất vất vả

//SOLUTION : ES6 back-tick :: much cleaner code
var myOtherNewList = 
	`<ul>
		<li>I am ES6 item 1</li>
		<li>I am item 2</li> 
		<li>I am item 3</li> 
		<li>I am item 4</li> 
	</ul>`;
const myDiv2 = document.getElementById("myDiv2");
myDiv2.innerHTML = myOtherNewList;

const first = "Sally";
const last = `Smith`;
const age = 5;

console.log(`Hello ${first} ${last}, you are ${age} today`); //NOTE : để ý cái back-tick ` <> single-quote'

const fulNameAndAge = `${first} ${last} , age is ${age}`;
//back-tick giúp dev không cần chèn escape character \ vào các special symbol
console.log(`Hello to ${fulNameAndAge}, this is "Henry"`); 

//we can even do some comparison in back-tick quote
const isTrue = true;
console.log(`Is it true that : ${isTrue === true}`);//comparison in in back-tick quote

//we can alse access to object's attributes
const dateNow = new Date();
console.log(`Today is :   ${dateNow.toLocaleString()}`); 
//hai cách này là tương đương nhau
const localeDate = dateNow.toLocaleString();
console.log("Today is (locale) " + localeDate); 

//math in back tick 
console.log(`some Math for fun 13*14 = ${13*14}`);

const myArray = [1,2,3];
myArray.map( (num) => {
	console.log(num);
}
);

//iterating through the Array with back tick and 
// map():: lấy từng element của Array ra để processing
console.log(`${myArray.map((num) => { return `your result is : ${num+5}`})}`);

//Ứng dụng trong HTML injection như thế nào ??
const pizzaToppings = ["cheese", "mushrooms", "sauce", "pepperroni", "chilly", "bubble milk tea"];
//kiểu viết như thế này ng ta gọi là template literal
const myPizzaDiv = `
	<article>
		<h1>Pizza Ingredients</h1>
		<ul>
			${pizzaToppings.map( (ingredients) => `<li>${ingredients}</li>`).join("\n\t\t\t")}			
		</ul>	
	</article>
	`;

console.log(myPizzaDiv);
const pizzaDiv = document.getElementById("pizzaDiv");
pizzaDiv.innerHTML = myPizzaDiv;


















