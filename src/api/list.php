<?php
    include "conmten.php";
    $uname = isset($_GET['uname'])?$_GET['uname']:"";
    $sql = "SELECT * FROM indexx WHERE uname LIKE '$uname'";
    // var_dump($sql);
    $res = $conn->query($sql);
    $content = $res->fetch_all(MYSQLI_ASSOC);
    $keys = array_rand($content,10);
    $re = array();
    foreach($keys as $v){
        $re[]=$content[$v];
    }
    echo json_encode($re,JSON_UNESCAPED_UNICODE);
?>