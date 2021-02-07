
<html> 

<head>
<title>Profielen</title>
<?php include 'header.php'; ?>
<link rel="stylesheet" type="text/css" href="css_profielen.css"><!-- custom voor deze pagina-->
</head>

<body>
<div data-role="page" class="page1">

<div class="hfdm_item_wrapper" id="hfdm_headbar">
	<div class="hfdm_header">
		<h1 id="hfdm_title">Kies de fase waar je in zit</h1>
	</div>
</div>
<div class="hfdm_item_wrapper" id="hfdm_headbar" style="position:static;">
	<div class="hfdm_item">
	<!-- filler block -->
	</div>
</div>

<?php
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
   <div class='hfdm_item_wrapper'>
		<a href='fases.php' data-transition='slide' >
		<div class='hfdm_item' id='hfdm_user_".$row{'profielnaam'}."' style='background:none;background-color:#".$row{'profielkleur'}.";'>
			
			<h1 id='hfdm_text_user'>Profiel ".$row{'profielnaam'}." ></h1>
   
		</div>
		</a>
   </div>
   ";
   
}

//close the connection
mysql_close($dbhandle);
?>

<div class="hfdm_item_wrapper">
	<div class="hfdm_item" id="hfdm_maakprofiel">

		<h1 id="hfdm_text_maakprofiel">Maak een profiel aan > </h1>
		
	</div>
</div>

</div><!-- /page1 -->

</body>

</html>