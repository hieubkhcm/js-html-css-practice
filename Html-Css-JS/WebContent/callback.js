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
	if (Math.random() > 0.5){
		reject("promise no good! Rejected");
	}
	setTimeout(() => {
		resolve("promise OK!"); //giống như callback tại vị trí này!
	}, 3000);
});

testPromise.then((resolveMessage) => { //then dùng để invoke thằng function nằm bên trong promise
	console.log(`look like : ${resolveMessage}`);
}).then(() => {
	console.log("I should run after the promise is resolved");
}).catch((rejectMessage) => { //nếu có reject thì sẽ được catch tại chỗ này , nếu resolve "hòa giải" hay còn có ý nghĩa là 
// thực hiện lời hứa --> thì chỗ function resolveMessage sẽ được invoked
	console.log(`error: ${rejectMessage}`)});


function numAdder(n1, n2) {
	return new Promise ((resolve , reject ) => {
		const addedNums = n1 + n2 ;
		console.log("this line is before the setTimeout")
		
		setTimeout(() => {
			resolve (addedNums);
		}, 3000);
		
		console.log("this line is after the setTimeout")
		//nhận xét: hai dòng console đều được log ra ngay lập tức -> chỉ có mỗi setTimeout là được delay lại 3s
	});
}

function numSquarer(num){
	return new Promise((resolve, reject) => {
		if (Math.random() > 0.5) {
			reject("nope");
		}
		setTimeout(() => {
			resolve(num * num);
		}, 3000);		
	})
}


// numAdder called -> tính toán phép cộng, đợi 3s -> resolve "thực hiện lời hứa" -> trả lại giá trị phép cộng như lời hứa 
// -> giá trị phép cộng gán vô data như 1 argument -> được in ra bới console.log và template
// giá trị return được sau đó lại tiếp tục call 1 promise numSquarer -> tiếp tục parse vào then tiếp theo tạo thành 1 chuỗi
numAdder(12, 2)
	.then((data)=>{ // data là giá trị được return từ resolve của numAdder()
		console.log(`Added total : ${data}`);
		return numSquarer(data);
	})
	.then((moreData) => { //moreData là giá trị được return từ resolve của numSquarer
		console.log(moreData);})
	.catch((err) => console.log(err));
	

//Promise.resolve().then(() => console.log("data"));

const myPromise = Promise.resolve([10, 20, 30]); // cách viết promise resolve ngay lập tức -> lấy giá trị return từ resolve để 
 												// tận dụng method then() --> parsing vào các func tiếp theo qua .then()
myPromise
	.then((nums) => nums.map(num => num * 10))
	.then(transTheNums => console.log(transTheNums));

const p1 = Promise.resolve("A");
const p2 = Promise.resolve("B");
const p3 = Promise.resolve("C");

Promise.all([p1, p2, p3])
	.then(data => console.log(data)) //all sẽ đợi tất cả các promise dc resolve mới nhảy vô then()
	.catch();	//nếu một trong ba thím bị reject thì cả đám sẽ chạy vô catch()
// tận dụng thêm map() để gán nhiều return từ nhiều promise vào làm 1 array ['A', 'B', 'C'] -> rất tiện dụng khi giao tiếp với REST API


























