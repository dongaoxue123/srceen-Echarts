<template>
  <div>
    <div class="grounfimg">
      <!-- <div style="background: #141178;box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);height:450px;width: 550px;margin: auto;"> -->
        <div >
          <div  style="display: flex;justify-content: space-between;align-items: center;padding-top: 10px;padding-top: 12px;">
            <!-- <dv-decoration-11 @click="tohome" style="width:546px;height:106px;color:#237df5;font-size:40px;font-weight:700;letter-spacing:8px"> -->
        
                <!-- <dv-decoration-11 @click="tohome" style="width:546px;height:106px;color:#237df5;font-size:40px;font-weight:700;letter-spacing:8px"> -->
                  <dv-decoration-8 style="width:650px;height:50px;" />
                  <div style="width:546px;color:#237df5;font-size:40px;font-weight:700;letter-spacing:8px">
                    CF系统运行监控平台
                  </div>
                <!-- </dv-decoration-11> -->
                <dv-decoration-8 :reverse="true" style="width:650px;height:50px;" />
                <!-- <img src="../pages/img/未标题-1.jpg" alt=""> -->
            
            <!-- <img src="../pages/img/未标题-1.jpg" alt=""> -->
        </div >
      
        <div>
          <dv-border-box-7 :color="['#151849', '#3f96a5']" style="height:310px;width: 400px;margin: auto;padding-top: 20px;margin-top: 200px;">
            <h3 style="color: #b1dff9;letter-spacing: 20px;">登录</h3>
              <div>
                <el-input style="width: 70%;" placeholder="账号" v-model="value" @input="changenamevalue" ></el-input>
              </div>
                <div style="margin-top: 50px;">
                <el-input  style="width: 70%;" placeholder="密码" type="password" v-model="passwordValue"  @input="changepassvalue" autocomplete="off"></el-input>
              </div>
                <div style="margin-top: 40px;margin-left: 0px;">
                <el-button style="width: 70%;" type="primary" @click="submitForm">确定</el-button>
              </div>
          </dv-border-box-7>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import ElementUI from 'element-ui'
import dataV from '@jiaminghi/data-view'
import { doPost }  from '../api/index.js'
import { API_HOST }  from '../api/api.js'
Vue.use(dataV)
Vue.use(ElementUI)
export default {
  name: 'login',
  data() {
    return {
      value:'',
      passwordValue:'',
      loginName:'',
      password:''
    }
  },
  methods: {
    changenamevalue(){
      // console.log(this.passwordValue)
      this.loginName = this.value
    },
    changepassvalue(){
        // console.log(this.value)
        this.password =this.passwordValue
      },
      submitForm(){
        doPost(`${API_HOST}/api/users/login`,{loginName:this.loginName,password:this.password}).then(res => {
      if (res.data.errcode == 200) {
        console.log(res)
        localStorage['authToken'] = res.data.dataSource.list[0].authToken
        localStorage['groupId'] = res.data.dataSource.list[0].user.groupId
        localStorage['farm_id'] = res.data.dataSource.list[0].user.farmId
        localStorage['groupName'] = res.data.dataSource.list[0].user.groupName
        localStorage['roleName'] = res.data.dataSource.list[0].user.roleName
        this.$router.push({path: '/'})
        // localStorage['authToken'] = res.data.dataSource.list[0].authToken
        console.log(res)
      } else {
        alert('登录账号密码错误')
      }
    })
      }
  },
}
</script>
<style>
.grounfimg{
  /* /* background-image: url(img/微信图片_20200325095827.png);  */
  width: 1920px;height: 1080px; 
/* background: #101239; */
background-image: url(./img/background.png);
}
.el-form-item__label {
    text-align: right;
    vertical-align: middle;
    float: left;
    font-size: 14px;
    color: #b1dff9;
    line-height: 40px;
    padding: 0 12px 0 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
</style>
