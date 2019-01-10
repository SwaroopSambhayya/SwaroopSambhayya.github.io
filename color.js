var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var in1=document.querySelector(".color1");
var in2=document.querySelector(".color2");
var ini1=in1.getAttribute('value');
var ini2=in2.getAttribute('value');
var rand=document.querySelector("#ran");

body.style.background = 
"linear-gradient(to right, " 
+ ini1 
+ ", " 
+ ini2
+ ")";
css.textContent = body.style.background + ";";
function gen(){
	
	console.log('hello')
    
	inil="#ffff00";
	ini2="#000FFF";
	body.style.background = 
	"linear-gradient(to right, " 
	+ ini1 
	+ ", " 
	+ ini2
	+ ")";
	css.textContent = body.style.background + ";";
	
	
}   

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);
rand.addEventListener("click",gen);