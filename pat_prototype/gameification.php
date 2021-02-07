<?php
session_start();
 // Start a new session
include 'connect.php';  // Holds all of our database connection information

$g = $_SESSION['inlog_gebruiker'];
echo $g;
$result = mysql_query("SELECT * FROM dbUsers WHERE username='".$g."' ");
// LET OP: geen spaties achterlaten zoals dit: username=' ".$g." '"
// anders neemtie de witte spaties ook meej!

echo $_POST['action']; //zijn we nog wel ingelogd?
echo "<br />";
echo $_POST['dome'];
$cijfer = $_POST['dome'];


switch($_POST['action']){
case "updateS":
	updateStudiepunten($g, $result, $cijfer);
	break;

case "updateMA":
	updateModules_afgerond($g, $result, $cijfer);
	break;
	
case "updateC":
	updateMeest_gedeeld($g, $result);
	break;
case "updateGM":
	updateHoogst_gemiddeld($g, $result);
	break;
case "updateSo":
	updateMeest_sociaal($g, $result);
	break;
}



function updateStudiepunten($g, $result, $cijfer){
// let op: php variabelen nooit beginnen met VAR en dan variabelenaam, gebruik ipv dit $ teken.
// daarbij, variabelen die je buiten de functie definieert moet je meenemen wanneer je de functie aanroept d.m.v. parameters/arguments!!!!
// daar heb ik gvd een hele middag aan verspild! op 11-6-2012
// omdat ik dat dus niet wist...

// schijnbaar zijn variabelen buiten de functie in php niet beschikbaar binnen de functie!!!
$studiepunten = mysql_result($result,0,"studiepunten");
//hij pakt de rij die hij heeft opgehaald de studiepunten

$opsomming = $studiepunten + $cijfer;
echo "<br />";
echo $opsomming;
echo "<br />";
echo $g;
mysql_query("UPDATE dbUsers SET studiepunten='".$opsomming."' WHERE username='".$g."'");
}

function updateModules_afgerond($g, $result, $cijfer){
	switch($_POST['dome']){
		case "1":
	echo "<br />";
	echo "ik ga voor case 1 bitch";
	$module1 = mysql_result($result,0,"module1_af");
	if($module1==0){
		$module1++;
		echo $module1;
		mysql_query("UPDATE dbUsers SET module1_af='".$module1."' WHERE username='".$g."'");
					}
	else{
	// HIER CODE VOOR HET ONBESCHIKBAAR/VOLTOOID MAKEN VAN MODULE 1
	}
			break;
			
		case "2":
	echo "<br />";
	echo "ik ga voor case 2 bitch";
	$module2 = mysql_result($result,0,"module2_af");
	if($module2==0){
		$module2++;
		echo $module2;
		mysql_query("UPDATE dbUsers SET module2_af='".$module2."' WHERE username='".$g."'");
					}
	else{
	// HIER CODE VOOR HET ONBESCHIKBAAR/VOLTOOID MAKEN VAN MODULE 2
	}
			break;
			
		case "3":
	echo "<br />";
	echo "ik ga voor case 3 bitch";
	$module3 = mysql_result($result,0,"module3_af");
	if($module3==0){
		$module3++;
		echo $module3;
		mysql_query("UPDATE dbUsers SET module3_af='".$module3."' WHERE username='".$g."'");
					}
	else{
	// HIER CODE VOOR HET ONBESCHIKBAAR/VOLTOOID MAKEN VAN MODULE 3
	}
			break;
							}
}

function updateMeest_gedeeld($g, $result){
$meest_gedeeld = mysql_result($result,0,"meest_gedeeld");
$meest_gedeeld++;
echo $meest_gedeeld;
mysql_query("UPDATE dbUsers SET meest_gedeeld='".$meest_gedeeld."' WHERE username='".$g."'");
}

function updateHoogst_gemiddeld($g, $result){ // deze functie afmaken
 // hier komt nog meer bcode bullshit
}
function updateMeest_sociaal($g, $result){
$meest_sociaal = mysql_result($result,0,"meest_sociaal");
$meest_sociaal++;
echo $meest_sociaal;
mysql_query("UPDATE dbUsers SET meest_sociaal='".$meest_sociaal."' WHERE username='".$g."'");
}
?>