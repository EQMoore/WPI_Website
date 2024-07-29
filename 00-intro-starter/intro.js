// This is the JavaScript code
// GUIDELINES:
//  1. Give every variable/const smallest scope
//  2. Grab HTML elements by tag and store in const
//  3. Put all other code inside functions
const interactiveText = document.getElementById("interactive");
const checkbox = document.getElementById("outline-checkbox");
const body = document.body;
var keyPress;
var Dir;
function interactiveTextSwitcher(){
 interactiveText.innerHTML = "Wow it was interactive" ;
 interactiveText.className = "orange" ;
}
function checkboxChanged(){
    if (checkbox.checked){
        body.className = "dark" ;
    }
    if (!checkbox.checked){
        body.className = "normal" ;
    }
}
window.addEventListener('keydown', function (e) {
  if(!e.repeat){
    if(e.key == "w"){
        console.log("Moving up");
        Dir = "up";
    }
    else if(e.key == "a"){
        console.log("moving right");
        Dir = "right";
    }
    else if(e.key == "s"){
        console.log("moving down");
        Dir = "down";
    }    
    else if(e.key == "d"){
        console.log("moving left");
        Dir="left";
    }
  }
}, false);


