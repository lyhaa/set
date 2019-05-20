<?php
    include "conmten.php";
    $type = isset($_GET['type'])?$_GET['type']:"";
    $pajia = isset($_GET['pajia'])?$_GET['pajia']:"";
    $pj = isset($_GET['pj'])?$_GET['pj']:"";
    $pj2 = explode(",",$pj);
    // var_dump($pj2);
    $sql2 = 'SELECT * FROM list';
    $res2 = $conn->query($sql2);
    $rows = $res2->num_rows;
    if($pajia =="DESC"){
        $sql = "SELECT * FROM list ORDER BY $type $pajia";
        $res = $conn->query($sql);
        $content = $res->fetch_all(MYSQLI_ASSOC);
        $data = array(
            'goodlist'=>$content,
            'row'=>$rows
        );
    }else if($pajia =="ASC"){
        $sql = "SELECT * FROM list ORDER BY $type $pajia";
        $res = $conn->query($sql);
        $content = $res->fetch_all(MYSQLI_ASSOC);
        $data = array(
            'goodlist'=>$content,
            'row'=>$rows
        );
    }else if($type == "suiji"){
        $sql = "SELECT * FROM list";
        $res = $conn->query($sql);
        $content = $res->fetch_all(MYSQLI_ASSOC);
        $data = array(
            'goodlist'=>$content,
            'row'=>$rows
        );
    }else if($pj){
        $sql = "SELECT * FROM list WHERE $type BETWEEN $pj2[0] and $pj2[1]";
        $res = $conn->query($sql);
        $content = $res->fetch_all(MYSQLI_ASSOC);
        $roww = $res->num_rows;
        $data = array(
            'goodlist'=>$content,
            'row'=>$roww
        );
    }
    else{
        $content2 = $res2->fetch_all(MYSQLI_ASSOC);
        $data = array(
            'goodlist'=>$content2,
            'row'=>$rows
        );
    }
    echo json_encode($data,MYSQLI_ASSOC);
?>