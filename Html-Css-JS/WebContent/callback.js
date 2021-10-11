/*
- a function that is passed to another function as parameter
- is called at some point in the execution time
- is some specific point the is inside the containing function body

- Callback giống như là sắp lịch cho các phần của code chạy, cái này xong rồi mới tới cái kia
- Callback là vậy đó, y như java vậy thôi
*/

function shouldGoFirst(callBack){
	setTimeout(() => {
		//callBack();
		console.log("I should go first");
		callBack();
	}, 1000);
	//callBack();
}

function shouldGoSecond() {
	console.log("I should go second");
}

//giải thích:: callBack() giống như lồng 1 hàm vào trong 1 hàm khác thế thôi, với đại diện của hàm 
//là tên được tự đặt thoải mái, trong trường hợp này tên là callBack

//callback giúp đảm bảo tỉnh tuần tự của một số công việc cần phải làm theo tuần tự

// shouldGoSecond la pointer/reference của function shouldGoSecond
shouldGoFirst(shouldGoSecond); 

function sumUpNumber(num1, num2, callBack) {
	let summedValue;
	
	//setTimeout sẽ ngay lập tức skip qua function trong, và đợi tới khi 1000ms trôi qua nó mới QUAY LẠI thực thi 
	// --> phát sinh vấn đề bất đồng bộ trong đây ASYNCHRONOUS
	setTimeout(()=> {
		summedValue = num1 + num2;
		callBack(summedValue); // ----> đưa vào đây để chờ đợi khi đã có num 1 + num2
		//num1 + num2 :: có thể là đợi respond từ HTTP get chẳng hạn
	}, 100);
	//callBack(summedValue); // ---> undefined :: do chua co num1 va num2
}

function logSummedValue(val) {
	console.log(`The summed total is : ${val}`);
}

sumUpNumber(10, 14, logSummedValue);


////////////////////////////////////////////////////////////
//	Some REST API simulator
////////////////////////////////////////////////////////////

const myDiv = document.getElementById("main"); //1. bindind the element div from the DOM HTML
const myButton = myDiv.querySelector("button"); //2. binding the button to a const
const myPara = document.getElementById("content");
myButton.addEventListener("click", myButtonFunction); // 3. add a listener to the event clicking on the button

function myButtonFunction() { // 4. when button is clicked :: invoke the function requestData()
	console.log("Button Clicked!");
	requestData(populateDOM); // 7. callback :: populateDOM is injected into the serTimeout and then 
	//display the data onto the HTML element <p>
}

//dummy server API 
const fakeData = {
	text : "This is some dummy data plays as the role of data that will be sent back from server API",
	
}
function requestData(callBack){ // 5. requestData will send request (skipped) and wait for respond from the server (simulation)
	//fake server request and respond
	let data = "loading...";
	callBack(data);
	setTimeout( () => { // 6. after 2000ms :: server will repond the data to client
		//respond from server
		const data = fakeData.text;
		callBack(data);
	}, 2000);
	
}

function populateDOM(data){
	myPara.innerText = data;
}

///////////////////////////////////////////////
//		promise								 //
///////////////////////////////////////////////

// - a function that will pass to another function as a parameter
//promise is similar callback, acting as a handler
//a promis exists in these states:
// pending, fulfilled, rejected
// can associate a handler with an async action



//promise theo một nghĩa nào đó được hiểu như là một kỹ thuật lập trình hơn là dạng syntax

const testPromise = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("promise OK!");
	}, 1000);
});

testPromise.then((resolveMessage) => { //then dùng để invoke thằng function nằm bên trong promise
	console.log(`look like : ${resolveMessage}`);
});

console.log("I should run after the promise is resolved");
















