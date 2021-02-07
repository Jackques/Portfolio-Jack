<?php
session_start();
include 'connect.php';  // Holds all of our database connection information
$result = mysql_query("SELECT * FROM dbUsers");

while($row = mysql_fetch_array($result))
  {
  $userA[] = $row['username'];
  $highscore[] = $row['studiepunten'];
  }
$meest_studiepunten = array_multisort($highscore, SORT_DESC, $userA, SORT_DESC);
?>