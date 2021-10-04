/*
	- uses the throw statement to throw own exception
	- You specify the expression containing the value to be thrown
	- Can throw any exception
*/
const myObj = {a : 1, b : 2};
try {
/*	myObj.map((o)=> {
		console.log(o);
	});*/
	throw "My error";//ném error nè
}
catch (e){ //chụp nè
	console.log(e); 
}

const myObj1 = {
	hi : "hello"
};

//throw myObj1;//throw Object

function MyExp(msg) {
	this.msg = msg;
	this.toString = function(){
		return this.msg;
	}
}

try {
	throw new MyExp("hey, this is invalid");
}
catch (e){
	console.log(e);
}




//most simple try catch
try {
	throw "Exception!";
}
catch (e){
	console.log(e);
}

let myNum = 20;

function checkIfNum(num) {
	if (isNaN(num)){
		throw "not a number";
	}
	else
	{
		console.log("yes, it is a number");
	}
}


try {
	checkIfNum("String");
}
catch (catchID){
	console.log("Catch an error " + catchID);
}
checkIfNum("String");



















