/* if (typeof jQuery != 'undefined') {
 
    alert("jQuery library is loaded!");
 
}else{
 
    alert("jQuery library is not found!");
 
} */

$(document).ready(function() {


$("#dragableElement").css( "top", "-400px");
$("#dragableElement").css( "left", "-350px");

$('body').on('click', '#filler', function() { //gebruik de .on('click', '#element', function(){ om een objedct aan te spreken dat nog niet bestaat en wordt gecreerd later in het document!!!
    //alert("fucker");
	$('#filler').fadeOut("slow");
	$('#filler').remove();
	$('#proj_panel').animate({
			width: "1%",
			height: "1%",
			opacity: 0.10,
			filter: "alpha(opacity=10)",
		  }, 800, 'linear', function() {
			  $('#proj_panel').remove();
		  });
		  
	$('#begin_info').fadeOut("slow", function(){
	$('#begin_info').remove();
	});
	
});

});// end of docuemnt ready

function MyFunction_contact(){
$('#dragableElement').animate({
    top: "-712",
    left: "0",
  }, 800, 'linear', function() {
      //nothing
  });
  
//alert("doei");
}
function MyFunction_overmij(){
// if clicked on contact then go to top: -712px; left: 0px;
// if clicked on overmij then go to top: -39px; left: -4px;
// if clicked on blog then go to top: -712px; left: -1124px;
if(dragged) {
        alert("yeah it got dragged");
		dragged = false;
        return;
    }

$('#dragableElement').animate({
    top: "-39",
    left: "-4",
  }, 800, 'linear', function() {
      //nothing
  });
  
//alert("doei");
}
function MyFunction_blog(){
// if clicked on contact then go to top: -712px; left: 0px;
// if clicked on overmij then go to top: -39px; left: -4px;
// if clicked on blog then go to top: -712px; left: -1124px;

$('#dragableElement').animate({
    top: "-712",
    left: "-1124",
  }, 800, 'linear', function() {
      //nothing
  });
  
//alert("doei");
}
function open_proj(theLink){
//alert("hoi");

//alert(theLink);
$('body').append('<div id="filler"></div>');
$('body').append('<div id="proj_panel"><div id="proj_plaatjes"><a id="project_viewer_arrow_left" onclick="prevImg();"></a><a id="project_viewer_arrow_right" onclick="nextImg();"></a></div><div id="proj_tekst"></div><a id="close_but" onclick="sluit();"></a></div>');

$('#proj_panel').animate({
    width: "80%",
    height: "80%",
    opacity: 1.00,
	filter: "alpha(opacity=100)",
  }, 800, 'linear', function() {
      //nothing
  });
};
function sluit(){
//alert("bob");
$('#filler').fadeOut("slow", function(){
	$('#filler').remove();
});


$('#begin_info').fadeOut("slow", function(){
	$('#begin_info').remove();
});


$('#proj_panel').animate({
			width: "1%",
			height: "1%",
			opacity: 0.10,
			filter: "alpha(opacity=10)",
		  }, 800, 'linear', function() {
			  $('#proj_panel').remove();
		  });
}

