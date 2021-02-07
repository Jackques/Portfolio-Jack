<?php
session_start();
include 'connect.php';  // Holds all of our database connection information
$result = mysql_query("SELECT * FROM dbUsers");

while($row = mysql_fetch_array($result))
  {
  $highscore[] = $row['studiepunten'];
  $userA[] = $row['username'];
  }
$meest_studiepunten = array_multisort($highscore, SORT_DESC, $userA, SORT_DESC);

/*
while($row = mysql_fetch_array($result))
  {
  //$high_ma[] = $row['modules_afgerond'];
  //$userB[] = $row['username'];
  }
*/
//$meest_ma = array_multisort($high_ma, SORT_DESC, $userB, SORT_DESC);
//$meest_ma = array_multisort($userB, SORT_DESC);


//print_r($userA[1]);
//echo"<br />";
//print_r($highscore[1] ." punten");

?>