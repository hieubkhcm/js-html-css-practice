/**
 * practising object
 */

var myName = {
	1: "HenryLe",
	'2': "henryece",
};
console.log(myName);

/*hai cach viet duoi day la nhu nhau*/
var myObject = new Object();
var myOtherObject = {};

/*1 va '1' trong luc assign index co ve nhu co ket qua tuong duong*/
myObject[1] = "Chris";
console.log(myObject);
myObject['2'] = "Christiano";
console.log(myObject);

/*cach assign multi data cung luc*/
myOtherObject = {
	1: "my",
	2: "name",
	3: "is",
	4: "Billy"
}
console.log(myOtherObject);

/*object co the mix nhieu loai data types lai (nhu list cua python) 
ke ca object trong object*/
/*moi mot key deu phai la unique, gia tri ben trai*/
var anotherObject = {
	firstName: "Le",
	lastName: "Trung Hieu",
	age: 150,
	phone: "123-321-111",
	numbers: {
		mobile: "348575-1123",
		home: "0008273-23",
	}
}
/*cach truy xuat data cua object cung giong nhu python*/
console.log(anotherObject);
console.log(anotherObject.age);
console.log(anotherObject['age']);
console.log(anotherObject.numbers);
/*assign*/
var testVal = anotherObject.numbers.mobile;
console.log(testVal);


/*test thu cung key trong 1 object*/
/*engine se ignore cai declare thu 2*/
/*function trong object + test kieu design object cua Java*/
var donut = {
	type : "coconut",
	glazed : true,
	sweetness : "10",
	sweetness : "8",
	hasChocolate : true,
	shape : "round",
	shape : "triangle",
	sayHi : function() {
		console.log("Hi");
	},
	getType : function(){
		console.log("Type : " + this.type)
	},
	getSweetness : function() {
		console.log("Sweetness : " + this.sweetness);
	},
}
console.log(donut);
donut.sayHi();
donut.getType();
donut.getSweetness();

/*mot constructor trong js giong nhu mot class trong java - goi la contructor pattern
tuy nhien no giong y nhu class trong java --> eclipse recommend chuyen thanh cach duoi
cach dung y chang nhau*/
function donutContructor(type, glazed, sweetness, hasChocolate) {
	this.type = type;
	this.glazed = glazed;
	this.sweetness = sweetness; 
	this. hasChocolate = hasChocolate;
	this.getType = function() {
		console.log("Type: " + this.type);
	};
	this.getSweetness = function() {
		console.log("Sweetness of " + this.type + " is " + this.sweetness);
	};
}
/*mot cach tuong duong cach tren voi cach khai bao class*/
class donutContructor1 {
    constructor(type, glazed, sweetness, hasChocolate) {
        this.type = type;
        this.glazed = glazed;
        this.sweetness = sweetness;
        this.hasChocolate = hasChocolate;
        this.getType = function() {
            console.log("Type: " + this.type);
        };
        this.getSweetness = function() {
            console.log("Sweetness of " + this.type + " is " + this.sweetness);
        };
    }
}
 
var coconutDonut = new donutContructor("coconut", false, 8, true);
console.log(coconutDonut);
coconutDonut.getType();
coconutDonut.getSweetness();

var vanillaDonut = new donutContructor1("vanilla", true, 10, false);
vanillaDonut.getSweetness();

/*them property vao cho 1 object da ton tai*/
coconutDonut.tasteGood = true;
console.log(coconutDonut);
































