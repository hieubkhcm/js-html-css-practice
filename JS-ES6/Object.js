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
var donut = {
	sweetness : "10",
	sweetness : "8",
	shape : "round",
	shape : "triangle"
}
console.log(donut);
































