<?php session_start(); ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" dir="ltr">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<title>yensdesign.com - Create a shoutbox using PHP and AJAX with jQuery</title>
	<link rel="stylesheet" href="general.css" type="text/css" media="screen" />
</head>
<body>




<div id="container">


<div class="content">   <ul> <ul> </div>
<div class="content2">
	<form method="post" id="form">
		<table>
            <tr>
				<td><label>Bericht</label></td>
				<td><input class="text" id="message" type="text" MAXLENGTH="255" /></td>
				<td id="bomb"><label>Gebruiker</label></td>
				<td id="bomb"><input class="text user" id="nick"  type="text" MAXLENGTH="25" value="<?php echo $_SESSION['inlog_gebruiker'] ?>"/></td>
				<td></td>
				<td><input id="send" type="submit" value="Verzenden" /></td>
			</tr>
		</table>
	</form>
</div>

</div>
		
<script type="text/javascript" src="jquery.js"></script>
<script type="text/javascript" src="shoutbox.js"></script>

</body>
</html>