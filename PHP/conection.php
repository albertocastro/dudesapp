<?php
//header('Access-Control-Allow-Origin: *'); 
            //Variables for connecting to your database.
            //These variable values come from your hosting account.
            $hostname = "dudedb.db.11890053.hostedresource.com";
            $username = "dudedb";
            $dbname = "dudedb";

            //These variable values need to be changed by you before deploying
           $password = "Dude123!";
            $usertable = "Mensajes";
            
            //Connecting to your database
            mysql_connect($hostname, $username, $password) OR DIE ("Unable to 
            connect to database! Please try again later.");
            mysql_select_db($dbname);
 ?>