<?php
/* 连接数据库 */
$db = mysqli_connect("127.0.0.1", "root", "root","yougou");
if (!$db) {
  die('连接错误: ' . mysqli_error($db));
};
mysqli_query($db,'SET NAMES utf8');

$sort=$_REQUEST["sort"];
$page=$_REQUEST["page"];/* 0,1,2,3 */

$limit=$page*20;

if($sort == "default"){
    $sql = "SELECT * FROM goods Order BY goods_id LIMIT $limit,32";
}elseif ($sort == "price_desc") {
    $sql = "SELECT * FROM goods Order BY priceA DESC LIMIT $limit,32";
}elseif ($sort == "price_asc") {
    $sql = "SELECT * FROM goods Order BY priceA ASC LIMIT $limit,32";
}
/* 2、查询获取数据库中的所有商品 */


$result = mysqli_query($db,$sql);
$data = mysqli_fetch_all($result,MYSQLI_ASSOC);

/* 3、把数据转换为JSON数据返回 */
echo json_encode($data,true);
?>