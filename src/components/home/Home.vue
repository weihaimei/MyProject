<template>
  <div class="home">
    <div class="header">
      <div class="header-left" style="display: inline-block;">
        <i class="icon-location"></i>广州
      </div>
      <div class="header-mid">
        <img src="../../common/img/mlogo.png" alt width="58px"/>
      </div>
      <div class="header-right">
        <i class="icon-search" style="font-size: 20px;vertical-align: middle"></i>
      </div>
    </div>
    <div class="container">
      <div class="banner">
        <swiper :options="swiperOption" ref="mySwiper">
          <swiper-slide v-for="item in home.banners" :key="item.id">
            <img :src="item.image" width="100%"/>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
      <div class="menu" style="font-size: 0;margin-bottom: 10px">
        <a class="ite">
          <img class="w40s" src="../../common/img/icon_cate001.png"/>
          <div class="pd5-0">劲爆团购</div>
        </a>
        <a class="ite">
          <img class="w40s" src="../../common/img/icon_cate02.png"/>
          <div class="pd5-0">超值套餐</div>
        </a>
        <a class="ite">
          <img class="w40s" src="../../common/img/qiandao.png"/>
          <div class="pd5-0">会员签到</div>
        </a>
        <a class="ite">
          <img class="w40s" src="../../common/img/icon_cate004.png"/>
          <div class="pd5-0">我的红包</div>
        </a>
      </div>
      <Cotent :home="home"/>
      <div class="icon-top" @click="scrollTop">
        <i class="icon-vertical_align_top"></i>
      </div>
      <HomeDetails v-show="false" :home="home"/>
    </div>
  </div>
</template>

<script>
  import Swiper from '../../../node_modules/vue-awesome-swiper/src/swiper'
  import SwiperSlide from '../../../node_modules/vue-awesome-swiper/src/slide'
  import Cotent from './Cotent'
  import HomeDetails from './HomeDetails'
  export default {
    props: {
      home: {
        type: Object
      }
    },
    data () {
      return {
        swiperOption: {
          // notNextTick是一个组件自有属性，
          // 如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，
          // 也就意味着你可以在第一时间获取到swiper对象，
          // 假如需要刚加载便使用获取swiper对象来做什么事，那么这个属性一定要是true
          notNextTick: true,
          autoplay: 3000,
          direction: 'horizontal',
          grabCursor: true,
          setWrapperSize: true,
          autoHeight: true,
          pagination: '.swiper-pagination',
          paginationClickable: true,
          mousewheelControl: true,
          observeParents: true,
          loop: true
        }
      }
    },
    methods: {
      scrollTop () {
        window.scrollTo(0, 0)
      }
    },
    components: {
      Swiper,
      SwiperSlide,
      Cotent,
      HomeDetails
    }
  }
</script>

<style lang="less" scoped>
  .home{
    position: relative;
    width: 100%;
    .header{
      position: fixed;
      top: 0;
      width: 100%;
      height: 44px;
      display: flex;
      line-height: 44px;
      color: white;
      text-align: center;
      background-color: #ff7f00;
      padding: 0 3.3%;
      z-index: 39;
      .header-left{
        flex: 0 0 50px;
        .icon-location{
          padding-right: 2px;
        }
      }
      .header-mid{
        flex: 1;
        img{
          vertical-align: middle;
        }
      }
      .header-right{
        flex: 0 0 60px;
      }
    }
    .container{
      background-color: #F7F7F7;
      position: relative;
      margin-bottom: 50px;
      top: 44px;
      bottom: 55px;
      overflow: hidden;
      width: 100%;
      .menu{
        background-color: #fff;
        text-align: center;
        .ite {
          color:#333;
          display: inline-block;
          width: 25%;
          font-size: 12px;
          margin: 8px 0;
          .w40s{
            width: 50%;
          }
          .pd5-0{
            padding: 5px 0 0;
          }
        }
      }
      .icon-top {
        position: fixed;
        margin-left: 280px;
        z-index: 999;
        bottom: 50px;
        i{
          width: 40px;
          height: 40px;
          line-height: 40px;
          border-radius: 20px;
          font-size: 24px;
          color: #fff;
          background-color: rgba(0, 0, 0, 0.5);
        }
      }
    }
  }
</style>
