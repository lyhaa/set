<?php
    $severname = 'localhost';
    $username = 'root';
    $dbpsw = '';
    $dbname = 'miya';
    $conn = new mysqli($severname,$username,$dbpsw,$dbname);
    if($conn->connect_error){
        die("连接失败:".$conn->connect_error);
    }
    // echo "连接成功";
?>