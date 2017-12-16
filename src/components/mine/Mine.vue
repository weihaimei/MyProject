<template>
    <div class="mine">
      <header>
        <div class="usercon">
          <div class="left">
            <a class="avatar"><img src="../../common/img/user_photo-126x126.jpg"/></a>
            <router-link to="/login" class="text">登录注册&gt;</router-link>
          </div>
        </div>
      </header>
      <section style="padding: .25rem;margin-bottom: 8px;font-size: .24rem;background-color: #fff">
        <h2 class="walet">我的钱包</h2>
        <div class="item" style="padding: 0.25rem 0;">
          <div class="div1">
            <div class="df">
              <div class="db">
                <i class="icon-wallet"></i>
                <div class="pl15">零钱 <p class="c9 f18">(原会员卡)</p></div>
                <b class="cff8 f36">0.00</b>
                <div class="c75">充值送积分</div>
              </div>
              <a class="chongbtn">充值</a>
            </div>
            <div class="df">
              <div class="db">
                <i class="icon-credit-card"></i>
                <div class="pl15">品鲜币 <p class="c9 f18">(原品鲜惠)</p></div>
                <b class="cff8 f36">0.00</b>
                <div class="c75">即充即用</div>
              </div>
              <a class="chongbtn">充值</a>
            </div>
          </div>
          <div class="div2">
            <div class="df">
              <div class="db">
                <i class="icon-credit"></i>
                <div class="pl15">积分 </div>
                <b class="cff8 f36">0</b>
                <div class="c75">已连续签到0天</div>
              </div>
            </div>
            <div class="df">
              <div class="db">
                <i class="icon-prices"></i>
                <div class="pl15">优惠券</div>
                <b class="cff8 f36">0</b>
                <div class="c75">其中0张即将到期</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section style="padding: .25rem;margin-bottom: 8px;font-size:12px;background-color: #fff">
        <div class="order">
          <h2>我的订单</h2>
          <span style="font-family: 方正兰亭超细黑简体">&gt;</span>
        </div>
        <div class="order-list">
          <div class="list">
            <img src="../../common/img/dm.png" width="20.47"/>
            <p>待付款</p>
          </div>
          <div class="list">
            <i class="icon-floppy-disk"></i>
            <p>待发货</p>
          </div>
          <div class="list">
            <img src="../../common/img/wuliu.png" width="20.47" height="20"/>
            <p>待收货</p>
          </div>
          <div class="list">
            <i class="icon-clipboard"></i>
            <p>已完成</p>
          </div>
        </div>
      </section>
      <section style="padding: .25rem;margin-bottom: 8px;font-size:12px;background-color: #fff">
        <div class="cook">
          <h2>烹饪教室</h2>
          <div>发布食谱送积分</div>
        </div>
        <div class="classroom">
          <div class="item">
            <img src="../../common/img/guanzhu.png"/>
            <p>我的关注</p>
          </div>
          <div class="item">
            <img src="../../common/img/fabushi.png"/>
            <p>发布食谱</p>
          </div>
          <div class="item">
            <img src="../../common/img/shoushi.png"/>
            <p>收藏食谱</p>
          </div>
        </div>
      </section>
      <section>
        <ul class="setUl">
          <li class="set">
            <div class="cc">
              <i class="icon-like"></i>
              <span>商品关注</span>
            </div>
            <span style="font-family: 方正兰亭超细黑简体">&gt;</span>
          </li>
          <li class="set">
            <div class="cc">
              <img src="../../common/img/set.png"/>
              <span>个人设置</span>
            </div>
            <span style="font-family: 方正兰亭超细黑简体">&gt;</span>
          </li>
          <li class="set">
            <div class="cc">
              <i class="icon-headphones"></i>
              <span>电话客服</span>
            </div>
            <span style="font-family: 方正兰亭超细黑简体">&gt;</span>
          </li>
        </ul>
      </section>
      <section style="margin-bottom: 5px;text-align: center">
        <router-link to="/home" class="exit">退出登录</router-link>
      </section>
    </div>
</template>

<script>
  export default {
    data () {
      return {}
    }
  }
</script>

<style lang="less" scoped>
  .mine{
    /*position: fixed;*/
    width: 100%;
    height: 100%;
    margin-bottom: 50px;
    background-color: #F7F7F7;
    .usercon{
      height: 65px;
      padding: 0 .25rem;
      background-color: #ff8000;
      color: #fff;
      .left{
        padding: 8px 10px;
        .avatar{
          margin-top: 5px;
          img{
            width: 45px;
            height: 45px;
            border-radius: 50%;
            border:2px solid rgba(255,255,255,0.5)
          }
        }
        .text{
          position: absolute;
          display: inline-block;
          color: #fff;
          margin: 20px 12px;
          font-size: 14px;
        }
      }
    }
    .walet{
      margin-left: 5px;
      line-height: 30px;
      font-size: 14px;
      color: #555;
      border-bottom: 1px solid #dfdfdf;
    }
    .item{
      .div1{
        display: flex;
        padding-top: 5px;
        border-bottom: 1px dashed #dfdfdf;
        .df{
          flex:1;
          display: flex;
          float: left;
          margin-right: 8px;
          .db{
            flex: 1;
            i{
              display: inline-block;
              float: left;
              padding-right: 8px;
            }
            .pl15{
              padding-left: 8px;
              .f18{
                margin-top: 3px;
                font-size: 12px;
                color: #999;
              }
            }
            .cff8{
              font-weight: normal;
              line-height: 28px;
              font-size: 14px;
              color: #ff8000;
            }
            .c75{
              color: #757575;
            }
          }
          .chongbtn{
            display: block;
            color: #ff8000;
            height: 16px;
            line-height: 16px;
            width: 40px;
            margin-left: 14px;
            border: 1px solid;
            text-align: center;
            border-radius: 10px;
          }
        }
      }
      .div2{
        display: flex;
        padding-top: 8px;
        .df{
          flex: 1;
          display: flex;
          float: left;
          margin-right: 8px;
          .db{
            flex: 1;
            i{
              display: inline-block;
              float: left;
              padding-right: 8px;
            }
            .pl15{
              padding-left: 14px;
              .f18{
                font-size: 14px;
                color: #999;
              }
            }
            .cff8{
              font-weight: normal;
              line-height: 28px;
              font-size: 14px;
              color: #ff8000;
            }
            .c75{
              color: #757575;
            }
          }
          .chongbtn{
            display: block;
            color: #ff8000;
            height: 16px;
            line-height: 20px;
            width: 40px;
            margin-left: 14px;
            border: 1px solid;
            text-align: center;
            border-radius: 10px;
          }
        }
      }
      .df:first-of-type{
        border-right: 1px dashed #dfdfdf;
        padding: 0 5px 10px 5px;
      }

    }
    .order{
      display: flex;
      margin-left: 5px;
      line-height: 30px;
      font-size: 14px;
      color: #555;
      border-bottom: 1px solid #dfdfdf;
      h2{
        flex: 0 0 93%;
      }
    }
    .order-list{
      display: flex;
      .list{
        margin: 10px 20px 10px 28px;
        i{
          font-size: 20px;
          color: #B4B4B4;
        }
        p{
          margin-top: 5px;
          margin-left: -6px;
          color: #757575;
        }
      }
    }
    .cook{
      display: flex;
      margin-left: 5px;
      line-height: 30px;
      font-size: 12px;
      color: #555;
      border-bottom: 1px solid #dfdfdf;
      h2{
        font-size: 14px;
        flex: 0 0 70%;
      }
    }
    .classroom{
      display: flex;
      margin-left: 10px;
      .item{
        flex: 1;
        margin: 14px 23px;
        img{
          width: 20.47px;
        }
        p{
          margin-top: 5px;
          margin-left: -14px;
          color: #333;
        }
      }
    }
    .setUl{
      background-color: #fff;
      list-style: none;
      padding: 0;
      font-size: 14px;
      color: #333;
      .set{
        display: flex;
        margin: 5px 10px;
        height: 35px;
        border-bottom: 1px solid #dfdfdf;
        .cc{
          flex: 0 0 93%;
          img{
            width: 16.2px;
          }
          span{
            line-height: 35px;
          }
        }
        span{
          margin-top: 10px;
        }
      }
    }
    .exit{
      margin-top: 30px;
      display: inline-block;
      width: 150px;
      color: #fff;
      line-height: 2;
      border-radius: 14px;
      font-size: 14px;
      background-color: #ff8000;
    }
  }
</style>
