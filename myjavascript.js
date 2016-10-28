
function applyStyling() {
	var paragraph = document.getElementById("javascriptfun");
	paragraph.innerHTML = 'I am randomly appearing!';
	paragraph.style.color = "green";
	paragraph.style.fontSize = "29px";
	paragraph.style.fontWeight = "700";
}
function testInput() {
	// Create variable to store test result
	var text;
	// Get the value of the input field with id="numb"
	var x = document.getElementById("numericInput").value;
	if (isNaN(x) || x < 0 || x > 99) {
		text = "Wrong input";
	} else {
		text = "Correct input";
	}
	// Display result
	document.getElementById("result").innerHTML = text;
}


$(document).ready(function() {
	$("#myCarousel").carousel({interval: 4000});
});

