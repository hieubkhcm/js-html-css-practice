/*
Any event that take place in the DOM
Can be user generated or by an API
Many types of events
Event contain properties and methods

Hiểu theo nghĩa là event sẽ được ánh xạ như một object trong code Javascripts

addEventListener function takes in the event to listen for and a second ardument to be called 
whenever the described fires an event
*/ 
function logEvent(e){
	console.log("logEvent = "+ e.type);
}
document.addEventListener("click", function(event){
	console.log("document is Clicked!");
	logEvent(event);
});

const clickyDiv = document.getElementById("clicky");
clickyDiv.addEventListener("click", function(){
	console.log("Div is Clicked!");
	console.log(event);
	console.log("event.type is " + event.type);
});

const clickableButton = document.getElementById("myButton");
clickableButton.addEventListener("click", function(){
	console.log("Button is Clicked!");	
});

clickableButton.addEventListener("focus", function(event){
	console.log(event);
});

clickableButton.addEventListener("focusout", function(event){
	console.log(event.type);
});

const changableButton = document.getElementById("myClickableButton");

changableButton.addEventListener("click", changeTestFunc);

function changeTestFunc(event){
	changableButton.innerText = event.timeStamp;
	console.log(event);
	//changableButton.removeEventListener("click", changeTestFunc);
	console.log("changeTestFunc(event) = " + event.type);
}

const bckgrnd = document.getElementById("background");

//bckgrnd.addEventListener("mousedown", switchBackground);
document.addEventListener("click", switchBackground);

//giải thích: kiểm tra xem event click này được invoke bởi đối tượng nào
//nếu là document thì sẽ rơi vào else
//nếu click lên bckgrnd <=> click vô element có id "background
//thì hasBeenClicked sẽ bằng true do event click này thuộc về element "background"
function switchBackground(event){
	console.log(event);// field which của object MouseEvent là để bắt phím nào của chuột
	//được dùng để click, 1:chuột trái 2: chuột giữa 3:chuột phải	
	
	const hasBeenClicked = bckgrnd.contains(event.target);
	console.log(hasBeenClicked);
	
	if (hasBeenClicked) {
		bckgrnd.classList.add("background-color")
	}
	else {
		bckgrnd.classList.remove("background-color");
	}
}

const listItemsUL = bckgrnd.querySelector("UL");
listItemsUL.addEventListener("click", addGreenBackground);

const allLIs = bckgrnd.querySelectorAll("LI");
function addGreenBackground(event){
	event.stopPropagation(); //ko invoke event của đối tượng parent
	const targetLI = event.target;
	
	if (targetLI.nodeName === "UL")	return; 
	
	//khi bấm vào một element mới trong list thì xóa toàn bộ đặc tính green của list
	//sau đó cho một mình đối tượng dc click lên green thôi
	
	//cách 1:
	/*for (const prop of allLIs) {
		prop.classList.remove("green");
	}*/
	
	//cách 2:
	//tìm tất cả các đối tượng có đặc tính green --> bỏ green đi
	// sau đó add đặc tính green vô lại đối tượng vừa được click
	const green = document.querySelector(".green");
	
	console.log(event.target);// field which của object MouseEvent là để bắt phím nào của chuột

	if (green)
		green.classList.remove("green");
	targetLI.classList.add("green");
}


const bckgrnd2 = document.getElementById("background2");
const allLIs2 = bckgrnd2.querySelectorAll("LI");
console.log(allLIs2);

for (const prop of allLIs2){
	prop.addEventListener("click", function(event) {
		event.stopPropagation(); //ko invoke event của đối tượng parent
		console.log("clicked!" + event.target);
		console.log(this);

	});
}

const div2 = document.getElementById("div2");
const myLink = div2.querySelector("a");

myLink.addEventListener("click", function(event){
	event.preventDefault();
	alert("Not today!");
});

const myForm = document.getElementById("myForm");
myForm.addEventListener("submit", addToList);
function addToList(event){
	event.preventDefault();
	const myInput = document.getElementById("myInput").value;
	console.log(myInput);

	//tao them mot element trong document
	const newLI = document.createElement("li");
	newLI.innerText = myInput;
	console.log(newLI);
	listItemsUL.appendChild(newLI); //append to list ben tren thoi nha
	//List ben duoi chua co binding vo JS
	myForm.reset(); // lenh nay de clean gia tri trong cai o input
}





















