/* if (jQuery) {  
 
   alert("jQuery library is loaded!");
 
} else {
 
   alert("jQuery library is not found!");
 
}  */

var done = false;

$(document).on('pageinit', function(event){
//pageinit zorgt ervoor dat de onderstaande code bij elke verandering op de pagina wordt opgeroepen.
//beter dan mobileinit, en natuurlijk beter dan (document).ready wat uiteraard voor normale web is.
// aldus code-meester Rein!
	var kleur;
	$.mobile.defaultPageTransition = 'slide';

	console.log($("#hfdm_zoeken,#hfdm_verbeelden,#hfdm_uiten,#hfdm_verkennen,#hfdm_concretiseren,#hfdm_volhouden"));
	//AUTOMATISCH DE BLOKKEN WAAR TEKST INSTAAT AAN DE HOOGTE EN BREEDTTE VAN SCHERM GEBRUIKER AANPASSEN


	var height_buttons = $(".hfdm_item_wrapper").height();
	var height_buttons_expanded = $(".hfdm_item_wrapper").height() * 5;
	var height_textareas = $(".hfdm_item_wrapper").height() * 3.5;
	//alert(height_buttons_expanded);
	
	var gekozen_antw=new Array(); 
		gekozen_antw['antw1pag1']="";       
		gekozen_antw['antw2pag1']="";
		gekozen_antw['antw3pag1']="";
		gekozen_antw['antw1pag2']="";       
		gekozen_antw['antw2pag2']="";
		gekozen_antw['antw3pag2']="";
	
	var click_textfield = false;
	
	$(".md_textfield_vraag").css("height",height_textareas);
	
	if (done == true)
	{
		return;
	}
	//als 'done' op true gaat zorgt in dit if-statement dat 'return' de code stopt, er wordt dus na de if niks meer uitgevoerd
	//om te voorkomen dat dit script iedere keer wordt uitgevoerd, anders worden de onderstaande functies teveel aan de betreffende knoppen
	// verbonden en krijg je niet 1 animatie datie openschuift ofzo, maar tig keer achter elkaar..

	$("#hfdm_zoeken,#hfdm_verbeelden,#hfdm_uiten,#hfdm_verkennen,#hfdm_concretiseren,#hfdm_volhouden").click(function() {
	  //sluit de button ALS die ene button open staat waarop is geklikt
	  if($(this).parent().height() >= height_buttons_expanded){
		  
		  $(this).parent().animate({
			height: height_buttons
		  }, 500, function() {
			/*Animation complete container.*/
		  });
		  $(this).animate({
			backgroundColor: "#414141",
		  }, 500, function() {
			/*Animation complete backgroundcolor item.*/
			$(this).css({ 'background-color' : '', 'opacity' : '' });
		  });
		  $(this).children("#hfdm_number, #hfdm_text, #mb_afb_vraag").animate({
			color: "#b7b7b7",
		  }, 500, function() {
			/*Animation complete item text title color.*/
		  });
		  
		  $(this).children("#hfdm_besch, .ganaar_but, #md_textfield_vraag").fadeOut();
	  
	  }else{
		//als die niet open staat, sluit dan alle buttons die op dat moment open staan..
		  $("#hfdm_zoeken,#hfdm_verbeelden,#hfdm_uiten,#hfdm_verkennen,#hfdm_concretiseren,#hfdm_volhouden").parent().animate({
			height: height_buttons
		  }, 500, function() {
			/*Animation complete.*/
		  });
		  $("#hfdm_zoeken,#hfdm_verbeelden,#hfdm_uiten,#hfdm_verkennen,#hfdm_concretiseren,#hfdm_volhouden").animate({
			backgroundColor: "#414141",
		  }, 500, function() {
			/*Animation complete backgroundcolor item.*/
			$(this).css({ 'background-color' : '', 'opacity' : '' });
		  });
		  $("#hfdm_zoeken,#hfdm_verbeelden,#hfdm_uiten,#hfdm_verkennen,#hfdm_concretiseren,#hfdm_volhouden").children("#hfdm_number, #hfdm_text, #mb_afb_vraag").animate({
			color: "#b7b7b7",
		  }, 500, function() {
			/*Animation complete item text title color.*/
		  });
		  
		  //en hun children elementen
		  $("#hfdm_zoeken,#hfdm_verbeelden,#hfdm_uiten,#hfdm_verkennen,#hfdm_concretiseren,#hfdm_volhouden").children("#hfdm_besch, .ganaar_but, .md_textfield_vraag").css('display', 'none');
		  
		  //en open degene die wel open moet
		  $(this).parent().animate({
			/*height: '135'*/
			height: height_buttons_expanded
		  }, 500, function() {
			/*Animation complete.*/
		  });
		  $(this).animate({
			backgroundColor: "#ffffff",
		  }, 500, function() {
			/*Animation complete.*/
		  });
		  $(this).children("#hfdm_number, #hfdm_text, #mb_afb_vraag").animate({
			color: "#000000",
		  }, 500, function() {
			/*Animation complete item text title color.*/
		  });
		  //met zijn children elementen
		  $(this).children("#hfdm_besch, .ganaar_but, .md_textfield_vraag").fadeIn();
		  
		  }//einde if statement
	  
	}).children("textarea").click(function(e) {
	return false;
	});
	
	$('#colorpicker').farbtastic('#color');
	
	$.farbtastic("#colorpicker").linkTo(callback);
	function callback(color) {
	kleur = $.farbtastic("#colorpicker").color;
	$(".hfdm_traject_colorchange").css("background-color",kleur);
	};
	
	
	$("#traject_aanmaken").click(function(e) {
		//alert( "Handler for .click() called." );
		trajectnaam = $('#traject_naam_veld').val();
		
		if(trajectnaam=="Geef je traject een naam"  || trajectnaam.length==0){
			$('#traject_naam_veld').val("Geef je traject een naam");
			$('#traject_naam_veld').css("color","red");
			e.preventDefault();
			//alert(trajectnaam);
		}else{
		//gebruiker klikt en profiel wordt aangemaakt?
		$.ajax({
			type: "POST",
			url: "trajecten_aanmaken.php",
			data: { gekozennaam: trajectnaam, gekozenkleur: kleur }
				}).done(function(msg) {
											//hier komt de callback
											//alert(msg);
											$('.hfdm_user_item').remove();
											$( ".page1" ).children(".hfdm_item_wrapper:last").before(msg);
										});
			};
		
	});

	$(".selected_user").click(function(e) {
		//retrieve results, nog niet gemaakt!
	});
	done = true;
	
});//document rdy
