function equal() {

    const number1 = document.getElementById('test-1').value
    const number2 = document.getElementById('test-2').value
    const total = parseInt(number1) + parseInt(number2);
    document.getElementById('display-1').innerText = total

}
function checkCondition() {

    const text1 = document.getElementById('test-3').value
    const text2 = document.getElementById('test-4').value
    if (text1 == text2) {
        document.getElementById('display-2').innerText = "Equal"

    } else {

        document.getElementById('display-2').innerText = "Not Equal"
    }



}
function checkCondition2() {

    const text1 = document.getElementById('test-5').value
    const text2 = document.getElementById('test-6').value
    if (text1 < text2) {
        document.getElementById('display-3').innerText = "Greater Than"

    } else if (text1 == text2) {

        document.getElementById('display-3').innerText = "Equal"
    } else {
        document.getElementById('display-3').innerText = "Less Than"

    }



}
function addition() {
    const number = document.getElementById('test-7').value
    let sum = 0;
    for (let i = 0; i < number.length; i++) {
        sum += parseInt(number[i]);

    }
    document.getElementById('display-4').innerText = sum
}
function checkMarks() {
    const mark = document.getElementById('test-8').value
    if (mark >= 75) {
        document.getElementById('display-5').innerText = "A"
    } else if (mark >= 65) {

        document.getElementById('display-5').innerText = "B"
    } else if (mark >= 45) {

        document.getElementById('display-5').innerText = "C"
    } else if (mark >= 35) {

        document.getElementById('display-5').innerText = "S"
    } else {
        document.getElementById('display-5').innerText = "Fail"
    }
}

function checkJob() {
    let fullName = "";
    const job = document.getElementById('test-9').value

    switch (job) {
        case 'intern':
            fullName = "Intern Software Engineer";
            break;
        case 'ase':
            fullName = "Associate Software Engineer";
            break;
        case 'se':
            fullName = " Software Engineer";
            break;
        case 'sse':
            fullName = "Senior Software Engineer";
            break
        case 'atl':
            fullName = "Assistant Tech Lead";
            break;
        case 'tl':
            fullName = "Tect lead";
            break;
        default:

            fullName = "Error Key Word...";
            break;

    }
    document.getElementById('display-6').innerText = fullName;
}
function getinput() {
    const input= document.getElementById("test-10").value;
    const arr=[]
     for(let n = 0; n< input.length; n++) {
       
     arr.push(input[n])
    }
    
    document.getElementById('display-7').innerText = arr;
}
const numArray =[]

function arrayPush(){
const userInput=document.getElementById("test-11").value;
numArray.push(userInput);
document.getElementById("").value="test-11";
}
function arrayPrint(){
    document.getElementById("display-8").innerText=numArray;

}
function login(){
    const unm="adMin";
    const pw="12345";

    const username=document.getElementById("test-12").value; 
   
    const password=document.getElementById("test-13").value;  
   let ms=""
if(unm.toLowerCase()==username.toLowerCase()&& pw.toLowerCase()==password.toLowerCase()){
  ms='login success..!'

}else{
  ms='Login Fail'  
}
document.getElementById('display-9').innerText=ms; 
}


document.getElementById("test-14").value=Math.round( Math.random()*100);
document.getElementById("test-15").value= Math.round( Math.random()*100);
function AditionNumbers(){
    
   const num1=parseInt(document.getElementById("test-14").value)
   const num2=parseInt(document.getElementById("test-15").value)
   document.getElementById('display-10').innerText=num1+num2 ;
}

let array=[];
for(var i=0;i<50;i++){
array.push(Math.round(Math.random()*100))
}
document.getElementById ('random-display').innerText=array;
function randomGenarate(){
    const num=parseInt(document.getElementById("test-16").value);
    let result=[];
    for(let w=0;w<array.length;w++){

        if(array[w]%num==0){
            result.push(array[w]);
        }
    } 
    document.getElementById ('display-11').innerText=result;
}