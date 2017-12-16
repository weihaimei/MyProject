<template>
    <div class="cooking" style="margin-bottom: 50px">
      <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide>
          <img src="../../common/img/guo.png" width="100%"/>
        </swiper-slide>
        <swiper-slide>
          <img src="../../common/img/eat.jpg" width="100%"/>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
      <div class="row">
        <div class="col">
          <a class="left">我的菜谱</a>
        </div>
        <div class="col">
          <a class="right">发布菜谱</a>
        </div>
      </div>
      <div class="cotainer"
           style="padding: 15px;color: #555;font-size: 12px;font-weight: 400;">
        <div class="top">
          <div class="tips"
               style="background-color: #fff;overflow: hidden;
                    margin-bottom: 10px;border-radius: 4px;border: 1px solid #dfdfdf;">
            <i class="icon-news"
               style="display: inline-block;margin-right:5px;float: left;font-size: 20px;background-color: #f93;
                    color: #fff;padding: 8px;vertical-align: middle"></i>
            <swiper :options="swiperOption1" ref="mySwiper"
                 style="height: 20px;line-height: 20px;margin-top: 7px">
              <swiper-slide v-for="item in cooking.notice_lst" :key="item.id">
                <span style="white-space:nowrap;">{{item}}</span>
              </swiper-slide>
            </swiper>
          </div>
        </div>
        <div class="c_b"
             style="border-radius: 4px;border: 1px solid #dfdfdf;border-bottom: 0;overflow-x: hidden;">
          <nav class="cook_cate"
               style="display: flex;margin-bottom: 0;justify-content: center;background-color: #fff;
                    border-bottom: 1px solid #dfdfdf;margin-top: 0;padding: 1rem 0;">
            <div class="eat_time"
                 style="flex: 1;color: #f93;text-align: center;margin-top: -5px;font-size: 14px;border-right: 1px solid #DBDBDB">
              <div class="icon-access_alarms" style="display: inline-block;font-size: 28px"></div>
              <span>早餐<small style="display: block;margin-top: 3px;font-size: 8px;color: #A8A8A8">4:00-10:00</small></span>
            </div>
            <div class="eat_time"
                 style="flex: 1;text-align: center;padding: 0;font-size: 14px;border-right: 1px solid #DBDBDB">
              <div class="icon-sun" style="display: inline-block;font-size: 22px"></div>
              <span>午餐<small style="display: block;margin-top: 3px;font-size: 8px;color: #A8A8A8">10:00-14:00</small></span>
            </div>
            <div class="eat_time" style="flex: 1;text-align: center;padding: 0;font-size: 14px;">
              <div class="icon-moon-o" style="display: inline-block;font-size: 22px"></div>
              <span>晚餐<small style="display: block;margin-top: 3px;font-size: 8px;color: #A8A8A8">14:00-20:00</small></span>
            </div>
          </nav>
          <ul style="margin-top: 0;margin-bottom: 0;padding-left: 0;list-style: none">
            <li v-for="item in cooking.chief.recipe_lst"
                style="margin-bottom: 8px;background-color: #fff">
              <a style="display: block;position: relative;color: #333;">
                <img :src="item.img" style="width: 100%;height: 116.86px;vertical-align: middle"/>
                <h5 style="position: absolute;width: 100%;bottom: 0;font-size: 16px;color: #fff;
                          margin: 0;padding: 14px 0;text-shadow: 0 1px #000;text-indent: 16px;
                          background-image: linear-gradient(to top,rgba(0,0,0,0.5),rgba(0,0,0,.0))">
                  {{item.name}}
                </h5>
              </a>
            </li>
          </ul>
        </div>
        <section>
          <div class="month_cookest"
               style="position: relative;border-radius: 4px;border: 1px solid #dfdfdf;
                     background-color: #fff;margin-top: 20px;padding: 15px;">
            <div class="cooker_hot" style="position: absolute;left: 10px;top: -5px;width: 100%;">
              <img src="../../common/img/tuijian.png" alt="" style="width: 12%;">
            </div>
            <div class="cookest_body">
              <div style="display: flex">
                <div class="flex_3" style="flex:0 0 30%">
                  <a href="http://www.pinxiango.com/mobile/recipes/recipeAuthor?author_id=36631">
                    <img :src="cooking.chief.chef_img"
                         style="display: block;max-width: 100%;height: auto;margin-bottom: 6px;
                            border-radius: 50%;vertical-align: middle;"/>
                  </a>
                </div>
                <div class="flex_7" style="flex: 1;padding-left: 10px;">
                  <a class="add_cookest" style="display: inline-block;height: 20px;line-height: 20px;float: right;padding: 3px 20px;
              color: #393;border: 1px solid #393;border-radius: 40px;">+关注
                  </a>
                  <h4 style="font-size: 14px;margin: 10px 0;color: #444;font-weight: 500;line-height: 1.1">
                    {{cooking.chief.chef_name}}
                  </h4>
                  <div class="star_cons">
                    <img src="../../common/img/star.png" style=" width: 20px;margin-right: 4px;">
                  </div>
                  <p style="margin: 0 0 10px;font-weight: 400;font-size: 12px;line-height: 20px">
                    {{cooking.chief.chef_introduction}}
                  </p>
                </div>
              </div>
              <div class="flex_10">
                <div v-for="item in cooking.chief.recipe_lst">
                  <img :src="item.img" style="width: 30%;float: left;margin-left: 1.6%;margin-right: 1.6%;"/>
                </div>
                <div class="clearfix" style="clear: both"></div>
              </div>
              <h4 class="tui_orange orange" style="font-size: 16px;margin: 10px 0;color: #f93;">推荐理由</h4>
              <p style="margin: 0 0 10px;line-height:20px">　　左壮，又名“半人”，世界知名美食家、作家，被美国记者誉为“食圣”，2016新西兰国家旅游局猎食新西兰之旅中国大使，著有《一把盐》荣获2014世界美食家大奖。</p>
              <p style="margin: 0 0 10px;line-height: 20px">一个饥饿的人会为了一碗入味的麻子饭而出卖自己的灵魂 —《入味》</p>
            </div>
          </div>
        </section>
        <section>
          <h2 style="margin:10px 0;font-family: 华文细黑;color: #444;font-size: 22px;text-align: center;">
            热门推荐
          </h2>
          <ul style="padding-left: 0;list-style: none;">
              <li v-for="item in cooking.tuijian" style="display:inline-block;width: 48%;border-radius: 5px;overflow: hidden;margin-left: 5px;margin-bottom: 10px">
                <a style="position: relative">
                  <img :src="item.img" style="margin-bottom: 6px;width: 100%;"/>
                  <p style="position: absolute;width: 100%;padding: 8px 0;bottom: 0;margin-bottom: 10px;text-align: center;color: #fff;font-size: 12px;
                    text-shadow: 0 1px #000;background-image: linear-gradient(to top,rgba(0,0,0,0.5),rgba(0,0,0,.0))">
                    {{item.name}}
                  </p>
                </a>
              </li>
            </ul>
        </section>
        <a style="display: block;width: 100%;margin-bottom: 0;border: 1px solid #f93;
          font-size: 14px;border-radius: 20px;color: #f93;
          font-weight: 400;text-align: center;padding: 8px 0">
          查看更多
        </a>
      </div>
      <!--<div class="icon-top" @click="scrollTop">
        <i class="icon-vertical_align_top"></i>
      </div>-->
    </div>
</template>

<script>
  import Swiper from '../../../node_modules/vue-awesome-swiper/src/swiper'
  import SwiperSlide from '../../../node_modules/vue-awesome-swiper/src/slide'

  export default {
    props: {
      cooking: Object
    },
    data () {
      return {
        swiperOption: {
          notNextTick: true,
          autoplay: 4000,
          direction: 'horizontal',
          grabCursor: true,
          setWrapperSize: true,
          autoHeight: true,
          pagination: '.swiper-pagination',
          paginationClickable: true,
          mousewheelControl: true,
          observeParents: true,
          loop: true
        },
        swiperOption1: {
          notNextTick: true,
          autoplay: 2000,
          direction: 'vertical',
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
      SwiperSlide
    }
  }
</script>

<style lang="less" scoped>
.cooking{
  position: relative;
  width: 100%;
  background-color: #F7F7F7;
  .row{
    /*width: 100%;*/
    display: flex;
    padding-right: 10px;
    margin: 10px 10px 0 10px;
    .col{
      flex: 1;
      position: relative;
      padding-left: 5px;
      padding-right: 5px;
      width: 40%;
      float: left;
      .left{
        background-color: #8fb259;
        border-radius: 30px;
        color: #fff;
        display: block;
        margin-bottom: 0;
        font-weight: 400;
        text-align: center;
        vertical-align: middle;
        cursor: pointer;
        border: 1px solid transparent;
        white-space: nowrap;
        padding: 6px 12px;
        font-size: 14px;
        line-height: 1.428571429;
      }
      .right{
        background-color: #f93;
        border-radius: 30px;
        color: #fff;
        display: block;
        margin-bottom: 0;
        font-weight: 400;
        text-align: center;
        vertical-align: middle;
        cursor: pointer;
        background-image: none;
        border: 1px solid transparent;
        white-space: nowrap;
        padding: 6px 12px;
        font-size: 14px;
        line-height: 1.428571429;
      }
    }
  }
  /*.icon-top {
    position: absolute;
    margin-left: 280px;
    z-index: 999;
    bottom: 20px;
    i{
      width: 40px;
      height: 40px;
      line-height: 40px;
      border-radius: 20px;
      font-size: 24px;
      color: #fff;
      background-color: rgba(0, 0, 0, 0.5);
    }
  }*/
}
</style>
