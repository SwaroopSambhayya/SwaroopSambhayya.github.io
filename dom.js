var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var undo=document.getElementById("undo");
var len=document.querySelectorAll("li").length;
function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var br=document.createElement("br");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	var but=document.createElement("button");
	but.appendChild(document.createTextNode("delete"));	
	li.appendChild(but);
		input.value = "";
		but.onclick=removeParent;
		
	
}
ul.onclick=function(event){
	//console.log(event);
	var target=event.target;
	//console.log(event.target);
	target.classList.toggle("done");
}
function removeParent(evt){
	evt.target.parentNode.remove();
} 

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}
function undolist(){
	var  li=document.querySelector("li");
	li.parentNode.removeChild(li);
}
function strikeit(){
	strike.classList.toggle("done");
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
undo.addEventListener("click",undolist);
