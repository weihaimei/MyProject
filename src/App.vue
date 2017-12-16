<template>
  <div id="app">
    <div class="footer">
      <div class="footer-item">
        <router-link to="/home">
          <i class="icon-home" style="font-size: 20px"></i>
          <div class="name">首页</div>
        </router-link>
      </div>
      <div class="footer-item">
        <router-link to="/foods">
          <i class="icon-list2" style="font-size: 20px"></i>
          <div class="name">食材</div>
        </router-link>
      </div>
      <div class="footer-item">
        <router-link to="/cooking">
          <i class="icon-spoon-knife" style="font-size: 20px"></i>
          <div class="name">食谱</div>
        </router-link>
      </div>
      <div class="footer-item">
        <router-link to="/shopcart">
          <i class="icon-shopping_cart" style="font-size: 20px"></i>
          <div class="name">购物车</div>
        </router-link>
      </div>
      <div class="footer-item">
        <router-link to="/mine">
          <i class="icon-user" style="font-size: 20px"></i>
          <div class="name">我的</div>
        </router-link>
      </div>
    </div>
    <router-view :home="home" :foods="foods" :cooking="cooking"></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        home: {},
        foods: {},
        cooking: {}
      }
    },
    created () {
      let self = this
      this.$axios.get('/api/home')
        .then((res) => {
          res = res.data
          if (res.error === 0) {
            self.home = res.data
          }
        })
        .catch((error) => {
          alert(error)
        })
      this.$axios.get('/api/foods')
        .then((res) => {
          res = res.data
          if (res.error === 0) {
            self.foods = res.data
          }
        })
        .catch((error) => {
          alert(error)
        })
      this.$axios.get('/api/cooking')
        .then((res) => {
          res = res.data
          if (res.error === 0) {
            self.cooking = res.data
          }
        })
        .catch((error) => {
          alert(error)
        })
    }
  }
</script>

<style lang="less" scoped>
  @import "common/less/mixin";

  #app {
    .footer {
      position: fixed;
      display: flex;
      bottom: 0;
      height: 50px;
      width: 100%;
      z-index: 39;
      background-color: white;
      border-top: 1px solid rgba(7, 17, 27, 0.1);
      .footer-item {
        flex: 1;
        text-align: center;
        margin-top: 5px;
        .name{
          margin-top: 5px;
        }
        & > a {
          display: block;
          font-size: 14px;
          color: #757575;
          &.active {
            color: #ED5B00;
          }
        }
      }
    }
  }
</style>
