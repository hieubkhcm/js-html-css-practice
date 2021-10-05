const obj1 = {
	a : "1",
};

const obj2 = Object.create(obj1); //tao mot object tu mot object

const obj3 = Object.create(obj2); //tao mot object tu mot object
//check whether an Object has a property as its own property
console.log(obj3.hasOwnProperty("a"));
console.log(obj2.hasOwnProperty("a"));
console.log(obj1.hasOwnProperty("a"));

obj2.a = "2";
//check whether an Object has a property as its own property
console.log(obj3.hasOwnProperty("a"));
console.log(obj2.hasOwnProperty("a"));
console.log(obj1.hasOwnProperty("a"));

//inheritence
function Animal (name, age, breed) {
/*	const obj= {}; //trong func tao object
	obj.name = name; // parsing cho object
	obj.age = age;
	obj.breed = breed;
	obj.sayBreed = () => { //
		console.log(`my breed is : ${obj.breed}`);
	}
	
	return obj; //tra lai object cho ham nao goi no
*/	
	//cach thu hai 
	this.name = name;
	this.age = age;
	this.breed = breed;
	
}
//adding prototype (method) to an exist "Class"
Animal.prototype.sayAge = function () {
	console.log(`I am ${this.age} years old `);
};

//adding prototype (method) to an exist "Class"
Animal.prototype.sayBreed = function () {
	console.log(`I am ${this.breed}`);
};

//dog1 inherites from prototype Animal. which inherites from Object
const dog1 = new Animal ("Spike", 3, "Labrador"); //create 1 object tu function
console.log(dog1.name);
dog1.sayBreed();
dog1.sayAge();

console.log(Animal.prototype);

//Properties co the override thoai mai
Animal.prototype.sayBreed = function () {
	console.log(`I am ${this.breed}, this is the coolest`);
};

dog1.sayBreed();

//////////////////////////////////////////////////////////////////////////////////////
//				CLASS in Javascript	- So much similar to Java						//
//////////////////////////////////////////////////////////////////////////////////////
console.log("\n\n\n\n");

class Person { //class la mot cach khoa hoc hon de khoi tao Object, thay vi dung function nhu pre-SE6
	constructor (name , age ) {
		this.name = name;
		this.age = age;
	};
	greetings(){
		console.log("This is method of class Person");
		return "this is a return of Person.greetings()";
	};
}

const bob = new Person("Bob", 30);
console.log(bob);

bob.greetings();

Person.prototype.greetings = () => { // quan sat cho thay tat ca cac methods cua class deu auto nhet 
//vo prototype
	console.log("this is an overrided greetings()");
}

bob.greetings();

//class ke thua tu class - y nhu Java the thoi
class Employee extends Person {
	constructor(name,age,position){
	super(name,age); //call constructor cua parent class :: Person 
	this.position = position;
	};
	testGreeting(){
		super.greetings();
	}
	sayGreeting(){
		const parentString = super.greetings();
		console.log(`${this.name} is calling ${parentString}`);
	};
}

const bard = new Employee("Bard", 27 , "developer");
console.log(bard);
//hai method phia duoi lam cung mot viec giong nhau
bard.testGreeting(); 
bard.greetings();

bard.sayGreeting();







