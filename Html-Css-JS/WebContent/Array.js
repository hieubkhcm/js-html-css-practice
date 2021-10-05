/**
 * Array is just a collection of data
 */

/*a sample array*/
var myArray1 = [1, 2, 3, "random string", "aksdjf as", true];
console.log(myArray1);
console.log(myArray1.length);

/*mot do cach khai bao Array trong JS -- luu y Array la mot Object, khong phai primity data*/
var myNamesArray = new Array();
myNamesArray[0] = "Chris";
myNamesArray[1] = "Mas";
myNamesArray[5] = "HPNY";
console.log(myNamesArray);
console.log(myNamesArray.length); //ra 6 --> do no tu dong gan empty gia tri cho cac gia tri o giua
console.log(myNamesArray.length[10]); //undefined // kieu gia tri chua duoc gan, pointer NULL

/*mot cach khai bao array truc tiep trong JS*/
myNamesArray = ["Chris", "Mas" , "Tree" , "in" , "The", "town"];
console.log(myNamesArray);

/*push mot String vao cuoi Array*/
myNamesArray.push("Bob", "Jack");
console.log(myNamesArray);

/*push mot const vao cuoi Array*/
myNamesArray.push(1234);
console.log(myNamesArray);

/*lay gia tri dau stack cuar Array*/
console.log(myNamesArray.pop());

/*kiem tra coi gia tri top cua stack con hay bi poped mat*/
console.log(myNamesArray);

/*push Array vao trong Array*/
myNamesArray.push(["1","2","3"]);
console.log(myNamesArray);

/*acess to the member of an array*/
console.log(myNamesArray[8][1]);

/*sort xong la array se bi thay doi luon, khong nhu Java la no se gan vo 1 null pointer*/
var sortedArray = myNamesArray.sort();
console.log("myNamesArray = "+myNamesArray); //sort thay doi original Array, be careful
console.log(sortedArray.sort());
console.log(sortedArray.reverse());

/*concate 2 Arrays*/
//sau khi concate, new Object can duoc gan chu ko gan tu dong nhu sort()
var myOtherNamesArray = ["Ti", "Teo", "Banh", "Beo"];
var myEvenMoreNamesArray = ["kem", "chuoi" , "socola", 1234];
var myTempArray = myNamesArray.concat(myOtherNamesArray,myEvenMoreNamesArray);
console.log("myTempArray = " + myTempArray); //concate nhieu array cung luc
//console.log(myNamesArray);


/*slicing an Array*/
var slicedArray = myTempArray.slice(1,3); //lay tu index 1 toi truoc index 3
console.log(slicedArray);

/*join Array member as String - khong phan biet so va chu*/
var jointArray = myTempArray.join("+");
//console.log(myTempArray); //join() khong anh huong len Array original
console.log(jointArray);

/*coombine hai Array lai thanh 1 Array moi*/
var myName = [myOtherNamesArray, myEvenMoreNamesArray];
console.log(myName);
console.log(myName.length); // 2 :: nghia la moi 1 Array la mot member cua Array moi
console.log(myName[1]); 









