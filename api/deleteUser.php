<?php

	// if(!isset($_COOKIE['email'])){
	//     echo json_encode(array('valid'=>false,'message'=>'您未登陆'),JSON_UNESCAPED_UNICODE);
	//     exit();
	// }

    include 'conn.php';
	$valid   = true;
	$message = '';


	   if(isset($_GET['userid']) &&  is_numeric($_GET['userid'])){
	      $sql="SELECT * FROM users WHERE userId=".$_GET['userid'];

	       $result = mysqli_query($conn,$sql);
	       
	       if (mysqli_num_rows($result)===1) {
	       	   if (mysqli_query($conn,"DELETE FROM users WHERE userId=".$_GET['userid'])) {
					$message = '删除成功';
	       	   }else{
					$valid   = false;
					$message = '删除失败';
	       	   }
	       }else{
					$valid   = false;
					$message = '数据不存在，可能已经被其它管理员删除 ';
	       }
	   }else{
		$valid   = false;
		$message = 'id不能为空'; 
	   }
	   echo json_encode(array('valid'=>$valid,'message'=>$message),JSON_UNESCAPED_UNICODE);

	