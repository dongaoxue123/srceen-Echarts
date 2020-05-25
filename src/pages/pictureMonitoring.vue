<template>
  <div>
    <div class="backimg">
      <!-- <div style="display: flex;justify-content: center;align-items: center;padding-top:7px;padding-bottom: 7px;"> -->
        <!-- <dv-decoration-8 :reverse="true" style="width:686px;height:50px;" />
          <dv-decoration-11 @click="tohome" style="width:546px;height:106px;color:#237df5;font-size:40px;font-weight:700;letter-spacing:8px">CF数据采集监控平台</dv-decoration-11>
          <dv-decoration-8 style="width:686px;height:50px;" /> -->
          <!-- <img  @click="tohome" src="../pages/img/未标题-1.jpg" alt="">
      </div> -->
      <div style="display: flex;justify-content: space-between;align-items: center;padding-top: 10px;padding-top: 14px;">
        <!-- <dv-decoration-11 @click="tohome" style="width:546px;height:106px;color:#237df5;font-size:40px;font-weight:700;letter-spacing:8px"> -->
          <dv-decoration-8 style="width:650px;height:50px;" />
          <div @click="tohome" style="width:546px;color:#237df5;font-size:40px;font-weight:700;letter-spacing:8px">
            CF数据采集监控平台
          </div>
        <!-- </dv-decoration-11> -->
        <dv-decoration-8 :reverse="true" style="width:650px;height:50px;" />
        <!-- <img src="../pages/img/未标题-1.jpg" alt=""> -->
    </div>
    <div style="display: flex;justify-content: center;align-items: center;">
      <img src="./img/微信截图_20200326141835.png" alt="">
    </div>
       <div style="display: flex;justify-content: flex-start;align-items: center;margin-top:36px;margin-left:150px">
         <div style="color:#03acff;font-size:30px;font-weight:600;">栋舍</div>
        <select v-model="select" @change="opchange" style="background:linear-gradient(to right,#161273,#261fad);width:426px;height:50px;margin-left:20px;color:#fff;text-indent: 10px;border:0px;font-size: 22px;">
          <option style="background-color:#161273;font-size: 18px" v-for="(index,item) in caplist" :value ="index.id">{{index.name}}</option>
          <!-- <option value ="saab">Saab</option> -->
        </select>
       <div style="color:#0392ca;margin-left:26px;font-size:24px;font-weight: 600;">{{gettime}}</div>
      </div>
      <div style="display: flex;justify-content: flex-start;align-items: center;padding-left:100px;padding-top: 69px;padding-bottom: 40px;">
        <div>
          <div>
          <div dur= 600 style="width:590px;height:430px;margin-left:20px;background:#000636;border: 1px solid #235fa7;">
            <h4  style="color:#00afff;font-size:24px;font-weight:600;margin-top:6px;position: relative;top: 4px;">采集对象</h4>
            <div style="width:590px;height:400px;margin-left: 20px;">
            <el-table
              :header-cell-style="getRowClass"
              class="bese"
              :cell-style="rowstyle"
              :data="tableData"
              height="340"
              @row-click = "clickrow"
              highlight-current-row
              @current-change="handleCurrentChange"
              border
              style="width: 538px;background:#101239;color:#8db6d4;border-color: #000bf1;">
              <el-table-column
              v-if=false
                prop="index"
                label="序号"
                width="136"
                style="background:#101239;color:#8db6d4;">
              </el-table-column>
              <el-table-column
                prop="number"
                label="序号"
                width="70"
                style="background:#101239;color:#8db6d4;">
              </el-table-column>
              <el-table-column
                prop="acquisitionDeviceName"
                label="设备名称"
                style="border-color: #261fad;"
                width="190">
              </el-table-column>
              <el-table-column
                prop="stateFlg"
                label="状态"
                style="border-color: #261fad;"
                width="146">
                </el-table-column>
                <el-table-column
                prop="address"
                label="设备类型"
                style="border-color: #261fad;"
                width="146">
              </el-table-column>
            </el-table>
          </div>
        </div>
          </div>
            <div dur= 600 style="width:590px;height:288px;margin-left:20px;background:#000636;margin-top: 54px;border: 1px solid #235fa7;">
            <h4  style="color:#00afff;font-size:24px;font-weight:600;margin-top:6px;position: relative;top: 4px;">设备详情</h4>
            <table style="border:1px solid #000bf1;color:#8db6d4;width:538px;height:160px;position: relative;top: 4px;left: 24px;">
              <tr>
                <td style="border-right:1px solid #000bf1;border-bottom:1px solid #000bf1;">
                <div>{{cpuTemperature}}℃</div>
                <div>cpu温度</div>
                </td>
                <td style="border-right:1px solid #000bf1;border-bottom:1px solid #000bf1;">
                  <div>{{cpuUsage}}%</div>
                  <div>cpu占用率</div>
                </td>
                <td style="border-bottom:1px solid #000bf1;">
                  <div>{{ramUsage}}%</div>
                <div>内存占用率</div>
                </td>
              </tr>
              <tr>
                <td style="border-right:1px solid #000bf1;">
                <div>{{runTotalTime}}h</div>
                <div>累计运行时常</div>
                </td>
                <td style="border-right:1px solid #000bf1;">
                  <div>{{photosNumber}}张</div>
                <div>累计图片</div>
                </td>
                <td>
                  <div>{{delFlag}}</div>
                  <div>当前状态</div>
                </td>
              </tr>
            </table>
          </div>
        </div>
        <div style="margin-top: -35px;">
          <div style="display: flex;justify-content: flex-start;align-items: center;margin-left: 155px;">
            <div style="color:#00afff;font-size:24px;font-weight:600;">猪只编号：{{pigcode}}</div><div v-if="showkg" style="color:#00afff;font-size:24px;font-weight:600;margin-left: 25px;">体重：{{pigkg}}KG</div>
            <div style="color:#00afff;font-size:24px;font-weight:600;margin-left: 25px;"> 时间：{{pigtime}}</div>
          </div>
        <el-dialog
          title="提示"
          :visible.sync="visible"
          width="20%"
          :before-close="handleClose">
          <span>已经是第一条了</span>
          <el-button type="primary" @click="handleClose">确 定</el-button>
        </el-dialog>
         <div dur= 600 style="width:950px;height:770px;margin-left:153px;display: flex;justify-content: flex-start;align-items: center;border: 1px solid #235fa7;">
          <div style="width:950px;height:776px;" class="banner">
            <div style="z-index: 0;" class="item">
              <img style="width:930px;height:755px;margin-top: 10px;z-index: 0;" :src="dataList[currentIndex]">
            </div>
            <div style="margin-top: -135px;background: #101239;z-index: 100;position: absolute;width:930px;margin-left: 10px;padding-top: 10px;" class="page" v-if="this.dataList.length > 1">
              <ul>
                <div style="width: 930px;margin-left: -20px;height: 105px;display: flex;justify-content: flex-start;align-items: center;flex-wrap: wrap;">
                  <img v-if="toleft" src="./img/left1.jpg" style="width: 20px;height: 40px;background: #fff;" @click="gotoPage(prevIndex)"/>
                  <img v-if="!toleft" src="./img/left1.jpg" style="width: 20px;height: 40px;background: #fff;" @click="gotoPage1"/>
                  <img :class="{'clickpic':currentIndex == index}" v-for="(item,index) in dataList" @click="gotoPage(index)" :src="item" :style="rr"/>
                  <img v-if="toright" src="./img/right1.jpg" style="width: 20px;height: 40px;background: #fff;" @click="gotoPage(nextIndex)"/>
                  <img v-if="!toright" src="./img/right1.jpg" style="width: 20px;height: 40px;background: #fff;" @click="gotoPage2"/>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
    </div>
  </template>
  <script>
  import Vue from 'vue'
  import { doGet }  from '../api/index.js'
  import echarts from "echarts"
  import dataV from '@jiaminghi/data-view'
  import { scrollBoard } from '@jiaminghi/data-view'
  import VueResource from 'vue-resource'
  Vue.use(ElementUI)
  Vue.use(VueResource)
  import axios from 'axios'
  Vue.use(dataV)
  import ElementUI from 'element-ui'
  import 'element-ui/lib/theme-chalk/index.css'
  import { API_HOST }  from '../api/api.js'
  export default {
    name: "pictureMonitoring",
    data() {
      return {
        gettime:'',
        pigcode:'',
        pigkg:'',
        farmName:this.$route.query.farmName,
        select:'',
        option:{},
        caplist:[],
        houseId:'',
        tableData: [],
        cpuTemperature:'',
        cpuUsage:'',
        ramUsage:'',
        photosNumber:'',
        delFlag:'',
        runTotalTime:'',
        dataList:[],
        currentIndex: 0,
        timer: null,
        clickpic:'width:200px;height:100px;margin:4px',
        rr:'height:100px;margin:4px',
        codesheb:'',
        pigtime:'',
        picfontlist:[],
        page:1,
        tt: true,
        toleft:true,
        toright:true,
        showkg:false,
        acquisitionType:'',
        houseType:'',
        currentRow:null
  
      }
    },
    computed: {
    prevIndex() {
      if(this.currentIndex == 0) {
        return this.dataList.length - 1;
      }else{
        return this.currentIndex - 1;
      }
    },
    nextIndex() {
      if(this.currentIndex == this.dataList.length - 1) {
        return 0;
      }else {
        return this.currentIndex + 1;
      }
    }
  },
    mounted() {
      this.dataList = []
      this.tableData=[]
      // console.log(this.page)
      doGet(`${API_HOST}/api/system/house/getHouseListPage?pageNum=0&pageSize=0`,{farmId:localStorage.farmId,authToken:localStorage.authToken}).then(res => {
        if (res) {
          this.caplist = res.data.dataSource.list
          // console.log(res.data.dataSource.list[0].id)
          this.select = res.data.dataSource.list[0].id
          doGet(`${API_HOST}/api/pig/dataAcquisitionDevice/getListPage?page=0&limit=0`,{houseId:this.select,authToken:localStorage.authToken}).then(res => {
          if (res) {
            this.moshenlist = res.data.dataSource.list
            this.codesheb = res.data.dataSource.list[0].acquisitionDeviceCode
            if (res.data.dataSource.list[0].acquisitionType == '00085' && res.data.dataSource.list[0].houseType == '00021') {
              this.showkg = false
            } else{
              this.showkg = true
            }
            const  that = this
            that.moshenlist.forEach(function(val,arr){
              // console.log(arr)
              if (val.stateFlg == 1) {
                // console.log(val.stateFlg)
                val.stateFlg = '正常'
              } 
              if (val.stateFlg == 0) {
                val.stateFlg = '异常'
              }
              if (val.stateFlg == 2) {
                val.stateFlg = '不在线'
              }
              if (val.stateFlg === '') {
                val.stateFlg = '-'
              }
              that.tableData.push({acquisitionDeviceName:val.acquisitionDeviceName,index:val.acquisitionDeviceCode,stateFlg:val.stateFlg,number:arr+1,address: val.acquisitionTypeName})
            })
            doGet(`http://112.103.160.4:33333/api/getImageFile/getListPage`,{equipment_code:this.codesheb,page:this.page,limit:6}).then(res => {
              if (res) {
                this.picfontlist = res.data.images
                this.pigcode=res.data.images[0].pigsNumber
                this.pigkg = res.data.images[0].weightData
                this.pigtime = res.data.images[0].createTime
                const that = this
                res.data.images.forEach(function(val,arr){
                  that.dataList.push('http://112.103.160.4:33333/'+val.mask_image_path)
                })
              }
            })
          }
        })
        }
      })
      try{
        window.setInterval(() => {
          setTimeout(this.getTime(), 0)
        }, 1000)
      } catch(err) {
        console.log('时间')
      }
    },
    methods:{
      handleCurrentChange(val){
        this.currentRow = val
      }
      ,
      handleClose(done) {
          this.$confirm('确认关闭？')
            .then(_ => {
              done();
            })
            .catch(_ => {});
        
      },
      gotoPage1() { 
        console.log(this.page)
        // this.page>1?--this.page:1
        // this.page=++this.page
  
        console.log(this.page)
        //  else{
        //   this.page = 1
        // } if (this.page ===2) {
        //   this.page =2
        // }
        // console.log(this.page)
        if ( this.page ===1) {
          this.$alert('已经是第一条了', '提示', {
            confirmButtonText: '确定',
          });
        } else {
          const loading = this.$loading({
                lock: true,
                text: 'Loading',
                spinner: 'el-icon-loading',
                background: 'rgba(0, 0, 0, 0.7)'
          });
          // console.log(this.page)
          // this.visible=false
          // this.dataList = []
          if (this.page>1) {
        //   // console.log('++')
          this.page = this.page-1
        } else{
          this.page = 1
        }
        doGet(`http://112.103.160.4:33333/api/getImageFile/getListPage`,{equipment_code:this.codesheb,page:this.page,limit:6}).then(res => {
        if (res.data.msg =='success') {
          // console.log(res.images)
          // console.log(this.page)
          console.log(this.page)
          loading.close();
          this.picfontlist = res.data.images
          this.pigcode=res.data.images[0].pigsNumber
          this.pigkg = res.data.images[0].weightData
          this.pigtime = res.data.images[0].createTime
          const  that = this
          // console.log(that.dataList)
          this.dataList = []
          res.data.images.forEach(function(val,arr){
            that.dataList.push('http://112.103.160.4:33333/'+val.mask_image_path)
            // this.pigcode = val.pigsNumber
            // if (that.dataList.length<6) {
            //       // console.log(this.rr)
            //       that.dataList=that.dataList.push('http://112.103.160.4:33333/'+val.mask_image_path)
            // }
            // console.log(that.dataList)
          })
        } 
      })
        }
      },
      gotoPage2(){
        // console.log(this.page)
        this.page = ++this.page
        const loading = this.$loading({
                lock: true,
                text: 'Loading',
                spinner: 'el-icon-loading',
                background: 'rgba(0, 0, 0, 0.7)'
          });
        doGet(`http://112.103.160.4:33333/api/getImageFile/getListPage`,{equipment_code:this.codesheb,page:this.page,limit:6}).then(res => {
        if (res.data.msg =='success') {
          // console.log(res.data.images.length)
          // if (res.data.images.length<6) {
          //   this.$alert('已经是最后一条了', '提示', {
          //   confirmButtonText: '确定',
          // });
          // loading.close();
          // }else{
          // console.log(this.page)
          loading.close();
          this.picfontlist = res.data.images
          this.pigcode=res.data.images[0].pigsNumber
          this.pigkg = res.data.images[0].weightData
          this.pigtime = res.data.images[0].createTime
          const that = this
          that.dataList = []
          res.data.images.forEach(function(val,arr){
            that.dataList.push('http://112.103.160.4:33333/'+val.mask_image_path)
            // this.pigcode = val.pigsNumber
            if (that.dataList.length>6) {
              that.dataList=that.dataList.push('http://112.103.160.4:33333/'+val.mask_image_path)
            }
            that.currentIndex = 0
            that.toright = true
            // console.log(that.currentIndex )
          })
        // }
        } else {
          this.page = 1
          doGet(`http://112.103.160.4:33333/api/getImageFile/getListPage`,{equipment_code:this.codesheb,page:this.page,limit:6}).then(res => {
            if (res.data.msg =='success') {
              // console.log(res.images)
              loading.close();
              this.picfontlist = res.data.images
              this.pigcode=res.data.images[0].pigsNumber
              this.pigkg = res.data.images[0].weightData
              this.pigtime = res.data.images[0].createTime
              const  that = this
              that.dataList = []
              res.data.images.forEach(function(val,arr){
                that.dataList.push('http://112.103.160.4:33333/'+val.mask_image_path)
                // console.log(that.dataList)
              })
            }
          })
        }
      })
      },
      gotoPage(index) {
      this.currentIndex = index;
      // console.log(index)
      // console.log(this.picfontlist)
      // doGet(`http://112.103.160.4:33333/api/getImageFile/getListPage`,{equipment_code:this.codesheb}).then(res => {
      //   if (res) {
        if (index === 5) {
          this.toright = false
        } else {
          this.toright = true
        }
        // console.log(index)
        if (index===0) {
          this.toleft = false
        } else {
          this.toleft = true
        }
          this.$forceUpdate();
          this.pigcode = this.picfontlist[index].pigsNumber
          this.pigkg = this.picfontlist[index].weightData
          this.pigtime = this.picfontlist[index].createTime
          // loading.close();
          this.$forceUpdate();
    },
      tohome(){
        // console.log(1111111)
        this.$router.push({path: '/cf'})
      },
      clickrow(event){
        // console.log(event)
        this.codesheb = event.index
        this.pigcode=''
        this.pigkg = ''
        this.cpuTemperature = ''
        this.cpuUsage = ''
        this.ramUsage = ''
        this.photosNumber = ''
        this.delFlag = ''
        this.runTotalTime = ''
        this.dataList=[]
        this.page = 1
        this.picfontlist = []
        const loading = this.$loading({
            lock: true,
            text: 'Loading',
            spinner: 'el-icon-loading',
            background: 'rgba(0, 0, 0, 0.7)'
      });
      // console.log(this.acquisitionType)
      // console.log(this.houseType)
      if (event.code1 == '00085' && event.code2 == '00021') {
              this.showkg = false
            } else{
              this.showkg = true
            }
        doGet(`http://112.103.160.4:33333/api/getImageFile/getListPage`,{equipment_code:event.index,page:this.page,limit:6}).then(res => {
        if (res) {
          // console.log(res.images)
          loading.close();
          this.picfontlist = res.data.images
          if (res.data.images == null) {
            console.log('')
          } else{
  
         
          this.pigcode=res.data.images[0].pigsNumber
          this.pigkg = res.data.images[0].weightData
          this.pigtime = res.data.images[0].createTime
          const  that = this
          res.data.images.forEach(function(val,arr){
            that.dataList.push('http://112.103.160.4:33333/'+val.mask_image_path)
            // this.pigcode = val.pigsNumber
            if (that.dataList.length>6) {
              that.dataList=that.dataList.slice(0,6)
            }
            // console.log(that.dataList)
          });
           }
        }
      })
      // loading.close();
        doGet(`${API_HOST}/api/system/device/getCFDeviceInfo`,{code:event.index,authToken:localStorage.authToken}).then(res => {
          if (res) {
            // console.log(res)
            if (res.data.dataSource == null) {
              console.log('')
            } else {
            this.cpuTemperature = res.data.dataSource.list[0].cpuTemperature
            this.cpuUsage = res.data.dataSource.list[0].cpuUsage
            this.ramUsage = res.data.dataSource.list[0].ramUsage
            this.photosNumber = res.data.dataSource.list[0].photosNumber
            if (res.data.dataSource.list[0].state == 1) {
              res.data.dataSource.list[0].state = '正常'
              }
               if (res.data.dataSource.list[0].state == 0) {
                res.data.dataSource.list[0].state = '异常'
              } 
               if (res.data.dataSource.list[0].state == 2) {
                res.data.dataSource.list[0].state = '不在线'
              }
              if (res.data.dataSource.list[0].state == "") {
                res.data.dataSource.list[0].state = '-'
              }
            this.delFlag = res.data.dataSource.list[0].state
            this.runTotalTime = res.data.dataSource.list[0].runTotalTime
          }
          }
        })
      },
      getRowClass ({ row, column, rowIndex, columnIndex }) {
        if (rowIndex === 0) {
          return 'background:#101239;border:1px solid #000bf1'
        } else {
          return 'background:#101239;border:1px solid #000bf1'
        }
      },
      rowstyle({ row, column, rowIndex, columnIndex }){
        // if (rowIndex === 0) {
        return 'background:#101239;border:1px solid #000bf1'
        // } else {
          // return 'background:#101239'
        // }
      },
      opchange(){
        this.houseId = this.select
        this.pigkg=''
        this.pigcode=''
        this.cpuTemperature=''
        this.cpuUsage=''
        this.ramUsage=''
        this.photosNumber=''
        this.delFlag=''
        this.runTotalTime=''
        this.tableData=[]
        this.dataList = []
        this.page = 0
        doGet(`${API_HOST}/api/pig/dataAcquisitionDevice/getListPage?page=0&limit=0`,{houseId:this.houseId,authToken:localStorage.authToken}).then(res => {
          if (res) {
            // console.log(res)
            this.moshenlist = res.data.dataSource.list
            // console.log(res.data.dataSource.list[0].acquisitionType)
            this.acquisitionType = res.data.dataSource.list[0].acquisitionType
            this.houseType = res.data.dataSource.list[0].houseType
       
            const  that = this
            that.moshenlist.forEach(function(val,arr){
              console.log(val.stateFlg)
              // val.stateFlg == 1?'正常':'异常'
              if (val.stateFlg == ""){
                val.stateFlg = '-'
              }
              if (val.stateFlg == 1) {
                // console.log(val.stateFlg)
                val.stateFlg = '正常'
              } 
              if (val.stateFlg == 0) {
                val.stateFlg = '异常'
              } 
              if (val.stateFlg == 2) {
                val.stateFlg = '不在线'
              }
              // console.log(val.stateFlg)
              that.tableData.push({acquisitionDeviceName:val.acquisitionDeviceName,
                index:val.acquisitionDeviceCode,stateFlg:val.stateFlg,number:arr+1,address: val.acquisitionTypeName,code1:val.acquisitionType,code2:val.houseType})
            })
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
      }
    }
  }
  </script>
  <style>
  body{
      margin: 0px;
  }
  .el-table__body-wrapper::-webkit-scrollbar{
       /*width: 0;宽度为0隐藏*/
      width: 0px;
    }
  .el-table td, .el-table th.is-leaf,.el-table--border, .el-table--group /deep/{
    border-color: #000bf1; 
  }
  .bese.el-table--border::after, .el-table--group::after, .el-table::before /deep/{
    background-color: #000bf1;
  }
  .bese.el-table--border:after, .el-table--group:after, .el-table:before{
      content: "";
      position: absolute;
      background-color: #000bf1;
      z-index: 1;
  }
  .clickpic{
    width:140px;height:100px;padding:4px;border:1px solid #fff;
  }
  .backimg{
    background-image: url(./img/background.png);
  }
  .current-row > td  /deep/{
     background: #161273 !important;
  }
  .el-table tbody tr:hover>td /deep/{ 
      background-color:#161273!important
  }
  </style>