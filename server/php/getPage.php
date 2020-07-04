<?php
/* 连接数据库 */
$db = mysqli_connect("127.0.0.1", "root", "root","yougou");
if (!$db) {
  die('连接错误: ' . mysqli_error($db));
};
mysqli_query($db,'SET NAMES utf8');

/* 2、查询获取数据库中的所有商品 */
$sql = "SELECT * FROM goods";

$result = mysqli_query($db,$sql);
$size=mysqli_num_rows($result);
print_p($size);

/* 3、把数据转换为JSON数据返回 */
echo json_encode($data,true);
?>