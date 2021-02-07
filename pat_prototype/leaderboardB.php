<?php
session_start();
include 'connect.php';  // Holds all of our database connection information
$result = mysql_query("SELECT * FROM dbUsers");

while($row = mysql_fetch_array($result))
  {
  $userB[] = $row['username'];
  $high_ma[] = $row['modules_afgerond']; // er blijken problemen te zijn met deze variabelen, misschien de handleiding hierover referen? 
  
  }
$meest_ma = array_multisort($high_ma, SORT_DESC, $userB, SORT_DESC); //hier probleem?
?>