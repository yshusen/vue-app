<template>
<div class="home">
  <!--头部-->
  <div class="head">
    <div class="menu" @click="drawer = true"><i class="el-icon-more-outline"></i></div>
  </div>
  <!--头部结束-->
  <!--轮播图-->
  <div class="banner">
    <div id="container">
      <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide class="swiper-slide games">
          <img src="../../static/home/banner.png" alt="">
        </swiper-slide>
        <swiper-slide class="swiper-slide games">
          <img src="../../static/home/banner.png" alt="">
        </swiper-slide>
        <swiper-slide class="swiper-slide games">
          <img src="../../static/home/banner.png" alt="">
        </swiper-slide>
        <swiper-slide class="swiper-slide games">
          <img src="../../static/home/banner.png" alt="">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <!--<div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>-->
      </swiper>
    </div>
  </div>
  <!--轮播图结束-->
  <!--导航-->
  <div class="nav">
    <ul>
      <a :href="item.url" v-for="item of list">
        <li><img :src="item.src" alt=""><p>{{item.nav}}</p></li>
      </a>
    </ul>
  </div>
  <!--导航结束-->
  <!--最新活动-->
  <div class="new">
    <img class="fonts" src="../../static/home/最新活动.png" alt="">
    <div class="title">
      <a href=""><p>2017甘肃乡镇公务员考试笔试备考免费讲座</p></a>
      <a href=""><p style="font-weight: bold;margin-top: 10px;">陕西乡镇公务员考试模考活动</p></a>
    </div>
    <img class="new_img" src="../../static/home/NEW.png" alt="">
  </div>
  <!--最新活动结束-->
  <!--列表-->
  <div class="lists">
    <div class="choose">
      <img src="../../static/home/头条.png" alt="">
      <h2>乡镇公务员</h2>
      <div class="sel">
        <template>
          <el-select v-model="value" placeholder="请选择报考省份">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </template>
      </div>
      <a href='/'><i class="el-icon-arrow-right"></i></a>
    </div>
    <div class="lis">
      <ul>
        <a href="/single/1"><li>&nbsp;&nbsp;&nbsp;&nbsp;2017年福建选调生考试公告，19日报名</li></a>
        <a href="/single/1"><li>&nbsp;&nbsp;&nbsp;&nbsp;2017年福建选调生考试公告，报名31日考试</li></a>
        <a href="/single/1"><li>&nbsp;&nbsp;&nbsp;&nbsp;2017广发银行杭州分行校园招聘面试通知</li></a>
        <a href="/single/1"><li>&nbsp;&nbsp;&nbsp;&nbsp;2017年福建选调生考试公告，19日报名</li></a>
      </ul>
    </div>
  </div>
  <!--列表结束-->
  <!--侧边抽屉-->
  <el-drawer
    title=""
    :visible.sync="drawer"
    :direction="direction">
    <a href="/list">相关文章</a>
    <a href="/single/1">文章详情页</a>
  </el-drawer>
  <!--侧边抽屉结束-->
  <!--底部导航-->
  <Botnav/>
  <!--底部导航结束-->
</div>

</template>

<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper';
  import Botnav from './../components/Botnav';
export default {
  components: {Botnav},
  name: 'Home',
  data () {
    return {
      list:[
        {url:'/course',src:"./../../static/home/nav1.png",nav:'面授课程'},
        {url:'/online',src:"./../../static/home/nav2.png",nav:'网校课程'},
        {url:'/book',src:"./../../static/home/nav3.png",nav:'图书材料'},
        {url:'/lec',src:"./../../static/home/nav4.png",nav:'在线讲座'},
        {url:'/school',src:"./../../static/home/nav5.png",nav:'各地校区'},
      ],
      options: [
        {value: '选项1', label: '全国'},
        {value: '选项2', label: '北京市'},
        {value: '选项3', label: '天津市'},
        {value: '选项4', label: '河南省'},
        {value: '选项5', label: '广东省'},
        ],
      value: '',
      swiperOption: {
        autoplay : {
          disableOnInteraction: false, //用户操作后是否禁止自动循环
          delay: 3000 //自自动循环时间
        }, //可选选项，自动滑动
        speed: 1000, //切换速度，即slider自动滑动开始到结束的时间（单位ms）
        loop:true, //循环切换
        grabCursor: true, //设置为true时，鼠标覆盖Swiper时指针会变成手掌形状，拖动时指针会变成抓手形状
        // setWrapperSize: true, //Swiper使用flexbox布局(display: flex)，开启这个设定会在Wrapper上添加等于slides相加的宽或高，在对flexbox布局的支持不是很好的浏览器中可能需要用到。
        autoHeight: true,   //自动高度。设置为true时，wrapper和container会随着当前slide的高度而发生变化。
        scrollbar: '.swiper-scrollbar',
        mousewheelControl: true, //设置为true时，能使用鼠标滚轮控制slide滑动
        observeParents: true, //当改变swiper的样式（例如隐藏/显示）或者修改swiper的子元素时，自动初始化swiper

        pagination: {
          el: '.swiper-pagination',
          // type : 'progressbar', //分页器形状
          clickable :true, //点击分页器的指示点分页器会控制Swiper切换
        },
        /*navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },*/
      },
      computed: {
        swiper() {
          return this.$refs.mySwiper.swiper
        }
      },
      drawer: false,
      direction: 'rtl',
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .home{
    background-color: #eeeeee;
    height: 3000px;
  }
  /*头部样式*/
  .head{
    position: relative;
    display: flex;
    width: 100%;
    height: 180px;
    background-image: url("../../static/home/headbg.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  .menu{
    position: absolute;
    right: 25px;
    bottom: 25px;
    width: 55px;
    height: 55px;
    font-size: 50px;
    color: #ffffff;
    line-height: 55px;
    text-align: center;
  }
  /*头部样式结束*/
  /*banner样式*/
  img {
    width: 100%;
    height: auto;
  }
  /*banner样式结束*/
/*导航栏样式*/
  .nav ul{
    background-color: #fff;
    display: flex;
    width: 100%;
    border-bottom: 1px solid #cccccc;
  }
  .nav ul a{
    flex-grow: 1;
    margin: 25px;
    text-decoration: none;
  }
  .nav ul a li{
    margin-top: 10px;
  }
  .nav ul a li p{
    width: 100%;
    text-align: center;
    margin-top: 15px;
    line-height: 30px;
    color: #666666;
    font-size: 25px;
  }
/*导航栏样式结束*/
/*最新活动样式*/
  .new{
    background-color: #fff;
    position: relative;
    width: 100%;
    height: 150px;
  }
  .new .fonts{
    position: absolute;
    top: 50%;
    left: 10px;
    margin-top: -41px;
    width: 83px;
    float: left;
  }
  .new .new_img{
    width: 80px;
    float: right;
  }
  .new .title{
    width: 70%;
    height: 70px;
    padding: 10px 20px;
    margin: 30px 0 0 100px;
    float: left;
    border-left: 1px solid #cccccc;
  }
  .new .title a{
    color: #737373;
    font-size: 25px;
  }
/*最新活动样式结束*/
  /*乡镇公务员样式*/
  .lists{

    margin-top: 10px;
    background-color: #fff;
  }
  .lists .choose{
    padding: 20px 10px;
    width: 95%;
    overflow: hidden;
    margin: 0 auto;
    border-bottom: 1px solid #cccccc;
  }
  .lists .choose img{
    width: 65px;
    float: left;
  }
  .lists .choose h2{
    float: left;
    font-weight: bold;
    line-height: 35px;
    font-size: 25px;
    margin-left: 20px;
  }
  .lists .choose .sel{
    float: left;
    margin-left: 25px;
  }
  .lists .choose a{
    width: 40px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    float: right;
  }
  .lists .lis{
    width: 95%;
    margin: 0 auto;
  }
  .lists .lis ul{
    width: 85%;
    margin: 0 auto;
  }
  .lists .lis ul a{

    font-size: 25px;
    color: #444444;
    line-height: 80px;
  }
  .lists .lis ul a li{
    padding: 0 20px;
    list-style: circle;
  }
  /*乡镇公务员样式结束*/
  /*侧边抽屉样式*/
  .el-drawer a{
    display: block;
    border: 1px solid #cccccc;
    text-align: center;
    font-size: 25px;
    padding: 15px;
    color: #8c8c8c;
  }
  /*侧边抽屉样式结束*/
</style>
