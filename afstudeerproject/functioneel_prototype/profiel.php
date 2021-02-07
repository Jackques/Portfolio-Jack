<html>
<head>
	<title>ELO Prototype Jack Gommeren</title>
	
	<?php
	include 'plugins.php';
	?>

	<script>
		if (window.jQuery) {  
		// jQuery is loaded  
			//alert("Jquery active");
	} else {
		// jQuery is not loaded
			//alert("NEIN NEIN NEIN!");
	}
	</script>

</head>

<body>

<?php
	include 'header.php';
?>

<div id="main">
	<div id="gegevens_profiel">
	<p id="mijngegevensbut" class="pagina_titel">Mijn gegevens </p>
	<img id="mijngegevensbut_img" src="images/profiel/expand_icon.png" height="20" width="20"><br /><br />
	
		<table id="mijn_gegevens_tabel" border="0">
			<tr>
			<td><img src="images/profiel/eigen_afbeelding.jpg" height="295" width="295"></td>
			<td><p>Jack Gommeren</p><p>Bewerk profielfoto</p><br /><p>Studentnummer: 039843</p><p>Student e-mailadres:<br />jpwj.gommeren@student.avans.nl</p></td>
			<td><p>Factuur Collegegeld 2011</p><p>Factuur Collegegeld 2012</p><p>Factuur Collegegeld 2013</p></td>
			</tr>
			
			<tr>
			<td><p>Aresgegevens:<br />Prof v.d. Hoevenstraat 3<br />4882 JE<br />Zundert, Noord-Brabant Nederland<br />Mobiel: 0629452992<br> Vast nummer: 0765975377</p></td>
			<td><p>Geboorteplaats: Rotterdam<br />Geboortedatum: 09-04-1989</p><p>Bewerk gegevens</p></td>
			</tr>
		</table>
	
	</div>
	
	<div id="agenda_profiel">
	<p id="mijnagendabut" class="pagina_titel">Mijn agenda </p>
	<img id="mijnagendabut_img" src="images/profiel/expand_icon.png" height="20" width="20"><br /><br />
	
		<table id="mijn_agenda_tabel" border="1">
			<tr>
			<td>Tijdstip:</td>
			<td>maandag 13 jan 2014</td>
			<td>dinsdag 14 jan 2014</td>
			<td>woensdag 15 jan 2014</td>
			<td>donderdag 16 jan 2014</td>
			<td>vrijdag 17 jan 2014</td>
			</tr>
			
			<tr>
			<td>8:00</td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			</tr>
			
			<tr>
			<td>9:00</td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			</tr>
			
			<tr>
			<td>10:00</td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			</tr>
			
			<tr>
			<td>11:00</td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			</tr>
			
			<tr>
			<td>12:00</td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			</tr>
			
			<tr>
			<td>13:00</td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			</tr>
			
			<tr>
			<td>14:00</td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			</tr>
			
			<tr>
			<td>15:00</td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			</tr>
			
			<tr>
			<td>16:00</td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			</tr>
			
			<tr>
			<td>17:00</td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			</tr>
			
			<tr>
			<td>18:00</td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			</tr>
			
			<tr>
			<td>19:00</td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			</tr>
			
			<tr>
			<td>20:00</td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			</tr>
			
			<tr>
			<td>21:00</td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			</tr>
		</table>
		
		<div id="agenda_butons">
		<a href="index.html" style="display:inline;" data-role="button">Download .ics agenda</a>
		<a href="index.html" style="display:inline;"data-role="button">Kopieer RSS feed</a>
		</div>
	
	</div>
	
	<div id="cijfer_profiel">
	<p id="mijncijferbut" class="pagina_titel">Mijn cijfers </p>
	<img id="mijncijferbut_img" src="images/profiel/expand_icon.png" height="20" width="20"><br /><br />
	
		<table id="mijn_cijfer_tabel" border="0">
			<tr>
			<td>Jaar:</td>
			<td>Kwartaal:</td>
			<td>Vak:</td>
			<td>Punten:</td>
			<td>Datum:</td>
			<td>Cijfer:</td>
			</tr>
			
			<tr>
			<td>1</td>
			<td>1</td>
			<td>Print Media</td>
			<td>4</td>
			<td>28-10-2009</td>
			<td>7,6</td>
			</tr>
			
			<tr>
			<td></td>
			<td>2</td>
			<td>Communicatie Toets</td>
			<td>2</td>
			<td>5-12-2009</td>
			<td>7,3</td>
			</tr>
			
			<tr>
			<td>2</td>
			<td>1</td>
			<td>Engels</td>
			<td>2</td>
			<td>3-4-2010</td>
			<td>7,0</td>
			</tr>
			
			<tr>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			</tr>
			
			<tr>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			</tr>
			
			<tr>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			</tr>
			
			<tr>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			</tr>
			
			<tr>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			</tr>
			
			<tr>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			</tr>
			
			<tr>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			</tr>
			
			<tr>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			</tr>
			
			<tr>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			</tr>
			
			<tr>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			</tr>
			
			<tr>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			</tr>
		</table>
	
	</div>
	
	<div id="competenties_profiel">
	<p id="mijncompetentiesbut" class="pagina_titel">Mijn competenties </p>
	<img id="mijncompetentiesbut_img" src="images/profiel/expand_icon.png" height="20" width="20"><br />
	
		<table id="mijn_competenties_tabel" border="0" cellspacing="10">
			<tr>
			<td><b>Competentie:</b></td>
			<td><b>SLB oordeel:</b></td>
			<td><b>Eigen oordeel:</b></td>
			<td><b>Punten (0/5):</b></td>
			<td><b>Laatst gewijzigd op:</b></td>
			<td><b>Gemiddeld (0/5):</b></td>
			</tr>
			
			<tr>
			<td>Vermogen tot vormgeven</td>
			<td>De student heeft in voorgaande lessen prachtige ontwerpen getoond. Ook heeft hij deelgenomen aan de photoshop sessies. -Gerard van Oorden</td>
			<td id="special">Ik vind mezelf hier niet zo heel erg bekwaam in, vooral omdat ik het programma Illustrator nog niet beheers<img id="editbut" src="images/profiel/pencil_icon.png" width="20px" height="20px" /></td>
			<td>3</td>
			<td>28-10-2009</td>
			<td>4</td>
			</tr>

		</table>
	
	</div>
	
	<div id="portfolio_profiel">
	<p id="mijnportfoliosbut" class="pagina_titel">Mijn portfolio </p>
	<img id="mijnportfoliobut_img" src="images/profiel/expand_icon.png" height="20" width="20"><br />
	
		<table id="mijn_portfolio_tabel" border="0" cellspacing="10">
			<tr>
			<td>Competentie:</td>
			<td>SLB oordeel:</td>
			<td>Eigen oordeel:</td>
			<td>Punten (0/5):</td>
			<td>Laatst gewijzigd op:</td>
			<td>Gemiddeld (0/5):</td>
			</tr>
			
			<tr>
			<td>Vermogen tot vormgeven</td>
			<td>De student heeft in voorgaande lessen prachtige ontwerpen getoond. Ook heeft hij deelgenomen aan de photoshop sessies. -Gerard van Oorden</td>
			<td>Ik vind mezelf hier niet zo heel erg bekwaam in, vooral omdat ik het programma Illustrator nog niet beheers</td>
			<td>3</td>
			<td>28-10-2009</td>
			<td>4</td>
			</tr>

		</table>
	
	</div>
</div><!--  eind pagina -->

<div id="social_media_com"></div>

</body>

</html>