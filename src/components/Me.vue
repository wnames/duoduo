<template>
	<div>
		<!--头部-->
		<div class="top">
			<!--头像-->
			<div class="demo-image">
		  	<div class="block">
   				<el-image style="width: 100px; height: 100px" :src="src" fit="fill" class="el"></el-image>
 				</div>
 			</div>
 			<div style="height: 100px;">
 				<p style="margin-top: 8px;">study</p> <br /> <br />
 				<p>0关注  0粉丝</p> <br />
 			</div>
 		</div> 
 			
 		<!--middle-->
 		<div class="middle">
 			
 			<mt-field label="用户名" placeholder="user"></mt-field>
			<mt-field label="邮箱" placeholder="email" type="email"></mt-field>
			<mt-field label="密码" placeholder="password" type="password"></mt-field>
			<mt-field label="手机号" placeholder="phone" type="tel"></mt-field>
			<mt-field label="生日" placeholder="1999-0-0" type="date"></mt-field>
			<mt-field label="自我介绍" placeholder="自我介绍" type="textarea" rows="4"></mt-field>
		</div>
	</div>
</template>

<script>
export default {
	data(){
		return {
			src:require('../assets/labi.jpg')
		}
	}
}
</script>

<style scoped>
	.top {
		margin-top: 15px;
		height: 103px;
	}
	.el{
		border: 1px solid #ccc;
	}
	.demo-image{
		float: left;
	}
	.top p {
		float: left;
		margin:0 15px;
	}
	.el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
  .middle {
  	margin-top: 5px;
  }
</style>