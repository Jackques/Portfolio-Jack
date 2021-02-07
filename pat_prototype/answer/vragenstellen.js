//alert("ff kijke of deze ook onmiddelijk wordt uitgevoerd"); //ja dat doetie

/*GELEERD: het alert(); code'tje zorgde er eerst voor dat het hele ding werkte of niet werkte,
			dat is raar want normaal gesproken heeft een alert(); daar helemaal niks mee te maken,
			maar wat het punt nu was, blijkbaar als je HTML codes in je Jquery/JS hebt staan om te 
			manipuleren, dan laad de browser dat in op hetzelfde moment als de HTML, en dat geeft
			de nodige problemen.
			Dus wat heb ik nu gedaan? Ik heb het ophalen van de linkedingroepen voor in de 
			bericht sturenlijst gewoon in een functie gezet om aan te roepen bij user authentication.
			
			zo zie je maar weer, altijd blijven debuggen en logisch blijven nadenken en diep zoeken 
			naar het probleem, het probleem ligt vaak ergens anders dan je zou denken!!!! */

//alert("vragenstellen.js up and running sir!");

function getgroupsforlist(){
//haalt de linkedin groepen op waarbij jij de MEMBER bent
IN.API.Raw("/people/~/group-memberships:(group:(id,name,counts-by-category))?membership-state=member&count=6&start=0").result(function(bart) { 
		//IN.API.Raw("/people/~/group-memberships:(group:(id,name,counts-by-category))?membership-state=member").result(function(bart) { 
		for(var i=0; i < bart.values.length; i++) { 
			var b = bart.values[i]._key; 
			var e = bart.values[i].group.name;
			//alert(JSON.stringify(bart.values[i]));
			//alert(b);
		/* //koning xander's oplossing:
		var option = document.createElement("option");
		option.text = b;
		option.value = b;
		$('#linkedingroepen').add(option,null);
		*/
			
		$('#linkedingroepen').append('<option value="'+ b +'">'+ e +'</option>');
			
}
})
//haalt de linkedin groepen op waarbij jij de OWNER bent, nee dat kan niet in 1 call.
IN.API.Raw("/people/~/group-memberships:(group:(id,name,counts-by-category))?membership-state=owner&count=6&start=0").result(function(bart) { 
		for(var i=0; i < bart.values.length; i++) { 
			//var b = bart.values[i]._key; 
			var b = bart.values[i].group.id; 
			var e = bart.values[i].group.name;
			//alert(JSON.stringify(bart.values[i]));
			$('#linkedingroepen').append('<option value="'+ b +'">'+ e +'</option>');
}
})

$("#linkedingroepen :selected").remove();
}

$('#externalquestion').submit(function(){
  var pot = $('#grotevraag').val();
  var pot_titel = $('#kleinevraag').val();
  var media = $("#externalquestion input[type='radio']:checked").val();
  var gekozen_linkedingroep = $('#linkedingroepen option:selected').val();


  //alert(media);   
  
  platformkiezen(pot, pot_titel, media, gekozen_linkedingroep);
  return false; //we prevent the refresh of the page after submitting the form
  }
  );
  


  
function platformkiezen(pot, pot_titel, media, gekozen_linkedingroep){
 //alert("nu ga ik kijken voor welke case je hebt gekozen!");

 linkedingroepvraag(pot, pot_titel, gekozen_linkedingroep);
		  
};

function linkedingroepvraag(pot, pot_titel, gekozen_linkedingroep){
//alert(gekozen_linkedingroep);
//alert(pot);
//alert(pot_titel);

// group id linkedin testgroep:  4453072
//onderstaande regel zit nog in testfase en kan fouten bevatten waardoor het script niet werkt:

guh(pot, pot_titel, gekozen_linkedingroep);

}

function guh(pot, pot_titel, gekozen_linkedingroep){
var BODY = {
	"title": "",
	"summary": ""
	};

BODY['summary'] = pot;
BODY['title'] = pot_titel;
//alert(JSON.stringify(BODY));
	
//IN.API.Raw("groups/4453072/posts")
IN.API.Raw("groups/"+ gekozen_linkedingroep +"/posts")
.method("POST")
.body(JSON.stringify(BODY))
.result(alert('plaatsen van een groepsbericht is gelukt!'))
.error(function error(e) { alert ("Error"+JSON.stringify(e)) } );
wop(); //voor het updaten van de gameification score
$('#vragenvak').toggle();
//controle();
}


//onderstaande functie geeft weer wat er in de 'people using testgroup' zit.
function controle(){

IN.API.Raw("/groups/4453072/posts:(title,summary,attachment:(content-url))?category=discussion&order=recency").result(function(henk){ 
		//alert(JSON.stringify(henk)); //geeft weer wat er in elk pakketje van groepsberichten zit
		//alert(henk.values.length); //om te zien hoeveel berichten bij per groep ophaalt
		
	}).error(function(error) { 
		alert('fout');
		alert(JSON.stringify(error));
	});
	
}

function wop(){
var dunne = "updateSo";
//alert("test of dit wel werkt");
	$.ajax({
			type: "POST", 
			url: "../gameification.php", 
			data: {"action" : dunne},
			success: function(data){
					//alert(data);
				},
			error: function(t){
				alert(JSON.stringify(t));
										}
		});
		}