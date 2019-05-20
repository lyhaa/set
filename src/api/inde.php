<?php
    include "conmten.php";
    $uname = isset($_GET['uname'])?$_GET['uname']:"";
    $sql = "SELECT * FROM indexx WHERE uname LIKE '$uname' ORDER BY shop";
    // var_dump($sql);
    $res = $conn->query($sql);
    $content = $res->fetch_all(MYSQLI_ASSOC);
    $keys = $res->num_rows;
    // $cc = $res = pst_fields();
    // $arr = array();
    $sql2 = "SELECT t1.shop FROM (SELECT * FROM indexx WHERE shop is NOT NULL) AS t1 GROUP BY shop";
    $res2 = $conn->query($sql2);
    $content2 = $res2->fetch_all(MYSQLI_ASSOC);
    $arr=array();
    $arr = array(
            "shop"=> $content2,
            "content"=> $content
        );
    // for($i=0;$i<count($content2);$i++){
    //     $shop = $content2[$i]['shop'];
    //     for($j=0;$j<count($content);$j++){
    //         if($content[$j]['shop'] == $shop){
    //             array_push($arr,$content[$j]);
    //         }
    //     }
    // }
    echo json_encode($arr,JSON_UNESCAPED_UNICODE);

  
?>