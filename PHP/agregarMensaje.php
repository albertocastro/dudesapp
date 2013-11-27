<?php
session_start();
    include("conection.php");
     
	

$mensaje= $_GET['mensaje'];
    $to= $_GET['to'];
	$from= $_SESSION["User_Id"];
	echo  $_SESSION['User_Id'];


	 
    $q=mysql_query("INSERT INTO `Mensajes` (`Mensaje`,`to`,`from`) values ('$mensaje','$to','$from')");
?>