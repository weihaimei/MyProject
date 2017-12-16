<template>
    <div class="cart">
      <div class="cart-list" v-if="this.num > 0">
        <div class="top" v-show="decPrice < 59">
          <h2 class="topaction">
            <img width="18" height="13" src="../../common/img/laba.png"/>
            满59元可免运费，您还差{{decPrice}}元。
            <router-link to="/home" class="coudan">去凑单</router-link>
          </h2>
        </div>
        <div class="list">
          <div class="list-top">
            <i class="icon icon-check-circle"></i>
            <span class="text">共1件商品</span>
          </div>
          <ul>
            <li class="buy-item">
              <div class="cartmove"><span @click="removeCart">删除</span></div>
              <div class="selected">
                <div class="icon"><i class="icon-check-circle"></i></div>
                <!--<img src="http://cdnimg.pinxiango.com/img/product/img/3/3275/15118555404623.jpg?x-oss-process=image/resize,m_pad,h_338,w_338,color_FFFFFF"/>-->
                <img :src="foods.good[index].image"/>
                <!--<img :src="home.jian.product[index].image"/>-->
                <div class="msg">
                  <h4 class="name">{{foods.good[index].name}}</h4>
                  <div class="extra">
                    <strong class="price">￥{{foods.good[index].price}}</strong>
                    <div class="btn">
                      <input id="sub" @click="sub" type="button" value="-"/>
                      <input id="num" type="text" size="4" :value="num"/>
                      <input id="add" @click="add" type="button" value="+"/>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="bottom">
          <div class="pad">
            <div style="width:55%;margin-right: 3%">
              <span class="total">合计:<strong>￥{{totalPrice}}</strong></span>
            </div>
            <div style="width:40%"><router-link to="/login" class="account">立即结算</router-link></div>
          </div>
        </div>
      </div>
      <div class="content" v-else>
        <div class="row">
          <div class="col-sm-12">
            <span class="icon"><i class="icon-shopping-cart" style="font-size: 60px;font-weight: 400"></i></span>
            <span class="msg">您的购物车内没有商品！</span>
            <router-link to="/home" class="link">继续</router-link>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    props: {
      foods: Object,
      home: Object
    },
    data () {
      return {
        index: this.$store.state.index,
        num: this.$store.state.num
      }
    },
    computed: {
      totalPrice () {
        return this.foods.good[this.index].price * this.num
      },
      decPrice () {
        if (this.totalPrice < 59) {
          return 59 - this.totalPrice
        }
      }
    },
    methods: {
      removeCart () {
        this.num = 0
      },
      add () {
        this.num++
      },
      sub () {
        this.num--
      }
    }
  }
</script>

<style lang="less" scoped>
.cart{
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: #F7F7F7;
  padding-left: 5px;
  padding-right: 5px;
  .top{
    margin-bottom: 10px;
    .topaction{
      margin-top: 0;
      padding: 0 3.3%;
      background-color: #ffffe2;
      line-height: 3;
      color: #444;
      font-size: 14px;
    }
    .coudan{
      color: #ff8000;
      float: right;
    }
  }
  .list{
    margin-bottom: 8px;
    background-color: #fff;
    .list-top{
      line-height: 2.5;
      border-bottom: 1px solid #dfdfdf;
      padding: 0 3.3%;
      margin-left: 6px;
      .icon {
        font-size: 22px;
        color: #f93;
      }
      .text{
        color: #444;
        font-size: 14px;
      }
    }
    ul{
      margin-top: 0;
      margin-bottom: 0;
      padding-left: 0;
      list-style: none;
      .buy-item{
        border-bottom: 1px solid #ddd;
        padding: 3.3%;
        .cartmove{
          height: 0;
          text-align: right;
          span{
            border: 1px solid;
            padding: 4px;
            display: inline-block;
            border-radius: 4px;
            color: #999;
            font-size: 12px;
          }
        }
        .selected{
          display: flex;
          .icon{
            padding-bottom: 3px;
            align-self: center;
            i{
              font-size: 22px;
              color: #f93;
            }
          }
          img{
            width: 69.28px;
            height: 69.28px;
            margin-left: 8px;
            margin-right: 6px;
            border: 1px solid #e1e1e1;
            vertical-align: middle;
          }
          .msg{
            width: 70%;
            .name{
              margin: 10px 0;
              line-height: 1.1;
              font-weight: 500;
              font-family: inherit;
              font-size: 14px;
              color: #555;
            }
            .extra{
              display: flex;
              .price{
                width: 30%;
                margin-top: 7px;
                font-size: 13px;
                font-weight: 700;
                color: #DD0022;
              }
              .btn{
                margin: 6px 0 0 52px;
                display: flex;
                #sub{
                  width: 21px;
                  height: 21px;
                  line-height: 18px;
                  border-radius: 50%;
                  border: 1px solid #a0a0a0;
                  font-size: 22px;
                  color: #555;
                  background-color: inherit;
                }
                #num{
                  margin: 0 5px;
                  width: 32px;
                  height: 18px;
                  border-radius: 6px;
                  text-align: center;
                  border: 1px solid #a0a0a0;
                }
                #add{
                  padding-left: 3px;
                  width: 21px;
                  height: 21px;
                  line-height: 18px;
                  border-radius: 50%;
                  border: 1px solid #a0a0a0;
                  font-size: 22px;
                  color: #555;
                  background-color: inherit;
                }
              }
            }
          }
        }
      }
    }
  }
  .bottom{
    position: fixed;
    bottom: 48px;
    margin-top: 70px;
    left: 0;
    width: 100%;
    height: 50px;
    z-index: 100;
    background-color: rgba(0, 0, 0, 0.8);
    .pad{
      margin: 0;
      padding: 7px 2px 7px 140px;
      div{
        float: left;
        height: 40px;
        text-align: center;
        .total{
          display: block;
          float: right;
          line-height: 40px;
          font-size: 14px;
          color: #fff;
          strong{
            margin-left: 3px;
            color: #E4393C;
            font-size: 16px;
            font-weight: 700;
          }
        }
        .account{
          display: block;
          width: 100%;
          height: 35px;
          line-height: 35px;
          color: #fff;
          border-radius: 2px;
          font-size: 14px;
          font-weight: bold;
          background-color: #e4393c;
        }
      }
    }
  }
  .content{
    position: relative;
    padding-left: 5px;
    padding-right: 5px;
    .row{
      margin-left: -5px;
      margin-right: -5px;
      .col-sm-12{
        position: relative;
        padding-left: 5px;
        padding-right: 5px;
        .icon {
          display: block;
          margin-top: 20px;
          line-height: 80px;
          text-align: center;
          color: #ccc;
        }
        .msg {
          display: block;
          margin: 10px 0;
          text-align: center;
          font-size: 16px;
          font-weight: 600;
        }
        .link{
          display: block;
          width: 80%;
          color: #333;
          font-size: 10px;
          margin: 0 auto;
          padding: 10px 0;
          border: 1px solid #ddd;
          text-align: center;
        }
      }
    }
  }
}
</style>
