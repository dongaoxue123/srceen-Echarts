<template>
  <div class="backimg" style="margin:0;padding:0;">
  <!-- <dv-full-screen-container> -->
    <div style="display: flex;justify-content: space-between;align-items: center;padding-top: 10px;padding-top: 12px;">
        <!-- <dv-decoration-11 @click="tohome" style="width:546px;height:106px;color:#237df5;font-size:40px;font-weight:700;letter-spacing:8px"> -->
          <dv-decoration-8 style="width:650px;height:50px;" />
          <div @contextmenu.prevent="showright" style="width:546px;color:#237df5;font-size:40px;font-weight:700;letter-spacing:8px">
            CF数据采集监控平台
          </div>
          <!-- <div v-if="showrightt" style="background: #261fad;">退出</div> -->
        <!-- </dv-decoration-11> -->
        <dv-decoration-8 :reverse="true" style="width:650px;height:50px;" />
        <!-- <img src="../pages/img/未标题-1.jpg" alt=""> -->
    </div>
    <div style="display: flex;justify-content: center;align-items: center;">
      <img src="../pages/img/微信截图_20200326141835.png" alt="">
    </div>
    <div style="display: flex;justify-content: space-between;align-items: center;margin-top:10px;margin-left:150px">
    <div style="display: flex;justify-content: flex-start;align-items: center;">
      <div style="color:#03acff;font-size:30px;font-weight:600;">猪场</div>
      <select v-model="select" @change="opchange" style="background:linear-gradient(to right,#161273,#261fad);width:426px;height:50px;margin-left:20px;color:#fff;text-indent: 10px;border:0px;font-size: 22px;">
        <option style="background-color:#161273;font-size: 18px" v-for="(index,item) in caplist" :value ="index.id">{{index.name}}</option>
      <!-- <option value ="saab">Saab</option> -->
      </select>
      <div @click="tt" style="color:#0392ca;margin-left:15px;font-size:24px;font-weight:600;letter-spacing:3px">{{gettime}}</div>
    </div>
    <dv-scroll-board :config="configrunlist" @click="clicktable" style="width: 420px;height: 180px;" />
      <el-dialog
        title=""
        :visible.sync="dialogVisible"
        style="font-weight: 600;font-size: 24px;color: #fff;"
        width="30%"
        show-close = false
        top = 35vh>
      <div style="background: #261fad;">
      <div style="padding: 10px;display: flex;justify-content: space-between;align-items: center; font-size: 16px;font-weight: 600;background: #161273;color: #acdcf7;">
        <div>设备信息：{{acquisitionDeviceName}}</div><div>采集设备:{{errorMsg}}</div></div>
      <div style="padding: 10px;display: flex;justify-content: flex-start;align-items: center;font-size: 16px;font-weight: 600;background: #161273;color: #acdcf7;">
        <div>信息来源: &nbsp; </div><div>{{informationSources}}</div></div>
      <div style="padding: 10px;display: flex;justify-content: flex-start;align-items: center;font-size: 16px;font-weight: 600;background: #161273;color: #acdcf7;">
        <div>问题栋舍: &nbsp; </div><div>{{houseName}}</div></div>
      <!-- <div style="padding: 10px;display: flex;justify-content: space-between;align-items: center;"><div>联络人</div><div>xxx123456678</div></div> -->
    </div>
      <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">关闭</el-button>
    <!-- <el-button type="primary" @click="dialogVisible = false">确 定</el-button> -->
  </span>
</el-dialog>
   </div>
   <div style="display: flex;justify-content: flex-start;align-items: center;margin-top:-20px;margin-left:150px">
     <div style="color:#03acff;font-size:24px;font-weight:600;">数据采集概括：</div>
   </div>
   <div style="display: flex;justify-content:space-between;align-items: center;flex-wrap:nowarp;padding-left:150px;padding-right:150px;padding-top:10px">
      <dv-charts style="width:200px;height:200px;" :option="optionround1" />
      <dv-charts style="width:200px;height:200px;" :option="optionround2" />
      <dv-charts style="width:200px;height:200px;" :option="optionround3" />
      <dv-charts style="width:200px;height:200px;" :option="optionround4" />
      <dv-charts style="width:200px;height:200px;" :option="optionround5" />
   </div>
    <div style="display: flex;justify-content:space-between;align-items: center;padding-left:150px;padding-right:150px;padding-top:9px;">
      <div style="color:#2b7fef;font-size:24px;margin-left:18px;">采集设备在线</div>
      <div style="color:#2b7fef;font-size:24px;margin-left:22px">母猪采集量(GB)</div>
      <div style="color:#2b7fef;font-size:24px;margin-left:10px">肥猪采集量(GB)</div>
      <div style="color:#2b7fef;font-size:24px;margin-left:10px;margin-right:25px;">可用图片占比</div>
      <div style="color:#2b7fef;font-size:24px;margin-right:20px;">模型匹配进度</div>
    </div>
   <div style="display: flex;justify-content:space-between;align-items: center;padding-left:50px;padding-right:50px;padding-top:21px;padding-bottom:49px;margin-top: 40px;">
    <div  style="width:600px;height:400px;border: 1px solid #235fa7;margin-right: 10px;">
      <!-- <dv-charts style="width:550px;height:400px;margin-left:20px" :option="optiondata" /> -->
        <!-- <dv-charts style="width:340px;height:300px;margin-left:20px" :option="option" /> -->
        <div style="color:#00afff;margin:0px;margin-top:8px;;font-size:24px;padding:5px;">设备数量</div>
        <dv-scroll-ranking-board :config="textfirstlist" style="width:530px;height:360px;margin-left:20px" />
      <!-- <dv-charts style="width:550px;height:400px;margin-left:20px" :option="option" /> -->
    </div>
    <div  style="width:600px;height:400px;border: 1px solid #235fa7;margin-right: 10px;">
      <div style="display: flex;justify-content:space-between;align-items: center;padding-left:14px;padding-right:14px;">
        <span style="color:#00afff;margin:0px;margin-top:8px;;font-size:24px">采集场景监控</span>
        <div @click="tovideo" style="color:#00afff;margin:0px;margin-top:8px;;font-size:24px">更多</div>
      </div>
      <video
        id="myPlayer"
        style="width:570px;height:340px;"
        :src="http_url"
        controls playsinline webkit-playsinline autoplay>
        <!-- <source style="width: 400px;height: 220px;" type="application/x-mpegURL" :src="http_url"/> -->
        <!-- <source :src="rtmp_url"/> -->
        <!-- {{index.img}} -->
      </video>
    </div>
       <div  style="width:600px;height:400px;border: 1px solid #235fa7;">
        <div style="display: flex;justify-content:space-between;align-items: center;padding-left:14px;padding-right:14px;">
          <span style="color:#00afff;margin:0px;margin-top:8px;;font-size:24px">采集图像监控</span>
          <div @click="totext" style="color:#00afff;margin:0px;margin-top:8px;;font-size:24px">更多</div>
        </div>
        <div v-if="isimgde" style="width:580px;height:350px;background: #000;margin-left: 10px;margin: 0 auto;color: #fff;">暂无图片</div>
        <img v-if="!isimgde" style="width:580px;height:350px;background: #101239;" :src="imgone">
    </div>
   </div>
</div>
</template>
<script>
import Vue from 'vue'
import echarts from "echarts"
import dataV from '@jiaminghi/data-view'
import { doGet }  from '../api/index.js'
import { doPost }  from '../api/index.js'
import { scrollBoard } from '@jiaminghi/data-view'
Vue.use(dataV)
import '../../node_modules/echarts/map/js/china.js'
import Video from 'video.js'
import 'video.js/dist/video-js.css'
import ezuikit from '../pages/ezuikit.js'
import 'uikit/dist/css/uikit.min.css'
import '../pages/jquery.min.js'
import { API_HOST }  from '../api/api.js'
export default {
  name: "echarts",
  props: ["userJson"],
  data() {
    return {
      dialogVisible:false,
      farmName:'',
      caplist:[],
      roundlist1:[],
      roundlist2:[],
      roundlist3:[],
      roundlist4:[],
      roundlist5:[],
      optiondata:{},
      datalist:[],
      date:[],
      farmId:0,
      select:'1',
      houseId:'',
      gettime:'',
      chart: null,
      showtable:true,
      congig:{},
      configrunlist:{},
      optionround:{},
      optionround1:{},
      optionround2:{},
      optionround3:{},
      optionround4:{},
      fenshu:0,
      roundlist1_1:[],
      fenshulist:[],
      relelist:[],
      option:{},
      option1:{},
      option2: {},
      configround:{},
      namelist:[],
      cardlist:[],
      code:0,
      listsigid:0,
      informationSources:'',
      acquisitionDeviceName:'',
      houseName:'',
      http_url:'',
      textfirstlist:{},
      nulltestlist:[],
      errorMsg:'',
      imgone:'./background.png',
      acquisitionDeviceCode:'',
      isimgde:false,
      showrightt:false
    }
  },
  updated() {
   if(this.rtmp_url!=""){
    //如果在mounted中声明，直播地址还未取到，导致视频不显示。所以放在了这里
    this.player = new EZUIPlayer('myPlayer')
   }
  },
  mounted() {
    // this.imgone=''
    this.isimgde = true
    // console.log(this.imgone)
    // console.log(localStorage.authToken)
    if (!localStorage.authToken) {
      this.$router.push({path: '/login'})
    }
    try{
      window.setInterval(() => {
      setTimeout(  this.getTime() , 0)
    }, 1000)
    } catch(err) {
      console.log('时间')
    }
    // window.setInterval(() => {
    //   setTimeout(
    //     doGet(`${API_HOST}/api/system/device/getCFDeviceInfoError?authToken=dba7711bbeba64c4a1afeb7db572a575`).then(res => {
    //       if (res) {
    //         // console.log(res)
    //         this.cardlist= this.cardlist.concat(res.data.dataSource.list) 
    //         this.cardlist.forEach(item => {
    //           // console.log(item)
    //           this.code = item.code
    //           // this.namelist.push (item.infoTye)
    //           // item.infoTye ='['+item.infoTye
    //           if (item.infoTye =='故障') {
    //             this.namelist = ['<span style="color:red;">'+'['+item.infoTye+']']
    //           } else {
    //             this.namelist = ['['+item.infoTye+']']
    //           }
    //           this.namelist.push (item.time)
    //           this.namelist.push (item.acquisitionDeviceName)
    //           this.relelist.push(this.namelist)
    //           // console.log(this.code)
    //           // console.log(this.relelist)
    //           this.configrunlist={
    //             data:this.relelist,
    //             code:this.code,
    //             oddRowBGC:'#101239',
    //             evenRowBGC:'#101239',
    //             rowNum:3,
    //             columnWidth:[100]
    //           }
    //         });
    //         // console.log(that.cardlist)
    //       }
    //     }), 0)
    // }, 5000)
    // doGet(`http://112.103.160.4:33333/api/getImageFile/getListPage`,{equipment_code:'dca6321268a5'}).then(res => {
    //   if (res) {
    //     this.imgone = 'http://112.103.160.4:33333/'+ res.data.images[0].mask_image_path
    //   }
    // })
    doGet(`${API_HOST}/api/system/farm/getListPage?page=0&limit=0`,{authToken:localStorage.authToken,groupId:localStorage.groupId}).then(res => {
      if (res) {
        // console.log(res)
        if (res.data.errcode == 10005) {
          this.$router.push({path: '/login'})
        }
        this.caplist = res.data.dataSource.list
        this.select = res.data.dataSource.list[0].id
        localStorage['farmId'] = res.data.dataSource.list[0].id
        doGet(`${API_HOST}/api/pig/dataAcquisitionDevice/getDataAcquisitionFarmOnHouseCount`,{farmId:this.select,authToken:localStorage.authToken}).then(res => {
        if (res) {
          // console.log(res)
          res.data.dataSource.list.forEach(item => {
            // console.log(item)
            item.deviceCount = Number(item.deviceCount)
            this.nulltestlist.push({value:item.deviceCount,name:item.houseName})
            // console.log(this.nulltestlist)
          })
          this.textfirstlist = {
            data:this.nulltestlist,
            rowNum:4
          }
        }
      })
      doGet(`${API_HOST}/api/system/house/getHouseListPage?pageNum=0&pageSize=0`,{farmId:this.select,authToken:localStorage.authToken}).then(res => {
        if (res) {
          // console.log(res)
          this.listsigid = res.data.dataSource.list[0].id
          // console.log(this.caplist)
          doGet(`${API_HOST}/api/system/device/getCFMonitor`,{houseId:this.listsigid,authToken:localStorage.authToken}).then(res => {
            if (res) {
              // console.log(res)
              const that = this
              that.http_url = res.data.dataSource.list[0].videoAddress
            }
          })
          doGet(`${API_HOST}/api/pig/dataAcquisitionDevice/getListPage?page=0&limit=0`,{houseId:this.listsigid,authToken:localStorage.authToken}).then(res => {
            if (res) {
              if (res.data.errcode == '10016') {
                this.isimgde = true
              } else {
                this.isimgde = false
              }
            this.acquisitionDeviceCode = res.data.dataSource.list[0].acquisitionDeviceCode
      
          doGet(`http://112.103.160.4:33333/api/getImageFile/getListPage`,{equipment_code:this.acquisitionDeviceCode,page:1,limit:1}).then(res => {
            if (res) {
              if (res.data.images.length ===0) {
                console.log(res.data.images)
                this.isimgde = true
              } else {
                this.imgone = 'http://112.103.160.4:33333/'+ res.data.images[0].mask_image_path
                this.isimgde = false
              }
            }
          })
        }
      })
    }
  })
      doGet(`${API_HOST}/api/pig/dataCollectionOverview/getDataCollectionOverviewScreenListPage`,{farmId:this.select,authToken:localStorage.authToken}).then(res => {
        if (res) {
          localStorage['farmName'] = res.data.dataSource.list[0].farmName
          localStorage['farmId'] = res.data.dataSource.list[0].farmId
          if (res.data.errcode == '10016') {
            this.isimgde = true
            } else {
            this.isimgde = false
          }
          doGet(`${API_HOST}/api/system/house/getHouseListPage?pageNum=0&pageSize=0`,{farmId:res.data.dataSource.list[0].farmId,authToken:localStorage.authToken}).then(res => {
            if (res) {
              this.listsigid = res.data.dataSource.list[0].id
              doGet(`${API_HOST}/api/system/device/getCFMonitor`,{houseId:this.listsigid,authToken:localStorage.authToken}).then(res => {
                if (res) {
                  const that = this
                  that.http_url = res.data.dataSource.list[0].videoAddress
                }
              })
              doGet(`${API_HOST}/api/pig/dataAcquisitionDevice/getListPage?page=0&limit=0`,{houseId:this.listsigid,authToken:localStorage.authToken}).then(res => {
                if (res) {
                  if (res.data.errcode == '10016') {
                    this.isimgde = true
                  } else {
                    this.isimgde = false
                  }
                  this.acquisitionDeviceCode = res.data.dataSource.list[0].acquisitionDeviceCode
                  doGet(`http://112.103.160.4:33333/api/getImageFile/getListPage`,{equipment_code:this.acquisitionDeviceCode,page:1,limit:1}).then(res => {
                    if (res) {
                      if (res.data.images.length ===0) {
                        this.isimgde = true
                      } else {
                        this.imgone = 'http://112.103.160.4:33333/'+ res.data.images[0].mask_image_path
                        this.isimgde = false
                      }
                      
                    }
                  })
                }
              })
            }
          })
          this.farmName = res.data.dataSource.list[0].farmName
          this.farmId = res.data.dataSource.list[0].farmId
          this.roundlist1 = res.data.dataSource.list[0].onlineNum
          this.roundlist1_1 = res.data.dataSource.list[0].equipmentSum
          this.fenshu = this.roundlist1+'/'+this.roundlist1_1
          this.roundlist2 = res.data.dataSource.list[0].sowsDataCollection
          this.roundlist3 = res.data.dataSource.list[0].pigsDataCollection
          this.roundlist4 = res.data.dataSource.list[0].avaPictureRate
          this.roundlist5 = res.data.dataSource.list[0].modelMatchingRate
          this.optionround1 = {
          series: [
            {
              type: 'gauge',
              startAngle: -Math.PI / 2,
              endAngle: Math.PI * 1.5,
              arcLineWidth: 14,
              data: [
                { name: 'itemA', value: this.fenshu, gradient: ['#1ed3e5', '#1ed3e5', '#1ed3e5','#1ed3e5'] }
              ],
              style: {
              fill: '#0a9afe'
            },
              axisLabel: {
                show: false
              },
              axisTick: {
                show: false
              },
              pointer: {
                show: false
              },
              dataItemStyle: {
                lineCap: 'round'
              },
              backgroundArc:{
                show: true,
                style:{
                  stroke: '#0a9afe'
              }
            },
              details: {
                show: true,
                formatter: '{value}',
                style: {
                  fill: '#0a9afe',
                  gradient:'#0a9afe',
                  fontSize: 25
                }
              }
            }]
          }
          this.optionround2 = {
            series: [
              {
                type: 'gauge',
                startAngle: -Math.PI / 2,
                endAngle: Math.PI * 1.5,
                arcLineWidth: 14,
                data: [
                  { name: 'itemA', value: this.roundlist2, gradient: ['#1ed3e5', '#1ed3e5', '#1ed3e5','#1ed3e5'] }
                ],
                style: {
                fill: '#0a9afe'
              },
                axisLabel: {
                  show: false
                },
                axisTick: {
                  show: false
                },
                pointer: {
                  show: false
                },
                dataItemStyle: {
                  lineCap: 'round'
                },
                backgroundArc:{
                  show: true,
                  style:{
                    stroke: '#0a9afe'
                }
              },
                details: {
                  show: true,
                  formatter: '{value}',
                  style: {
                    fill: '#0a9afe',
                    gradient:'#0a9afe',
                    fontSize: 25
                  }
                }
              }]
            }
          this.optionround3 = {
              series: [
            {
              type: 'gauge',
              startAngle: -Math.PI / 2,
              endAngle: Math.PI * 1.5,
              arcLineWidth: 14,
              data: [
                { name: 'itemA', value: this.roundlist3, gradient: ['#1ed3e5', '#1ed3e5', '#1ed3e5','#1ed3e5'] }
              ],
              style: {
                fill: '#0a9afe'
              },
              axisLabel: {
                show: false
              },
              axisTick: {
                show: false
              },
              pointer: {
                show: false
              },
              dataItemStyle: {
                lineCap: 'round'
              },
              backgroundArc:{
                show: true,
                style:{
                  stroke: '#0a9afe'
                }
              },
              details: {
                show: true,
                formatter: '{value}',
                style: {
                  fill: '#0a9afe',
                  gradient:'#0a9afe',
                  fontSize: 25
                }
              }
            }]
          }
          this.optionround4 = {
          series: [
            {
              type: 'gauge',
              startAngle: -Math.PI / 2,
              endAngle: Math.PI * 1.5,
              arcLineWidth: 14,
              data: [
                { name: 'itemA', value: this.roundlist4, gradient: ['#1ed3e5', '#1ed3e5', '#1ed3e5','#1ed3e5'] }
              ],
              style: {
                fill: '#0a9afe'
              },
              axisLabel: {
                show: false
              },
              axisTick: {
                show: false
              },
              pointer: {
                show: false
              },
              dataItemStyle: {
                lineCap: 'round'
              },
              backgroundArc:{
                show: true,
                style:{
                  stroke: '#0a9afe'
                }
              },
              details: {
                show: true,
                formatter: '{value}%',
                style: {
                  fill: '#0a9afe',
                  gradient:'#0a9afe',
                  fontSize: 25
                }
              }
            }]
          }
          this.optionround5 = {
          series: [
            {
              type: 'gauge',
              startAngle: -Math.PI / 2,
              endAngle: Math.PI * 1.5,
              arcLineWidth: 14,
              data: [
                { name: 'itemA', value: this.roundlist5, gradient: ['#1ed3e5', '#1ed3e5', '#1ed3e5','#1ed3e5'] }
              ],
              style: {
                fill: '#0a9afe'
              },
              axisLabel: {
                show: false
              },
              axisTick: {
                show: false
              },
              pointer: {
                show: false
              },
              dataItemStyle: {
                lineCap: 'round'
              },
              backgroundArc:{
                show: true,
                style:{
                  stroke: '#0a9afe'
                }
              },
              details: {
                show: true,
                formatter: '{value}%',
                style: {
                  fill: '#0a9afe',
                  gradient:'#0a9afe',
                  fontSize: 25
                }
              }
            }
          ]}
        }
      })
      }
    })
    doGet(`${API_HOST}/api/system/device/getCFDeviceInfoError`,{authToken:localStorage.authToken,farmId:localStorage.farm_id}).then(res => {
      if (res) {
        // console.log(res.data.dataSource)
        if (res.data.dataSource==null) {
          console.log('')
        } else{
        this.cardlist= this.cardlist.concat(res.data.dataSource.list)
        this.cardlist.forEach(item => {
          this.code = item.code
          if (item.infoTye =='故障') {
            this.namelist = ['<span style="color:red;">'+'['+item.infoTye+']']
          } else {
            this.namelist = ['['+item.infoTye+']']
          }
          this.namelist.push (item.time)
          this.namelist.push (item.acquisitionDeviceName)
          this.relelist.push(this.namelist)
          this.configrunlist={
            data:this.relelist,
            code:this.code,
            oddRowBGC:'#101239',
            evenRowBGC:'#101239',
            rowNum:3,
            columnWidth:[100]
          }
        })
      }
      }
    })
    this.option = {
      title: {
        text: '采集对象生长情况',
        style: {
          fill: '#03acff',
          fontSize: 24,
        }
      },
      legend: {
        data: ['系列A']
      },
      xAxis: {
        name: '背膘m/m',
        data: ['5', '10', '15', '20', '25', '30', '35'],
        nameTextStyle: {
          fill: '#fff',
          fontSize: 10
        },
        axisLine:{
          style: {
            stroke: '#fff',
            lineWidth: 1
          }
        },
        axisTick:{
          style: {
            stroke: '#fff',
            lineWidth: 1
          }
        },
        axisLabel:{
          style: {
            fill: '#fff',
            fontSize: 10,
            rotate: 0
          }
        }
      },
    yAxis: {
      name: 'kg',
      data: this.datalist,
      nameTextStyle: {
        fill: '#8db6d4',
        fontSize: 10
      },
      axisLine:{
        style: {
        stroke: '#fff',
        lineWidth: 1
      }},
      axisTick:{
        style: {
        stroke: '#fff',
        lineWidth: 1
        }
      },
      axisLabel:{
        style: {
          fill: '#fff',
          fontSize: 10,
          rotate: 0
        }
      }
    },
    series: [
      {
        name: '系列A',
        data: this.datalist,
        type: 'line',
        stack: 'a',
        style: {
          stroke: '#fff',
          fontSize: 20
        },
        fill: {
          show: true
        }
      }
    ]
  }
    this.optionround1={
            series: [
    {
      type: 'gauge',
      startAngle: -Math.PI / 2,
      endAngle: Math.PI * 1.5,
      arcLineWidth: 14,
      data: [
        { name: 'itemA', value: 0, gradient: ['#1ed3e5', '#1ed3e5', '#1ed3e5','#1ed3e5'] }
      ],
      style: {
      fill: '#0a9afe'
    },
      axisLabel: {
        show: false
      },
      axisTick: {
        show: false
      },
      pointer: {
        show: false
      },
      dataItemStyle: {
        lineCap: 'round'
      },
      backgroundArc:{
        show: true,
        style:{
          stroke: '#0a9afe'
      }
    },
      details: {
        show: true,
        formatter: '{value}',
        style: {
            fill: '#0a9afe',
            gradient:'#0a9afe',
            fontSize: 25
        }
      }
    }
  ]
          }
    this.optionround2={
            series: [
    {
      type: 'gauge',
      startAngle: -Math.PI / 2,
      endAngle: Math.PI * 1.5,
      arcLineWidth: 14,
      data: [
        { name: 'itemA', value: this.roundlist2, gradient: ['#1ed3e5', '#1ed3e5', '#1ed3e5','#1ed3e5'] }
      ],
      style: {
        fill: '#0a9afe'
      },
      axisLabel: {
        show: false
      },
      axisTick: {
        show: false
      },
      pointer: {
        show: false
      },
      dataItemStyle: {
        lineCap: 'round'
      },
      backgroundArc:{
        show: true,
        style:{
          stroke: '#0a9afe'
        }
      },
      details: {
        show: true,
        formatter: '{value}',
        style: {
            fill: '#0a9afe',
            gradient:'#0a9afe',
            fontSize: 25
        }
      }
    }
  ]
          }
    this.optionround3={
      series: [
      {
        type: 'gauge',
        startAngle: -Math.PI / 2,
        endAngle: Math.PI * 1.5,
        arcLineWidth: 14,
        data: [
          { name: 'itemA', value: this.roundlist3, gradient: ['#1ed3e5', '#1ed3e5', '#1ed3e5','#1ed3e5'] }
        ],
        style: {
          fill: '#0a9afe'
        },
        axisLabel: {
          show: false
        },
        axisTick: {
          show: false
        },
        pointer: {
          show: false
        },
        dataItemStyle: {
          lineCap: 'round'
        },
        backgroundArc:{
          show: true,
          style:{
            stroke: '#0a9afe'
          }
        },
        details: {
          show: true,
          formatter: '{value}',
          style: {
            fill: '#0a9afe',
            gradient:'#0a9afe',
            fontSize: 25
          }
        }
      }]
    }
    this.optionround4={
      series: [
        {
          type: 'gauge',
          startAngle: -Math.PI / 2,
          endAngle: Math.PI * 1.5,
          arcLineWidth: 14,
          data: [
            { name: 'itemA', value: this.roundlist4, gradient: ['#1ed3e5', '#1ed3e5', '#1ed3e5','#1ed3e5'] }
          ],
          style: {
            fill: '#0a9afe'
          },
          axisLabel: {
            show: false
          },
          axisTick: {
            show: false
          },
          pointer: {
            show: false
          },
          dataItemStyle: {
            lineCap: 'round'
          },
          backgroundArc:{
            show: true,
            style:{
              stroke: '#0a9afe'
            }
          },
         details: {
          show: true,
          formatter: '{value}',
          style: {
            fill: '#0a9afe',
            gradient:'#0a9afe',
            fontSize: 25
          }
        }
      }]
    }
    this.optionround5={
      series: [
      {
      type: 'gauge',
      startAngle: -Math.PI / 2,
      endAngle: Math.PI * 1.5,
      arcLineWidth: 14,
      data: [
        { name: 'itemA', value: this.roundlist5, gradient: ['#1ed3e5', '#1ed3e5', '#1ed3e5','#1ed3e5'] }
      ],
      style: {
        fill: '#0a9afe'
      },
      axisLabel: {
        show: false
      },
      axisTick: {
        show: false
      },
      pointer: {
        show: false
      },
      dataItemStyle: {
        lineCap: 'round'
      },
      backgroundArc:{
        show: true,
        style:{
          stroke: '#0a9afe'
        }
      },
      details: {
        show: true,
        formatter: '{value}',
        style: {
          fill: '#0a9afe',
          gradient:'#0a9afe',
          fontSize: 25
        }
      }
    }]
    }
  },
  methods: {
    showright () {
      // console.log('右键')
      this.showrightt=true
    },
    tt () {
      this.$router.push('/emptyPage')
    },
    tohome(){
      this.$router.push({path: '/'})
    },
    opchange(){
      this.houseId = this.select
      this.nulltestlist= []
      localStorage['farmId'] = this.houseId
      console.log(localStorage.farmId)
      doGet(`${API_HOST}/api/pig/dataAcquisitionDevice/getDataAcquisitionFarmOnHouseCount`,{farmId:this.houseId,authToken:localStorage.authToken}).then(res => {
        if (res) {
          res.data.dataSource.list.forEach(item => {
            item.deviceCount = Number(item.deviceCount)
            this.nulltestlist.push({value:item.deviceCount,name:item.houseName})
          })
          this.textfirstlist = {
            data:this.nulltestlist,
            rowNum:4
          }
        }
      })
      doGet(`${API_HOST}/api/pig/dataCollectionOverview/getDataCollectionOverviewScreenListPage`,{farmId:this.houseId,authToken:localStorage.authToken}).then(res => {
        if (res) {
          doGet(`${API_HOST}/api/system/house/getHouseListPage?pageNum=0&pageSize=0`,{farmId:res.data.dataSource.list[0].farmId,authToken:localStorage.authToken}).then(res => {
            if (res) {
              this.listsigid = res.data.dataSource.list[0].id
              doGet(`${API_HOST}/api/system/device/getCFMonitor`,{houseId:this.listsigid,authToken:localStorage.authToken}).then(res => {
                if (res) {
                  const that = this
                  that.http_url = res.data.dataSource.list[0].videoAddress
                }
              })
            }
          })
          this.farmName = res.data.dataSource.list[0].farmName
          this.farmId = res.data.dataSource.list[0].farmId
          this.roundlist1 = res.data.dataSource.list[0].onlineNum
          this.roundlist1_1 = res.data.dataSource.list[0].equipmentSum
          this.fenshu = this.roundlist1+'/'+this.roundlist1_1
          this.roundlist2 = res.data.dataSource.list[0].sowsDataCollection
          this.roundlist3 = res.data.dataSource.list[0].pigsDataCollection
          this.roundlist4 = res.data.dataSource.list[0].avaPictureRate
          this.roundlist5 = res.data.dataSource.list[0].modelMatchingRate
          this.optionround1 = {
          series: [
            {
              type: 'gauge',
              startAngle: -Math.PI / 2,
              endAngle: Math.PI * 1.5,
              arcLineWidth: 14,
              data: [
                { name: 'itemA', value: this.fenshu, gradient: ['#1ed3e5', '#1ed3e5', '#1ed3e5','#1ed3e5'] }
              ],
              style: {
              fill: '#0a9afe'
            },
              axisLabel: {
                show: false
              },
              axisTick: {
                show: false
              },
              pointer: {
                show: false
              },
              dataItemStyle: {
                lineCap: 'round'
              },
              backgroundArc:{
                show: true,
                style:{
                  stroke: '#0a9afe'
              }
            },
              details: {
                show: true,
                formatter: '{value}',
                style: {
                  fill: '#0a9afe',
                  gradient:'#0a9afe',
                  fontSize: 25
                }
              }
            }]
          }
          this.optionround2={
            series: [
              {
                type: 'gauge',
                startAngle: -Math.PI / 2,
                endAngle: Math.PI * 1.5,
                arcLineWidth: 14,
                data: [
                  { name: 'itemA', value: this.roundlist2, gradient: ['#1ed3e5', '#1ed3e5', '#1ed3e5','#1ed3e5'] }
                ],
                style: {
                fill: '#0a9afe'
              },
                axisLabel: {
                  show: false
                },
                axisTick: {
                  show: false
                },
                pointer: {
                  show: false
                },
                dataItemStyle: {
                  lineCap: 'round'
                },
                backgroundArc:{
                  show: true,
                  style:{
                    stroke: '#0a9afe'
                }
              },
                details: {
                  show: true,
                  formatter: '{value}',
                  style: {
                    fill: '#0a9afe',
                    gradient:'#0a9afe',
                    fontSize: 25
                  }
                }
              }]
            }
          this.optionround3={
              series: [
            {
              type: 'gauge',
              startAngle: -Math.PI / 2,
              endAngle: Math.PI * 1.5,
              arcLineWidth: 14,
              data: [
                { name: 'itemA', value: this.roundlist3, gradient: ['#1ed3e5', '#1ed3e5', '#1ed3e5','#1ed3e5'] }
              ],
              style: {
                fill: '#0a9afe'
              },
              axisLabel: {
                show: false
              },
              axisTick: {
                show: false
              },
              pointer: {
                show: false
              },
              dataItemStyle: {
                lineCap: 'round'
              },
              backgroundArc:{
                show: true,
                style:{
                  stroke: '#0a9afe'
                }
              },
              details: {
                show: true,
                formatter: '{value}',
                style: {
                  fill: '#0a9afe',
                  gradient:'#0a9afe',
                  fontSize: 25
                }
              }
            }]
          }
          this.optionround4={
          series: [
            {
              type: 'gauge',
              startAngle: -Math.PI / 2,
              endAngle: Math.PI * 1.5,
              arcLineWidth: 14,
              data: [
                { name: 'itemA', value: this.roundlist4, gradient: ['#1ed3e5', '#1ed3e5', '#1ed3e5','#1ed3e5'] }
              ],
              style: {
                fill: '#0a9afe'
              },
              axisLabel: {
                show: false
              },
              axisTick: {
                show: false
              },
              pointer: {
                show: false
              },
              dataItemStyle: {
                lineCap: 'round'
              },
              backgroundArc:{
                show: true,
                style:{
                  stroke: '#0a9afe'
                }
              },
              details: {
                show: true,
                formatter: '{value}%',
                style: {
                  fill: '#0a9afe',
                  gradient:'#0a9afe',
                  fontSize: 25
                }
              }
            }]
          }
          this.optionround5={
          series: [
            {
              type: 'gauge',
              startAngle: -Math.PI / 2,
              endAngle: Math.PI * 1.5,
              arcLineWidth: 14,
              data: [
                { name: 'itemA', value: this.roundlist5, gradient: ['#1ed3e5', '#1ed3e5', '#1ed3e5','#1ed3e5'] }
              ],
              style: {
                fill: '#0a9afe'
              },
              axisLabel: {
                show: false
              },
              axisTick: {
                show: false
              },
              pointer: {
                show: false
              },
              dataItemStyle: {
                lineCap: 'round'
              },
              backgroundArc:{
                show: true,
                style:{
                  stroke: '#0a9afe'
                }
              },
              details: {
                show: true,
                formatter: '{value}',
                style: {
                  fill: '#0a9afe',
                  gradient:'#0a9afe',
                  fontSize: 25
                }
              }
            }
          ]}
        }
      })
    },
    tovideo () {
      this.$router.push({path: '/videoMonitoring',
        query: {
          farmName: this.farmName,
          farmId: this.id,
        }
      })
    },
    totext () {
      this.$router.push({path: '/pictureMonitoring',
        query: {
          farmName: this.farmName,
          farmId: this.id,
        }
      })
    },
    currentTime(){
      setInterval(this.getTime,500)
    },
    getTime:function(){
      var _this = this;
      let yy = new Date().getFullYear();
      let mm = new Date().getMonth()+1;
      let dd = new Date().getDate();
      let hh = new Date().getHours();
      let mf = new Date().getMinutes()<10 ? '0'+new Date().getMinutes() : new Date().getMinutes();
      let ss = new Date().getSeconds()<10 ? '0'+new Date().getSeconds() : new Date().getSeconds();
      _this.gettime = yy+'-'+mm+'-'+dd+' '+hh+':'+mf+':'+ss;
    },
    open() {
        this.$alert('这是一段内容', '标题名称', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${ action }`
            });
          }
        });
      },
    mapclick(){
      this.showtable= false
    },
    click(){
      this.$router.push({path: '/video'})
    },
    click1(){
      this.$router.push({path: '/text'})
    },
    clicktable (event) {
      // console.log(event)
      this.dialogVisible = true
      // console.log(this.dialogVisible)
      doGet(`${API_HOST}/api/system/device/getCFDeviceInfoError`,{acquisitionDeviceName:event.row[2],authToken:localStorage.authToken}).then(res => {
      if (res) {
        // console.log(res)
        this.houseName = res.data.dataSource.list[0].houseName 
        this.informationSources = res.data.dataSource.list[0].informationSources 
        this.acquisitionDeviceName = res.data.dataSource.list[0].acquisitionDeviceName 
        this.errorMsg = res.data.dataSource.list[0].errorMsg
        // console.log(that.cardlist)

      }
    })
    },
    chinaConfigure () {
      // console.log(this.userJson)
      let myChart = echarts.init(this.$refs.myEchart); //这里是为了获得容器所在位置
      window.onresize = myChart.resize;
      myChart.setOption({ // 进行相关配置
        backgroundColor: "#000000",
        tooltip: {},// 鼠标移到图里面的浮动提示框
        dataRange: {
          show: false,
          min: 0,
          max: 1000,
          text: ['High', 'Low'],
          realtime: true,
          calculable: true,
            symbolSize: 20,
            symbol : 'circle',
          color: ['lightskyblue']
        },
        geo: { // 这个是重点配置区
          map: 'china', // 表示中国地图
          roam: true,
             symbolSize: 20,
            symbol : 'circle',
          label: {
            normal: {
              show: true, // 是否显示对应地名
              textStyle: {
                color: '#000'
              }
            }
          },
          itemStyle: {
            normal: {
              borderColor: 'rgba(0, 0, 0, 0.2)'
            }
          }
        },
        series: [{
            type: 'scatter',
            coordinateSystem: 'geo' // 对应上方配置
          },
          {
            name: '启动次数',// 浮动框的标题
            type: 'map',
            showLegendSymbol: false,
            geoIndex: 0,
            symbolSize: 20,
            symbol : 'circle',
            label: {
              normal: {
                formatter: '{b}',
                position: 'right',
                show: false
              },
              emphasis: {
                show: true
              }
            },
            itemStyle: {
              normal: {
                color: '#000'
              }
            },
            data: [{
              "name": "北京",
              "value": 599
            }, {
              "name": "黑龙江",
              "value": 44
            }]
          },
        ]
      })
    }
  }
}
</script>
<style>
.dv-scroll-board{
  width:420px;
  height: 180px;
} 
.el-dialog__header {
    padding: 20px 20px 10px;
    background: #161273;
    color: #DCDFE6;
}
.el-dialog__title {
    line-height: 24px;
    font-size: 18px;
    color:#DCDFE6;
    /* opacity:
     0.5; */
}
.el-dialog__title {
    line-height: 24px;
    font-size: 18px;
    color: #DCDFE6;
}
.el-dialog__headerbtn .el-dialog__close {
    color: #fff;
}
.el-dialog__body {
    padding: 30px 20px;
    color: #606266;
    font-size: 14px;
    word-break: break-all;
    background: #161273;
}
.el-dialog__footer {
    padding: 10px 20px 20px;
    text-align: right;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    background: #161273;
}
.el-button {
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background:#161273;
    border: 1px solid #DCDFE6;
    color: #fff;
    -webkit-appearance: none;
    text-align: center;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    outline: 0;
    margin: 0;
    -webkit-transition: .1s;
    transition: .1s;
    font-weight: 500;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;

}
.backimg{
  background-image: url(./background.png);
}
  </style>