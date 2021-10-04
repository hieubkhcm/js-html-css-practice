//destructuring :: hiểu như 1 kiểu gán ngược giá trị
const myDesArray = [1,2,3];
const [a,b,c] = myDesArray; //a,b,c là ba giá trị const đó nha, ko thay đổi được sau khi gan tri lan dau tien
console.log("a,b,c = " + a + " " + b + " " + c);
//swapping chi dung duoc cho let thoi, const no khong chiu??
let aa = a;
let bb = b;
[aa,bb] = [bb,aa];
console.log("aa,bb = " + aa + " " + bb);

let [hi,there,baby] = myDesArray;
console.log("hi,there,baby = " + hi + " " + there + " " + baby);
[hi,there,baby] = [there, baby,hi];
console.log("hi,there,baby = " + hi + " " + there + " " + baby);

const banhMiThit = () => ["banh","mi","thit"];
console.log(banhMiThit);
const [banh,mi,thit] = banhMiThit();
console.log(banh + " " + mi + " " + thit);

//tim hieu ham filter() no na na nhu ham map. cung iterable de duyet theo array duoc, va cung han () => {} duoc
function filterBanhMiThit (arr, term) { //argument vao arr ma khong phai Array thi se bao loi do nha
	return arr.filter( (t) => t === term );
};

const [result] = filterBanhMiThit (["banh","mi","thit"],"thit");
console.log(result);

const [resultbanhMi] = filterBanhMiThit( banhMi = banhMiThit() ,"mi");
//trong truong hop nay banhMi la mot array nen moi chay dc filter
console.log(resultbanhMi);

//Object destructuring
const myObj = {
	firstName : "chuoi",
	lastName : "chien",
	age : "18",
	height : "180cm"
};

const {lastName,age:tuoitac,height} = myObj; // khong nhat thiet phair parsing day du all cac attr
console.log(lastName,tuoitac,height);

//arg as an object

function sayIfValid ({prop : s , all}) {
	
	console.log(s, all);
}

sayIfValid({prop : "I am valid"}); 
sayIfValid({proop : "I am not valid"}); //key value la phai giong nhu arg

const myObj6 = {
	prop : "I am valid ES6",
	Prop : "I am not valid",
	all : "  am I valid?, yessss, if I match the key"
}
sayIfValid(myObj6); // it nhat co 1 key match, khong nhat thiet toan bo Object phai match 100%,
//ES6 match argument dua tren KEYYYYYYYYYY

const myObj7 = {
	title : "My address book",
	entries : [
	{
		name : "Bob",
		number : "555"	
	},
	{
		name : "Billy",
		number : "666"	
		
	},
	{
		name : "Jean",
		number : "777"	
	}
	],
	entries2 : [
	{
		name : "Bob",
		number : "555"	
	},
	{
		name : "Billy",
		number : "666"	
		
	},
	{
		name : "Jean",
		number : "777"	
	}
	]
}

const {title, entries : [{name : nnn, number}], entries2} = myObj7;
console.log(title);
console.log(nnn, number);
console.log(entries2);

for (const {name, number} of entries2) { //entries la Array of Object nen iterable
	console.log(`Name : ${name} \nNumber: ${number}`); //dung templeta truy xuat cho nhanh
}
for (const {name : n, number} of entries2) { //entries la Array of Object nen iterable
	console.log("Name : " + n + "\nNumber: " + number); //khong dung templeta
}

































