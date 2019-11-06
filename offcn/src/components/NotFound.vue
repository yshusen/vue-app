<template>
    <div class="nofind">
      <!--头部区-->
      <div class="header">
        <div class="version">
          <a href="/"><i class="el-icon-s-home"></i>返回首页</a>
        </div>
      </div>
      <!--头部区结束-->
      <!--主体区-->
      <div class="cont">
        <img src="https://img.zcool.cn/community/01363b5d9af6d0a8012060be323fa0.gif" alt="">
      </div>
      <!--主体区结束-->
      <!--底部导航-->
      <Botnav/>
      <!--底部导航结束-->
    </div>
</template>

<script>
  import Botnav from './../components/Botnav';
    export default {
        name: "NotFound",
      components: {Botnav},
    }
</script>

<style scoped>
  .header {
    width: 100%;
    height: 130px;
    background-image: url('../../static/home/bg.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    color: #ffffff;
  }

  .version {
    position: relative;
    width: 95%;
    margin: 0 auto;
  }
  .header a {
    display: inline-block;
    height: 130px;
    line-height: 130px;
    float: left;
    font-size: 30px;
    color: #ffffff;
  }
  .cont{
    width: 80%;
    margin: 300px auto;
  }
  .cont img{
    width: 100%;
  }
</style>
