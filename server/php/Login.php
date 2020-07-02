<?php
$db = mysqli_connect("127.0.0.1", "root", "root","yougou");
if (!$db) {
  die('连接错误: ' . mysqli_error($db));
};
mysqli_query($db,'SET NAMES utf8');
$number = $_REQUEST["number"];
$password = $_REQUEST["password"];
# 核心逻辑：
# (1) 先去数据库中检查是否存在指定用户名对应的数据
#    [1] 如果不存在，返回错误的提示信息(该用户名不存在!)
#    [2] 如果存在，那么就继续检查密码
#        [1] 如果密码不正确，那么就返回错误的提示信息(对不起，您的密码不正确！)
#        [2] 如果密码正确，那么就返回登录成功。
$sql ="SELECT * FROM 'user' WHERE number='$number'";

$r = mysqli_query($db,$sql);

$num = mysqli_num_rows($r); /* 该方法得到的是记录的条数:$r["num_rows"]  */

if($num == 1){
  $data = mysqli_fetch_all($r,MYSQLI_ASSOC)[0];
  if($password  === $data["password"]){
    echo '{"status":"success","msg":"登录成功!"}';
  }else{
    echo '{"status":"error","msg":"密码不正确!"}';
  }
}else{
  echo '{"status":"error","msg":"该号码不存在!"}';
}



?>