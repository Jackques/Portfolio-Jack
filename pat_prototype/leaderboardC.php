<?php
session_start();
include 'connect.php';  // Holds all of our database connection information
$result = mysql_query("SELECT * FROM dbUsers");

while($row = mysql_fetch_array($result))
  {
  $userC[] = $row['username'];
  $me_ged[] = $row['meest_gedeeld'];
  }
$meest_studiepunten = array_multisort($me_ged, SORT_DESC, $userC, SORT_DESC);
?>