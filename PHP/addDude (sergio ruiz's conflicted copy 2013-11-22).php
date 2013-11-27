<?php
session_start();
    include("conection.php");
     
if(empty($_POST['newdude']))
$newdude= "searg26";
else 
 $newdude=$_POST['newdude'];

if(empty($_SESSION["User_Id"]))
$Id= 1;
else
$Id=  $_SESSION["User_Id"];

    $query = mysql_fetch_assoc(mysql_query("SELECT `Id` FROM Users where `username`='$newdude'"));
    $newdudeID = $query['Id'];	 
    echo $newdudeID;
    $row = mysql_fetch_assoc(mysql_query("SELECT `friends` FROM Users where `Id`='$Id' "));
    $seleccion= $row['friends'];

    $dudes = $seleccion.",".$newdudeID;
    <br>echo $dudes;
    <br>echo $Id;
    <br>echo $newdude;
$select=mysql_query("UPDATE `Users` SET `friends`='$dudes' WHERE  `Id`='Id'");


if($select ==1){
    echo "43";
}else{
    echo "0";
}


?>