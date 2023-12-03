const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const answer = document.getElementById("answer");
const operation = document.getElementById("operation");

const clear = document.getElementById("clear");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");
const leq = document.getElementById("leq");
const geq = document.getElementById("geq");

clear.addEventListener("click", clearNums);
plus.addEventListener("click", add);
minus.addEventListener("click", subtract);
multiply.addEventListener("click", multiplyIt);
divide.addEventListener("click", divideIt);
leq.addEventListener("click", compareLEQ);
geq.addEventListener("click", compareGEQ);

//all the button functions
function clearNums(){
   num1.value = "";
   num2.value = "";
}

function add(){
   let x = parseFloat(num1.value);
   let y = parseFloat(num2.value);
   operation.innerHTML = "+";
   answer.innerHTML = " = " + (x+y);
}   

function subtract(){
   let x = parseFloat(num1.value);
   let y = parseFloat(num2.value);
   operation.innerHTML = "-";
   answer.innerHTML = " = " + (x-y);
}

function multiplyIt(){
   let x = parseFloat(num1.value);
   let y = parseFloat(num2.value);
   operation.innerHTML = "x";
   answer.innerHTML = " = " + (x*y);
}

function divideIt(){
   let x = parseFloat(num1.value);
   let y = parseFloat(num2.value);
   operation.innerHTML = "&divide";
   answer.innerHTML = " = " + (x/y);
}

function compareLEQ(){
   let x = parseFloat(num1.value);
   let y = parseFloat(num2.value);
   operation.innerHTML = "&#8804";
   if(x<=y){
      answer.innerHTML = " = true";
   }
   else{answer.innerHTML = " = false";
   }   
}

function compareGEQ(){
   let x = parseFloat(num1.value);
   let y = parseFloat(num2.value);
   operation.innerHTML = "&#8805";
   if(x>=y){
      answer.innerHTML = " = true";
   }
   else{answer.innerHTML = " = false";
   }
}