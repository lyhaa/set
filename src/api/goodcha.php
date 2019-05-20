<?php
    include "conmten.php";
    $sql = "SELECT * FROM goodsp";
    $res = $conn->query($sql);
    $conten = $res ->fetch_all(MYSQLI_ASSOC);
    $arr = array();
    for($i=0;$i<count($conten);$i++){
        $ss = $conten[$i]['gid'];
        $sql2 = "SELECT * FROM desl WHERE id = $ss";
        $res2 = $conn->query($sql2);
        $conten2 = $res2 ->fetch_all(MYSQLI_ASSOC);
        $arr[] = $conten2;
    }
    echo json_encode($arr,JSON_UNESCAPED_UNICODE);
?>