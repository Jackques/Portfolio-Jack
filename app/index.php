<html>
<head>
	<title>Ambitie app</title>
	<meta name="viewport" content="width=device-width, height=device-height">

<!-- <meta name="viewport" content="width=240, height=320, user-scalable=yes, initial-scale=2.5, maximum-scale=5.0, minimum-scale=1.0" /> -->
<!-- apple viewport code, zie http://webdesign.tutsplus.com/tutorials/htmlcss-tutorials/quick-tip-dont-forget-the-viewport-meta-tag/ -->
<!-- hoewel de viewport code ook wordt gebruikt door windows apparaten,.. lees deze bron: -->
<!-- http://www.metatags.nl/mobiele_metatags_voor_de_smartphone -->
<!-- http://www.quirksmode.org/blog/archives/2010/09/combining_meta.html -->
<!-- volgens bovenstaande bron is het, het best om zowel de HTML <meta name=viewport (tussen haakjes) etc.. te gebruiken als de CSS media query -->


<!-- Dit zijn de nieuwste spullen -->
<link rel="stylesheet" href="http://code.jquery.com/mobile/1.3.2/jquery.mobile-1.3.2.min.css" />
<script src="http://code.jquery.com/jquery-1.9.1.min.js"></script>
<script src="http://code.jquery.com/mobile/1.3.2/jquery.mobile-1.3.2.min.js"></script>

<script type="text/javascript" src="jquery.color.min.js"></script>
<link rel="stylesheet" type="text/css" href="css_hfdmenu.css">

<script src="hfdmenu_interface.js"></script>
<script src="adjust_screen_sizes.js"></script>
<script src="werkvormen_interface.js"></script>
<link rel="stylesheet" type="text/css" href="css_profielen.css">
<link rel="stylesheet" type="text/css" href="css_moodboardtechniek.css">

<script type="text/javascript" src="farbtastic/farbtastic.js"></script>
<link rel="stylesheet" href="farbtastic/farbtastic.css" type="text/css" />
 
</head>
<body>

<div data-role="page" class="page1">

<div class="hfdm_item_wrapper" id="hfdm_headbar">
	<div class="hfdm_header">
		<h1 id="hfdm_title">Trajecten</h1>
	</div>
</div>
<div class="hfdm_item_wrapper" id="hfdm_headbar" style="position:static;">
	<div class="hfdm_item">
	<!-- filler block -->
	</div>
</div>
<?php
$username = "qb210419_admin";
$password = "VgF46vgnR";
$hostname = "localhost"; 

//connection to the database
$dbhandle = mysql_connect($hostname, $username, $password) 
 or die("Unable to connect to MySQL");

//select a database to work with
$selected = mysql_select_db("qb210419_database_1",$dbhandle) 
  or die("Could not select examples");

//execute the SQL query and return records
$result = mysql_query("SELECT id, profielnaam, profielkleur FROM profielen");

//fetch tha data from the database 
while ($row = mysql_fetch_array($result)) {
   // echo "ID:".$row{'id'}." Name:".$row{'profielnaam'}." Year: ". //display the results
   // $row{'profielkleur'}."<br>";
   
   echo "
   <div class='hfdm_item_wrapper hfdm_user_item'>
		<a href='#page2' class='selected_user' data-transition='slide' >
		<div class='hfdm_item' id='".$row{'profielnaam'}."' style='background:none;background-color:".$row{'profielkleur'}.";'>
			
			<h1 id='hfdm_text_user'>Traject ".$row{'profielnaam'}." ></h1>
   
		</div>
		</a>
   </div>
   ";
   
}

//close the connection
mysql_close($dbhandle);
?>
   
<div class="hfdm_item_wrapper">
	<a href='#page1traject' data-transition='slide' >
	<div class="hfdm_item" id="hfdm_maakprofiel">
		<h1 id="hfdm_text_maakprofiel">Maak een traject aan + </h1>
	</div>
	</a>
</div>

</div><!-- /page1 -->

<div data-role="page" class="page1traject" id="page1traject">

<div class="hfdm_traject_colorchange">
	<div class="hfdm_header">
		<h1 id="hfdm_title">Traject aanmaken</h1>
	</div>
</div>
<div class="hfdm_item_wrapper" id="hfdm_headbar" style="position:static;">
	<div class="hfdm_item">
	<!-- filler block -->
	</div>
</div>

<div class="hfdm_item_wrapper" id="hfdm_inputveld">
	<div class="hfdm_item">
		<div id="input_wrapper">
			<input type="text" name="traject_naam" id="traject_naam_veld" value="Geef je traject een naam" />
			<!--hier komt inputveld trajectnaam-->
		</div>
		
	</div>
</div><div class="hfdm_item_wrapper">
	<div class="hfdm_item" id="hfdm_trajectkleurbesch">

		<h1 id="hfdm_text_maaktrajectaan">Kies een traject kleur</h1>
		
	</div>
</div>
<div class="hfdm_item_wrapper" id="hfdm_colorpicker">
	<div class="hfdm_item">
		<!--hierkomt de colorpicker in-->
		<form><input type="text" id="color" name="color" value="#123456" style="display:none" /></form>
		<div id="colorpicker"></div>
		<!--hierkomt de colorpicker in-->
	</div>
</div>
<div class="hfdm_item_wrapper">
	<div class="hfdm_item" id="hfdm_maaktrajectaan">
	<a id="traject_aanmaken" href='#' data-rel="back" data-transition='slide' >
		<h1 id="hfdm_text_maaktrajectaan">Maak een traject aan + </h1>
	</a>
	</div>
</div>

</div><!-- /page1traject -->

<div data-role="page" class="page2" id="page2">

<div class="hfdm_item_wrapper" id="hfdm_headbar">
	<div class="hfdm_header">
		<h1 id="hfdm_title">Fases</h1>
	</div>
</div>
<div class="hfdm_item_wrapper">
	<div class="hfdm_item">
	<!-- filler block -->
	</div>
</div>

<div class="hfdm_item_wrapper">
	<div class="hfdm_item" id="hfdm_zoeken">
		<h1 id="hfdm_number">1.</h1>
		<h1 id="hfdm_text">Zoeken</h1>
		<p id="hfdm_besch">In deze fase wordt de eerste ambitie gezocht aan de hand van de vraag 'Wat is mijn ambitie?'. Deze fase is essenti&euml;el als je nog geen idee heb wat je ambitie is.  In deze fase gaan we je zelf kennis en inzicht geven en gaan we onderzoeken wat jou laat sprankelen.</p>
		
		<!--<a href="werkvormen.php" data-transition="slide">-->
			<div class="ganaar_but">
				<p id="ganaar_werkvormen"><a href="#page3" data-transition="slide" > Ga naar de werkvormen > </a></p>
			</div>
		<!--</a>-->
	</div>
</div>

<div class="hfdm_item_wrapper">
	<div class="hfdm_item" id="hfdm_verbeelden">
		<h1 id="hfdm_number">2.</h1>
		<h1 id="hfdm_text">Verbeelden</h1>
		<div class="hfdm_locked"></div>
		<p id="hfdm_besch">In deze fase wordt de ambitie verder verbeeld. Hierbij gaan we kijken wat die ambitie dan precies zou kunnen inhouden. Hierbij krijgt u een specifieker beeld van wat u zou willen en kunnen. </p>
	</div>
</div>

<div class="hfdm_item_wrapper">
	<div class="hfdm_item" id="hfdm_uiten">
		<h1 id="hfdm_number">3.</h1>
		<h1 id="hfdm_text">Uiten</h1>
		<div class="hfdm_locked"></div>
		<p id="hfdm_besch">In de deze fase wordt de ambitie geuit naar bijvoorbeeld collega&rsquo;s, vrienden, familie, leidinggevende. </p>
	</div>
</div>

<div class="hfdm_item_wrapper">
	<div class="hfdm_item" id="hfdm_verkennen">
		<h1 id="hfdm_number">4.</h1>
		<h1 id="hfdm_text">Verkennen</h1>
		<div class="hfdm_locked"></div>
		<p id="hfdm_besch">In deze fase wordt de ambitie verder verkend. Je onderzoekt wat de wederzijdse belangen, mogelijkheden en de regelruimte van verschillende betrokkenen partijen zijn. </p>
	</div>
</div>

<div class="hfdm_item_wrapper">
	<div class="hfdm_item" id="hfdm_concretiseren">
		<h1 id="hfdm_number">5.</h1>
		<h1 id="hfdm_text">Concretiseren</h1>
		<div class="hfdm_locked"></div>
		<p id="hfdm_besch">In deze fase wordt gezocht naar mogelijkheden om jouw ambitie  realiseren. U dromen moeten nu werkelijkheid worden!</p>
	</div>
</div>

<div class="hfdm_item_wrapper">
	<div class="hfdm_item" id="hfdm_volhouden">
		<h1 id="hfdm_number">6.</h1>
		<h1 id="hfdm_text">Volhouden</h1>
		<div class="hfdm_locked"></div>
		<p id="hfdm_besch">In deze fase ligt de focus op volhouden en doorzetten. Je wordt begeleid om bijvoorbeeld over eventuele obstakels te reflecteren en die ook te overwinnen.</p>
	</div>
</div>

</div><!-- /page2 -->
<div data-role="page" class="page3" id="page3" data-position="static">

<div class="hfdm_item_wrapper" id="hfdm_headbar_werkvormen">
	<div class="hfdm_header">
		<h1 id="hfdm_title">Werkvormen toevoegen</h1>
	</div>
</div>
<div class="hfdm_item_wrapper">
	<div class="hfdm_item">
	<!-- filler block -->
	</div>
</div>

<div class="hfdm_item_wrapper">
	<a href='#page4' data-transition='slide' >
	<div class="hfdm_item" id="hfdm_maakprofiel">
		<h1 id="hfdm_text_maakprofiel">Werkvorm toevoegen + </h1>
	</div>
	</a>
</div>

</div><!-- page3 end-->
<div data-role="page" class="page4" id="page4" data-position="static">

<div class="hfdm_item_wrapper" id="hfdm_headbar_werkvormen">
	<div class="hfdm_header">
		<h1 id="hfdm_title">kies u werkvorm[en]</h1>
	</div>
</div>
<div class="hfdm_item_wrapper">
	<div class="hfdm_item">
	<!-- filler block -->
	</div>
</div>

<div class="hfdm_item_wrapper">
	<div class="hfdm_item" id="hfdm_zoeken">
		<h1 id="hfdm_text">Daglijn methode</h1>
		<div class="hfdm_locked"></div>
		<p id="hfdm_besch">Met deze werkvorm wordt er tijdens de fase van zoeken een lijn getekend. Deze lijn omvat alle diepte en hoogtepunten die in deze periode plaatvinden. Na het doorlopen van deze werkvorm volgt er een analyse over wat u wel en niet wil ten aanzien van u ambitie.</p>
	</div>
</div>

<div class="hfdm_item_wrapper">
	<div class="hfdm_item" id="hfdm_verbeelden">
		<h1 id="hfdm_text">Moodboard methode</h1>
		<p id="hfdm_besch">Met deze werkvorm wordt er aan de hand van afbeeldingen, in combinatie met vragen gezocht naar uw ambitie. Deze opdrachten kunnen ferquent gemaakt worden, door behulp van notificaties die u geregeld ontvangt. Zo blijft u tijdens het proces betrokken bij u zoektocht.</p>
		<div class="ganaar_but werkvormt">
			<p id="ganaar_werkvormen"><a href="" data-transition="slide" > Toevoegen + </a></p>
		</div>
	</div>
</div>

<div class="hfdm_item_wrapper">
	<div class="hfdm_item" id="hfdm_verbeelden">
		<h1 id="hfdm_text">Logboek methode</h1>
		<div class="hfdm_locked"></div>
		<p id="hfdm_besch">Deze werkvorm omvat een logboek dat frequent vragen stelt ten aanzien van uw ambitie. U krijgt notificaties wanneer u deze vragen kan beantwoorden. Na een doorlooptijd van enkele weken volgt er een analyse waarbij u een stap dichter bij uw ambitie komt.</p>
	</div>
</div>

<div class="hfdm_item_wrapper">
	<a href='#page5' data-transition='slide' data-rel="back" >
	<div class="hfdm_item" id="hfdm_maakprofiel">
		<h1 id="hfdm_text_maaktrajectaan">Terug naar overzicht</h1>
	</div>
	</a>
</div>

</div><!-- page4 end-->

<div data-role="page" class="page5" id="page5" data-position="static">

<div class="hfdm_item_wrapper" id="hfdm_headbar_werkvormen">
	<div class="hfdm_header">
		<h1 id="hfdm_title">Moodboard fase</h1>
	</div>
</div>
<div class="hfdm_item_wrapper">
	<div class="hfdm_item">
	<!-- filler block -->
	</div>
</div>

<div class="hfdm_item_wrapper">
	<a href='#page6' data-transition='slide' >
	<div class="hfdm_item" id="hfdm_maakprofiel">
		<h1 id="hfdm_text_maakprofiel">Item toevoegen + </h1>
	</div>
	</a>
</div>

</div><!-- page5 end-->
<div data-role="page" class="page6" id="page6" data-position="static">

<div class="hfdm_item_wrapper" id="hfdm_headbar_werkvormen">
	<div class="hfdm_header">
		<h1 id="hfdm_title">Moodboard fase</h1>
	</div>
</div>
<div class="hfdm_item_wrapper">
	<div class="hfdm_item">
	<!-- filler block -->
	</div>
</div>

<div class="hfdm_item_wrapper">
	<div class="hfdm_item" id="hfdm_maakprofiel">
		<h1 id="hfdm_text_user">Maak 2 keuzes </h1>
	</div>
</div>

<div class="hfdm_item_wrapper moodboard_container">
<!-- deze verdient wel aparte opvulling en class-->
		<img src="moodboard_afb/natuur.jpg" id="mb_afb_1" class="moodboard_afb">
		<img src="moodboard_afb/bouw.jpg" id="mb_afb_2" class="moodboard_afb">
		<br />
		<img src="moodboard_afb/duiker.jpg" id="mb_afb_3" class="moodboard_afb">
		<img src="moodboard_afb/fitniss.jpg" id="mb_afb_4" class="moodboard_afb">
		<br />
		<img src="moodboard_afb/industrie.jpg" id="mb_afb_5" class="moodboard_afb">
		<img src="moodboard_afb/kok.jpg" id="mb_afb_6" class="moodboard_afb">
		<br />
		<img src="moodboard_afb/zee.jpg" id="mb_afb_7" class="moodboard_afb">
		<img src="moodboard_afb/zorg.jpg" id="mb_afb_8" class="moodboard_afb">
		<br />
</div>

<div class="hfdm_item_wrapper">
	<div class="hfdm_item" id="hfdm_maaktrajectaan">
	<a id="naar_de_vragen" href='#page7' data-transition='slide' >
		<h1 id="hfdm_text_maaktrajectaan">Volgende > </h1>
	</a>
	</div>
</div>

</div><!-- page6 end-->
<div data-role="page" class="page7" id="page7">

<div class="hfdm_item_wrapper" id="hfdm_headbar">
	<div class="hfdm_header">
		<h1 id="hfdm_title">Moodboard fase</h1>
	</div>
</div>
<div class="hfdm_item_wrapper">
	<div class="hfdm_item">
	<!-- filler block -->
	</div>
</div>

<div class="hfdm_item_wrapper moodboard_gk_afb1">
<img src="" id="moodboard_gekozen_afb_1" style="width:100%;" class="moodboard_afb_large">
</div>

<div class="hfdm_item_wrapper">
	<div class="hfdm_item" id="hfdm_zoeken">
		<h1 id="mb_afb_vraag">Waarom heb je voor deze afbeelding gekozen?</h1>
		<!--input code -->
		<textarea id="waarom_gekozen_vraag1_mb1" class="md_textfield_vraag"></textarea>
	</div>
</div>

<div class="hfdm_item_wrapper">
	<div class="hfdm_item" id="hfdm_zoeken">
		<h1 id="mb_afb_vraag">Wat vind je zo mooi aan deze afbeelding?</h1>
		<!--input code -->
		<textarea id="mooi_afbeelding_vraag2_mb1" class="md_textfield_vraag"></textarea>
	</div>
</div>

<div class="hfdm_item_wrapper">
	<div class="hfdm_item" id="hfdm_zoeken">
		<h1 id="mb_afb_vraag">Wat voor gevoel heb je erbij?</h1>
		<!--input code -->
		<textarea id="wat_gevoel_vraag3_mb1" class="md_textfield_vraag"></textarea>
	</div>
</div>

<div class="hfdm_item_wrapper">
	<div class="hfdm_item" id="hfdm_maaktrajectaan">
	<a id="vragen_beantwoord" href='#page8' data-transition='slide' >
		<h1 id="hfdm_text_maaktrajectaan">Volgende > </h1>
	</a>
	</div>
</div>


</div><!-- /page7 -->
<div data-role="page" class="page8" id="page8">

<div class="hfdm_item_wrapper" id="hfdm_headbar">
	<div class="hfdm_header">
		<h1 id="hfdm_title">Moodboard fase</h1>
	</div>
</div>
<div class="hfdm_item_wrapper">
	<div class="hfdm_item">
	<!-- filler block -->
	</div>
</div>

<div class="hfdm_item_wrapper moodboard_gk_afb2">
<img src="" id="moodboard_gekozen_afb_2" style="width:100%;" class="moodboard_afb_large">
</div>

<div class="hfdm_item_wrapper">
	<div class="hfdm_item" id="hfdm_zoeken">
		<h1 id="mb_afb_vraag">Waarom heb je voor deze afbeelding gekozen?</h1>
		<!--input code -->
		<textarea id="waarom_gekozen_vraag1_mb2" class="md_textfield_vraag"></textarea>
	</div>
</div>

<div class="hfdm_item_wrapper">
	<div class="hfdm_item" id="hfdm_zoeken">
		<h1 id="mb_afb_vraag">Wat vind je zo mooi aan deze afbeelding?</h1>
		<!--input code -->
		<textarea id="mooi_afbeelding_vraag2_mb2" class="md_textfield_vraag"></textarea>
	</div>
</div>

<div class="hfdm_item_wrapper">
	<div class="hfdm_item" id="hfdm_zoeken">
		<h1 id="mb_afb_vraag">Wat voor gevoel heb je erbij?</h1>
		<!--input code -->
		<textarea id="wat_gevoel_vraag3_mb2" class="md_textfield_vraag"></textarea>
	</div>
</div>

<div class="hfdm_item_wrapper">
	<div class="hfdm_item" id="hfdm_maaktrajectaan">
	<a id="vragen_beantwoord2" href='#page5' data-transition='slide' >
		<h1 id="hfdm_text_maaktrajectaan">Voltooien</h1>
	</a>
	</div>
</div>

</div><!-- /page8 -->
</body>
</html>