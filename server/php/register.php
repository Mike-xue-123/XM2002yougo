<?php
# 001-先连接数据库
# window系统默认的用户名是"root" 默认密码为""
$db = mysqli_connect("127.0.0.1", "root", "root","yougou");
if (!$db) {
  die('连接错误: ' . mysqli_error($db));
};
// mysqli_query($db,"SET NAMES utf8");
mysqli_query($db,'SET NAMES utf8');
$number = $_REQUEST["number"];
$password = $_REQUEST["password"];

# 003-对数据库执行操作
# 思路：检查当前用户名在数据库中是否已经存在，如果不存在那么就执行插入一条语句的操作，如果已经存在了那么就返回错误的提示信息。
# 查询指定表中的所有数据 SELECT * FROM user;
# 查询指定表中的所有号码 SELECT number FROM user;
# 查询指定表中的名字密码 SELECT username,password FROM user;
# 查询指定表中是否有等于指定值的数据  SELECT * FROM user WHERE number="";
$sql ="SELECT * FROM 'user' WHERE number='$number'";

#执行SQL语句
$r = mysqli_query($db,$sql);
$num= mysqli_num_rows($r); /* 该方法得到的是记录的条数:$r["num_rows"]  */

if($num == 1){
  echo '{"status":"error","msg":"该号码已经被注册，请重新选择一个新的号码!!"}';
  
}else{
  $sql = "INSERT INTO user " .
    "(id,number,password)" .
    "VALUES " .
    "(NULL,'$number','$password')";

  $retval = mysqli_query($db, $sql);

  if (!$retval) {
    die('无法插入数据: ' . mysqli_error($conn));
  }

  /* 注意：PHP代码中不能使用``符号 */
  echo '{"status":"success"}';
}

?>