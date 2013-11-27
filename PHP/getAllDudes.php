<?php
session_start();
if(!empty( $_SESSION['User_Id']))
$Id = $_SESSION['User_Id'];
else $Id=1;

$commalist;
$json=array();
include("conection.php");

//Obtiene los IDs de los amigos 

//while($row=mysql_fetch_array(mysql_query("SELECT `usernames` FROM Users  "),MYSQL_ASSOC))echo $row['username'];
$resultado ="";
$i=0;
$query=mysql_query("Select * from Users");
while($row = mysql_fetch_array($query) )
{
    if($i==0)$resultado.= $row['username'];
    else
    $resultado.=','. $row['username'];
    $i++;
}
    echo $resultado;
/*$dudesarray = explode(',', $commalist);
foreach($dudesarray as $i){
    
    $row= mysql_fetch_assoc( mysql_query("SELECT * FROM Users where `Id`='$i' "));

    array_push($json ,array('nombre'=>  $row['name']." ".$row['lastname'] , 'id' =>$i,'photourl'=>$row['dudeurl']));
 
}



     echo json_encode(array('dudelist'=> $json));
   */
    mysql_close();
?>