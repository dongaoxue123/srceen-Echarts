<template>
  <div>
    <div class="backimg">
      <div style="display: flex;justify-content: space-between;align-items: center;padding-top: 10px;padding-top: 12px;">
        <!-- <dv-decoration-11 @click="tohome" style="width:546px;height:106px;color:#237df5;font-size:40px;font-weight:700;letter-spacing:8px"> -->
          <dv-decoration-8 style="width:650px;height:50px;" />
          <div @click="tohome" style="width:546px;color:#237df5;font-size:40px;font-weight:700;letter-spacing:8px">
            CF数据采集监控平台
          </div>
        <dv-decoration-8 :reverse="true" style="width:650px;height:50px;" />
    </div>
    <div style="display: flex;justify-content: center;align-items: center;">
      <img src="./img/微信截图_20200326141835.png" alt="">
    </div>
       <div style="display: flex;justify-content: flex-start;align-items: center;margin-top:55px;margin-left:150px">
         <div style="color:#03acff;font-size:30px;font-weight:600;">栋舍</div>
        <select v-model="select" @change="opchange"  style="background:linear-gradient(to right,#161273,#261fad);
        font-size:22px;width:426px;height:50px;margin-left:20px;color:#fff;border:0px;text-indent: 10px;">
          <option style="background-color:#161273" v-for="(index,item) in caplist" :value ="index">{{index.name}}</option>
        </select>
       <div @click="tt" style="color:#0392ca;margin-left:26px;font-size:24px;font-weight: 600;">{{gettime}}</div>
      </div>
      <div style="display: flex;justify-content: space-between;align-items: center;padding-left:49px;padding-top:49px;padding-right:49px;padding-bottom:49px;">
        <div>
          <div style="width:590px;height:286px;margin-left:30px;border: 1px solid #235fa7;">
            <h4  style="color:#00afff;font-size:24px;font-weight:600;margin-top:6px;position: relative;top: 4px;">采集信息</h4>
            <table style="border:1px solid #000bf1;color:#8db6d4;width:538px;height:160px;position: relative;top: 4px;left: 24px;">
              <tr>
                <td style="border-right:1px solid #000bf1;border-bottom:1px solid #000bf1;">
                  <div style="font-size: 20px;">{{pigNumber}}</div>
                  <div style="font-size: 20px;">猪只头数</div>
                </td>
                <td style="border-right:1px solid #000bf1;border-bottom:1px solid #000bf1;">
                  <div style="font-size: 20px;">{{collectDays}}天</div>
                  <div style="font-size: 20px;">采集天数</div>
                </td>
                <td style="border-bottom:1px solid #000bf1;">
                  <div style="font-size: 20px;">{{deviceNumber}}</div>
                  <div style="font-size: 20px;">采集设备</div>
                </td>
              </tr>
              <tr>
                <td style="border-right:1px solid #000bf1;">
                  <div style="font-size: 20px;">{{noise}}%</div>
                  <div style="font-size: 20px;">栋舍噪音</div>
                </td>
                <td style="border-right:1px solid #000bf1;">
                  <div style="font-size: 20px;">{{ammonia}}ppm</div>
                  <div style="font-size: 20px;">氨气浓度</div>
                </td>
                <td>
                  <div style="font-size: 20px;">{{temperature}}℃</div>
                  <div style="font-size: 20px;">栋舍温度</div>
                </td>
              </tr>
            </table>
          </div>
          <div style="width:588px;height:450px;margin-left:30px;margin-top:20px;border: 1px solid #235fa7;">
            <h4  style="color:#00afff;font-size:24px;font-weight:600;margin-top:6px;position: relative;top: 4px;">采集对象</h4>
            <!-- <el-tabs v-model="activeName" style="background: #101239; border: 0;border: 1px solid #261fad;height: 450px;" type="border-card" @tab-click="handleClick">
              <el-tab-pane style="color: #fff;" label="母猪体重" name="first">
                <dv-scroll-board :config="configpig1" style="background: #101239;width:590pxpx;height:390px" />
              </el-tab-pane>
              <el-tab-pane style="color: #fff;" label="母猪背膘" name="second">
                <dv-scroll-board :config="configpig2" style="width:550pxpx;height:400px" />
              </el-tab-pane>
              <el-tab-pane style="color: #fff;" label="育肥猪单体" name="third"> -->
                <dv-scroll-board :config="configpig1" style="width:550pxpx;height:380px;margin-left:20px" />
              <!-- </el-tab-pane>
            </el-tabs> -->
          </div>
        </div>
         <div dur= 600 style="width:1020px;height:748px;margin-left:60px;overflow: hidden;margin-top: 10px;padding: 5px;border: 1px solid #235fa7;">
          <div :style="isshowonepage">
            <video
            id="myPlayer"
            style="width: 500px;height: 370px;"
            :src="http_url"
            controls playsinline webkit-playsinline autoplay=true>
             </video>
             <video
             id="myPlayer1"
             style="width: 500px;height: 370px;"
             :src="http_url2"
             controls playsinline webkit-playsinline autoplay=true>
              </video>
              <video
              id="myPlayer2"
              style="width: 500px;height: 370px;"
              :src="http_url3"
              controls playsinline webkit-playsinline autoplay=true>
               </video>
              <video
              id="myPlayer3"
              style="width: 500px;height: 370px;"
              :src="http_url4"
              controls playsinline webkit-playsinline autoplay=true>
              </video>
          </div>
        </div>  
      </div>
      <div v-if="ispagebutton">
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
  import Video from 'video.js'
  import 'video.js/dist/video-js.css'
  import { doGet }  from '../api/index.js'
  import ezuikit from './ezuikit.js'
  import 'uikit/dist/css/uikit.min.css'
  import { scrollBoard } from '@jiaminghi/data-view'
  import ElementUI from 'element-ui'
  Vue.use(ElementUI)
  Vue.use(dataV)
  import './jquery.min.js'
  import '../../node_modules/echarts/map/js/china.js'
  import { API_HOST }  from '../api/api.js'
  export default {
    name: "videoMonitoring",
    inject: ["reload"],
    data() {
      return {
        gettime:'',
        http_url:'',
        configpig1:{},
        configpig2:{},
        configpig3:{},
        http_url2:'',
        http_url3:'',
        http_url4:'',
        message:'加载中...',
        player:"",
        farmName:'',
        option:{},
        ammonia:0,
        collectDays:0,
        deviceNumber:0,
        noise:0,
        pigNumber:0,
        temperature:0,
        player:'',
        caplist:[],
        videolist:[],
        showvideo:false,
        datalist:[],
        date:[],
        changid:'',
        activeName: localStorage.pigselect,
        tablelist:[],
        namelist:[],
        relelist:[],
        tablelist1:[],
        namelist1:[],
        relelist1:[],
        tablelist2:[],
        namelist2:[],
        relelist2:[],
        pagevideo:false,
        onevideo:true,
        twovideo:false,
        pagename:'下一页',
        videolenght:0,
        ispagebutton:false,
        pagevideo1:false,
        pageD:1,
        ifshownextpage:'display: flex;justify-content:center;width:1020px;height:760px;flex-wrap: wrap;margin-top:0px',
        isshowonepage:'display: flex;justify-content:center;width:1020px;height:760px;flex-wrap: wrap;margin-top:0px;overflow: hidden;'
      }
    },
    updated () {
      if(this.rtmp_url!=""){
        //如果在mounted中声明，直播地址还未取到，导致视频不显示。所以放在了这里
        this.player = new EZUIPlayer('myPlayer')
        this.player = new EZUIPlayer('myPlayer1')
        this.player = new EZUIPlayer('myPlayer2')
        this.player = new EZUIPlayer('myPlayer3')
      }
    },
    // beforeCreate() {
    //   if(this.rtmp_url!=""){
    //     //如果在mounted中声明，直播地址还未取到，导致视频不显示。所以放在了这里
    //     this.player = new EZUIPlayer('myPlayer')
    //     this.player = new EZUIPlayer('myPlayer1')
    //     this.player = new EZUIPlayer('myPlayer2')
    //     this.player = new EZUIPlayer('myPlayer3')
    //   }
    // },
    mounted() {
      // if(this.rtmp_url!=""){
      //   //如果在mounted中声明，直播地址还未取到，导致视频不显示。所以放在了这里
      //   this.player = new EZUIPlayer('myPlayer')
      //   this.player = new EZUIPlayer('myPlayer1')
      //   this.player = new EZUIPlayer('myPlayer2')
      //   this.player = new EZUIPlayer('myPlayer3')
      // }
      if (localStorage.pigselect == 0) {
        localStorage.pigselect = 'first'
        this.activeName = localStorage.pigselect
      } else if(localStorage.pigselect == 1){
        localStorage.pigselect = 'second'
        this.activeName = localStorage.pigselect
      }else if(localStorage.pigselect == 2){
        localStorage.pigselect = 'third'
        this.activeName = localStorage.pigselect
      }
      this.activeName = localStorage.pigselect
      this.relelist = []
      this.namelist = []
      this.tablelist = []
      this.relelist1 = []
      this.namelist1 = []
      this.tablelist1 = []
      this.farmName = localStorage.farmName
      this.videoOpen();
      var a =localStorage.getItem('select')
      var b = JSON.parse(a)
      if(!b){
  
      } else {
        this.select = b
      }
      try{
        window.setInterval(() => {
        setTimeout(this.getTime(), 0)
      }, 1000)
      } catch(err) {
        console.log('时间')
      }
      doGet(`${API_HOST}/api/system/house/getHouseListPage?pageNum=0&pageSize=0`,{farmId:localStorage.farmId,authToken:localStorage.authToken}).then(res => {
        if (res) {
          this.caplist = res.data.dataSource.list
          var a = localStorage.getItem('select')
          var b = JSON.parse(a)
          if (!b) {
            this.select = res.data.dataSource.list[0]
          } else{
            this.select = b
          }
          this.namelist=[]
          this.relelist1=[]
          this.namelist1=[]
          this.tablelist1=[]
          if(this.select.type == '00021') {
          doGet(`${API_HOST}/api/pig/AcquisitionResult/getAcquisitionResultList?page=1&limit=10`,
          {farmId:localStorage.farmId,houseId:this.select.id,authToken:localStorage.authToken}).then(res => {
            if (res) {
              this.tablelist = res.data.dataSource.list
              this.tablelist.forEach(item => {
                this.namelist = [item.fieldCode]
                this.namelist.push (item.pigsNumber)
                this.namelist.push (item.acquisitionTypeName)
                if (item.acquisitionType == '00085') {
                  if (item.backfatData == ''|| item.backfatData==0) {
                    this.namelist.push ('')
                  } else{
                    this.namelist.push (item.backfatData+'mm')
                  }
                } else {
                  if (item.weightData==''||item.weightData== 0) {
                    // console.log('222')
                    this.namelist.push ('')
                  }
                  else{
                    // console.log(item.weightData)
                    item.weightData == ''?this.namelist.push (item.weightData):this.namelist.push (item.weightData+'KG')
                  // this.namelist.push (item.weightData+'KG')
                }
                }
                
                this.relelist.push(this.namelist)
                this.configpig1 = {
                  header: ['栏位编号','猪只编号', '采集类型', '体重/背膘'],
                  data: this.relelist,
                  index: true,
                  columnWidth: [70],
                  align: ['center']
                }
              })
            }
          })
        }
        if(this.select.type == '00059') {
          doGet(`${API_HOST}/api/pig/AcquisitionResult/getFattenAcquisitionResultList?page=1&limit=10`,
          {farmId:localStorage.farmId,houseId:this.select.id,authToken:localStorage.authToken}).then(res => {
            if (res) {
              this.tablelist = res.data.dataSource.list
              this.tablelist.forEach(item => {
                this.namelist = [item.fieldCode]
                this.namelist.push (item.pigsNumber)
                this.namelist.push (item.acquisitionTypeName)
                if (item.acquisitionType == '00085') {
                  if (item.backfatData == ''|| item.backfatData==0) {
                    this.namelist.push ('')
                  } else{
                    this.namelist.push (item.backfatData+'mm')
                  }
                } else {
                  if (item.weightData==''||item.weightData== 0) {
                    // console.log('222')
                    this.namelist.push ('')
                  }
                  else{
                    // console.log(item.weightData)
                    item.weightData == ''?this.namelist.push (item.weightData):this.namelist.push (item.weightData+'KG')
                  // this.namelist.push (item.weightData+'KG')
                }
                }
                
                this.relelist.push(this.namelist)
                this.configpig1 = {
                  header: ['栏位编号','猪只编号', '采集类型', '体重/背膘'],
                  data: this.relelist,
                  index: true,
                  columnWidth: [70],
                  align: ['center']
                }
              })
            }
          })
        }
          // this.relelist1 = []
          // this.namelist1 = []
          // this.tablelist1 = []
          // doGet(`${API_HOST}/api/pig/AcquisitionResult/getAcquisitionResultList?page=1&limit=10`,
          // {farmId:localStorage.farmId,houseId:this.select.id,acquisitionType:'00085',authToken:localStorage.authToken}).then(res => {
          //   if (res) {
          //     this.tablelist1 = res.data.dataSource.list
          //     this.tablelist1.forEach(item => {
          //       this.namelist1 = [item.acquisitionDeviceName]
          //       this.namelist1.push (item.pigsNumber)
          //       this.namelist1.push (item.weightData)
          //       this.namelist1.push (item.createTime)
          //       this.relelist1.push(this.namelist1)
          //       this.configpig2 = {
          //         header: ['栏位信息','猪只编号', '采集类型', '体重(KG)'],
          //         data: this.relelist1,
          //         index: true,
          //         columnWidth: [80],
          //         align: ['center']
          //       }
          //     })
          //   }
          // })
          // doGet(`${API_HOST}/api/pig/AcquisitionResult/getAcquisitionResultList?page=1&limit=10`,
          //   {farmId:localStorage.farmId,houseId:this.houseId,acquisitionType:'00084',authToken:localStorage.authToken}).then(res => {
          //   if (res) {
          //     this.tablelist2 = res.data.dataSource.list
          //     this.tablelist2.forEach(item => {
          //       this.namelist2 = [item.acquisitionDeviceName]
          //       this.namelist2.push (item.pigsNumber)
          //       this.namelist2.push (item.weightData)
          //       this.namelist2.push (item.createTime)
          //       this.relelist2.push(this.namelist2)
          //       this.configpig3 = {
          //         header: ['栏位信息','猪只编号', '采集类型', '体重(KG)'],
          //         data: this.relelist2,
          //         index: true,
          //         columnWidth: [80],
          //         align: ['center']
          //       }
          //     })
          //   }
          // })
          doGet(`${API_HOST}/api/system/device/getCFMonitorInfo`,{houseId:this.select.id,authToken:localStorage.authToken}).then(res => {
            if (res) {
              this.ammonia = res.data.dataSource.list[0].ammonia
              this.collectDays = res.data.dataSource.list[0].collectDays
              this.deviceNumber = res.data.dataSource.list[0].deviceNumber
              this.noise = res.data.dataSource.list[0].noise
              this.pigNumber = res.data.dataSource.list[0].pigNumber
              this.temperature = res.data.dataSource.list[0].temperature
            }
          })
          doGet(`${API_HOST}/api/system/device/getCFMonitor`,{houseId:this.select.id,authToken:localStorage.authToken}).then(res => {
            if (res) {
              console.log(res.data.dataSource.list[0].videoAddress)
              const that = this
              if(!localStorage.pageD){
                localStorage.pageD = 1
              }
              if (res.data.dataSource.list.length > 4) {
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
              // console.log(res.data.dataSource.list.length)
              let min = (localStorage.pageD-1)*4
              let max = localStorage.pageD*4-1
              // console.log(max)
              console.log(res.data.dataSource.list.length)
              console.log(max)
              if (res.data.dataSource.list.length<max+1) {
                // that.http_url = res.data.dataSource.list[min].videoAddress
                // that.http_url2 = res.data.dataSource.list[min+1].videoAddress
                // that.http_url3 = res.data.dataSource.list[min+2].videoAddress
                // that.http_url4 = res.data.dataSource.list[min+3].videoAddress
                // this.ispagebutton=true
                console.log('ceshih')
                this.pagevideo=false
              } else {
                this.pagevideo=true
              }
              if (res.data.dataSource.list.length>min) {
                console.log('qqqq')
                that.http_url = res.data.dataSource.list[min].videoAddress
                that.http_url2 = res.data.dataSource.list[min+1].videoAddress
                that.http_url3 = res.data.dataSource.list[min+2].videoAddress
                that.http_url4 = res.data.dataSource.list[min+3].videoAddress
              }
              // if (localStorage.pageD==1) {
              //   if (res.data.dataSource.list.length>8) {
              //    this.ispagebutton=true
              //    this.pagevideo=true
              //    this.pagevideo1=false
              //  } else {
              //   this.ispagebutton=true
              //   //  this.pagevideo=true
              //   console.log('显示上一页')
              //    this.pagevideo=false
              //    this.pagevideo1=true
              //  }
              //  that.http_url = res.data.dataSource.list[4].videoAddress
              //  that.http_url2 = res.data.dataSource.list[5].videoAddress
              //  that.http_url3 = res.data.dataSource.list[6].videoAddress
              //  that.http_url4 = res.data.dataSource.list[7].videoAddress
              // //  console.log(res.data.dataSource.list.length)
              //  }
              // that.http_url = res.data.dataSource.list[0].videoAddress
              // that.http_url2 = res.data.dataSource.list[1].videoAddress
              // that.http_url3 = res.data.dataSource.list[2].videoAddress
              // that.http_url4 = res.data.dataSource.list[3].videoAddress
                  if (res.data.dataSource.list.length>4) {
                this.pagevideo = true
                this.pagevideo1 = false
              }
          //     res.data.dataSource.list.forEach(function(val,arr){
          //     that.videolist.push(val.videoAddress)
          // });
            }
          })
        }
      })
    },
    methods:{
      handleClick(tab, event) {
      // this.relelist1=[]
      //   this.namelist1=[]
      //   this.tablelist1=[]
      //   this.relelist2=[]
      //   this.namelist2=[]
      //   this.tablelist2=[]
      //   localStorage['pigselect'] = tab.$vnode.componentInstance.index
      //   this.$router.push('/emptyPage')
      // if (tab.$vnode.componentInstance.index == '1') {
      //   this.activeName='second'
      //   // console.log(this.activeName)
      //   doGet(`${API_HOST}/api/pig/AcquisitionResult/getAcquisitionResultList?page=1&limit=10`,
      //   {farmId:localStorage.farmId,houseId:this.houseId,acquisitionType:'00085',authToken:localStorage.authToken}).then(res => {
      //     if (res) {
      //       // console.log(res)
      //       this.tablelist1 = res.data.dataSource.list
      //       this.tablelist1.forEach(item => {
      //         this.namelist1 = [item.pigsNumber]
      //         // this.namelist1.push (item.pigsNumber)
      //         this.namelist1.push (item.weightData)
      //         this.namelist1.push (item.createTime)
      //         // this.namelist1.push (item.fieldCode)
      //         this.relelist1.push(this.namelist1)
      //         this.configpig2 = {
      //           header: ['猪只编号', '体重(KG)', '时间'],
      //           data: this.relelist1,
      //           index: true,
      //           columnWidth: [80],
      //           align: ['center']
      //         }
      //       })
      //     }
      //   })
      // }
      // if (tab.$vnode.componentInstance.index == '2') {
      //   this.activeName='third'
      //   doGet(`${API_HOST}/api/pig/AcquisitionResult/getAcquisitionResultList?page=1&limit=10`,
      //   {farmId:localStorage.farmId,houseId:this.houseId,acquisitionType:'00084',authToken:localStorage.authToken}).then(res => {
      //     if (res) {
      //       // console.log(res)
      //       this.tablelist2 = res.data.dataSource.list
      //       this.tablelist2.forEach(item => {
      //         this.namelist2 = [item.pigsNumber]
      //         this.namelist2.push (item.weightData)
      //         this.namelist2.push (item.createTime)
      //         this.relelist2.push(this.namelist2)
      //         this.configpig3 = {
      //           header: ['猪只编号', '体重(KG)', '时间'],
      //           data: this.relelist2,
      //           index: true,
      //           columnWidth: [80],
      //           align: ['center']
      //         }
      //       })
      //     }
      //   })
      // }
    },
      tt(){
        this.$router.push('/emptyPage')
      },
      tohome(){
        // console.log(111)
        this.$router.push({path: '/cf'})},
      videoOpen () {
      },
      todonepage(){
        // this.ifshownextpage = 'display: flex;justify-content:center;width:1020px;height:760px;flex-wrap: wrap;margin-top:0px;overflow: hidden;'
        // this.isshowonepage= 'display: flex;justify-content:center;width:1020px;height:760px;flex-wrap: wrap;margin-top:0px;overflow: hidden;'
        // this.pagevideo = true
        this.pageD-1
        localStorage['pageD'] = this.pageD
        this.$router.push('/emptyPage')
      },
      tonextpage(){
        this.pageD = ++this.pageD
        localStorage['pageD'] = this.pageD
        this.$router.push('/emptyPage')
      },
      opchange(){
        // console.log(this.select)
        localStorage.pageD=1
        this.houseId = this.select.id
        localStorage['selectId'] = this.select.id
        localStorage.setItem('select', JSON.stringify(this.select))
        this.tableData=[]
        this.videolist = []
        this.http_url = ''
        this.http_url1 = ''
        this.http_url2 = ''
        this.http_url3 = ''
        this.relelist=[]
        this.namelist=[]
        this.tablelist=[]
        this.relelist1=[]
        this.namelist1=[]
        this.tablelist1=[]
        this.$router.push('/emptyPage')
        if(this.select.type == '00059'){
          doGet(`${API_HOST}/api/pig/AcquisitionResult/getFattenAcquisitionResultList?page=1&limit=10`,
        {farmId:localStorage.farmId,houseId:this.houseId,authToken:localStorage.authToken}).then(res => {
            if (res) {
              this.tablelist = res.data.dataSource.list
              this.tablelist.forEach(item => {
              this.namelist = [item.pigsNumber]
              this.namelist.push (item.weightData)
              this.namelist.push (item.createTime)
              this.relelist.push(this.namelist)
              this.configpig1 = {
                  header: ['猪只编号', '体重(KG)', '时间'],
                  data: this.relelist,
                  index: true,
                  columnWidth: [80],
                  align: ['center']
                }
              })
            }
          })
        }
        if(this.select.type == '00021') {
          doGet(`${API_HOST}/api/pig/AcquisitionResult/getAcquisitionResultList?page=1&limit=10`,
        {farmId:localStorage.farmId,houseId:this.houseId,authToken:localStorage.authToken}).then(res => {
            if (res) {
              this.tablelist = res.data.dataSource.list
              this.tablelist.forEach(item => {
              this.namelist = [item.pigsNumber]
              this.namelist.push (item.weightData)
              this.namelist.push (item.createTime)
              this.relelist.push(this.namelist)
              this.configpig1 = {
                  header: ['猪只编号', '体重(KG)', '时间'],
                  data: this.relelist,
                  index: true,
                  columnWidth: [80],
                  align: ['center']
                }
              })
            }
          })
        }
        
      // doGet(`${API_HOST}/api/pig/AcquisitionResult/getAcquisitionResultList?page=1&limit=10`,
      //   {farmId:localStorage.farmId,houseId:this.houseId,acquisitionType:'00084',authToken:localStorage.authToken}).then(res => {
      //       if (res) {
      //         this.tablelist2 = res.data.dataSource.list
      //         this.tablelist2.forEach(item => {
      //           this.namelist2 = [item.pigsNumber]
      //           this.namelist2.push (item.weightData)
      //           this.namelist2.push (item.createTime)
      //           this.relelist2.push(this.namelist2)
      //           this.configpig3={
      //             header: ['猪只编号', '体重(KG)', '时间'],
      //             data: this.relelist2,
      //             index: true,
      //             columnWidth: [80],
      //             align: ['center']
      //           }
      //         })
      //       }
      //     })
      //   doGet(`${API_HOST}/api/pig/AcquisitionResult/getAcquisitionResultList?page=1&limit=10`,
      //   {farmId:localStorage.farmId,houseId:this.houseId,authToken:localStorage.authToken}).then(res => {
      //       if (res) {
      //         // console.log(res)
      //         this.tablelist1 = res.data.dataSource.list
      //         this.tablelist1.forEach(item => {
      //           this.namelist1 = [item.pigsNumber]
      //           this.namelist1.push (item.weightData)
      //           this.namelist1.push (item.createTime)
      //           this.relelist1.push(this.namelist1)
      //           this.configpig2 = {
      //             header: ['猪只编号', '体重(KG)', '时间'],
      //             data: this.relelist1,
      //             index: true,
      //             columnWidth: [80],
      //             align: ['center']
      //           }
      //         })
      //       }
      //     })
          doGet(`${API_HOST}/api/system/device/getCFMonitorInfo`,{houseId:this.houseId,authToken:localStorage.authToken}).then(res => {
            if (res) {
              this.ammonia = res.data.dataSource.list[0].ammonia
              this.collectDays = res.data.dataSource.list[0].collectDays
              this.deviceNumber = res.data.dataSource.list[0].deviceNumber
              this.noise = res.data.dataSource.list[0].noise
              this.pigNumber = res.data.dataSource.list[0].pigNumber
              this.temperature = res.data.dataSource.list[0].temperature
            }
          })
          // doGet(`${API_HOST}/api/pig/weight/getWeightBatchList`,{house_id:this.houseId,farm_id:this.select.farm_id,group_id:this.select.group_id,authToken:localStorage.authToken}).then(res => {
          //   if (res) {
          //     this.datalist = this.datalist.concat(res.data.dataSource.list[0].data);
          //     this.datalist=this.datalist.map(Number)
          //     this.datalist = this.datalist.slice(-6)
          //     this.date= this.date.concat(res.data.dataSource.list[0].date)
          //     this.option = {
          //       title: {
          //         text: '采集对象生长情况',
          //           style: {
          //             fill: '#03acff',
          //             fontSize: 24,
          //         }
          //       },
          //       xAxis: {
          //         name: '近一周',
          //         data: ['6', '5', '4', '3', '2', '1', '0'],
          //           nameTextStyle: {
          //             fill: '#fff',
          //             fontSize: 15
          //           },
          //         linePoint:{
          //           show:false
          //         },
          //         axisLine:{
          //           style: {
          //             stroke: '#03acff',
          //             lineWidth: 1
          //           }
          //         },
          //         axisTick:{
          //           style: {
          //             stroke: '#03acff',
          //             lineWidth: 1
          //           }
          //         },
          //         axisLabel:{
          //           style: {
          //             fill: '#03acff',
          //             fontSize: 15,
          //             rotate: 0
          //           }
          //         }
          //       },
          //       yAxis: {
          //         name: 'kg',
          //         linePoint:{
          //         show:false
          //       },
          //       nameTextStyle: {
          //             fill: '#fff',
          //             fontSize: 15
          //           },
          //       splitLine:{show: false},
          //       data: 'value',
          //             axisLine:{
          //           style: {
          //           stroke: '#03acff',
          //           lineWidth: 1
          //         }},
          //         axisTick:{
          //           style: {
          //           stroke: '#03acff',
          //           lineWidth: 1
          //           }
          //         },
          //         axisLabel:{
          //           style: {
          //             fill: '#03acff',
          //             fontSize: 15,
          //             rotate: 0
          //           }
          //       }
          //     },
          //     series: [
          //       {
          //         data: this.datalist,
          //         type: 'line',
          //         lineArea: {
          //           show: true,
          //           gradient: ['rgba(55, 162, 218, 0.6)', 'rgba(55, 162, 218, 0)'],
          //           style: {
          //     opacity: 0.5
          //   }
          //         },
          //         linePoint:{
          //       show:false
          //     },
          //       }
          //     ]
          //   }
          //   }
          // })
          doGet(`${API_HOST}/api/system/device/getCFMonitor`,{houseId:this.houseId,authToken:localStorage.authToken}).then(res => {
            if (res) {
              const that = this
              that.http_url = res.data.dataSource.list[0].videoAddress
              that.http_url2 = res.data.dataSource.list[1].videoAddress
              that.http_url3 = res.data.dataSource.list[2].videoAddress
              that.http_url4 = res.data.dataSource.list[3].videoAddress
              localStorage['http_url'] = that.http_url
              localStorage['http_url2'] = that.http_url2 
              localStorage['http_url3'] = that.http_url3 
              localStorage['http_url4'] = that.http_url4
              res.data.dataSource.list.forEach(function(val,arr){
                that.videolist.push(val.videoAddress)
              })
            }
          })
      },
      getTime:function(){
        var now = new Date();
        var year = now.getFullYear();
        var month = now.getMonth() + 1;
        var day = now.getDate();
        var hours = now.getHours();
        var minutes = now.getMinutes();  
        var seconds = now.getSeconds();  
        this.gettime= "" + year + "年" + month + "月" + day + "日 " + hours + ":" + minutes + ":" + seconds + ""; 
      }
    }
  }
  </script>
  <style>
  body{
      margin: 0px;
  }
  .el-tabs__item {
      padding: 0 20px;
      height: 40px;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      line-height: 40px;
      display: inline-block;
      list-style: none;
      font-size: 14px;
      font-weight: 500;
      color: #fff;
      position: relative;
  }
  .dv-scroll-board {
      position: relative;
      width: 550px;
      height: 400px;
      color: #fff;
      margin-left: 4px;
  }
  .el-tabs--border-card>.el-tabs__header {
      background-color: #101239;
      border-bottom: 1px solid #E4E7ED;
      margin: 0;
  }
  .el-tabs--border-card>.el-tabs__header .el-tabs__item.is-active {
      color: #fff;
      background-color: #261fad;
      border-right-color: #DCDFE6;
      border-left-color: #DCDFE6;
  }
  .backimg{
    background-image: url(./img/background.png);
  }
  </style>