
const myDiv = document.getElementById("planet");
const myButton = myDiv.querySelector("button");

myButton.addEventListener("click", getPlanet);

function getPlanet(){
	
	const randomNum = Math.floor(Math.random() * 10) + 1;
	
	fetch(`https://www.swapi.tech/api/planets/${randomNum}/`)
		.then(data => data.json())
		.then(data => populatePlanet(data))
		.catch(e => console.error(e.message));
}

function populatePlanet(planetObj){
	
	//const { name , climate , terrain , population , orbital_period } = planetObj;
	
	const newParagraph = document.createElement("p");
	newParagraph.innerText = planetObj.result.properties.name;
	myDiv.appendChild(newParagraph);//có vẻ như nó sẽ chèn một element p với nội dung là planetObj.name vào trong paragraph đó
}	

// về hàm tạo object Set() : giúp tạo ra Object một cách dễ dàng hơn
let set = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

// visits, some users come multiple times
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

// set keeps only unique values
console.log( set ); // Set(3) {{…}, {…}, {…}} / kiểu object của objects --> super object haha!

		
		