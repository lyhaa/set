<?php
    include "conmten.php";
    $sql = "SELECT * FROM goodsp";
    $res = $conn->query($sql);
    $conten = $res ->fetch_all(MYSQLI_ASSOC);
    echo json_encode($conten,JSON_UNESCAPED_UNICODE);
?>