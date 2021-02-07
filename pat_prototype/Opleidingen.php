<?php
session_start(); // start de sessie
include 'connect.php';  // Holds all of our database connection information
$g = $_SESSION['inlog_gebruiker']; //haalt de gebruikersnaam op uit de sessie
$result = mysql_query("SELECT * FROM dbUsers WHERE username='".$g."' "); //haalt de record van de gebruiker op uit de users database
?>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Version 1</title>



</head>
<body id="mainContent">
<link href="Opleidingen.css" rel="stylesheet" type="text/css" />
<link rel="stylesheet" href="Post-it_files/jquery.css" type="text/css">
	
<div class="ex" id="profile"> <!-- modules -->
		<h2>Opleidingen</h2>
		
<div>
	<!--<div><a href="Opleidingen/Zelfsturing.html"><img border="0" src="Opleidingen/Zelfsturing2.png" width="420" height="75" /></a></div>-->
  	  
<?php $module1 = mysql_result($result,0,"module1_af");
	if($module1==1){
	// IF module 1 is afgerond, dan verschijnt er niets want deze is voltooid
	}else{
	// anders komt deze html (toegang tot de module) tevoorschijn
	// dus hieronder komt een focking lange echo
	echo '<div id="test"><a style="text-decoration:none" href="Opleidingen/h1_inleiding.html"><p><b>Module Zelfsturing</b></p>
	<img src="Opleidingen/zelfsturing.png" /></a>
	<!--
	<img src="Opleidingen/4.1.w.png" width="105" height="6"/><img src="Opleidingen/4.2.w.png" width="105" height="6"/>
	<img src="Opleidingen/4.2.w.png" width="105" height="6"/><img src="Opleidingen/4.3.w.png" width="105" height="6"/>
	-->
	</div>';
	}
?>
      
<?php $module2 = mysql_result($result,0,"module2_af");
	if($module2==1){
	// IF module 1 is afgerond, dan verschijnt er niets want deze is voltooid
	}else{
	// anders komt deze html (toegang tot de module) tevoorschijn
	// dus hieronder komt een focking lange echo
	echo '<div id="test"><a style="text-decoration:none" href="Opleidingen/h2_inleiding.html"><p>Module Competentiemanagement</p>
	<img src="Opleidingen/competentie.png" /></a>
	<!--
	<img src="Opleidingen/4.1.w.png" width="105" height="6"/><img src="Opleidingen/4.2.w.png" width="105" height="6"/>
	<img src="Opleidingen/4.2.w.png" width="105" height="6"/><img src="Opleidingen/4.3.w.png" width="105" height="6"/>
	-->
	</div>';
	}
?> 
        
<?php $module3 = mysql_result($result,0,"module3_af");
	if($module3==1){
	// IF module 1 is afgerond, dan verschijnt er niets want deze is voltooid
	}else{
	// anders komt deze html (toegang tot de module) tevoorschijn
	// dus hieronder komt een focking lange echo
	echo '<div id="test"><a style="text-decoration:none" href="Opleidingen/h3_inleiding.html"><p>Module Bewustzijn</p>
	<img src="Opleidingen/motivatie.png" /></a>
	<!--
	<img src="Opleidingen/5.1.w.png" width="84" height="6"/><img src="Opleidingen/5.2.w.png" width="84" height="6"/>
	<img src="Opleidingen/5.2.w.png" width="84" height="6"/><img src="Opleidingen/5.2.w.png" width="84" height="6"/>
	<img src="Opleidingen/5.3.w.png" width="84" height="6"/>
	-->
	</div>';
	}
?>
<?php
if($module1==1&&$module2==1&&$module3==1){
echo"<h3>Gefeliciteerd, u heeft alle modules afgerond!</h3>";
}
?>
     
	
		<br /><br />
        
      
	</div> 
	
</div><!-- modules -->
</div>



</body>
</html>
