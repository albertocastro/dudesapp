<?php session_start(); //include( "PHP/conection.php"); 
include( "PHP/bloqueDeSeguridad.php"); //pruebas //$_SESSION[ 'User_Id']=1; ?>

NLA BNLALVD SVDS
<!DOCTYPE html>
<html>

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <title></title>

  
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=0;">
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <script src="//code.jquery.com/jquery-1.9.1.js"></script>
    <script src="//code.jquery.com/ui/1.10.3/jquery-ui.js"></script>
 
    <script src="JS/buzz.min.js"></script>
    <script src="JS/functions.js"></script>

</head>

<body>



    <div id="header">
        <img src="images/logo-header.png" height="100px">

        <a href="PHP/logout.php" id="logout">Duude : ( no te vallas</a>
        <br>
        <a href="#" id="changeBackground" onclick="desplegarListaBackgrounds();">Cambiar el fondo :3</a>
        <a href="#" id="linkSettings" onclick="settings();">Settings</a>

        <br>



        <button id="navicon">Soy el navicon :3</button>
    </div>




    <div id="contactoList">soy la lista de contactos

        <ul>

            <div id="contentlista"></div>

        </ul>


    </div>

    <div id="mensajesBox">Soy la cajita de mensajes :3
        <ul>

            <div id="mensajesBoxcontenido"></div>
        </ul>
        <input id="eltextbox">
        <a href="#" id="elboton" class="button">enviar</a>
    </div>


</body>
<script>
</script>

</html>
