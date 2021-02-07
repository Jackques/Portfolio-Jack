$( document ).ready(function() {

$("#iets_toevoegen").hide();

	$("#app_addbutton").click(function() {
	  $("#iets_toevoegen").fadeIn( "fast" );
	});

	$("#sluitbutton").click(function() {
	  $("#iets_toevoegen").fadeOut( "fast" );
	});
});

