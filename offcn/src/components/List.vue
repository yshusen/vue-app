<template>
  <div class="list">
    <!--头部区-->
    <div class="header">
      <div class="version">
        <a href="/"><i class="el-icon-arrow-left"></i></a>
        <span class="title">考试资讯</span>
        <div class="sle">
          <template>
            <el-select v-model="value" placeholder="全国">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </template>
        </div>
      </div>
    </div>
    <!--头部区结束-->
    <div class="ts">当前是全国考试公告列表，点击全国查看具体省份</div>
    <!--导航栏-->
    <div class="nav">
      <div class="version">
        <template>
          <el-tabs v-model="activeName">
            <el-tab-pane label="公告大纲" name="first">
              <div class="ding">
                <img src="./../../static/home/顶.png" alt="">
                <span>2019山东乡镇公务员考试公告</span>
                <a href="">考试公告</a>
              </div>
              <div class="line"></div>
              <!--数据加载无限滚动-->
              <div class="wxgd">
                <ul>
                  <li v-for="(item,index) of list">
                    <router-link :to="'/single/'+item.id">
                      <span class="circle"></span>{{item.title.slice(0,35)}}<span>···</span>
                      <i class="el-icon-arrow-right"></i>
                    </router-link>
                  </li>
                </ul>
                <infinite-loading  :distance="distance" @infinite="infiniteHandler">
                  <div style="margin-bottom: 10px;height: 40px;line-height: 40px;" slot="no-more">没有更多数据了哦ԅ(¯﹃¯ԅ)</div>
                  <div slot="no-results">暂无数据:(</div>
                </infinite-loading>
              </div>

            </el-tab-pane>
            <el-tab-pane label="考试新闻" name="second">
              <div class="ding">
                <img src="./../../static/home/顶.png" alt="">
                <span>2019北京乡镇公务员考试新闻</span>
                <a href="">考试新闻</a>
              </div>
            </el-tab-pane>
            <el-tab-pane label="报考指导" name="third">
              <div class="ding">
                <img src="./../../static/home/顶.png" alt="">
                <span>2019河南乡镇公务员报考指导</span>
                <a href="">报考指导</a>
              </div>
            </el-tab-pane>
          </el-tabs>
        </template>

      </div>
    </div>
    <!--导航栏结束-->
    <!--底部导航-->
    <Botnav/>
    <!--底部导航结束-->
  </div>
</template>

<script>
  import Botnav from './../components/Botnav';
  import InfiniteLoading from 'vue-infinite-loading';
  export default {
    name: "List",
    components: {
      InfiniteLoading,
      Botnav
    },
    data() {
      return {
        options: [
          {value: '选项1', label: '北京市'},
          {value: '选项2', label: '上海市'},
          {value: '选项3', label: '广东省'},
          {value: '选项4', label: '河南省'},
          {value: '选项5', label: '海南省'},
        ],
        value: '',
        activeName: 'first',
        list: [],
        distance:100,
        page: 1,
      }
    },
    methods: {
      infiniteHandler($state) {
        const api = 'http://jsonplaceholder.typicode.com/posts';
        this.$axios.get(api, {
          params: {
            page: this.list.length/10+1,
          },
        }).then(({data}) => {
          console.log(data);
          if (data.length) {
            this.page += 1;
            this.list=this.list.concat(data);
            $state.loaded();
            if (this.list.length >=this.list.length) {
              $state.complete(); //这里是加载了的数据条数大于等于总个数时，设置不在加载
            }
          } else {
            $state.complete();
          }
        });
      },
    },

  }
</script>

<style scoped>
  .list {
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
    width: 150px;
    height: 100%;
    font-size: 30px;
    text-align: center;
    line-height: 130px;
    margin: 0 auto;
  }

  .header .sle {
    position: absolute;
    top: 50%;
    right: 0;
    margin-top: -20px;
  }

  .header .el-select {
    width: 100px;
  }

  .header .el-select .el-input el-input--suffix input {
    font-size: 30px;
    border: none;
    background-color: rgba(0, 0, 0, 0);
  }

  .ts {
    width: 100%;
    height: 40px;
    text-align: center;
    font-size: 20px;
    color: #ef4332;
    line-height: 40px;
  }

  /*tab切换*/
  .nav {
    width: 100%;
    /*height: 170px;*/
    background-color: #fff;
  }

  .nav .version .el-tab-pane {
    font-size: 25px;
  }

  .nav .version .ding {
    width: 100%;
    height: 110px;
    line-height: 110px;
  }

  .nav .version .ding img {
    width: 60px;
    height: 40px;
    vertical-align: middle;
  }

  .nav .version .ding span {
    display: inline-block;
    margin-left: 20px;
    font-size: 30px;
  }

  .nav .version .ding a {
    display: inline-block;
    width: 160px;
    height: 50px;
    border: 1px solid #16ccaf;
    border-radius: 5px;
    color: #16ccaf;
    font-size: 30px;
    text-align: center;
    line-height: 50px;
    float: right;
    margin-top: 30px;
  }

  /*tab切换结束*/
.line{
  width: 100%;
  height: 10px;
  background-color: #EEEEEE;
  padding: 0 100px;
}
  /*无限滚动样式*/
  .wxgd ul {
    width: 100%;
  }

  .wxgd ul li {
    width: 95%;
    height: 100px;
    margin: 0 auto;
    line-height: 100px;
    border-bottom: 1px solid #838383;
  }

  .wxgd ul li a {
    position: relative;
    display: inline-block;
    width: 100%;
    height: 100%;
    color: #8c8c8c;
  }

  .wxgd ul li a .circle {
    display: inline-block;
    width: 10px;
    height: 10px;
    border: 1px solid #8c8c8c;
    border-radius: 50%;
    margin-right: 20px;
  }

  .wxgd ul li a i{
    position: absolute;
    top: 50%;
    right: 0;
    margin-top: -25px;
    display: inline-block;
    width: 50px;
    height: 50px;
    line-height: 50px;
    text-align: center;
  }

  /*无限滚动样式结束*/
</style>
<style>
  .el-tabs__nav {
    font-size: 25px;
  }
</style>
