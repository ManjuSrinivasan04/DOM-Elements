//EXAMPLE 1
let myElement = document.getElementById("intro");
document.getElementById("demo").innerHTML = 
"The text from the intro paragraph is " + myElement.innerHTML;

//EXAMPLE 2
let x = document.getElementsByTagName("p");
document.getElementById("demo2").innerHTML = 
'The text in first paragraph (index 0) is: ' + x[0].innerHTML;

//EXAMPLE 3
let w = document.getElementById("main");
let y = w.getElementsByTagName("p");
document.getElementById("demo3").innerHTML = 
'The first paragraph (index 0) inside "main" is: ' + y[0].innerHTML;

//EXAMPLE 4
let z = document.getElementsByClassName("intro");
document.getElementById("demo4").innerHTML = 
'The first paragraph (index 0) with class="intro": ' + z[0].innerHTML;

//EXAMPLE 5
let v = document.querySelectorAll("p.intro");
document.getElementById("demo5").innerHTML = 
'The first paragraph (index 0) with class="intro": ' + v[0].innerHTML;

document.write(Date());