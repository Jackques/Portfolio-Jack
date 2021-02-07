$(document).ready(function() {

$(window).resize(browserresize);
browserresize();

function browserresize() {
	var windowWidth = $(window).width(); //retrieve current window width
	var windowHeight = $(window).height(); //retrieve current window height

	//alert(windowWidth);
	//alert(windowHeight);

	//alert("eswa!");
	$("#borderBox").css( "width", windowWidth );
	$("#borderBox").css( "height", windowHeight );
};


});
