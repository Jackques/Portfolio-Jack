<?php
$con = mysql_connect("localhost","qb210419_admin","VgF46vgnR");
if (!$con)
  {
  die('Could not connect: ' . mysql_error());
  }
  
$db_selected  = mysql_select_db("qb210419_database_1", $con);
if (!$db_selected) {
    die ('Can\'t use foo : , verkeerde database geselecteerd ofzo?' . mysql_error());
}
?>