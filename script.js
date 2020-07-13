var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setBackgroundColor(origen) {
	var colorOne = null;
	var colorTwo = null;

	if (origen === 'frominput') {
		colorOne = color1.value;
		colorTwo = color2.value;
	} else {
		colorOne = generateRandomHexColour();
		colorTwo = generateRandomHexColour();
	}

	body.style.background = 
		"linear-gradient(to right, " 
		+ colorOne 
		+ ", " 
		+ colorTwo 
		+ ")";

	css.textContent =  body.style.background + ";";
}

//3. BONUS: Add a random button which generates two random numbers for the colour inputs.
function generateRandomHexColour() {
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}