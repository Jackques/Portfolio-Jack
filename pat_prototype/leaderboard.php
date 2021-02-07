<?php include 'leaderboardA.php'; ?>
<?php include 'leaderboardB.php'; ?>
<?php include 'leaderboardC.php'; ?>
<?php include 'leaderboardD.php'; ?>
<?php include 'leaderboardE.php'; ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Naamloos document</title>
</head>
<body>

<!--<div class="ex" id="container"> -->
  <h2>Scores</h2>
		<!--<div id="subcontainer">-->
        	
			<div class="ex" id="box">
            	<h2>Hoogste totaalscore</h2>
				<div class="boardcontainer">
				<img src="misc_files/star_3.png"/>
				<img src="misc_files/star_3.png"/>
				<img src="misc_files/star_3.png"/>
				<img src="misc_files/star_3.png"/>
				<img src="misc_files/star_3.png"/>
        		</div>
  				<div class="boardcontainer2">
       			  <div id="item1"><h3><?php print_r($userA[0]); ?></h3><p2><?php print_r($highscore[0] ." punten"); ?></p2></div>
           		  <div id="item1"><h3><?php print_r($userA[1]); ?></h3><p2><?php print_r($highscore[1] ." punten"); ?></p2></div>
       			  <div id="item1"><h3><?php print_r($userA[2]); ?></h3><p2><?php print_r($highscore[2] ." punten"); ?></p2></div>
           		  <div id="item1"><h3><?php print_r($userA[3]); ?></h3><p2><?php print_r($highscore[3] ." punten"); ?></p2></div>
           		  <div id="item1"><h3><?php print_r($userA[4]); ?></h3><p2><?php print_r($highscore[4] ." punten"); ?></p2></div>
       			</div>
            </div>
           
		   <div class="ex" id="box">
            	<h2>Meeste modules afgerond</h2>
				<div class="boardcontainer">
        			<img src="misc_files/star_3.png"/>
          			<img src="misc_files/star_3.png"/>
          			<img src="misc_files/star_3.png"/>
            		<img src="misc_files/star_2.png"/>
            		<img src="misc_files/star_2.png"/>
        		</div>
  				<div class="boardcontainer2">
        			<div id="item1"><h3><?php print_r($userB[0]); ?></h3><p2><?php print_r($high_ma[0] ." punten"); ?></p2></div>
            		<div id="item1"><h3><?php print_r($userB[1]); ?></h3><p2><?php print_r($high_ma[1] ." punten"); ?></p2></div>
           			<div id="item1"><h3><?php print_r($userB[2]); ?></h3><p2><?php print_r($high_ma[2] ." punten"); ?></p2></div>
            		<div id="item1"><h3><?php print_r($userB[3]); ?></h3><p2><?php print_r($high_ma[3] ." punten"); ?></p2></div>
            		<div id="item1"><h3><?php print_r($userB[4]); ?></h3><p2><?php print_r($high_ma[4] ." punten"); ?></p2></div>
       			</div>
            </div>
           
		   <div class="ex" id="box">
            	<h2>Meest gedeeld</h2>
				<div class="boardcontainer">
       			  <img src="misc_files/star_3.png"/>
       			  <img src="misc_files/star_3.png"/>
       			  <img src="misc_files/star_3.png"/>
           		  <img src="misc_files/star_3.png"/>
           		  <img src="misc_files/star_3.png"/>
        		</div>
  				<div class="boardcontainer2">
        			<div id="item1"><h3><?php print_r($userC[0]); ?></h3><p2><?php print_r($me_ged[0] ." punten"); ?></p2></div>
            		<div id="item1"><h3><?php print_r($userC[1]); ?></h3><p2><?php print_r($me_ged[1] ." punten"); ?></p2></div>
           			<div id="item1"><h3><?php print_r($userC[2]); ?></h3><p2><?php print_r($me_ged[2] ." punten"); ?></p2></div>
            		<div id="item1"><h3><?php print_r($userC[3]); ?></h3><p2><?php print_r($me_ged[3] ." punten"); ?></p2></div>
            		<div id="item1"><h3><?php print_r($userC[4]); ?></h3><p2><?php print_r($me_ged[4] ." punten"); ?></p2></div>
       			</div>
            </div>
           
		   <div class="ex" id="box" style="display:none">
            	<h2>Hoogst gemiddelde</h2>
				<div class="boardcontainer">
        			<img src="misc_files/star_3.png"/>
          			<img src="misc_files/star_3.png"/>
          			<img src="misc_files/star_3.png"/>
            		<img src="misc_files/star_2.png"/>
            		<img src="misc_files/star_2.png"/>
        		</div>
  				<div class="boardcontainer2">
        			<div id="item1"><h3><?php print_r($userD[0]); ?></h3><p2><?php print_r($ho_gem[0] ." punten"); ?></p2></div>
            		<div id="item1"><h3><?php print_r($userD[1]); ?></h3><p2><?php print_r($ho_gem[1] ." punten"); ?></p2></div>
           			<div id="item1"><h3><?php print_r($userD[2]); ?></h3><p2><?php print_r($ho_gem[2] ." punten"); ?></p2></div>
            		<div id="item1"><h3><?php print_r($userD[3]); ?></h3><p2><?php print_r($ho_gem[3] ." punten"); ?></p2></div>
            		<div id="item1"><h3><?php print_r($userD[4]); ?></h3><p2><?php print_r($ho_gem[4] ." punten"); ?></p2></div>
       			</div>
            </div>
          
		  <div class="ex" id="box">
            	<h2>Meest sociaal</h2>
				<div class="boardcontainer">
        			<img src="misc_files/star_3.png"/>
          			<img src="misc_files/star_3.png"/>
          			<img src="misc_files/star_3.png"/>
            		<img src="misc_files/star_3.png"/>
            		<img src="misc_files/star_3.png"/>
        		</div>
  				<div class="boardcontainer2">
        			<div id="item1"><h3><?php print_r($userE[0]); ?></h3><p2><?php print_r($me_soc[0] ." punten"); ?></p2></div>
            		<div id="item1"><h3><?php print_r($userE[1]); ?></h3><p2><?php print_r($me_soc[1] ." punten"); ?></p2></div>
           			<div id="item1"><h3><?php print_r($userE[2]); ?></h3><p2><?php print_r($me_soc[2] ." punten"); ?></p2></div>
            		<div id="item1"><h3><?php print_r($userE[3]); ?></h3><p2><?php print_r($me_soc[3] ." punten"); ?></p2></div>
            		<div id="item1"><h3><?php print_r($userE[4]); ?></h3><p2><?php print_r($me_soc[4] ." punten"); ?></p2></div>
       			</div>
            </div>
          
		<!--  <div class="ex" id="box">
            	<h2>Meeste connecties</h2>
				<div class="boardcontainer">
       			  <img src="misc_files/Icon-connect.png"/>
       			  <img src="misc_files/Icon-connect.png"/>
       			  <img src="misc_files/Icon-connect.png"/>
           		  <img src="misc_files/Icon-connect.png"/>
           		  <img src="misc_files/Icon-connect.png"/>
        		</div>
  				<div class="boardcontainer2">
        			<div id="item1"><h3>Paul Kemper</h3>		<p2>570 punten</p2></div>
            		<div id="item1"><h3>Jacco Schimmel</h3>		<p2>550 punten</p2></div>
           			<div id="item1"><h3>Marcel Smulders</h3>	<p2>500 punten</p2></div>
            		<div id="item1"><h3>Jeroen Krouwels</h3>	<p2>450 punten</p2></div>
            		<div id="item1"><h3>Eveline van Dongen</h3>	<p2>420 punten</p2></div>
       			</div>
            </div> -->
       <!-- </div> dit is de subcontainer div-->
<!--</div>-->

<style>

#container{
	float:left;
	margin:5px;
	width:398px;
	height:418px;
}

#subcontainer{
	background-color:white;
	overflow-y:scroll;
	overflow-x:hidden;
	
	padding-top:8px;
	margin-left:5px;
	margin-right:5px;
	margin-bottom:5px;
	width:388px;
	height:367px;
}

#box{
	padding:10px;
	width:155px;
	height:212px;
}

#item1{
	width:150px;
	float:left;
	height:14px;
	padding-bottom:22px;
}

#item2{
	padding-top: 7px; 
	padding-bottom:16px; 
}

.boardcontainer{ 
	width:25px; 
	float:left; 
	margin-top:2px;
}

.boardcontainer2{ 
	width:120px; 
	float:right; 
	margin-top:-5px;
}

.boardcontainer img{ 
	padding-top: 3px; 
	padding-bottom:14px; 
}

.boardcontainer2 h1{ 
	padding-left:10px; 
	margin-bottom:9px; 
}

h1{
	margin-top:12px;
	padding-left:12px;
	font-family:calibri, sans-serif;
	font-size:14px;
	color:white;
}

h2{
	font-family:calibri, sans-serif;
	font-size:14px;
	color:white;
	border-bottom-style:solid;
	border-color:white;
	border-width:1px;
}

h3{
	font-family:calibri, sans-serif;
	font-size:13px;
	color:white;
}

p2{
	position: relative; 
	top: -13px;
	padding-right:10px;
	padding-left:10px;
	font-family:calibri, sans-serif;
	font-size:12px;
	color:#8bbbbb;
}

div.ex{
	background: #999; /* for non-css3 browsers */
	filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#006666', endColorstr='#002222');
	background: -webkit-gradient(linear, left top, left bottom, from(#066), to(#022));
	background: -moz-linear-gradient(top,  #066,  #022); 
	-moz-box-shadow: 0px 2px 5px #888;
	-webkit-box-shadow: 0px 2px 5px #888;
	box-shadow: 0px 2px 5px #888;
	float:left;
	margin:5px;
	width: 175px;
	height:220px;
}

</style>

</body>
</html>
