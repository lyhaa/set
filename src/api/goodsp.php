<?php
    include "conmten.php";
    $gid = isset($_GET['gid'])?$_GET['gid']:"";
    $shu = isset($_GET['shu'])?$_GET['shu']:"";
    if($gid){
        $sql2 = "SELECT * FROM goodsp WHERE gid = $gid";
        $res2 = $conn->query($sql2);
        $row = $res2->num_rows;
        if($row>=1){
            $sql3 = "update goodsp set countt=countt+$shu where gid = $gid";
            $res3 = $conn->query($sql3);
            echo 0;
        }else{
            $sql = "INSERT INTO goodsp(gid,countt) VALUES ($gid,$shu)";
            $res = $conn->query($sql);
            echo 0;
        }
        // echo $row;
    }
?>