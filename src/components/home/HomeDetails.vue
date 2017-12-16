<template>
  <div class="details">
    <div class="header">
      <router-link to="/home">
        <i class="icon icon-arrow_back"></i>
      </router-link>
      <div class="r">
        <i v-if="dislike" @click="changeShow" class="icon icon-like" style="font-size: 20px"></i>
        <div class="already" v-else>
          <i class="icon1 icon-like"></i>
          <p class="text" @click="fn">已收藏</p>
        </div>
      </div>
    </div>
    <div class="product_cons">
      <div class="image">
        <img width="320" :src="home.jian.product[this.index].image"/>
      </div>
      <div class="msg">
        <h2 class="name">{{home.jian.product[index].name}} {{home.jian.product[index].model}}</h2>
        <h3 class="resume">{{home.jian.product[index].resume}}</h3>
        <div class="price">
          <span class="center">￥{{home.jian.product[index].price}}</span>
        </div>
        <div class="small">
          <span class="w3"><img src="http://cdnimg.pinxiango.com/img/bg/mobile/renzheng.png" alt="">经过权威检测</span>
          <span class="w3"><img src="http://cdnimg.pinxiango.com/img/bg/mobile/kuaidi.png" alt="">恒温冷链配送</span>
          <span class="w3"> <img src="http://cdnimg.pinxiango.com/img/bg/mobile/baoyou.png" alt="">沪满59包邮</span>
        </div>
      </div>
      <div class="guige">
        <div class="title">规格</div>
        <div>规格:<span>{{home.jian.product[index].model}}</span></div>
        <div>储存方法:<span>冷藏</span></div>
      </div>
      <div class="houtai">
        <img src="../../common/img/houtai1.png" width="100%"/>
        <img src="../../common/img/houtai2.png" width="100%"/>
        <img src="../../common/img/houtai3.png" width="100%"/>
      </div>
      <div class="icon-top" @click="scrollTop">
        <i class="icon-vertical_align_top"></i>
      </div>
    </div>
    <div class="bottom">
      <div class="cart" @click="getFoodsNum">
        <router-link to="/shopcart">
          <i class="icon icon-shopping-cart"></i>
          <span v-show="this.count >= 0" class="iconnum">{{count}}</span>
        </router-link>
      </div>
      <div class="quantity">
        <input type="button" id="qty_substract" value="-" @click="sub">
        <input type="text" name="quantity" id="input_quantity" v-model="value">
        <input type="button" id="qty_add" value="+" @click="add">
      </div>
      <div class="add-cart" @click="showAddMsg">添加购物车</div>
    </div>
    <transition name="fade">
      <div class="show-add" v-if="addMsg">
        <div class="text">已添加至购物车！</div>
      </div>
    </transition>
  </div>
</template>

<script>
  import {mapMutations} from 'vuex'
  export default {
    props: {
      home: Object
    },
    data () {
      return {
        count: 0,
        value: 1,
        dislike: true,
        addMsg: false,
        index: this.$store.state.index
      }
    },
    methods: {
      ...mapMutations(['GET_NUM']),
      changeShow () {
        this.dislike = false
      },
      add () {
        this.value++
      },
      sub () {
        if (this.value > 0) {
          this.value--
        }
      },
      scrollTop () {
        window.scrollTo(0, 0)
      },
      showAddMsg () {
        this.addMsg = true
        this.count = parseInt(this.count) + parseInt(this.value)
        let that = this
        setTimeout(function () {
          that.addMsg = false
        }, 600)
      },
      getFoodsNum () {
        this.GET_NUM(this.count)
      }
    },
    created () {
      window.scrollTo(0, 0)
    },
    watch: {
      value (val) {
        this.value = val
      }
    }
  }
</script>

<style lang="less" scoped>
  .details{
    margin-bottom: 50px;
    .header{
      position: absolute;
      width: 90%;
      margin: 0 5%;
      z-index: 999;
      margin-top: 4px;
      .icon{
        display: inline-block;
        background-color: rgba(0,0,0,0.5);
        line-height: 40px;
        width: 40px;
        height: 40px;
        border-radius: 20px;
        text-align: center;
        font-size: 24px;
        color: #fff;
      }
      .r{
        float: right;
        .already{
          color: red;
          .icon1{
            display: inline-block;
            line-height: 40px;
            width: 40px;
            height: 40px;
            text-align: center;
            font-size: 20px;
          }
          .text{
            font-size: 12px;
            font-weight: 700;
          }
        }
      }
    }
    .product_cons{
      background-color: #fff;
      margin-top: -44px;
      .image{
        position: relative;
        margin-top: 44px;
        width: 100%;
        z-index: 1;
      }
      .msg{
        padding: 0 2%;
        border-bottom: 1px solid #e0e0e0;
        text-align: center;
        .name{
          margin: 10px 0;
          color: #444;
          font-size: 14px;
        }
        .resume{
          margin: 10px 0;
          color: #999;
          font-size: 15px;
        }
        .price{
          border-bottom: 1px solid #e0e0e0;
          padding: 8px 0 5px;
          .center{
            font-size: 22px;
            color: #dd0022;
          }
        }
        .small{
          display: flex;
          line-height: 3;
          .w3{
            width: 33.33%;
            color: #555;
            font-size: 12px;
            img{
              width: 18px;
              margin-right: 2px;
              vertical-align: middle;
            }
          }
        }
      }
      .guige{
        margin-top: 16px;
        font-size: 14px;
        color: #555;
        .title{
          border-top: none;
          text-align: center;
        }
        div{
          line-height: 2.8;
          margin: 0 8%;
          border-top: 1px solid #e0e0e0;
          span{
            padding-left: 6px;
          }
        }
      }
      .icon-top {
        position: absolute;
        margin-left: 280px;
        z-index: 999;
        bottom: -920px;
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
    .bottom {
      position: fixed;
      bottom: 0;
      height: 50px;
      width: 100%;
      z-index: 10000;
      background-color: #fff;
      border-top: thin solid #dfdfdf;
      .cart{
        border-right: 1px solid #dfdfdf;
        padding: 0 10px;
        .icon{
          color: #555;
          font-size: 30px;
        }
        .iconnum{
          position: absolute;
          margin: 1px 0 0 -14px;
          color: #fff;
          font-size: 13px;
          border-radius: 10px;
          background-color: #ff8000;
          display: inline-block;
          line-height: 1;
          padding: 2px 4px;
        }
      }
      div{
        display: table-cell;
        white-space: nowrap;
        text-align: center;
        overflow: hidden;
        vertical-align: middle;
        line-height: 40px;
        input{
          padding: 0;
          border: none;
          vertical-align: top;
          height: 50px;
          color: #555;
          background-color: transparent;
          min-width: 42px;
          line-height: 50px;
        }
        #qty_substract,#qty_add{
          font-size: 32px;
          width: 40px;
        }
        #input_quantity{
          width: 50px;
          font-size: 16px;
          text-align: center;
          border-left: 1px solid #dfdfdf;
          border-right: 1px solid #dfdfdf;
        }
      }
      .add-cart{
        background-color: #ff8800;
        width: 100%;
        color: #fff;
        font-size: 16px;
        line-height: 50px;
      }
    }
    .show-add{
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(7, 17, 27, 0.5);
      z-index: 100;
      transition: all 0.5s;
      &.fade-enter, &.fade-leave-to{
        opacity: 0;
      }
      .text{
        position: relative;
        margin: 0 90px;
        top: 50%;
        width: 150px;
        height: 40px;
        line-height: 40px;
        border-radius: 5px;
        background-color: #fff;
        font-size: 12px;
        color: #444;
        text-align: center;
      }
    }
  }
</style>
