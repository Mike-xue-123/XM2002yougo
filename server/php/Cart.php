<?php

/* 连接数据库 */
$db = mysqli_connect("127.0.0.1", "root", "root","yougou");
if (!$db) {
  die('连接错误: ' . mysqli_error($db));
};
mysqli_query($db,'SET NAMES utf8');

$goods_id = $_REQUEST["goods_id"];
$Id = $_REQUEST["Id"];

/* 2、执行添加操作 */
/* 先检查当前的商品在购物车中是否已经存在，如果不存在那么就执行插入操作，否则应该执行修改的操作 num +1 */
$sql = "SELECT * FROM cart WHERE goods_id = $goods_id AND Id = $Id";
$result = mysqli_query($db,$sql);
$num = mysqli_num_rows($result);

if($num == 0){
  $sql = "INSERT INTO cart " .
    "(cart_id,goods_id,Id,num)" .
    "VALUES " .
    "(NULL,$goods_id,$Id,1)";

}elseif($num == 0){
  $sql = "UPDATE cart SET num = num +1 WHERE goods_id = $goods_id AND Id = $Id";
}

$retval = mysqli_query($db,$sql);

if (!$retval) {
  die('添加到购物车失败: ' . mysqli_error($conn));
}
echo "添加成功";

?>