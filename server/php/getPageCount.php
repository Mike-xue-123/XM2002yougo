<?php

/* 1、连接数据库 */
/* 连接数据库 */
$db = mysqli_connect("127.0.0.1", "root", "root","yougou");
if (!$db) {
  die('连接错误: ' . mysqli_error($db));
};
mysqli_query($db,'SET NAMES utf8');

/* 2、获取页码数量 */
$size = 40;

/* 页码数量：商品的总数(123) / $size  */
$sql = "SELECT * FROM goods";
$result = mysqli_query($db,$sql);

$total = mysqli_num_rows($result);

/* 计算页码数量 */
$num = ceil($total / $size);

echo $num;
?>