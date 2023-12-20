console.log("External sript.........")

document.write("ACPT")
document.write("<br>")
document.write("AFSD")

document.write("<h1>ACPT</h1>")

document.write("<button>Click Me</button>")

// alert("Dula")

// Numbers
const gh = 12.5;

// String
const dtring = "Dula"

//boolean
const boo = true

// object
const obj = {
    name: "Dulanjali",
    run: function () {


    }

}

// array
const array = [12, 45, "ACPT", obj]
const array1 = ["gihan", "apsara", "ACPT", obj]
console.log(array1);

// Var/Let/Const
//let 
let l = 10;
// can not redeclared
// let l=12'\;

{ let ll = 100 };

// console.log(ll);
l = 30;
console.log(l);

// var
var v = 23;
// can redeclared
var v = 200;
console.log(v);
//reassign
v = 45;
console.log(v);

{ var vv = "text" }
console.log(vv);

//const
const c = 65;
// c=86;

// const c="Dulanji"
{ const cc = 23 }
// console.log(cc);

// arithmetic operators
//Addition(+)
const a = 12;
const b = 23;
const addition = a + b;
console.log(addition);
//substraction(-)
const substract = b - a;
console.log(substract);

// Multiflication(*)

const multi = a * b;
console.log(multi);

//Divition(/)
const div = b / a;
console.log(div);

//Modulas
const mod = b % a;
console.log(mod);

//Increment
let h = 10;
h++
h++
console.log(h);
//Decrement
let n = 20;
n--
n--
console.log(n);

// Comparison Operators
const e = 14;
const d = 13;

//Equal(==)
console.log("Equals = ", e == d);
//not eqals
console.log("Equals = ", e != d);
//Greater than
console.log("Greater than = ", e > d);
//Less than
console.log("Less than = ", e < d);
//Greater than or Equal to(>=)
console.log("Greater than or Equals to = ", e >= d);
//Less than or Equal to(>=)
console.log("Less than or Equals to = ", e <= d);

//logical operators
const y = true;
const x = false;
//AND (&&)
console.log("AND =", y && x);

// OR (||)
console.log("OR =", y || x);
//NOT(!)
console.log("NOT =", !y);

//Function
function myName(name1, name2, name3) {
    console.log("Student 1 name is : ", name1);
    console.log("Student 1 name is : ", name2);
    console.log("Student 1 name is : ", name3);
    console.log("---------------------------");
}




// const myName=()=>{
// console.log("Print Arrow function");
// }
myName("kasun", "Dasun", "kamal");
myName("Gayani", "Apsara", "Gihani");



// function numberEqal(num1,num2) {
//     console.log("Sum of ",num1+num2);

// }
// numberEqal(12,34);

//return function
function numberEqal(num1, num2) {
    const equal = num1 + num2;
    return equal;

}
const result = numberEqal(15247, 6521);
console.log(result);

console.log(numberEqal(20, 40));

// Flow controlers

// if
const stud = 600;
const stud1 = 400;
if (stud > stud1) {
    if (stud1 > 100) {
        console.log("yes");
    }

}
else if (stud == stud1) {
    console.log("2=======");
}
else {
    console.log("3=======");
}
//switch
const val = "AFSD";
switch (val) {
    case "ACPT":
        console.log("1------");
        break;
    case "AFSD":
        console.log("2------");
        break;
    default:
        break;
}
//for loop
const arr = [12, 34, 87, 65];
for (let i = 0; i < arr.length; i++) {

    console.log(arr[i]);
}
//while
let stu = 0;
while (stu < arr.length) {
    console.log(arr[stu]);
    stu++;

}
let child = 0;
do {
    console.log(arr[child], "**********");
    child++;
} while (child < arr.length);

for (let i = 0; i < arr.length; i++) {

    console.log(arr[i]);
    if (arr[i] == 34) {
        break;

    }
}

//object
const person = {
    name: "Dula",
    address: "maduragoda",
    id: "906821893",
    age: "30",
    run: function () { console.log("run"); },
    eat: function () { console.log("eat"); },
    sing: function () { console.log("sing"); }
}
const name1 = person.id
console.log(name1);
person.run();
person.eat();
person.sing();

//array
const arr1 = [45, "Dula", true, person];
console.log(arr1[3].name);
arr1[3].run()

const fruits=["Banana","Orange","apple","Mango"];
// const fruit=fruits.pop();
// console.log(fruit);
// console.log(fruits);

// fruits.push("Kiwi");
// console.log(fruits); 

// const fruit=fruits.shift();
// console.log(fruit);
// console.log(fruits); 

// fruits.unshift("Kiwi");
// console.log(fruits);


// dom manupulation

//onClick
function clickMe() {
    console.log("Click Button");
    // document.write("click Button");
}
//onchange
const changeText = () => {
    const text = document.getElementById('changeText').value
    document.getElementById('viewText').value = text
    console.log(text);

}
// onmouseOver
const mouseOver = () => {
    document.getElementById('mouse').style.backgroundColor = 'red';
    document.getElementById('mouse').style.width = '300px';
}
//mouseOut
const mouseOut = () => {
    document.getElementById('mouse').style.backgroundColor = 'blue';
    document.getElementById('mouse').style.width = '200px';
}
const keyDown = () => {
    console.log("key down...");
}
const keyUp = () => {
    console.log("key up...");
}
const keypress = () => {
    console.log("key press...");
}
const changeName = () => {
    const text = document.getElementById('change-name').value
    document.getElementById('display-1').innerText = text
    //console.log(text);

}
