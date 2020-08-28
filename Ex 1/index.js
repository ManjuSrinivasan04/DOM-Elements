//EXAMPLE 1 
document.getElementById("demo").innerHTML = "Hello World!EXAMPLE 1";

//EXAMPLE2
let element = document.getElementById("id01");
element.innerHTML = "New Heading EXAMPLE 2";

//EXAMPLE 3
document.getElementById("p2").style.color = "blue";
document.getElementById("p2").style.fontFamily = "Arial";
document.getElementById("p2").style.fontSize = "larger";


function changeText(id) {
    id.innerHTML = "Ooops!";
  }

  function displayDate() {
    document.getElementById("demo").innerHTML = Date();
  }

  document.getElementById("myBtn").onclick = displayDate;

function displayDate() {
  document.getElementById("dem").innerHTML = Date();
}

function myFunction() {
  let el = document.getElementById("fname");
  el.value = el.value.toUpperCase();
}

function mDown(obj) {
    obj.style.backgroundColor = "#1ec5e5";
    obj.innerHTML = "Release Me";
  }
  
  function mUp(obj) {
    obj.style.backgroundColor="#D94A38";
    obj.innerHTML="Thank You";
  }

  function mOver(obj) {
    obj.innerHTML = "Thank You"
  }
  
  function mOut(obj) {
    obj.innerHTML = "Mouse Over Me"
  }