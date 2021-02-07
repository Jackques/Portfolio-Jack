<?php
include 'connect.php';

$pagnum = $_POST['pagnum'];
$antw1pag1 = $_POST['antw1pag1'];
$antw2pag1 = $_POST['antw2pag1'];
$antw3pag1 = $_POST['antw3pag1'];

$antw1pag2 = $_POST['antw1pag2'];
$antw2pag2 = $_POST['antw2pag2'];
$antw3pag2 = $_POST['antw3pag2'];

if($pagnum == 1){
echo $pagnum;
echo"<br />";
echo $antw1pag1;
echo $antw2pag1;
echo $antw3pag1;
mysqli_query($con,"INSERT INTO profielen (antw1pag1, antw2pag1, antw3pag1) VALUES ('$antw1pag1','$antw2pag1','$antw3pag1')");
}elseif($pagnum == 2){
echo $pagnum;
echo"<br />";
echo $antw1pag2;
echo $antw2pag2;
echo $antw3pag2;
mysqli_query($con,"INSERT INTO profielen (antw1pag2, antw2pag2, antw3pag2) VALUES ('$antw1pag2','$antw2pag2','$antw3pag2')");

}
?>