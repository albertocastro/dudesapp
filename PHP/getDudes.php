<?php
session_start();
if(!empty( $_SESSION['User_Id']))
$Id = $_SESSION['User_Id'];
else $Id=1;

$commalist;
$json=array();
include("conection.php");

//Obtiene los IDs de los amigos 
    $row=   mysql_fetch_assoc(mysql_query("SELECT `friends` FROM Users where `Id`='$Id' "));
    $commalist= $row['friends'];
      
    
$dudesarray = explode(',', $commalist);
foreach($dudesarray as $i){
    
    $row= mysql_fetch_assoc( mysql_query("SELECT * FROM Users where `Id`='$i' "));

    array_push($json ,array('nombre'=>  $row['name']." ".$row['lastname'] , 'id' =>$i,'photourl'=>$row['dudeurl']));
 
}



     echo json_encode(array('dudelist'=> $json));
   
    mysql_close();
?>