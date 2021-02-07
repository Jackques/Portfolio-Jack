<?php
session_start();
include 'connect.php';  // Holds all of our database connection information
$result = mysql_query("SELECT * FROM dbUsers");

while($row = mysql_fetch_array($result))
  {
  $userE[] = $row['username'];
  $me_soc[] = $row['meest_sociaal'];
  }
$meest_studiepunten = array_multisort($me_soc, SORT_DESC, $userE, SORT_DESC);
?>