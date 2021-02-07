<?php
include 'connect.php';

$trajectnaam = $_POST['gekozennaam'];
$kleur = $_POST['gekozenkleur'];
  
mysqli_query($con,"INSERT INTO profielen (profielnaam, profielkleur) VALUES ('$trajectnaam','$kleur')");
  
$username = "qb210419_admin";
$password = "VgF46vgnR";
$hostname = "localhost"; 

//connection to the database
$dbhandle = mysql_connect($hostname, $username, $password) 
 or die("Unable to connect to MySQL");

//select a database to work with
$selected = mysql_select_db("qb210419_database_1",$dbhandle) 
  or die("Could not select examples");

//execute the SQL query and return records
$result = mysql_query("SELECT id, profielnaam, profielkleur FROM profielen");

//fetch tha data from the database 
while ($row = mysql_fetch_array($result)) {
   // echo "ID:".$row{'id'}." Name:".$row{'profielnaam'}." Year: ". //display the results
   // $row{'profielkleur'}."<br>";
   
   echo "
   <div class='hfdm_item_wrapper hfdm_user_item'>
		<a href='#page2' class='selected_user' data-transition='slide' style='text-decoration:none;' >
		<div class='hfdm_item' id='".$row{'profielnaam'}."' style='background:none;background-color:".$row{'profielkleur'}.";'>
			
			<h1 id='hfdm_text_user'>Lullo ".$row{'profielnaam'}." ></h1>
   
		</div>
		</a>
   </div>
   ";
   
}

//close the connection
mysql_close($dbhandle);

?>