<?php

// checkLogin.php


session_start(); // Start a new session

include 'connect.php';  // Holds all of our database connection information


// username and password sent from form
$myusername=$_POST['user'];
$mypassword=$_POST['pass'];

// To protect MySQL injection (more detail about MySQL injection)
$myusername = stripslashes($myusername);
$mypassword = stripslashes($mypassword);
$myusername = mysql_real_escape_string($myusername);
$mypassword = mysql_real_escape_string($mypassword);

$sql="SELECT * FROM dbUsers WHERE username='$myusername' and password='$mypassword'";
$result=mysql_query($sql);

// Mysql_num_row is counting table row
$count=mysql_num_rows($result);
// If result matched $myusername and $mypassword, table row must be 1 row

if($count==1){
// Register $myusername, $mypassword and redirect to file "login_success.php"
session_register("myusername");
session_register("mypassword");
$_SESSION['inlog_gebruiker'] = $myusername;
header("location:home.php");


}
else {

header("location:fail.html");
}
?>