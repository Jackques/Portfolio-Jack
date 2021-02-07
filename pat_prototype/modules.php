<?php session_start(); ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" dir="ltr">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />

<title>Welkom op het prototype van Jack en Renee</title>

<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script> 

<link rel="stylesheet" href="default.css" />
<link rel="stylesheet" href="stickies/stickies.css" />

<link rel="stylesheet" href="shoutbox/general.css" type="text/css" media="screen" />
<link rel="stylesheet" href="algemeen.css" type="text/css" media="screen" />
<link rel="stylesheet" href="Post-it_files/jquery.css" type="text/css">
<link href="Profiel.css" rel="stylesheet" type="text/css" />

<!-- Hieronder staat zijn sleutel voor Linkedin integratie -->	
<script type="text/javascript" src="http://platform.linkedin.com/in.js">
  
  api_key: 7uz5ylsqyiqi
  onLoad: onLinkedInLoad
  authorize: true
  
</script>
<script type="text/javascript">
function ask_popup(){
$('#vragenvak').toggle();
}
</script>
</head>



<body>

<div id="hetheleding">

<div id="unheader"></div>
<div id="header">
	<div class="marked">
    	<a href="home.php"><img border="0" src="Home.png" /></a>&nbsp;&nbsp;
        <a href="modules.php"><img border="0" src="Opleidingen.png" /></a>&nbsp;&nbsp;
        <a href="manuals.php"><img border="0" src="Bibliotheek.png" /></a>&nbsp;&nbsp;
        <!-- <a href="Profiel.html"><img border="0" src="Profiel.png" /></a> -->
		<a onclick="ask_popup()"><img class="search" src="misc_files/Zoeken.png" width="180" height="18" /></a>
        <input class="search" type="text" value="Zoeken" size="20"/>
    </div>
    <div class="remarked">
    	<a href="home.php"><img border="0" src="patlogo.png" width="132" height="44" /></a>
    </div>
</div>

<div id="big_wrapper">
<div id="wrapper2">
<div id="left_bar" class="opmaakvooralle">
<div class="ex" id="note">
<div id="notes"></div>
</div>
<link rel="stylesheet" href="Post-it_files/jquery.css" type="text/css">

</div>
<div class="btns">


<div id="containsladen">
<div id="laden"><img src="loading7.gif" width="100" height="50" alt="laden..." /></div>
</div>
<div id="profiles"></div><table id="ding" border="1"></table>
</div>

<div id="middle_bar2">
<iframe src="Opleidingen.php" height="661" width="951" frameborder="0">
  <p>Your browser does not support iframes.</p>
</iframe>
</div>

</div></div></div>

<div id="bottom_bar3">
<div id="container"> <!-- waar de hele chatbox in zit -->
	<div id="content" class="content">   <!-- waar de berichten verschijnen -->
	<ul> <ul> 
	</div>
		<div class="content2">  <!-- waar we de berichten kunnen typen -->
				<table>
					<tr>
					<td width="75"><p style="color:white; display:inline; font-family:calibri, sans-serif;font-size:14px;">Chat</p>
                    
					<input id="chat_hide" width="13" type="image" style="display:none;" height="12" value="Toggle" onclick="return toggleMe_hidechat('content')" src="misc_files/ArrowDown.png">
					<input id="chat_show" width="13" type="image" height="12" value="Toggle" onclick="return toggleMe_showchat('content')" src="misc_files/ArrowUp.png">
					</td>
					
					<form method="post" id="form">
					<td width="887"><input class="text" id="message" type="text" MAXLENGTH="160" /></td>
					<!-- hieronder in de input komt automatisch via de php sessie de inlognaam van de gebruiker in, maar omdat we niet willen dat de 
					gebruiker dit handmatig gaat invoeren of uberhaupt bij kan komen, doen we dit in de css verbergen-->
					<td width="50"><input id="send" type="submit" value="Verzenden" /></td>
					<td id="bomb" width="1"><input class="text user" id="nick"  type="text" MAXLENGTH="25" value="<?php echo $_SESSION['inlog_gebruiker'] ?>"/></td>
					</form>
					
					</tr>
				</table>
		</div>
</div>

<div id="vragenvak">
<img src="zoeken_resultaten.jpg" width="325px" height="328px" style="float:left" />
<div style="float:left; margin-left:5px;">
<form method="post" id="externalquestion" onsubmit="return false">
	<h2>Stel een vraag:</h2>
	<input type="text" id="kleinevraag" value="<Titel>" /><br />
	<textarea id="grotevraag" rows="10" ><Bericht> </textarea>
</div>
<br />
		<input type="radio" name="vehicle" value="Linkedin" CHECKED /><p2>Stuur je bericht naar LinkedIn</p2>
			<select id="linkedingroepen">
			<option selected="selected">Selecteer groep</option>
			</select><br />
		<!-- <input type="radio" name="vehicle" value="Yammer" /> Stel je vraag op Yammer.<br /> -->
		<!-- <input type="radio" name="vehicle" value="Gebruiker" /> Stel je vraag aan een expert: --><br />
	<input id="zend" type="submit" value="Verzenden" /><!-- onClick="gettextareavalue(grotevraag.value)" -->
</form>
</div>

</div>

<!--
//ik laad jquery al in met google helemaal bovenaan de pagina, maar zou ik besluiten om jquery lokaal te gebruiken dan kan ik deze regel activeren onder mij
<script src="jquery.js"></script>
-->
<script type="text/javascript" src="auth.js"></script>
<script type="text/javascript" src="linkedin_link/linkedin_link.js"></script>
<script type="text/javascript" src="answer/vragenstellen.js"></script>
<script type="text/javascript" src="shoutbox/shoutbox.js"></script>
<script type="text/javascript" src="shoutbox/chat_shownhide.js"></script>

<script src="stickies/jquery.min.js"></script>
<script src="stickies/jquery-ui.min.js"></script>
<script src="json2.js"></script>
<script src="stickies/stickies.js"></script>
<script>
	STICKIES.open();
</script>

</div>
</div>
</body>
</html>