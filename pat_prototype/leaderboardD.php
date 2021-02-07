<?php
session_start();
include 'connect.php';  // Holds all of our database connection information
$result = mysql_query("SELECT * FROM dbUsers");

while($row = mysql_fetch_array($result))
  {
  $userD[] = $row['username'];
  $ho_gem[] = $row['hoogst_gemiddeld'];
  }
$meest_studiepunten = array_multisort($ho_gem, SORT_DESC, $userD, SORT_DESC);
?>