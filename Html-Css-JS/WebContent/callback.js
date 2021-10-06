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




















