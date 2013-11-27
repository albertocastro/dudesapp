<?php
 session_start();
include("conection.php");
if(!empty( $_GET['numMessage']))
$numMessage = $_GET['numMessage'];
else
$numMessage=5;    
/*$IdDudeFriend = $_POST['IdDudeFriend'];
if(empty($IdDudeFriend))*/
if(!empty($_SESSION["User_Id"]))
$Id = $_SESSION["User_Id"];
else
    $Id=1;

if(!empty($_GET['otroid']))
$otroid=$_GET['otroid'];
else
    $otroid=2;
$mensajes;
$ids;
$class;
$json = array();
//$row=mysql_fetch_array(mysql_query("SELECT `Mensaje` FROM Mensajes where (`To`='$IdDudeFriend' AND `From`='$Id') OR (`From`='$IdDudeFriend' AND `To`='$Id') "));
$q=mysql_query("SELECT * FROM Mensajes where (`To`='$Id' AND `From`='$otroid') OR (`From`='$Id' AND `To`='$otroid') order by Id desc");



for($i=0;$i<$numMessage;$i++)
{
    $row=mysql_fetch_array($q);

    $mensajes[$numMessage-$i-1]=$row['Mensaje'];
    $ids[$numMessage-$i-1]=$row['Id'];
    if($row['to']==$Id)
    $class[$numMessage-$i-1]='mensajedude';
    else
        $class[$numMessage-$i-1]='mensajeme';
    // array_push($mensajes ,array('mensaje'=>  $row['Mensaje']));
}
for($i=0;$i<$numMessage;$i++)
{
   
    array_push($json ,array('mensaje'=>  $mensajes[$i],'id'=>$ids[$i],'class'=>$class[$i]) );

    // array_push($mensajes ,array('mensaje'=>  $row['Mensaje']));
}

echo json_encode(array('Mensajes'=>$json));





    //echo json_encode($output);
     
    mysql_close();
?>
