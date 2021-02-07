<?php
session_start(); // Start a new session
include '../connect.php';  // Zorgt ervoor dat ik geconnecteert ben met de database

if(isset($_POST['data'])) {
	//$hans = $_SESSION['inlog_gebruiker']; //haalt uit de sessie de gebruikersnaam is wat: testnaam is.
	$hans = $_SESSION['inlog_gebruiker']; //haalt uit de sessie de gebruikersnaam is wat: testnaam is.
	$json = json_decode($_POST['data'], true);
	$length = count($json);
	//echo $json;
}
else {
	echo "nodata";
	die();
}

try {	
	//poging 2 om de waardes van de variabejlen in de database te krijgen.
	for ($i=0; $i<$length; $i++) {
		$title = mysql_real_escape_string($json[$i]['title']);
		if(isset($json[$i]['summary'])) {
			$summary = mysql_real_escape_string($json[$i]['summary']);
		}
		else {
			$summary = "no summary";
		}
		if(isset($json[$i]['attachment']['contentUrl'])) {
			$attachment = mysql_real_escape_string($json[$i]['attachment']['contentUrl']);
		}
		else {
			$attachment = "no attachment";
		}
		mysql_query("INSERT INTO ".$hans." (titelnaam, tekstnaam, urlnaam, bron) VALUES ('".$title."', '".$summary."', '".$attachment."', 'Linkedin')");
	};
	//echo "success";
}
catch(Exception $e) {
	echo "error";
	die();
}

?>