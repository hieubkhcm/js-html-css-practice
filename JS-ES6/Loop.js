/*demo for loop with label and how to break from the inner and outer loop*/
outerLoop:
for (let i = 0; i < 10; i++){
	console.log("Loop # " + i);
	innerLoop:
	for (let a = 0; a < 10; a++){
		console.log("Inner Loop # " + a);
		if (a > 2) break innerLoop;
		if (i > 3) break outerLoop; 
	}
}

/*scanning through array*/
console.log("\n\nTesting object ==================");
const myObject = {1: "Henry", b : "Tina", O : "Banh Beo"};
for (let scanner in myObject)
{
	console.log(scanner);
	console.log(myObject[scanner]);
}


/*scanning through array*/
console.log("\n\nTesting Array ===================");
const myArray = ["Henry","Tina", "Banh Beo"];
for (let scanner in myArray)
{
	console.log(scanner);
	console.log(myArray[scanner]);
}

console.log("\n\nTesting For Of ===================");
//Thuc ra bat cu Object nao la extends tu iterable deu xai for-of duoc
for (let scanner of myArray)
{
	console.log(scanner);
	//console.log(myObject[scanner]);
}

/*forEach*/
console.log("\n\nTesting forEach() ===============");
myArray.forEach((mem) => {
	console.log(mem);
})











