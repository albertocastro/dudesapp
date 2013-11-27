<?php
    include("conection.php");
     
    $q=mysql_query("SELECT `mensaje` FROM Mensajes");
    while($e=mysql_fetch_array($q)) {
        
        
            $output[]="<li class='mensaje'>".$e['mensaje']."<li>";
    } 




    echo json_encode($output);
     
    mysql_close();
?>
