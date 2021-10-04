/**
 * Practising DOM - Document Object Model
-	Programming interface for HTML and XML documents
-	Provides a structured representation of the document
-	Defines methods to access the structure and manipulate it
-	Connects webpages to scripts or programming languages
-	DOM is not a programming language, it provides a model of a web page
-	The page content is stored in the DOM and can be accessed and manipulated in JS
 */

/*
	Hieu mot cach don gian thi DOM cung cap mot su dai dien cho mot file van ban (vi du HTML)
	nhu mot Object trong code cua JS hoac Java (cai nay khong chac).
	Vi binding dc element cua HTML voi Object cua JS nen JS co the manipulate rat nhieu thu trong html file
	==> co the noi js se dong vai tro la brain cua trang web, html se la GUI
*/

/*This myjs.js is injected to dom.html and super_basic.html for practising*/

function add (a,b) {
	return a + b;
}
console.log(document); 

//by this way we can access to all the tag <p> paragraph in the html file
//note that myTag after assigned is an array of object
const myTag = document.getElementsByTagName("P");

console.log("LOG #5  " + myTag[0].innerHTML); 
console.log("LOG #6  " + myTag[1].innerHTML); 
console.log("LOG #7  " + myTag[2].innerHTML); 

myTag[2].innerHTML = "I really like banana"

console.log("LOG #8  " + myTag[2].innerHTML); 

/*by this way we can access directly to the element that has the id (unique) "my_p_#4_id" 
in the html file*/
const ID = document.getElementById("my_p_#4_id");

console.log("LOG # 9 ");
console.log(ID);
/*from here ID can be used as object that will be reflected on html file*/

/*inject css code to html*/
const myDiv = document.getElementById("myDiv");

console.log(myDiv);
console.log(myDiv.style);
myDiv.style.color = "green"; 
//khi render no se tu dong insert
//de tro thanh <div id="myDiv" style="color: green;">Some dummy text</div> 
//recall: cach nay goi la inline style

myDiv.style.fontSize = "30px";

const myQueryDiv = document.querySelector("div");
myQueryDiv.style.color = "red";
//kieu nay se override myDiv ben tren
//luu y chi div dau tien duoc ap dung rule
//div thu 2 ko duoc ap dung rule

//test query css class in JS
const myQueryAllDiv = document.querySelectorAll(".henry-class");
console.log(myQueryAllDiv);
console.log(myQueryAllDiv.length);

//iterating through the element
for(const ite of myQueryAllDiv){
	ite.style.color = "orange";
}

//JS DOM có thể query được cả parent của node => ko có giới hạn về scope ở DOM
const myChildNode = document. querySelector(".henry-class");
console.log(myChildNode);
console.log(myChildNode.parentNode); //parent cua span la p
console.log(myChildNode.parentNode.parentNode); //parent cua p la body, rất hợp lý đúng không  

myChildNode.parentNode.style.backgroundColor = "teal";//this will apply to the p element (the parent)

const myParentDiv = document.getElementById("parentNodeOfSpan");
console.log(myParentDiv);
console.log(myParentDiv.childNodes);
console.log(myParentDiv.childNodes[0].parentNode); //traverse up hay down gi cung duoc, kha la thoai mai

//query the id of the element
console.log("myParentDiv.id = " + myParentDiv.id); 

//and modify it as will
myParentDiv.id = "myMommyDiv";
console.log("myParentDiv.id = " + myParentDiv.id); 

//JS co the create element trong html duoc luon .createElement("P") chang han
//suy cho cung HTML cung chi la mot file text thoi, manipulate toi muc do nao ma cha duoc




















