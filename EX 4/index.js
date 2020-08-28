console.log(document.body.innerHTML);//document.body - The body of the document

document.getElementById("id02").innerHTML = document.getElementById("id01").firstChild.nodeValue;

console.log(document.documentElement.innerHTML);//document.documentElement - The full document

document.getElementById("id02").innerHTML = document.getElementById("id01").nodeName;//H1

document.getElementById("id02").innerHTML = document.getElementById("id01").nodeType;//1

let myCollection = document.getElementsByTagName("p");
document.getElementById("demo").innerHTML =
"The innerHTML of the second paragraph is: " +
myCollection[1].innerHTML;

function myFunction() {
    let myCollec = document.getElementsByTagName("h1");
    let i;
    for (i = 0; i < myCollec.length; i++) {
      myCollec[i].style.color = "red";
    }
  }


let  myNodelist = document.querySelectorAll("p");
document.getElementById("demo").innerHTML =
"This document contains " + myNodelist.length + " paragraphs.";