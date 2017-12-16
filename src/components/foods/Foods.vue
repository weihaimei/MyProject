<template>
    <div class="foods">
      <div class="header">
        <div class="top">
          <i class="icon-search" style="color: white;font-size: 20px;vertical-align: middle"></i>
          <input type="text" placeholder="请输入产品名称"/>
        </div>
        <div class="menu">
          <div class="menu-all" style="padding: 0 15px">
            <a class="df">
              <i class="icon-command" style="font-size: 24px;color: #838383"></i>
              <div class="text">全部</div>
            </a>
          </div>
          <div class="menu-list" ref="menuList">
            <ul class="listUl">
              <li class="act" v-for="(item,index) in foods.banner" :key="item.id"
                  @click="selectBannerLi(index)"
                  :class="{'current':currentIndex===index}">
                <img :src="item.icon2"/>
                <div class="text">{{item.name}}</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="container">
        <ul>
          <li class="good-list" v-for="(item,index) in foods.good" :key="item.id">
            <div class="image">
              <router-link to="/food/details">
                <img :src="item.image" @click="getFoodsIndex(index)"/>
              </router-link>
            </div>
            <div class="sale" @click="getFoodsIndex(index)">
              <router-link to="/food/details" class="aa">
                <div class="name">{{item.name}}</div>
                <p class="resume">{{item.resume}}</p>
                <b class="price">{{item.price}}</b>
                <div class="model">{{item.model}}</div>
              </router-link>
            </div>
          </li>
        </ul>
        <div class="icon-top" @click="scrollTop">
          <i class="icon-vertical_align_top"></i>
        </div>
      </div>
      <details v-show="false" :foods="foods"></details>
    </div>
</template>

<script>
  import {mapMutations} from 'vuex'
  import FoodsDetails from './FoodsDetails'
  export default {
    props: {
      foods: Object
    },
    data () {
      return {
        currentIndex: 0
      }
    },
    methods: {
      ...mapMutations(['GET_INDEX']),
      selectBannerLi (index) {
        this.currentIndex = index
      },
      getFoodsIndex (index) {
        this.GET_INDEX(index)
      },
      scrollTop () {
        window.scrollTo(0, 0)
      }
    },
    component: {
      details: FoodsDetails
    }
  }
</script>

<style lang="less" scoped>
  .foods{
    display: flex;
    width: 100%;
    .header{
      flex: 0 0 20%;
      position: fixed;
      top: 0;
      width: 100%;
      height: 44px;
      background-color: #ff7f00;
      .top{
        margin-left: 12px;
        input{
          padding-left: 3px;
          margin-top: 10px;
          margin-left: 5px;
          width: 70%;
          height: 26px;
          border-radius: 5px;
          border: 0;
        }
      }
      .menu{
        width: 100%;
        height: 45px;
        margin-top: 5px;
        padding-top: 5px;
        padding-right: 1.4rem;
        font-size: 0.28rem;
        text-align: center;
        z-index: 3;
        background-color: #fff;
        box-shadow: 0 1px 3px #eee;
        display: flex;
        .menu-all{
          flex: 0 0 3.5rem;
          border-right: 1px solid #f7f7f7;
          height: 50px;
          background-color: #fff;
          box-sizing: border-box;
          .df{
            color: inherit;
            flex-direction: column;
          }
        }
        .menu-list{
          flex: 1;
          overflow: auto;
          position: relative;
          width: 100%;
          height: 100%;
          z-index: 1;
          .listUl{
            width: 660px;
            display: flex;
            .act{
              flex-shrink: 0;
              color: #333;
              height: 1.2rem;
              margin: 0 0.8rem;
              img{
                width: 1.3rem;
                height: 1.3rem;
                margin-bottom: 3px;
              }
              &.current{
                color: #f93;
              }
            }
          }
        }
      }
    }
    .container{
      margin-bottom: 50px;
      margin-top: 95px;
      overflow: hidden;
      .good-list{
          width: 45.5%;
          float: left;
          margin-left: 3%;
          font-size: 12px;
          overflow: hidden;
          margin-bottom: 0;
          background-color: #fff;
          .image{
            // position: relative;
            a{
              text-decoration: none;
              color: inherit;
              img{
                border-radius: 8px;
                margin: 10px 0;
                width: 100%;
                height: 144.2px;
              }
            }
          }
          .sale{
            padding: 0.08rem 0.1rem 0;
            text-align: center;
            a {
              text-decoration: none;
              color: inherit;
              background-color: transparent;
              .name {
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
                color: #333;
              }
              .resume{
                line-height: 2;
                font-size: .22rem;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
                color: #757575;
              }
              .price{
                text-align: center;
                color: #757575;
                font-weight: bolder;
              }
              .model{
                line-height: 2;
                font-size: .22rem;
                color: #757575;
              }
            }
          }
        }
      .icon-top {
        position: absolute;
        margin-left: 280px;
        bottom: -710px;
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
