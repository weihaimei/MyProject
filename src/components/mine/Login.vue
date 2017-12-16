<template>
    <div class="login">
      <div class="back">
        <router-link to="/home" class="icon icon-arrow_back"></router-link>
      </div>
      <img src="../../common/img/denglu2.png" style="width:100%;background-color: #F7F7F7"/>
      <form action="http://www.pinxiango.com/mobile/registerfrom" method="post" enctype="multipart/form-data" class="form-horizontal">
        <fieldset id="account" style="background-color: #fff;">
          <div class="form-group required" style="margin: 0 20px;padding: 7px 0;">
            <!-- <label class="col-sm-1 col-xs-1 control-label" for="input-telephone"></label> -->
            <div class="col-sm-11 col-xs-11 controls">
              <input type="number" name="telephone" autocomplete="" placeholder="请输入您的手机号码" value="" id="telephone" class="form-con">
            </div>
          </div>
          <div class="form-group required" style="margin: 0 20px;padding: 7px 0;">
            <!-- <label class="col-sm-1 col-xs-1 control-label" for="input-telcode"></label> -->
            <div class="col-sm-12 col-xs-12 controls">
              <div class="" style="padding-left: 0;">
                <input type="number" name="telcode" placeholder="请输入短信验证码" id="input-telephone" class="form-con">
              </div>
              <div class="l" id="sendsms" style="margin-top: -28px;border:1px solid ;border-radius: 20px;">获取短信验证码</div>
            </div>
          </div>
        </fieldset>
        <div class="form-group" style="margin: 0 20px ">
          <input type="submit" value="登录" class="btn btn-default btn-block btn_smt" onclick="ga('send', 'event', '登录注册', '注册', '手机注册登录');">
          <div class="text-center" style="margin-top: 8px">未注册过的用户将直接为您创建账户</div>
        </div>
        <div class="form-group">
          <div class="col-sm-10 col-sm-offset-2 col-xs-10 col-xs-offset-2">
            <input type="hidden" name="redirect" value="http://www.pinxiango.com/mobile/account">
          </div>
        </div>
      </form>
      <div style="text-align: center">
        <a style="font-size: 16px;color: #19a258">使用密码登录</a>
      </div>
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
  .login{
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: #F7F7F7;
    .back {
      position: fixed;
      height: 38px;
      width: 38px;
      border-radius: 30px;
      background-color: #999;
      margin: 10px;
      z-index: 9;
      .icon{
        position: absolute;
        margin: 5px 6px;
        color: #E0E0E0;
        font-size: 26px;
      }
    }
    .form-horizontal{
      #account{
        .col-sm-11{
          position: relative;
          float: left;
          margin-top: 5px;
          padding-left: 5px;
          padding-right: 5px;
          width: 91.7%;
          border-bottom: 1px solid rgba(175,175,175,0.3);
          input{
            font-size: 14px;
            width: 100%;
            height: 30px;
            line-height: 30px;
            padding-top: 0;
            padding-bottom: 5px;
            border: 0;
          }
        }
        .col-sm-12{
          position: relative;
          float: left;
          padding-left: 5px;
          padding-right: 5px;
          padding-bottom: 3px;
          width: 91.7%;
          input{
            font-size: 14px;
            width: 100%;
            height: 30px;
            line-height: 30px;
            padding-top: 10px;

            border: 0;
          }
          #sendsms{
            text-align: center;
            padding: 8px 12px;
            float: right;
            font-size: 14px;
            position: relative;
            z-index: 9;
            color: #f93;
          }
        }
      }
      .form-group{
        margin-left: -5px;
        margin-right: -5px;
        margin-bottom: 10px;
        padding-top: 15px;
        color: #555;
        input[type=submit]{
          width: 100%;
          color: #fff;
          font-size: 16px;
          cursor: pointer;
          background-color: #f93;
          border: 0;
          border-radius: 30px;
          margin-bottom: 0;
          font-weight: 400;
          text-align: center;
          vertical-align: middle;
          white-space: nowrap;
          padding: 6px 12px;
          line-height: 1.428571429;
        }
        .text-center{
          font-size: 12px;
          text-align: center;
        }
      }
      /*input{
        display: block;
        width: 100%;
        padding: 6px 12px;
        font-size: 14px;
        border: 1px solid #f93;
        background-color: #f93;
        margin-bottom: 0;
        font-weight: 400;
        text-align: center;
        vertical-align: middle;
        cursor: pointer;
        white-space: nowrap;
        line-height: 1.428571429;
        border-radius: 4px;
      }*/
    }
  }

</style>
