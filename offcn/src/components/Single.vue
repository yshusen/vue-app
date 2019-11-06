<template>
  <div class="single">
    <!--头部区-->
    <div class="header">
      <div class="version">
        <a href="/list"><i class="el-icon-arrow-left"></i></a>
        <span class="title">考试资讯：乡镇公务员详细信息</span>
      </div>
    </div>
    <!--头部区结束-->
    <!--副标题区-->
    <div class="s_title">
      <div class="version">
        <h2>{{this.title}}</h2>
        <span class="zg">中公教育公务员考试网</span>
        <span class="t_time">2019-10-31 23:18</span>
        <span class="rzg">中公教育</span>
      </div>
    </div>
    <!--副标题区结束-->
    <!--内容区-->
    <div class="container">
      <div class="version">
        <p>{{this.message.body}}</p>
      </div>
    </div>
    <!--内容区结束-->
    <!--页脚-->
    <div class="foot">
      <div class="version">
        <p><a href="/"><span>返回首页</span></a><i>|</i><a href=""><span>关于中公</span></a><i>|</i><a href=""><span>电脑版</span></a></p>
        <p>Copyright@1999-2016北京中公教育科技股份有限公司</p>
        <p style="margin-top: -15px;">.All Rights Reserved</p>
      </div>
    </div>
    <!--页脚结束-->
    <!--底部导航-->
    <Botnav/>
    <!--底部导航结束-->
  </div>
</template>

<script>
  import Botnav from './../components/Botnav';
  export default {
    name: "Single",
    components: {Botnav},
    data() {
      return {
        message: {},
        id: this.$route.params.id,
        list: [],
        title:[],
      }
    },
    created() {
      this.$axios.get('http://jsonplaceholder.typicode.com/posts/' + this.id)
        .then((res) => {
          // console.log(res.data);
          this.message = res.data;
          this.title = this.message.title.slice(0,40);
          console.log(this.message);
        }).catch(() => {
        this.$message({
          showClose: true,
          message: '哎呀！数据离家出走了(づ╥﹏╥)づ',
          type: 'error',
        })
      })
    }
  }
</script>

<style scoped>
  .single {
    background-color: #eeeeee;
    height: 3000px;
  }

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
    width: 30px;
    height: 130px;
    line-height: 130px;
    float: left;
    font-size: 30px;
    color: #ffffff;
  }

  .header span {
    display: block;
    width: 95%;
    height: 100%;
    font-size: 30px;
    text-align: center;
    line-height: 130px;
    margin: 0 auto;
  }

  /*副标题样式*/
  .s_title {
    overflow: hidden;
    width: 100%;
    height: 180px;
    background-color: #fff;
  }

  .s_title h2 {
    height: 40px;
    font-size: 30px;
    text-align: center;
    line-height: 40px;
    margin: 30px 0;
  }

  .s_title span {
    display: inline-block;
    font-size: 20px;
    margin-left: 10%;
    color: #999999;
  }
  .s_title .t_time {
    margin-left: 20px;
  }
  .s_title .rzg {
    color: #f16161;
    margin-right: 15%;
    margin-left: 0;
    float: right;
  }
  /*内容区*/
  .container{
    background-color: #fff;
    padding-bottom: 50px;
  }
  .container p{
    word-wrap:break-word;
    text-indent:2em;
    line-height: 50px;
    font-size: 25px;
  }
  /*页脚*/
  .foot{
    overflow: hidden;
    width: 100%;
    height: 235px;
    margin-top: 10px;
    background-color: #fff;
  }
  .foot p{
    text-align: center;
    color: #cccccc;
    font-size: 25px;
    margin: 40px 0;
  }
  .foot p a{
    color: #cccccc;
  }
  .foot p span{
    display: inline-block;
    margin: 0 5%;
  }
</style>
