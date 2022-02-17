
$(document).ready(function() {
	$("#testingthehover").hover(function() {
		$(this).css("color", "blue");
	}, 
	function() {
	
		//$(this).hide();
		//$(this).css("display", "none");
	});


$("button").click(function() {
    alert("you are about to leave this page")

})
});

console.log("Your index.js file is loaded correctly!");

