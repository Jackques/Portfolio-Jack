function changeBack(antwoord, vraagnaam){
      //alert(antwoord);
	  //alert(vraagnaam);
	  
	$.ajax({
				type: "POST", 
				url: "toetsverwerking.php", 
				data: {"werkveld" : antwoord, "vraag" : vraagnaam},
				success: function(data){
					//alert(data);
				},
				error: function(t){
				alert(t);
										}
			 });
   
   }