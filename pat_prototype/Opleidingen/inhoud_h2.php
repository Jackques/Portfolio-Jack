<html>
<head>
<script type="text/javascript">
function toggleMe(a){
var down_hide=document.getElementById('m_arrow_down');
var up_show=document.getElementById('m_arrow_up');
var e=document.getElementById(a);
if(!e)return true;
if(e.style.display=="none"){ // het verborgen is wort hij onverborgen
e.style.display="inline-block";

up_show.style.display="inline-block";
down_hide.style.display="none";
}
else{ // anders verberg het
e.style.display="none";

up_show.style.display="none";
down_hide.style.display="inline-block";
}
return true;
}

function toggleMe2(a){
var down_hide=document.getElementById('e_arrow_down');
var up_show=document.getElementById('e_arrow_up');
var e=document.getElementById(a);
if(!e)return true;
if(e.style.display=="none"){
e.style.display="inline-block";

up_show.style.display="inline-block";
down_hide.style.display="none";
}
else{
e.style.display="none";

up_show.style.display="none";
down_hide.style.display="inline-block";
}
return true;
}
</script>
<link href="../Opleidingen_sidebar.css" rel="stylesheet" type="text/css" />
</head>
<body>
<h2>Index</h2>
		<a style="text-decoration:none" target="_parent" href="../Opleidingen.php"><p>Moduleoverzicht</p></a>
		<h3>Competentiemanagement</h3>
        <a style="text-decoration:none" target="_parent" href="h2_inleiding.html"><p>Module inleiding</p></a>
        
		<div style="margin-bottom:2px; vertical-align:text-top;">
		<a style="text-decoration:none" target="_parent" href="h2_manual.html"><p style="display:inline;">Manual</p> </a> 
		<img id="m_arrow_down"  border="0" src="arrow_down.png" onclick="return toggleMe('para1')" width="15" height="15" /> 
		<img id="m_arrow_up"  border="0" src="arrow_up.png" style="display:none;" onclick="return toggleMe('para1')" width="15" height="15" />
		</div>
		
		<div id="para1">
        <a style="text-decoration:none" target="_parent" href="h2_manual.html"><p>Manual pag 1<br /> Geen doel op zich</p></a>
		<a style="text-decoration:none" target="_parent" href="h2_manual.html"><p>Manual pag 2<br /> De essentie van competentiemanagement</p></a>
		<a style="text-decoration:none" target="_parent" href="h2_manual.html"><p>Manual pag 3<br /> Gedrag als input</p></a>
		<a style="text-decoration:none" target="_parent" href="h2_manual.html"><p>Manual pag 4<br /> Geen kunstje, maar kunde</p></a>
		<a style="text-decoration:none" target="_parent" href="h2_manual.html"><p>Manual pag 5<br /> Niveaus van invoering van competentiemanagement</p></a>
		<a style="text-decoration:none" target="_parent" href="h2_manual.html"><p>Manual pag 6<br /> Taal en begrippen competentiemanagement</p></a>
		<a style="text-decoration:none" target="_parent" href="h2_manual.html"><p>Manual pag 7<br /> Competentiewoordenboek</p></a>
		<a style="text-decoration:none" target="_parent" href="h2_manual.html"><p>Manual pag 8<br /> Gedragsindicatoren</p></a>
		<a style="text-decoration:none" target="_parent" href="h2_manual.html"><p>Manual pag 9<br /> Kenniscompetenties</p></a>
		<a style="text-decoration:none" target="_parent" href="h2_manual.html"><p>Manual pag 10<br /> Nieuwe beleidstermen</p></a>
		</div>
	<!--
	<div><h3><img src="../misc_files/Checkmark.png" width="9" height="9" /> 1.1 Volgeling of leider?</h3></div>
    <div><h3><img src="../misc_files/Checkmark.png" width="9" height="9" /> 1.2 De zelfsturende medewerker</h3></div>
    <div><h3><img src="../misc_files/Checkmark.png" width="9" height="9" /> 1.3 Zelfsturing en groepsprestaties</h3></div>
    <div><h3><img src="../misc_files/Checkmark.png" width="9" height="9" /> 1.4 De essentie van zelfsturing</h3></div>
	-->
        <div style="vertical-align:text-top;">
		<a style="text-decoration:none" target="_parent" href="h2_eindtoets.html"><p style="display:inline;">Eindtoets</p></a>
		<img id="e_arrow_down" border="0" src="arrow_down.png" onclick="return toggleMe2('para2')" width="15" height="15" /> 
		<img id="e_arrow_up" border="0" src="arrow_up.png" style="display:none;" onclick="return toggleMe2('para2')" width="15" height="15" />
		</div>
		
		<div id="para2">
		<a style="text-decoration:none" target="_parent" href="h2_eindtoets.html"><p>Eindtoets Vraag 1</p></a>
		<a style="text-decoration:none" target="_parent" href="h2_eindtoets.html"><p>Eindtoets Vraag 2</p></a>
		<a style="text-decoration:none" target="_parent" href="h2_eindtoets.html"><p>Eindtoets Vraag 3</p></a>
		<a style="text-decoration:none" target="_parent" href="h2_eindtoets.html"><p>Eindtoets Vraag 4</p></a>
		<a style="text-decoration:none" target="_parent" href="h2_eindtoets.html"><p>Eindtoets Vraag 5</p></a>
		<a style="text-decoration:none" target="_parent" href="h2_eindtoets.html"><p>Eindtoets Vraag 6</p></a>
		<a style="text-decoration:none" target="_parent" href="h2_eindtoets.html"><p>Eindtoets Vraag 7</p></a>
		<a style="text-decoration:none" target="_parent" href="h2_eindtoets.html"><p>Eindtoets Vraag 8</p></a>
		<a style="text-decoration:none" target="_parent" href="h2_eindtoets.html"><p>Eindtoets Vraag 9</p></a>
		<a style="text-decoration:none" target="_parent" href="h2_eindtoets.html"><p>Eindtoets Vraag 10</p></a>
		<a style="text-decoration:none" target="_parent" href="h2_eindtoets.html"><p>Eindtoets Vraag 11</p></a>
		<a style="text-decoration:none" target="_parent" href="h2_eindtoets.html"><p>Eindtoets Vraag 12</p></a>
		</div>
</body>
</html>