<?php
 include("PHP/conection.php");

//COMPRUEBA QUE EL USUARIO ESTA AUTENTICADO
if ($_SESSION["verificado"] == "NO" || empty($_SESSION["verificado"]) ) {

    session_destroy();
    header("Location: login.html");
}

if(empty( $_SESSION['User_Id'])){
 
 $_SESSION['User_Id']=$_POST["userid"];
    }
?>