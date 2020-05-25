<template>
  <div class="backgtttrrreeeee" >
    <!-- <h1  @click="tocodehome" style="color:yellow;margin: 0px;padding: 30px;">{{forname}}</h1> -->
    <h1  @click="tocodehome" style="color:yellow;font-size: 36px;padding-top: 30px;width: 500px;margin: 0 auto;">猪场生产管理监控平台</h1>
    <!-- <div style="color:#4a90e2;margin-left:1000px;font-weight: 600;font-size:25px;width: 200px;">栋舍</div>
    <div style="color:#fff;margin-left:40px;font-weight: 700;font-size: 27px;width: 500px;">守望者编号：测试场</div> -->
    <!-- <el-select @change="changename" v-model="value">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select> -->
    <select v-model="value" @change="changename"  style="background-color:#111240;opacity: 0.8;font-size:22px;width:200px;height:40px;margin-left:400px;color:#fff;border:0px;text-indent: 10px;border: 0px;">
      <option style="background-color:#111240;opacity: 0.8;border: 0;" v-for="(index,item) in caplist" :value ="index">{{index.name}}</option>
    </select>
    <div style="display: flex;justify-content: center;align-items: center;margin-top: 10px;">
      <div>
      
        <div style="color:#fff;font-size: 22px;height: 33px;width: 520px;display: flex;justify-content: flex-start;margin-left: 10px;">{{name1}}</div>

      <dv-border-box-7 :color="['#151849', '#fff']"  style="width:550px;height:380px;margin: 10px;">
        <video
        id="myPlayer"
        style="width: 520px;height: 350px;margin-top: 20px;"
        :src="http_url"
        controls playsinline webkit-playsinline autoplay=true>
        </video>
      </dv-border-box-7>
    </div>
    <div>
    <div style="color:#fff;font-size: 22px;height: 33px;width: 520px;display: flex;justify-content: flex-start;margin-left: 10px;">{{name2}}</div>
      <dv-border-box-7 :color="['#151849', '#fff']"  style="width:550px;height:380px;margin: 10px;">
        <video
        id="myPlayer2"
        style="width: 520px;height: 350px;margin-top: 20px;"
        :src="http_url2"
        controls playsinline webkit-playsinline autoplay=true>
        </video>
      </dv-border-box-7>
    </div>
    <div>
    <div style="color:#fff;font-size: 22px;height: 33px;width: 520px;display: flex;justify-content: flex-start;margin-left: 10px;">{{name3}}</div>
      <dv-border-box-7 :color="['#151849', '#fff']"  style="width:550px;height:380px;margin: 10px;">
        <video
        id="myPlayer3"
        style="width: 520px;height: 350px;margin-top: 20px;"
        :src="http_url3"
        controls playsinline webkit-playsinline autoplay=true>
         </video>
      </dv-border-box-7>
    </div>
    </div>
    <div style="display:flex;justify-content: center;align-items: center; margin-top: 20px;">
      <div>
        <div style="color:#fff;font-size: 22px;height: 33px;width: 520px;display: flex;justify-content: flex-start;margin-left: 10px;">{{name4}}</div>
      <dv-border-box-7 :color="['#151849', '#fff']"  style="width:550px;height:380px;margin: 10px;">
        <video
        id="myPlayer4"
        style="width: 520px;height: 350px;margin-top: 20px;"
        :src="http_url4"
        controls playsinline webkit-playsinline autoplay=true>
        </video>
      </dv-border-box-7>
      </div>
      <div>
        <div style="color:#fff;font-size: 22px;height: 33px;width: 520px;display: flex;justify-content: flex-start;margin-left: 10px;">{{name5}}</div>
      <dv-border-box-7 :color="['#151849', '#fff']"  style="width:550px;height:380px;margin: 10px;">
        <video
        id="myPlayer5"
        style="width: 520px;height: 350px;margin-top: 20px;"
        :src="http_url5"
        controls playsinline webkit-playsinline autoplay=true>
         </video> 
      </dv-border-box-7>
      </div>
      <div>
        <div style="color:#fff;font-size: 22px;height: 33px;width: 520px;display: flex;justify-content: flex-start;margin-left: 10px;">{{name6}}</div>
      <dv-border-box-7 :color="['#151849', '#fff']"  style="width:550px;height:380px;margin: 10px;">
        <video
        id="myPlayer6"
        style="width: 520px;height: 350px;margin-top: 20px;"
        :src="http_url6"
        controls playsinline webkit-playsinline autoplay=true>
        </video>
      </dv-border-box-7>
      </div>
      <div v-if="ispagebutton" style="padding-top: 4px;">
        <a v-if="pagevideo" @click="tonextpage" type="primary" style="position: absolute;top: 1035px;left: 940px;color: #000bf1;font-size: 20px;">下一页</a>
        <a v-if="pagevideo1" @click="todonepage" type="primary" style="position: absolute;top: 1035px;left: 840px;color: #000bf1;font-size: 20px;">上一页</a>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import echarts from "echarts"
import dataV from '@jiaminghi/data-view'
import './jquery.min.js'
import ezuikit from './ezuikit.js'
import 'uikit/dist/css/uikit.min.css'
import Video from 'video.js'
import 'video.js/dist/video-js.css'
import { scrollBoard } from '@jiaminghi/data-view'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import { doGet }  from '../api/index.js'
import { API_HOST }  from '../api/api.js'
Vue.use(ElementUI)
Vue.use(dataV)
import '../../node_modules/echarts/map/js/china.js' // 引入中国地图数据
export default {
  name: "Video",
  data() {
    return {
      http_url:'',
      http_url2:'',
      http_url3:'',
      http_url4:'',
      http_url5:'',
      http_url6:'',
      forname:localStorage.farmNamex,
      options: [],
      value: '',
      houselist:[],
      caplist:[],
      ispagebutton:false,
      pagevideo1:false,
      pageD:1,
      pagevideo:false,
      videolenght:0,
      videoname:[],
      name1:'',
      name2:'',
      name3:'',
      name4:'',
      name5:'',
      name6:'',
        // onename:''
    };
  },
  updated() {
   if(this.rtmp_url!=""){
    this.player = new EZUIPlayer('myPlayer')
    this.player = new EZUIPlayer('myPlayer2')
    this.player = new EZUIPlayer('myPlayer3')
    this.player = new EZUIPlayer('myPlayer4')
    this.player = new EZUIPlayer('myPlayer5')
    this.player = new EZUIPlayer('myPlayer6')
   }
  },
  mounted() {
    // this.http_url='http://hls01open.ys7.com/openlive/135c0a87bc5249c0afa122e1858a02c8.m3u8'
    // this.http_url2='http://hls01open.ys7.com/openlive/135c0a87bc5249c0afa122e1858a02c8.m3u8'
    // this.http_url3='http://hls01open.ys7.com/openlive/135c0a87bc5249c0afa122e1858a02c8.m3u8'
    // this.value = localStorage.ooname
    // console.log(localStorage.getItem('select'))
   
    doGet(`${API_HOST}/api/system/farm/getListSelect`,{authToken:localStorage.authToken}).then(res => {
      let that = this
      if (res.data.errcode == 200) {
        console.log(localStorage.getItem('select'))
        this.caplist = res.data.dataSource.list
        var a = localStorage.getItem('select')
        var b = JSON.parse(a)
        if (a==null) {
          this.value = res.data.dataSource.list[0]
          doGet(`${API_HOST}/api//system/MonitorDevice/getMonitorDeviceList`,{authToken:localStorage.authToken,farmId:this.value.id}).then(res => {
            let that = this
            if (res.data.errcode == 200) {
                that.http_url = res.data.dataSource.list[0].videoAddress
                that.name1 =res.data.dataSource.list[0].deviceName
                that.http_url2 = res.data.dataSource.list[1].videoAddress
                that.name2 =res.data.dataSource.list[1].deviceName
                that.http_url3 = res.data.dataSource.list[2].videoAddress
                that.name3 =res.data.dataSource.list[2].deviceName
                that.http_url4 = res.data.dataSource.list[3].videoAddress
                that.name4 =res.data.dataSource.list[3].deviceName
                that.http_url5 = res.data.dataSource.list[4].videoAddress
                that.name5 =res.data.dataSource.list[4].deviceName
                that.http_url6 = res.data.dataSource.list[5].videoAddress
                that.name6 =res.data.dataSource.list[5].deviceName
            }
          })
          // console.log(this.value )
        } else{
          // this.value = b
          // console.log(this.value)
          doGet(`${API_HOST}/api//system/MonitorDevice/getMonitorDeviceList`,{authToken:localStorage.authToken,farmId:localStorage.eventid}).then(res => {
          let that = this
          if (res.data.errcode == 200) {
          //     if(localStorage.getItem('select')==null){
          //   console.log('ddddd')
          // }
          var a = localStorage.getItem('select')
          var b = JSON.parse(a)
        if (!b) {
          // this.value = res.data.dataSource.list[0]
        } else{
          this.value = b
        }
        if (res.data.dataSource.list.length > 6) {
          that.ispagebutton = true
          this.pagevideo = true
          this.pagevideo1 = false
        }else{
          that.ispagebutton = false
        }
        if (localStorage.pageD == 1) {
          this.pagevideo1 = false
          } else{
          this.pagevideo1 = true
        }
        this.videolenght = res.data.dataSource.list.length
        let min = (localStorage.pageD-1)*6
        let max = localStorage.pageD*6-1
        // console.log(max)
        if (res.data.dataSource.list.length<max+1) {
          console.log('ceshih')
          this.pagevideo=false
        } else {
          this.pagevideo=true
        }
        // if(res.data.dataSource.list.length>min){
        // }
        if (res.data.dataSource.list.length>min) {
          that.http_url = res.data.dataSource.list[min].videoAddress
          that.name1 =res.data.dataSource.list[min].deviceName
          that.http_url2 = res.data.dataSource.list[min+1].videoAddress
          that.name2 =res.data.dataSource.list[min+1].deviceName
          that.http_url3 = res.data.dataSource.list[min+2].videoAddress
          that.name3 =res.data.dataSource.list[min+2].deviceName
          that.http_url4 = res.data.dataSource.list[min+3].videoAddress
          that.name4 =res.data.dataSource.list[min+3].deviceName
          that.http_url5 = res.data.dataSource.list[min+4].videoAddress
          that.name5 =res.data.dataSource.list[min+4].deviceName
          that.http_url6 = res.data.dataSource.list[min+5].videoAddress
          that.name6 =res.data.dataSource.list[min+5].deviceName
          console.log(res.data.dataSource.list[min].deviceName)
          // that.name1 =res.data.dataSource.list[min].deviceName
        }
        console.log(res.data)
        } else{
          var a = localStorage.getItem('select')
          var b = JSON.parse(a)
        if (!b) {
          // this.value = res.data.dataSource.list[0]
        } else{
          this.value = b
        }
      }
    })
      }
    }
  })
  },
  methods: {
    tocodehome(){
      this.$router.push({path: '/'})
    },
    todonepage(){
      this.pageD-1
      localStorage['pageD'] = this.pageD
      this.$router.push('/emptyPage')
    },
    tonextpage(){
      this.pageD = ++this.pageD
      localStorage['pageD'] = this.pageD
      this.$router.push('/emptyPage')
    },
    changename(event){
      localStorage.pageD=1
      console.log(this.value)
      localStorage['eventid'] = this.value.id
      localStorage['ooname'] = this.value.name
      localStorage.setItem('select', JSON.stringify(this.value))
      this.$router.push('/emptyPage')
      doGet(`${API_HOST}/api/system/MonitorDevice/getMonitorDeviceList`,{authToken:localStorage.authToken,farmId:this.value.id}).then(res => {
        let that = this
        if (res.data.errcode == 200) {
          console.log(res.data)
          that.http_url = res.data.dataSource.list[0].videoAddress
          that.http_url2 = res.data.dataSource.list[1].videoAddress
          that.http_url3 = res.data.dataSource.list[2].videoAddress
          that.http_url4 = res.data.dataSource.list[3].videoAddress
          that.http_url5= res.data.dataSource.list[4].videoAddress
          that.http_url6= res.data.dataSource.list[5].videoAddress
        }
      })
    }
  }
}
</script>
<style>
body{
    margin: 0px;
}
/* .dv-border-box-1 {
    /* position: relative; */
    /* width: 500px;
    height: 320px; */
    /* margin-bottom:  */
/* } * */
.backgtttrrreeeee{
  background-image:url(./img/background.png)!important;width: 1920px;height: 1080px;
}
</style>