<template>
  <!--底部导航-->
  <div class="bot_nav">
    <ul>
      <a href="#"><li><img src="../../static/home/菜单1.png" alt=""><p>在线咨询</p></li></a>
      <a href="#"><li><img src="../../static/home/菜单2.png" alt=""><p>官方微信</p></li></a>
      <a href="#"><li><img src="../../static/home/菜单3.png" alt=""><p>课程辅导</p></li></a>
      <a href="#"><li><img src="../../static/home/菜单4.png" alt=""><p>交流群</p></li></a>
    </ul>
  </div>
  <!--底部导航结束-->
</template>

<script>
    export default {
        name: "Botnav"
    }
</script>

<style scoped>
.bot_nav{
  background-color: #fff;
  border-top: 1px solid #cccccc;
}
.bot_nav ul{
  width: 90%;
  margin: 0 auto;
  display: flex;
}
.bot_nav ul a{
  flex-grow: 1;
  margin: 25px;
  color: #666;
  text-align: center;
}
.bot_nav ul a li img{
  width: 40px;
}
.bot_nav ul a li p{
  margin-top: 15px;
  font-size: 20px;
}
</style>
