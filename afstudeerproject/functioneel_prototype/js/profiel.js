$( document ).ready(function() {
//alert("doet hij het?");

	$("#mijngegevensbut, #mijngegevensbut_img").on( "click", function() {
	//alert($("#gegevens_profiel").height());

		if($("#gegevens_profiel").height() > 30){
		
		//als meer is, dan inklappen
		  $("#mijngegevensbut_img").attr('src', 'images/profiel/expand_icon.png');
		  $( this ).parent().animate({
							height: "30px"
							}, 500, function() {
							// Animation complete.
							});
		  
		}else{
		//als minder is, uitklappen
		  $("#mijngegevensbut_img").attr('src', 'images/profiel/collapse_icon.png');
		  $( this ).parent().animate({
							height: "500px"
							}, 500, function() {
							// Animation complete.
							});
		};
	  
	});

	$("#mijnagendabut, #mijnagendabut_img").on( "click", function() {
	//alert($("#gegevens_profiel").height());

		if($("#agenda_profiel").height() > 30){
		
		//als meer is, dan inklappen
		  $("#mijnagendabut_img").attr('src', 'images/profiel/expand_icon.png');
		  $( this ).parent().animate({
							height: "30px"
							}, 500, function() {
							// Animation complete.
							});
		  
		}else{
		//als minder is, uitklappen
		  $("#mijnagendabut_img").attr('src', 'images/profiel/collapse_icon.png');
		  $( this ).parent().animate({
							height: "550px"
							}, 500, function() {
							// Animation complete.
							});
		};
	  
	});

	$("#mijncijferbut, #mijncijferbut_img").on( "click", function() {
	//alert($("#gegevens_profiel").height());

		if($("#cijfer_profiel").height() > 30){
		
		//als meer is, dan inklappen
		  $("#mijncijferbut_img").attr('src', 'images/profiel/expand_icon.png');
		  $( this ).parent().animate({
							height: "30px"
							}, 500, function() {
							// Animation complete.
							});
		  
		}else{
		//als minder is, uitklappen
		  $("#mijncijferbut_img").attr('src', 'images/profiel/collapse_icon.png');
		  $( this ).parent().animate({
							height: "550px"
							}, 500, function() {
							// Animation complete.
							});
		};
	  
	});

	$("#mijncompetentiesbut, #mijncompetentiesbut_img").on( "click", function() {
	//alert($("#gegevens_profiel").height());

		if($("#competenties_profiel").height() > 30){
		
		//als meer is, dan inklappen
		  $("#mijncompetentiesbut_img").attr('src', 'images/profiel/expand_icon.png');
		  $( this ).parent().animate({
							height: "30px"
							}, 500, function() {
							// Animation complete.
							});
		  
		}else{
		//als minder is, uitklappen
		  $("#mijncompetentiesbut_img").attr('src', 'images/profiel/collapse_icon.png');
		  $( this ).parent().animate({
							height: "550px"
							}, 500, function() {
							// Animation complete.
							});
		};
	  
	});
	
	$("#mijnportfoliobut, #mijnportfoliobut_img").on( "click", function() {
	//alert($("#gegevens_profiel").height());

		if($("#portfolio_profiel").height() > 30){
		
		//als meer is, dan inklappen
		  $("#mijnportfoliobut_img").attr('src', 'images/profiel/expand_icon.png');
		  $( this ).parent().animate({
							height: "30px"
							}, 500, function() {
							// Animation complete.
							});
		  
		}else{
		//als minder is, uitklappen
		  $("#mijnportfoliobut_img").attr('src', 'images/profiel/collapse_icon.png');
		  $( this ).parent().animate({
							height: "550px"
							}, 500, function() {
							// Animation complete.
							});
		};
	  
	});

	
	
	
	$("#editbut").on( "click", function() {
	$( "#special" ).append( "<br /><input type='text' name'name' id='basic' value=''  /><input id='input' type='submit' onclick='copyText()' value='Bevestigen' />" );
	$( "#editbut" ).hide();
});
	
	
});

function copyText(){
var u = $("#basic").val();
$("#basic").hide();
$("#input").hide();
$( "#special" ).append(u);
$( "#editbut" ).show();
}

function allesdicht(){
// hier nog ff een functie maken dat alles eerst dicht gaat voordat de gebruiker een nieuwe opent
}