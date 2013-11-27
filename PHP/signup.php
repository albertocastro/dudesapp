<?php
    include("conection.php");
$output = '0';
    $username= $_POST['username'];
    $password= $_POST['password'];
	$email= $_POST['email'];
 
$u=mysql_query("SELECT `username` FROM Users WHERE username='$username'");
    $s=mysql_fetch_array($u);       
    $user=$s['username'];   
//echo( $user)
$e=mysql_query("SELECT `email` FROM Users WHERE email='$email'");
    $m=mysql_fetch_array($e);       
    $mail=$m['email'];   



if ($user != null) {
 echo json_encode(1);
}

if($mail != null){
    echo json_encode(2);
}

if($user == null and $mail == null){
    $q=mysql_query("INSERT INTO `Users` (`username`,`password`,`email`) values ('$username','$password','$email')"); 
    $id = mysql_insert_id();
    echo json_encode(43);
}


/*$e=mysql_fetch_array($q);
$output=$e['Id'];*/
     

    mysql_close();
?>
