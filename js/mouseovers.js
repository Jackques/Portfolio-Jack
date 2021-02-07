//alert("ik besta");
var dragged;

var myArray_title = new Object();
myArray_title["lia"] = "Website Lia Dameskleding";
myArray_title["pat"] = "Stage Project Interactieve Leeromgeving";
myArray_title["hbo_intro"] = "HBO Intro Festival website + posters";
myArray_title["dino"] = "Serious Game voor Naturalis";
myArray_title["daniel"] = "Website Daniel Bossers";
myArray_title["ecocoach"] = "App Ecocoach voor Philips";
myArray_title["villacarton"] = "Animaties en interactieve kleurplaten voor Villa Carton";
myArray_title["arthouse"] = "Eindexamen MBO Mediavormgeving, promotiemateriaal voor Art-House Project";
myArray_title["smileymadness"] = "Game MSN Smiley Madness";
myArray_title["sweevo"] = "Huisstijl en website voor webshop Sweevo";
myArray_title["hollands"] = "Logo en entreebewijs voor een modeshow";

var myArray_disc = new Object();
myArray_disc["lia"] = "Een website en ontwerp van flyers welke ik heb gemaakt voor Lia Dameskleding. De website is gemaakt als een template voor Joomla. Het richt zich vooral op een oudere doelgroep welke op zoek zijn naar een professionele modewinkel met chique kleding.";
myArray_disc["pat"] = "Een prototype van een interactieve leeromgeving welke ik heb gemaakt in samenwerking met Renee Kools. Dit prototype was een onderzoek en aanzet tot de mogelijkheden van E-Learning in combinatie met Social Media";
myArray_disc["hbo_intro"] = "Een website en poster voor het HBO Intro Festival van 2011. Vanuit een simpele ontmoeting op de creatieve marktplaats van Colin is de opdracht ontstaan voor een nieuwe website en daarmee ook een nieuwe huisstijl. Het ontwerp moest jongeren aantrekken met speelse vormen en een kleurrijk uiterlijk, maar ook een enigzins professionele uitstraling geven.";
myArray_disc["dino"] = "Een Serious Game ontwikkelt voor Naturalis als opdracht van de Minor Learning Experience Design. De game leert men hoe dinosauriers zo succesvol werden en waarom ze uitstierven. ";
myArray_disc["daniel"] = "Een website voor Daniel Bossers in samenwerking met Remco de Vries. In dit project wilden we een fris, strak en overzichtelijk ontwerp bieden terwijl we de grenzen van webdesign opzochten met een video als achtergrond. De website is gemaakt als een Joomla template. ";
myArray_disc["ecocoach"] = "Een App ontwikkelt als een product voor Philips waarmee consumenten werden gestimuleerd om duurzaam te consumeren. De app zou via gameification en Facebook integratie een spel op gang brengen waarmee de producten welke consumenten in de supermarkt kopen worden beoordeeld op duurzaamheidswaardes. Deze waardes kon men vervolgens via Facebook met elkaar vergelijken.";
myArray_disc["villacarton"] = "Voor het Vrije Studiepunten Project op heb ik via school contact opgenomen met de kunstenaars van Villa Carton. Zij hadden strakke poppen gemaakt in Illustrator en zochten iemand welke ze kon animeren voor op de website. Vervolgens zijn er ook interactieve kleurplaten ontwikkelt waarmee kinderen op de website de poppetjes in verschillende scenes konden inkleuren.";
myArray_disc["arthouse"] = "Voor mijn eindexamen op het MBO moesten wij promotiemateriaal ontwikkelen voor het Art-House project. De actie was met name gericht op jongeren als doel: 'meer interesse voor kunst opwekken bij jongeren'";
myArray_disc["smileymadness"] = "Een game welke ik heb ontwikkelt in mijn vrije tijd met het programma Game Maker 7. Dit was mijn eerste game met dit programma en speelde zich af met de klassieke smileys in msn-land. De speler moest met de 'happy smiley' de kwade smileys verslaan en obstakels ontwijken.";
myArray_disc["sweevo"] = "Een beginnend bedrijf is nergens zonder goed onderzoek naar de markt, de doelgroep, de concurrentie en de producten. Om deel te nemen aan het beginnend bedrijf nam ik de rol als 'marketingmanager' op me en deed onderzoek op marketing en design gebied. Dit resulteerde uiteindelijk in een logo als het design voor de website.";
myArray_disc["hollands"] = "Op mijn MBO opleiding hadden we een apart vak genaamd: Media Factory, waarin we een opdracht kregen van een echte klant waarvoor we iets moesten maken. Ik kreeg de opdracht om in het thema van 101% Hollands, een logo, affiche en een entreebewijs te maken voor een modeshow.";


$(document).ready(function() {
	$("#lia,#pat,#hbo_intro,#dino,#daniel,#ecocoach,#villacarton,#arthouse,#smileymadness,#sweevo,#villacarton,#hollands").mouseover(function() {
	//alert("ziet hij dit wel?");
	$(this).children().css( "opacity", "1.0", "filter", "alpha(opacity=100)");
	});
	
		$("#zoomvliet,#cmd,#avans,#linkedin_but,#facebook_but,#email_but,#blog").mouseover(function() {
		//alert("ziet hij dit wel?");
		$(this).children().css( "opacity", "1.0", "filter", "alpha(opacity=100)");
		});
		
		$("#jack,#jack2").mouseover(function() {
		//alert("ziet hij dit wel?");
		$(this).children().css( "opacity", "1.0", "filter", "alpha(opacity=100)");
		});

	$("#lia,#pat,#hbo_intro,#dino,#daniel,#ecocoach,#villacarton,#arthouse,#smileymadness,#sweevo,#villacarton,#hollands").mouseout(function() {
	//alert("ziet hij dit wel?");
	$(this).children().css( "opacity", "0.4");
	});
	
		$("#zoomvliet,#cmd,#avans,#linkedin_but,#facebook_but,#email_but,#blog").mouseout(function() {
		//alert("ziet hij dit wel?");
		$(this).children().css( "opacity", "0.4");
		});
		
		$("#jack,#jack2").mouseout(function() {
		//alert("ziet hij dit wel?");
		$(this).children().css( "opacity", "0.4");
		});
	
	$("#lia,#pat,#hbo_intro,#dino,#daniel,#ecocoach,#villacarton,#arthouse,#smileymadness,#sweevo,#villacarton,#hollands").dblclick(function() {
		//alert("ziet hij dit wel?");
		var bom = $(this).attr('id');
		var fruits = [];

		
		//alert(bom);
		open_proj(bom);
		
		$('#proj_tekst').append('<h1>' + myArray_title[bom] + '</h1>');
		$('#proj_tekst').append('<p>' + myArray_disc[bom] + '</p>');
		
			for (var i=0;i<10;i++)
			{ 
			requestimages(bom, i, fruits);
			
			}//einde for loop
		
		return false;
	});
	
});

function requestimages(bom, i, fruits){
//alert(i);
$.ajax({
    url:'images/project_pics/' + bom + '/screen' + i + '.jpg',
    type:'HEAD',
    error: function()
    {
        //alert("fock jou");
    },
    success: function()
    {
        //alert("bestaat");
		var e ='images/project_pics/' + bom + '/screen' + i + '.jpg';
		//alert(e);
		//fruits.push('images/project_pics/' + bom + '/screen' + i + '.jpg');
		$('#proj_plaatjes').append('<img id="pic_' + i + '" class="proj_pic" src="' + e + '">');
    }
	}).done(function() {
		//alert(fruits);
						});
	//alert(fruits);
}
function nextImg(){
//alert("next img");
var numItems = $('.proj_pic').length;
//alert(numItems);

for (var i=0;i<10;i++){ 

	if( $('#pic_' + i + '').is(":visible") ) {
		//alert(i);
		
		if(i>=numItems){
		//doe niks alstie gelijk staat aan de max
		}else{
		$('#pic_' + i + '').hide();
		var current = i+1;
		$('#pic_' + current + '').show();
		break;
		}
	}
	else {
		// it's not visible so do something else
	}
	
	}//einde forloop

}

function prevImg(){
//alert("prev img");

for (var i=0;i<10;i++){ 

	if( $('#pic_' + i + '').is(":visible") ) {
		//alert(i);
		
		if(i<=1){
		//doe niks alstie gelijk staat aan de max
		}else{
		$('#pic_' + i + '').hide();
		var current = i-1;
		$('#pic_' + current + '').show();
		break;
		}
	}
	else {
		// it's not visible so do something else
	}
	
	}//einde forloop
}