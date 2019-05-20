<?php
    include "conmten.php";
    $did = isset($_GET['did'])?$_GET['did']:"";
    $gid = isset($_GET['gid'])?$_GET['gid']:"";
    if($gid){
        $sql = "SELECT * FROM desl WHERE gid LIKE '$gid'";
    }else{
        $sql = "SELECT * FROM desl WHERE did LIKE '$did'";
    }
    // var_dump($sql);
    $res = $conn->query($sql);
    $content = $res->fetch_all(MYSQLI_ASSOC);
    echo json_encode($content,JSON_UNESCAPED_UNICODE);
?>