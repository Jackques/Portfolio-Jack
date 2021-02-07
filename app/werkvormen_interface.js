$(document).ready(function(){
	var werkvorm_moodboard = "<div class=\"hfdm_item_wrapper\"><a href='#page5' data-transition='slide' style='text-decoration: none;' ><div class=\"hfdm_item\" id='hfdm_verbeelden'><h1 id=\"hfdm_text_user\">Moodboard methode > </h1></div></a></div>";
	
	var total_selected_afb = 0;
	var first = "";
	var second = "";
	
	$(".werkvormt").click(function() {
			$(this).parent().parent().fadeOut('slow', function() {
			// Animation complete.
			});
			$( ".page3" ).children(".hfdm_item_wrapper:last").before(werkvorm_moodboard);

	});
	
	$(".moodboard_afb").click(function() {
	
		var selected_img_path = $(this).attr('src');
		//als de gebruiker een foto wil de-selecteren
		
		if ($(this).css("border-left-width") > "0px"){
				$(this).css( "border", "none" );
				total_selected_afb--;
				//alert(total_selected_afb);
					if(first == $(this).attr('src')){
					first="";
					//alert("OMG! the first one got emptied! This is the first one!");
					}else if(second == $(this).attr('src')){
					second="";
					//alert("OMG its the fucking second one!");
					}
			}else{

			//als de gebruiker een nieuwe foto wil selecteren, maar er zijn er al twee geselecteerd
			if(total_selected_afb >= 2){
				//do nothing
				alert("U heeft al 2 afbeeldingen geselecteerd");
			}else{
			
			//als de gebruiker een nieuwe foto wil selecteren zonder over het limiet te gaan
			//jquery moet specifiek van 1 borderzije weten, en kan niet afgaan op de algemene border property
			if ($(this).css("border-left-width") > "0px"){
				//do nothing (geen
			}else{
				$(this).css( "border", "0.2em solid red" );
					
					if(first.length == 0){
					first = selected_img_path;
					//alert("firstone filled" + first);
					}else if(second.length == 0){
					second = selected_img_path;
					//alert("secondone filled" + second);
					}
				total_selected_afb++;
			
			}
		}
		}
	});

	$("#naar_de_vragen").click(function(e) {
		if(total_selected_afb == 0){
			alert("U moet minstens 2 afbeeldingen kiezen");
			e.preventDefault();
		}else if(total_selected_afb == 1){
			alert("U moet nog 1 afbeelding selecteren");
			e.preventDefault();
		}
	
	$("#moodboard_gekozen_afb_1").attr('src', first);
	$("#moodboard_gekozen_afb_2").attr('src', second);
	});
	
	$("#vragen_beantwoord").click(function(e) {
	
		var antwoord1_afb1 = $("#waarom_gekozen_vraag1_mb1").val();
		var antwoord2_afb1 = $("#mooi_afbeelding_vraag2_mb1").val();
		var antwoord3_afb1 = $("#wat_gevoel_vraag3_mb1").val();

		switch ("")
		{
		case antwoord1_afb1:
		  alert("U heeft de eerste vraag niet ingevuld");
		  e.preventDefault();
		  break;
		case antwoord2_afb1:
		  alert("U heeft de tweede vraag niet ingevuld");
		  e.preventDefault();
		  break;
		case antwoord3_afb1:
		  alert("U heeft de derde vraag niet ingevuld");
		  e.preventDefault();
		  break;
		default:
		//ajax send results to server database
			$.ajax({
			type: "POST",
			url: "item_verwerking.php",
			data: { pagnum: "1", antw1pag1: antwoord1_afb1, antw2pag1: antwoord2_afb1, antw3pag1: antwoord3_afb1 }
				}).done(function(msg) {
											//alert(msg);
										});
		}
		
	});
		$("#vragen_beantwoord2").click(function(e) {
	
		var antwoord1_afb2 = $("#waarom_gekozen_vraag1_mb2").val();
		var antwoord2_afb2 = $("#mooi_afbeelding_vraag2_mb2").val();
		var antwoord3_afb2 = $("#wat_gevoel_vraag3_mb2").val();

		switch ("")
		{
		case antwoord1_afb2:
		  alert("U heeft de eerste vraag niet ingevuld");
		  e.preventDefault();
		  break;
		case antwoord2_afb2:
		  alert("U heeft de tweede vraag niet ingevuld");
		  e.preventDefault();
		  break;
		case antwoord3_afb2:
		  alert("U heeft de derde vraag niet ingevuld");
		  e.preventDefault();
		  break;
		default:
		//ajax send results to server database
			$.ajax({
			type: "POST",
			url: "item_verwerking.php",
			data: { pagnum: "2", antw1pag2: antwoord1_afb2, antw2pag2: antwoord2_afb2, antw3pag2: antwoord3_afb2 }
				}).done(function(msg) {
											//alert(msg);
										});
		}
		$("#page5").children(".hfdm_item_wrapper:last").before("<div class='hfdm_item_wrapper'><a href='#page5' data-transition='slide' style='text-decoration: none;'><div class='hfdm_item' id='hfdm_verbeelden'><h1 id='hfdm_text_user'>do 22 aug 2013</h1></div></a></div>");
	});
	
});//document rdy