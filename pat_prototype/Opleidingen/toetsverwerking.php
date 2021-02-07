<?php
session_start(); // Start a new session
$hans = $_SESSION['inlog_gebruiker'];

include '../connect.php';  // Zorgt ervoor dat ik geconnecteert ben met de database

$bob = $_POST['werkveld'];
echo $bob;

$tom = $_POST['vraag'];
echo $tom;

/*
$jan = "toets1_vraag1";

$kees = "jack heef een leuke trui aan";
*/

mysql_query("UPDATE ".$hans."_antwoorden SET antwoorden='".$bob."' WHERE vragen='".$tom."'");


/* mysql_query("INSERT INTO ".$hans." (titelnaam, tekstnaam) VALUES ('Peter', 'Griffin')"); */

/* mysql_query("UPDATE testnaam SET tekstnaam=iets WHERE titelnaam='Peter' "); */

?>