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
		//console.log("This is method of class Person");
		return "this is a return of Person.greetings";
	};
	static sayHey(){
		console.log("Hey I am static class of Person");
	}
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
		console.log(parentString);
		console.log(`${this.name} is calling ${parentString}`); //invoke parentString that bai
	};
}

const bard = new Employee("Bard", 27 , "developer");
console.log(bard);
//hai method phia duoi lam cung mot viec giong nhau
bard.testGreeting(); 
bard.greetings();

bard.sayGreeting();

//constructor co argument la object
class Customer extends Person {
	constructor( {name = "customer", age= "n/a", contactMethod }  ) //name = "customer", age= "n/a" là các giá trị default 
	//nếu lúc tạo instance không khai báo trị cho 2 properties này 
	{ 
		super(name, age); //call constructor cua parent
		
		this.contactMethod = contactMethod; //parsing vao data cua object
		this.accountCredit = null; //parsing vao data cua object
	}
	addCredit(amount)
	{
		this.accountCredit += amount;
	}
	reduceCredit(amount)
	{
		this.accountCredit -= amount;
	}
	//static method la method thuoc ve ban than class, giong nhu native vay, khong thuoc ve prototype
	//instance cua class se khong invoke duoc method nay
	static sayHi = () => console.log("Hi, I am a static method");
	
}

const customer1 = new Customer ( { name : "henry", age : 18, contactMethod : "email" });
console.log(customer1);
customer1.addCredit(100);
console.log(customer1.accountCredit);
customer1.reduceCredit(150);
console.log(customer1.accountCredit);

//customer1.sayHi(); //will create error
Customer.sayHi(); // nhu vay moi dung nhe!
Customer.sayHey(); // class ke thua tu class, call backward vo tu nha
Employee.sayHey(); // class ke thua tu class, call backward vo tu nha

//giai thich method :: chia ra lam hai loai :: class method va instance method
//class method la static nhu sayHi sayHey vay do
//con instance method thi giong nhu public trong java

///////////////////////////////////////////////////////////////////
//		create a Family Class
///////////////////////////////////////////////////////////////////

class FamilyGroup {
	constructor (parents = [], children = []) {
		this.parents = parents;
		this.children = children;
	}
	addMember(member){
		this.children.push(member);
	}
}

class FamilyMember{
	constructor (lastName, firstName, relationship){
		this.lastName = lastName;
		this.firstName = firstName;
		this.relationship = relationship;
	}
	sayFamilyName(){
		console.log(`we are the ${this.lastName}s`)
	}
}

const smithFamily = {
	1: ["Smith", "Bill", "father"],
	2: ["Smith", "Catherine", "mother"],
	3: ["Smith", "Annie", "daughter"],
	4: ["Smith", "Will", "son"],
}


const createFamilyGroup = (famArray) => {
	const famGroup = new FamilyGroup();
	//console.log(famGroup);
	for (const prop of famArray) {
		
		console.log(prop.relationship);

		if (prop.relationship === "father" || prop.relationship === "mother") {
			famGroup.parents.push(prop);
		}
		else {
			famGroup.children.push(prop);
		}
	}
	console.log(famGroup);
	return famGroup;
}

const createFamiy = (famObj) => {
	const allMembers = [];
	for (const prop in famObj) {
		//console.log(famObj[prop]);
		const [last, first, relationship] = famObj[prop];
		const newMember = new FamilyMember(last,first,relationship);
		allMembers.push(newMember);
	}
	console.log(allMembers);
	const famGroup = createFamilyGroup(allMembers);
	return famGroup;
}

const theSmiths = createFamiy(smithFamily);
console.log(theSmiths);
































