//EXAMPLE 1
document.getElementById("myBtn").addEventListener("click", displayDate);

function displayDate() {
  document.getElementById("demo").innerHTML = Date();
}

//EXAMPLE 2
let x = document.getElementById("myBttonn");
x.addEventListener("click", myFunction);
x.addEventListener("click", someOtherFunction);

function myFunction() {
  alert ("Hello World!");
}

function someOtherFunction() {
  alert ("This function was also executed!");
}


//EXAMPLE 3
let x1 = document.getElementById("myBtn2");
x1.addEventListener("mouseover", myFirstFunction);
x1.addEventListener("click", mySecondFunction);
x1.addEventListener("mouseout", myThirdFunction);

function myFirstFunction() {
  document.getElementById("demo2").innerHTML += "Moused over!<br>";
}

function mySecondFunction() {
  document.getElementById("demo2").innerHTML += "Clicked!<br>";
}

function myThirdFunction() {
  document.getElementById("demo2").innerHTML += "Moused out!<br>";
}


//EXAMPLE 4
let p1 = 5;
let p2 = 7;

document.getElementById("myBtn3").addEventListener("click", function() {
  myNewFunction(p1, p2);
});

function myNewFunction(a, b) {
  var result = a * b;
  document.getElementById("demo3").innerHTML = result;
}