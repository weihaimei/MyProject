<template>
  <div class="cotent">
    <div class="goods">
      <h3 class="goods-title">精选尖货</h3>
      <div class="jian">
        <img :src="home.jian.image"/>
      </div>
      <div class="goods-wrapper">
        <div class="scroll-item" style="margin-top: 0px;margin-bottom: 10px">
          <div class="owl-stage-outer">
            <div class="owl-stage"
                 style="transform: translate3d(0px,0px,0px);
                      transition: 0.25s;
                      width: 1068px;
                      padding-left: 32px;
                      padding-right: 32px;
                      margin-left: -32px;">
              <div class="owl-item"
                   style="width: 119.5px;margin-right: 6px;"
                   v-for="(item,index) in home.jian.product" @click="getFoodsIndex(index)">
                <router-link to="/home/details" class="item">
                  <img :src="item.image" width="119.5px"/>
                  <div class="big">{{item.name}}</div>
                  <div class="c75">{{item.resume}}</div>
                  <div class="c75">{{item.model}}</div>
                  <b class="cf93">{{item.price}}</b>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="goods">
      <h3 class="goods-title">特惠套餐</h3>
      <div class="jian">
        <img :src="home.discount.image"/>
      </div>
      <div class="goods-wrapper">
        <div class="scroll-item" style="margin-top: 0px;margin-bottom: 10px">
          <div class="owl-stage-outer">
            <div class="owl-stage"
                 style="width: 1068px;
                      padding-left: 32px;
                      padding-right: 32px;
                      margin-left: -32px;">
              <div class="owl-item"
                   style="width: 119.5px;margin-right: 6px;"
                   v-for="(item,index) in home.discount.product" @click="getFoodsIndex(index)">
                <router-link to="/home/details" class="item">
                  <img :src="item.image" width="119.5px"/>
                  <div class="big">{{item.name}}</div>
                  <div class="c75">{{item.resume}}</div>
                  <div class="c75">{{item.model}}</div>
                  <b class="cf93">{{item.price}}</b>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="cate-goods">
      <div v-for="item in home.cate" :key="item.id">
        <div class="jian">
          <img :src="item.image"/>
        </div>
        <div class="list">
          <router-link to="/home/details" class="list-item" v-for="i in item.products" :key="i.id">
            <img :src="i.image" width="144.97px"/>
            <div class="text-overflow big">{{i.name}}</div>
            <div class="text-overflow c75">{{i.resume}}</div>
            <b class="cf93">{{i.price}}</b>
            <div class="c75">{{i.model}}</div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapMutations} from 'vuex'
  export default {
    props: {
      home: Object
    },
    data () {
      return {}
    },
    methods: {
      ...mapMutations(['GET_INDEX']),
      getFoodsIndex (index) {
        this.GET_INDEX(index)
      }
    }
  }
</script>

<style lang="less" scoped>
  .goods{
    background-color: #fff;
    margin-bottom: 10px;
    overflow: hidden;
    .goods-title{
      margin: 10px 0;
      text-align: center;
      font-size: 18px;
      color: #f93;
    }
    .jian{
      display: block;
      margin-left: 3.3%;
      margin-right: 3.3%;
      img{
        border-radius: 10px;
        box-shadow: 0 0 0.5px #dedede;
        max-width: 100%;
        vertical-align: middle;
      }
    }
    .goods-wrapper{
      margin-left: 3.3%;
      margin-top: 10px;
      .scroll-item{
        overflow-x: auto;
        white-space: nowrap;
        font-size: 0;
        z-index: 1;
        .owl-stage-outer{
          overflow: auto;
          .owl-stage{
            position: relative;
            white-space: nowrap;
            font-size: 0;
            .owl-item{
              display: inline-block;
              min-height: 1px;
              float: left;
              .item{
                display: inline-block;
                width: 100%;
                border-radius: 10px;
                overflow: hidden;
                text-align: center;
                font-size: 12px;
                color: #333;
                .img{
                  display: block;
                  border-radius: 10px;
                  box-shadow: 0 0 0.5px #dedede;
                  vertical-align: middle;
                }
                .big{
                  margin: 3px 0;
                  padding-top: 4px;
                  white-space: nowrap;
                  overflow: hidden;
                  text-overflow: ellipsis;
                }
                .c75{
                  margin: 6px 0;
                  color: #757575;
                  white-space: nowrap;
                  overflow: hidden;
                  text-overflow: ellipsis;
                }
                .cf93{
                  color: #f93;
                }
                b{
                  font-weight: 700;
                }
              }
            }
          }
        }
      }
    }
  }
  .cate-goods{
    margin-top: 8px;
    color: #fff;
    background-color: #fff;
    margin-bottom: 10px;
    overflow: hidden;
    .jian{
      display: block;
      margin-left: 3.3%;
      margin-right: 3.3%;
      color: #333;
      img{
        width: 100%;
        border-radius: 10px;
        box-shadow: 0 0 0.5px;
        vertical-align: middle;
      }
    }
    .list{
      text-align: justify;
      display: block;
      margin-left: 2.2%;
      margin-right: 2.2%;
      .list-item{
        display: inline-block;
        margin-top: 8px;
        width: 50%;
        border-radius: 10px;
        overflow: hidden;
        text-align: center;
        font-size: 12px;
        color: #333;
        .img{
          border-radius: 10px;
          box-shadow: 0 0 0.5px #dedede;
          vertical-align: middle;
        }
        .big{
          margin: 3px 0;
          padding-top: 4px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .c75{
          margin: 6px 0;
          color: #757575;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .cf93{
          color: #f93;
        }
        b{
          font-weight: 700;
        }
      }
    }
  }
</style>
