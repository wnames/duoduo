<template>
  <div id="app">
		<!--top-->
    <el-page-header @back="goBack" content="详情页面" class="top">
		</el-page-header>
		
		<!--middle-->
    <router-view></router-view>
    
    <!--footer-->
		<mt-tab-container class="footer"> 
			<mt-tabbar fixed="true"  v-model="message">
 				<mt-tab-item id="login">
   	 	 		<img slot="icon" src="../assets/33.jpg">
   				  电影
 				</mt-tab-item>
  			<mt-tab-item id="movie">
    			<img slot="icon" src="../assets/33.jpg">
 			   	电视剧
  			</mt-tab-item>
  			<mt-tab-item id="dong">
    			<img slot="icon" src="../assets/33.jpg">
   				动漫
  			</mt-tab-item>
  			<mt-tab-item id="me">
   		 		<img slot="icon" src="../assets/33.jpg">
  				  我的
  			</mt-tab-item>
			</mt-tabbar>
		</mt-tab-container>
		
  </div>
</template>

<script>
export default {
  name: 'app',
  props: {
    page: String,
    selected: String,
  },
  methods: {
    goBack () {
      console.log('go back')
    }
  },
  data() {
    return {
      message: this.selected
    };
  },
  watch: {
    message: function(val, oldVal) {
      // 这里就可以通过 val 的值变更来确定去向
      switch (val) {
        case "login":
          this.$router.push("/login");
          break;
        case "movie":
          this.$router.push("/movie");
          break;
        case "dong":
          this.$router.push("/dong");
          break;
        case "me":
          this.$router.push("/me");
          break;
      }
    }
  }
}
</script>

<style>
.footer img{
	width: 30px;
	height: 30px;
}
</style>
