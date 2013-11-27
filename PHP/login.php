<?php
//header('Access-Control-Allow-Origin: *'); 
//echo json_encode ("hola");
 session_start(); 
 include("conection.php");
 $_SESSION["verificado"] = "NO";
    // echo $_POST['name'];
  $output;
   // $q=mysql_query("SELECT ".$_POST["name"]." FROM Users");
 $q=mysql_query("SELECT `Id` FROM Users WHERE username='". $_POST['username']."' AND password='".$_POST['password']."'");
//$q=mysql_query("SELECT `Id` FROM Users where Username='Alberto' ");
$e=mysql_fetch_assoc($q);
        
        
            $output=$e['Id'];
     


   mysql_close();


if($output){
   
    $_SESSION['Id_User']= $output;
    $_SESSION["verificado"] = "SI";
    echo json_encode($output);
           }
else{
    $_SESSION["verificado"] = "NO";
echo json_encode(null);}
 //   echo json_encode($output);
?>