<template>
  <div class="login">
    
		
		<!--middle-->
		
			<!--swipe-->
			<div class="block">
    	 <el-carousel height="150px">
   	  	 <el-carousel-item v-for="item in list">
       	 <h3 class="small"><img :src="item.src" alt="" /></h3>
     	 	 </el-carousel-item>
    		</el-carousel>
  	</div>
      
      <!--photo-->
      <div class="photo">
      	<ul>
      		<li v-for="item in list1">
      			<img :src="item.src" alt="" width="79px" height="50px"/>
      			<p>{{item.title}}</p>
      		</li>
      	</ul>
      </div>
   </div>
 </template>
<script>
export default {
	data(){
		return {
			list:[
				{src:require('../assets/55.jpg')},
				{src:require('../assets/66.jpg')},
				{src:require('../assets/77.jpg')},
				{src:require('../assets/88.jpg')}
			],
			list1:[
				{src:require('../assets/1.jpg'),title:'王的执行人'},
				{src:require('../assets/1.jpg'),title:'王的执行人'},
				{src:require('../assets/1.jpg'),title:'王的执行人'},
				{src:require('../assets/1.jpg'),title:'王的执行人'},
				{src:require('../assets/1.jpg'),title:'王的执行人'},
				{src:require('../assets/1.jpg'),title:'王的执行人'},
				{src:require('../assets/1.jpg'),title:'王的执行人'},
				{src:require('../assets/1.jpg'),title:'王的执行人'},
				{src:require('../assets/1.jpg'),title:'王的执行人'},
				{src:require('../assets/1.jpg'),title:'王的执行人'}
			]
		}
	}
}
</script>

<style scoped>
body{
	margin: 0;
	padding: 0;
}
.small {
		width: 340px;
		height: 150px;
}
.small img {
			height: 100%;
			width: 100%;
}
.photo ul {
	margin: 0;
	padding: 0;
	float: left;
}
.photo li{
	padding: 0;
	margin:20px 20px 20px 20px;
	width: 79px;
	height: 50px;
	float: left;
	list-style: none;
	background-color: pink;
}
.photo p {
	font-size: 10px;
	color: #FFC0CB;
}
</style>
