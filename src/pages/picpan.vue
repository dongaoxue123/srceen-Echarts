<template>
  <div class="backg"  >
    <div style="display: flex;justify-content: space-between;align-items: center;padding-top: 10px;padding-top: 14px;">
      <dv-decoration-8 style="width:700px;height:50px;" />
      <div @click="tohome" style="width:546px;color:#237df5;font-size:40px;font-weight:700;letter-spacing:8px">
        盘点监控
      </div>
    <dv-decoration-8 :reverse="true" style="width:700px;height:50px;" />
  </div>
  <div style="display: flex;justify-content: center;align-items: center;">
    <img src="./img/微信截图_20200326141835.png" alt="">
  </div>
  <div style="display: flex;justify-content: flex-start;align-items: center;width: 550px;margin-left: 40px;margin-top: 30px;">
      <div style="color:#0190d7;font-weight: 600;font-size:28px;">{{housename}}</div>
      <div  @click="tocodehome" style="color:#0190d7;font-size: 28px;font-weight: 600;margin-left: 20px;">{{forname}}</div>
  </div>
      <!-- <dv-charts style="width:580px;height:300px;margin-left:20px" :option="optionbing" /> -->
      <div style="display: flex;justify-content: flex-start;align-items: center;margin-left: 40px;margin-top: 20px;">
      <div style="width:1150px;height:790px;border: 1px dashed #365595;" class="banner">
        <div style="z-index: 0;" class="item">
          <img style="width:1140px;height:640px;margin-top: 10px;z-index: 0;" :src="dataList[currentIndex]">
        </div>
        <div style="margin-top: 4px;background: #101239;z-index: 100;position: absolute;width:1140px;margin-left: 10px;padding-top: 10px;" class="page" v-if="this.dataList.length > 0">
          <ul>
            <div style="width: 1150px;margin-left: -20px;height: 105px;display: flex;justify-content: flex-start;align-items: center;flex-wrap: wrap;">
              <img v-if="toleft" src="./img/left1.jpg" style="width: 20px;height: 40px;background: #fff;z-index: 200;" @click="gotoPage(prevIndex)"/>
              <img v-if="!toleft" src="./img/left1.jpg" style="width: 20px;height: 40px;background: #fff;" @click="gotoPage1"/>
              <img :class="{'clickpic':currentIndex == index}" v-for="(item,index) in dataList" @click="gotoPage(index)" :src="item" :style="rr"/>
              <img v-if="toright" src="./img/right1.jpg" style="width: 20px;height: 40px;background: #fff;" @click="gotoPage(nextIndex)"/>
              <img v-if="!toright" src="./img/right1.jpg" style="width: 20px;height: 40px;background: #fff;" @click="gotoPage2"/>
            </div>
          </ul>
        </div>
      </div>
      <div style="margin-left: 40px; height: 875px;">
        <div style="font-size: 28px;color: #02aeff;">栏位信息</div>
      <el-table
      :data="tableData"
      height="250"
      @row-click = "clickshowpic"
      :header-cell-style="getRowClass"
      :cell-style="rowstyle"
      highlight-current-row
      @current-change="handleCurrentChange"
      border
      style="width: 640px;background:#030c1b;color:#8db6d4;border-color: #365595;">
      <el-table-column
      prop="date"
      label="序号"
      width="125">
      </el-table-column>
      <el-table-column
      prop="datenull"
      label="序号"
      v-if=false
      width="0">
      </el-table-column>
      <el-table-column
        prop="null"
        label="序号"
        v-if=false
        width="0">
      </el-table-column>
      <el-table-column
        prop="name"
        label="栏位编号"
        width="170">
      </el-table-column>
      <el-table-column
        prop="address"
        label="数量"
        width="170">
      </el-table-column>
      <el-table-column
        prop="buttonclick"
        width="180"
        label="盘点状态">
      </el-table-column>
    </el-table>
    <div style="font-size: 28px;color: #02aeff;">盘点信息</div>
    <div style="border: 1px solid #365595 ;width: 640px;height: 200px;">
      <div style="color: #addbfc;font-size: 17px;margin-top: 20px;height: 25px;">{{pantime}}</div>
      <div style="color: #addbfc;font-size: 28px;margin-top: 20px;">{{pignumber}}头<span v-if="showdonepan">（已校正）</span></div>
      <div style="display: flex;justify-content: space-between;align-items: center;padding-left: 20px;padding-right: 20px;">
      <div style="color: #addbfc;font-size: 17px;">栏位编码：{{piglancode}}</div>
      <div style="color: #addbfc;font-size: 17px;">日龄：{{pigage}}</div>
    </div>
    <div style="display: flex;justify-content: center;align-items: center;margin-top: 24px;">
      <div @click="clickinput" style="width: 320px;border-right: 1px solid #365595; border-top: 1px solid #365595;height: 42px;color: #217ff3;font-size: 28px;">校正</div>
      <div @click="clicksave" style="width: 320px;border-top: 1px solid #365595;height: 42px;color: #217ff3;font-size: 28px;">留存</div>
    </div>
    <div>
      <div v-if="isshowchangesave" style="width: 1920px;height: 1080px;background: #3c3c3c;opacity: 0.8;position: absolute;top: 0;left: 0;z-index: 200;">
        <div  style="width: 670px;height: 410px;background: #090a40;opacity:0.9;position: absolute;top: 400px;left: 700px;">
          <div style="width: 670px;height: 60px;background: #195bb2;color: #fff;font-size: 24px;line-height: 60px;font-weight: 600;">留存 </div>
          <div style="display: flex;justify-content: center;align-items: center;margin-top: 30px;">
          <div style="font-size: 24px;color: #fff;padding: 5px;">{{forname}}</div><div style="font-size: 24px;color: #fff;padding: 5px;">{{piglancode}}栏</div>
        </div>
          <div style="font-size: 28px;color: #fff;margin-top: 20px;">盘点结果：{{pignumberinput}}头</div>
          <div style="font-size: 22px;color: #fff;margin-top: 20px;">是否确认并留存盘点记录？</div>
          <div style="width: 500px;display: flex;justify-content: space-between;align-items: center;margin-left: 85px;margin-top: 40px;">
            <div @click="savenumber" style="width: 240px;height: 60px;background:#32549e;color: #fff;font-size: 24px;line-height: 60px;">确定</div>
            <div @click="cancelsave" style="width: 240px;height: 60px;background:#32549e;color: #fff;font-size: 24px;line-height: 60px;">取消</div>
          </div>
        </div>
    </div>
    </div>
    <div v-if="isshowchangenumber" style="width: 1920px;height: 1080px;background: #3c3c3c;opacity: 0.8;position: absolute;top: 0;left: 0;z-index: 200;">
    <div  style="width: 670px;height: 410px;background: #090a40;opacity:0.9;position: absolute;top: 400px;left: 700px;">
      <div style="width: 670px;height: 60px;background: #195bb2;color: #fff;font-size: 24px;line-height: 60px;font-weight: 600;">校正 </div>
      <el-input-number style="opacity: 0.8;width: 500px;height: 170px;margin-top: 40px;font-size: 35px;" size=large v-model="num" @change="handleChange" :min="0" :max="100" label="描述文字"></el-input-number>
      <div style="width: 500px;display: flex;justify-content: space-between;align-items: center;margin-left: 85px;">
        <div @click="surechangsure" style="width: 240px;height: 60px;background:#32549e;color: #fff;font-size: 24px;line-height: 60px;">确定</div>
        <div @click="cancel" style="width: 240px;height: 60px;background:#32549e;color: #fff;font-size: 24px;line-height: 60px;">取消</div>
      </div>
    </div>
  </div>
    </div>
    <div style="font-size: 28px;color: #02aeff;margin-top: 5px;">盘点记录</div>
    <el-table
    :data="tableData2"
    height="250"
    @row-click = "clickshowpic1"
    :header-cell-style="getRowClass"
    :cell-style="rowstyle"
    highlight-current-row
    @current-change="handleCurrentChange"
    border
    style="width: 640px;background:#030c1b;color:#8db6d4;border-color: #365595;">
    <el-table-column
    prop="date"
    label="序号"
    width="125">
    </el-table-column>
    <el-table-column
      prop="null"
      label="序号"
      v-if=false
      width="0">
    </el-table-column>
    <el-table-column
      prop="name"
      label="盘点时间"
      width="170">
    </el-table-column>
    <el-table-column
      prop="address"
      label="盘点结果（头）"
      width="170">
    </el-table-column>
    <el-table-column
      prop="buttonclick"
      width="180"
      label="留存图像">
    </el-table-column>
  </el-table>
  <div v-if="ishowpic" style="width: 1920px;height: 1080px;position: absolute;top: 0;background: #3c3c3c;opacity: 1;left: 0;z-index: 400;">
    <i @click="cancelpic" style="font-size: 35px;color: #fff;position: absolute;top: 80px;left: 1600px;" class="el-icon-circle-close"></i>
    <img style="width: 1200px;height: 800px;position: absolute;top: 100px;left: 300px;" :src="picpop" alt="">
  </div>
  </div>
  </div>
  </div>
</template>
<script>
import Vue from 'vue'
import echarts from "echarts"
import Charts from '@jiaminghi/charts'
import dataV from '@jiaminghi/data-view'
import './iconfont.css'
import { scrollBoard } from '@jiaminghi/data-view'
import { changeDefaultConfig } from '@jiaminghi/charts'
import { doGet,doPost }  from '../api/index.js'
import { API_HOST }  from '../api/api.js'
Vue.use(dataV)
import '../../node_modules/echarts/map/js/china.js'
export default {
  name: "picpan",
  data () {
    return {
      forname:'',
      housename:localStorage.farmNamex,
      optionbing:{},
      toleft:true,
      dataList:[],
      clickpic:'width:200px;height:100px;margin:4px',
      tableData:[],
      tableData2:[],
      currentIndex: 0,
      page:1,
      rr:'height:100px;margin:4px;width:160px',
      codesheb:'',
      pigtime:'',
      picfontlist:[],
      // page:1,
      tt: true,
      toleft:true,
      toright:true,
      showkg:false,
      acquisitionType:'',
      visible:false,
      houseType:'',
      currentRow:null,
      null:0,
      pantime:'',
      dataListindex:[],
      pignumber:'',
      pigage:'',
      num: 1,
      isshowchangenumber:false,
      piglancode:'',
      liuchunlist:[],
      isshowchangesave:false,
      pignumberinput:'',
      picurl:'',
      forid:'',
      picpop:'',
      afterNumberL:0,
      ishowpic:false,
      showdonepan:false
      // piclunbolist:[]
    }
  },
  mounted() {
    console.log(localStorage.houseId_id)
    let forname = JSON.parse(localStorage.getItem('item'))
    console.log(forname)
    this.forname = forname.houseName
    doGet(`${API_HOST}/api/inventory/InventoryMonitor/getFieldCount`,
    {authToken:localStorage.authToken,houseId:localStorage.houseId_id}).then(res => {
      let that = this
      if (res.data.errcode == 200) {
        console.log(res.data.dataSource)
        res.data.dataSource.list.forEach(function(val,arr){
          if (val.inventoryState == 0){
            val.inventoryState = '未盘点'
          } else {
            val.inventoryState = '已盘点'
          }
          that.tableData.push({date:arr+1,name:val.fieldCode,address:val.fieldTotal,buttonclick:val.inventoryState,null:val.fieldId,datenull:val.inventoryDealDate})
        })
      }
    })
    var date = new Date();
        var seperator1 = "-";
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        if (month >= 1 && month <= 9) {
            month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
            strDate = "0" + strDate;
        }
        var date = year + seperator1 + month + seperator1 + strDate;
        this.datefile = forname.inventoryDealDate
    doGet(`${API_HOST}/api/inventory/InventoryMonitor/getInventoryCount`,
      {authToken:localStorage.authToken,fieldId:forname.fieldId,nowDate:forname.inventoryDealDate,page:this.page,limit:6}).then(res => {
        let that = this
        if (res.data.errcode == 200) {
          console.log(res.data.dataSource)
          this.dataListindex = res.data.dataSource.list
          // this.dataList = res.data.dataSource.list
          this.null =forname.fieldId
          res.data.dataSource.list.forEach(function(val,arr){
            that.dataList.push(val.imageUrl)
            // console.log(that.dataList)
            //   if (val.inventoryState == 0){
            //     val.inventoryState = '未盘点'
            //   } else {
            //     val.inventoryState = '已盘点'
            //   }
            //   that.tableData.push({date:arr+1,name:val.fieldCode,address:val.fieldTotal,buttonclick:val.inventoryState,null:val.fieldId})
          })
          this.pantime = this.dataListindex[0].inventoryTime
          this.piglancode = this.dataListindex[0].fieldCode
          this.pigage = this.dataListindex[0].bornDay
          this.afterNumber = this.dataListindex[0].afterNumber
          this.picurl = this.dataListindex[0].imageUrl
          this.forid = this.dataListindex[0].fieldId
          if(this.dataListindex[0].inventoryState == 1){
            this.pignumber = this.dataListindex[0].afterNumber
            this.num = this.dataListindex[0].afterNumber
            this.pignumberinput = this.pignumber
            this.showdonepan = true
          } else {
            this.pignumber = this.dataListindex[0].inventoryTotal
            this.num = this.dataListindex[0].inventoryTotal
            this.pignumberinput = this.pignumber
            this.showdonepan = false
          }
          this.pignumberinput = this.pignumber
          // this.houseType = res.data.dataSource.list
        }
      })
      doGet(`${API_HOST}/api/inventory/InventoryMonitor/getInventoryDeal`,
      {authToken:localStorage.authToken,fieldId:forname.fieldId,nowDate:forname.inventoryDealDate}).then(res => {
        let that = this
        if (res.data.errcode == 200) {
          console.log(res.data.dataSource)
          // this.dataListindex = res.data.dataSource.list
          // this.dataList = res.data.dataSource.list
          res.data.dataSource.list.forEach(function(val,arr){
            that.tableData2.push({date:arr+1,name:val.inventoryDealTime,address:val.inventoryTotal,buttonclick:'查看',null:val.imageUrl})
            // console.log(that.dataList)
            //   if (val.inventoryState == 0){
            //     val.inventoryState = '未盘点'
            //   } else {
            //     val.inventoryState = '已盘点'
            //   }
            //   that.tableData.push({date:arr+1,name:val.fieldCode,address:val.fieldTotal,buttonclick:val.inventoryState,null:val.fieldId})
          })
          // this.houseType = res.data.dataSource.list
        }
      })
  },
  methods: {
    cancel(){
      this.isshowchangenumber = false
    },
    surechangsure(){
      // this.isshowchangenumber = false
      doGet(`${API_HOST}/api/inventory/inventoryInfo/updateInventory`,
    {fieldId:this.forid,afterNumber:Number(this.num),imageUrl:this.picurl,frontNumber:this.afterNumber,authToken:localStorage.authToken}).then(res => {
      // let that = this
      console.log(res)
      if (res.data == "success") {
        console.log(res.data.dataSource)
        this.isshowchangenumber = false
        this.pignumber = this.num
        this.showdonepan = true
        this.pignumberinput = this.num
        this.tableData=[]
        doGet(`${API_HOST}/api/inventory/InventoryMonitor/getFieldCount`,
          {authToken:localStorage.authToken,houseId:localStorage.houseId_id}).then(res => {
            let that = this
            if (res.data.errcode == 200) {
              console.log(res.data.dataSource)
              res.data.dataSource.list.forEach(function(val,arr){
                if (val.inventoryState == 0){
                  val.inventoryState = '未盘点'
                } else {
                  val.inventoryState = '已盘点'
                }
                that.tableData.push({date:arr+1,name:val.fieldCode,address:val.fieldTotal,buttonclick:val.inventoryState,null:val.fieldId,datenull:val.inventoryDealDate})
              })
            }
          })
      //   let forname = JSON.parse(localStorage.getItem('item'))
      //   console.log(forname)
      //   this.forname = forname.houseName
      //   doGet(`${API_HOST}/api/inventory/InventoryMonitor/getInventoryDeal`,
      // {authToken:localStorage.authToken,fieldId:forname.fieldId,nowDate:forname.inventoryDealDate}).then(res => {
      //   let that = this
      //   if (res.data.errcode == 200) {
      //     console.log(res.data.dataSource)
      //     // this.dataListindex = res.data.dataSource.list
      //     // this.dataList = res.data.dataSource.list
      //     res.data.dataSource.list.forEach(function(val,arr){
      //       that.tableData2.push({date:arr+1,name:val.inventoryDealTime,address:val.inventoryTotal,buttonclick:'查看',null:val.imageUrl})
      //       // console.log(that.dataList)
      //       //   if (val.inventoryState == 0){
      //       //     val.inventoryState = '未盘点'
      //       //   } else {
      //       //     val.inventoryState = '已盘点'
      //       //   }
      //       //   that.tableData.push({date:arr+1,name:val.fieldCode,address:val.fieldTotal,buttonclick:val.inventoryState,null:val.fieldId})
      //     })
      //     // this.houseType = res.data.dataSource.list
      //   }
      // })
      this.$forceUpdate()
        this.$message({
          message: '校正成功',
          type: 'success'
        })
        // res.data.dataSource.list.forEach(function(val,arr){
        //   if (val.inventoryState == 0){
        //     val.inventoryState = '未盘点'
        //   } else {
        //     val.inventoryState = '已盘点'
        //   }
        //   that.tableData.push({date:arr+1,name:val.fieldCode,address:val.fieldTotal,buttonclick:val.inventoryState,null:val.fieldId,datenull:val.inventoryDealDate})
        // })
        // this.houseType = res.data.dataSource.list
      }
    })
    },
    handleChange(value) {
      // console.log(value);
      this.pignumberinput = value
      this.pignumberinput = this.pignumber
    },
    clicksave(){
      this.isshowchangesave = true
    },
    cancelsave(){
      this.isshowchangesave = false
    },
    cancelpic(){
      this.ishowpic = false
    },
    savenumber(){
      // fileName='+item+'
      // window.open('http://192.168.1.19/screen/dist/index.html#/?localStorage.authToken='+data.dataSource.list[0].authToken+'')
      var url ='http://112.103.160.4:33333/api/inventory/InventoryMonitor/createInventoryDeal?authToken='+localStorage.authToken+''
      doPost(url,
    {fieldId:this.forid,pigTotal:this.pignumberinput,image:this.picurl,createUser:localStorage.uid}).then(res => {
      let that = this
      if (res.data.errcode == 200) {
        console.log(res.data.dataSource)
        this.isshowchangesave = false
        let forname = JSON.parse(localStorage.getItem('item'))
        console.log(forname)
        this.forname = forname.houseName
        doGet(`${API_HOST}/api/inventory/InventoryMonitor/getInventoryDeal`,
        {authToken:localStorage.authToken,fieldId:this.forid,nowDate:forname.inventoryDealDate}).then(res => {
          let that = this
          that.tableData2 = []
          if (res.data.errcode == 200) {
            console.log(res.data.dataSource)
            // this.dataListindex = res.data.dataSource.list
            // this.dataList = res.data.dataSource.list
            res.data.dataSource.list.forEach(function(val,arr){
              that.tableData2.push({date:arr+1,name:val.inventoryDealTime,address:val.inventoryTotal,buttonclick:'查看',null:val.imageUrl})
              // console.log(that.dataList)
              //   if (val.inventoryState == 0){
              //     val.inventoryState = '未盘点'
              //   } else {
              //     val.inventoryState = '已盘点'
              //   }
              //   that.tableData.push({date:arr+1,name:val.fieldCode,address:val.fieldTotal,buttonclick:val.inventoryState,null:val.fieldId})
            })
            // this.houseType = res.data.dataSource.list
          }
        })
        that.tableData=[]
        doGet(`${API_HOST}/api/inventory/InventoryMonitor/getFieldCount`,
          {authToken:localStorage.authToken,houseId:localStorage.houseId_id}).then(res => {
            let that = this
            if (res.data.errcode == 200) {
              console.log(res.data.dataSource)
              res.data.dataSource.list.forEach(function(val,arr){
                if (val.inventoryState == 0){
                  val.inventoryState = '未盘点'
                } else {
                  val.inventoryState = '已盘点'
                }
                that.tableData.push({date:arr+1,name:val.fieldCode,address:val.fieldTotal,buttonclick:val.inventoryState,null:val.fieldId,datenull:val.inventoryDealDate})
              })
            }
          })
        this.$forceUpdate()
        this.$message({
          message: '留存成功',
          type: 'success'
        });
        // res.data.dataSource.list.forEach(function(val,arr){
        //   if (val.inventoryState == 0){
        //     val.inventoryState = '未盘点'
        //   } else {
        //     val.inventoryState = '已盘点'
        //   }
        //   that.tableData.push({date:arr+1,name:val.fieldCode,address:val.fieldTotal,buttonclick:val.inventoryState,null:val.fieldId,datenull:val.inventoryDealDate})
        // })
        // this.houseType = res.data.dataSource.list
      }
    })
    },
    clickshowpic1(event){
      this.ishowpic = true
      this.picpop = event.null
    },
    clickshowpic(event){
      // var _this = this;
      this.dataList=[]
      this.tableData2 =[]
      this.pantime = ''
      this.piglancode = ''
      this.pigage= ''
      this.afterNumber= ''
      this.picurl= ''
      this.forid = ''
      this.pignumber= ''
      this.num = ''
      console.log(event)
      // let yy = new Date().getFullYear();
      // let mm = new Date().getMonth()+1;
      // let dd = new Date().getDate();
      // let hh = new Date().getHours();
      // let mf = new Date().getMinutes()<10 ? '0'+new Date().getMinutes() : new Date().getMinutes();
      // let ss = new Date().getSeconds()<10 ? '0'+new Date().getSeconds() : new Date().getSeconds();
      // let date = yy+'-'+mm+'-'+dd
      // let date = 
      var date = new Date();
        var seperator1 = "-";
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        if (month >= 1 && month <= 9) {
          month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
          strDate = "0" + strDate;
        }
        var date = year + seperator1 + month + seperator1 + strDate;
        console.log(date)
        this.null = event.null
        doGet(`${API_HOST}/api/inventory/InventoryMonitor/getInventoryCount`,
        {authToken:localStorage.authToken,fieldId:this.null,nowDate:event.datenull,page:this.page,limit:6}).then(res => {
        let that = this
        if (res.data.errcode == 200) {
          console.log(res.data.dataSource)
          this.dataListindex = res.data.dataSource.list
          // this.dataList = res.data.dataSource.list
          res.data.dataSource.list.forEach(function(val,arr){
            that.dataList.push(val.imageUrl)
            // console.log(that.dataList)
            //   if (val.inventoryState == 0){
            //     val.inventoryState = '未盘点'
            //   } else {
            //     val.inventoryState = '已盘点'
            //   }
            //   that.tableData.push({date:arr+1,name:val.fieldCode,address:val.fieldTotal,buttonclick:val.inventoryState,null:val.fieldId})
          })
          this.pantime = this.dataListindex[0].inventoryTime
          this.piglancode = this.dataListindex[0].fieldCode
          this.pigage = this.dataListindex[0].bornDay
          this.afterNumber = this.dataListindex[0].afterNumber
          this.picurl = this.dataListindex[0].imageUrl
          this.forid = this.dataListindex[0].fieldId
          if(this.dataListindex[0].inventoryState == 1){
            this.pignumber = this.dataListindex[0].afterNumber
            this.num = this.dataListindex[0].afterNumber
            this.showdonepan = true
          } else {
            this.pignumber = this.dataListindex[0].inventoryTotal
            this.num = this.dataListindex[0].inventoryTotal
            this.showdonepan = false
          }
          this.pignumberinput = this.pignumber
          // this.houseType = res.data.dataSource.list
        }
      })
      this.datefile = event.datenull
      doGet(`${API_HOST}/api/inventory/InventoryMonitor/getInventoryDeal`,
      {authToken:localStorage.authToken,fieldId:this.null,nowDate:event.datenull}).then(res => {
        let that = this
        if (res.data.errcode == 200) {
          console.log(res.data.dataSource)
          // this.dataListindex = res.data.dataSource.list
          // this.dataList = res.data.dataSource.list
          res.data.dataSource.list.forEach(function(val,arr){
            that.tableData2.push({date:arr+1,name:val.inventoryDealTime,address:val.inventoryTotal,buttonclick:'查看',null:val.imageUrl})
            // console.log(that.dataList)
            //   if (val.inventoryState == 0){
            //     val.inventoryState = '未盘点'
            //   } else {
            //     val.inventoryState = '已盘点'
            //   }
            //   that.tableData.push({date:arr+1,name:val.fieldCode,address:val.fieldTotal,buttonclick:val.inventoryState,null:val.fieldId})
          })
          // this.houseType = res.data.dataSource.list
        }
      })
    },
    clickinput(){
      this.isshowchangenumber = true
    },
    gotoPage1() { 
      // console.log(this.page)
      // this.page>1?--this.page:1
      // this.page=++this.page
      // console.log(this.page)
      //  else{
      //   this.page = 1
      // } if (this.page ===2) {
      //   this.page =2
      // }
      // console.log(this.page)
      if ( this.page ===1) {
        this.$alert('已经是第一条了', '提示', {
          confirmButtonText: '确定',
        })
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
      var date = new Date();
        var seperator1 = "-";
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        if (month >= 1 && month <= 9) {
            month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
            strDate = "0" + strDate;
        }
        var date = year + seperator1 + month + seperator1 + strDate;
      doGet(`${API_HOST}/api/inventory/InventoryMonitor/getInventoryCount`,{
        authToken:localStorage.authToken,fieldId:this.null,nowDate:this.datefile,page:this.page,limit:6}).then(res => {
        if (res.data.errcode =='200') {
          // console.log(res.images)
          // console.log(this.page)
          console.log(this.page)
          loading.close();
          // this.picfontlist = res.data.images
          // this.pigcode=res.data.images[0].pigsNumber
          // this.pigkg = res.data.images[0].weightData
          // this.pigtime = res.data.images[0].createTime
          const  that = this
          // console.log(that.dataList)
          this.dataList = []
          res.data.dataSource.list.forEach(function(val,arr){
            that.dataList.push(val.imageUrl)
            console.log(val)
            // that.pantime = val.inventoryTime
          })
          // res.data.images.forEach(function(val,arr){
          //   that.dataList.push('http://112.103.160.4:33333/'+val.mask_image_path)
          //   // this.pigcode = val.pigsNumber
          //   // if (that.dataList.length<6) {
          //   //       // console.log(this.rr)
          //   //       that.dataList=that.dataList.push('http://112.103.160.4:33333/'+val.mask_image_path)
          //   // }
          //   // console.log(that.dataList)
          // })
        } 
      })
      }
    },
    gotoPage2(){
      // console.log(this.page)
      this.page = this.page + 1
      const loading = this.$loading({
          lock: true,
          text: 'Loading',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        });
        var date = new Date();
        var seperator1 = "-";
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        if (month >= 1 && month <= 9) {
          month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
          strDate = "0" + strDate;
        }
        var date = year + seperator1 + month + seperator1 + strDate;
        doGet(`${API_HOST}/api/inventory/InventoryMonitor/getInventoryCount`,{
        authToken:localStorage.authToken,fieldId:this.null,nowDate:this.datefile,page:this.page,limit:6}).then(res => {
          // console.log("11111111111111")
      if (res.data.errcode =='200') {
        
        // console.log(res.data.images.length)
        // if (res.data.images.length<6) {
        //   this.$alert('已经是最后一条了', '提示', {
        //   confirmButtonText: '确定',
        // });
        // loading.close();
        // }else{
        // console.log(this.page)
        loading.close();
        this.dataList = []
        this.dataListindex = res.data.dataSource.list
        this.pantime = this.dataListindex[0].inventoryTime
        // this.pantime = this.dataListindex[index].inventoryTime
        // this.pigcode=res.data.images[0].pigsNumber
        // this.pigkg = res.data.images[0].weightData
        // this.pigtime = res.data.images[0].createTime
        const that = this
        // res.data.images.forEach(function(val,arr){
          res.data.dataSource.list.forEach(function(val,arr){
            that.dataList.push(val.imageUrl)
            console.log(val)
            that.pantime = val.inventoryTime
          // })
          // this.pigcode = val.pigsNumber
          if (that.dataList.length>6) {
            that.dataList.push(val.imageUrl)
          }
          that.currentIndex = 0
          that.toright = true
          // console.log(that.currentIndex )
        })
      } else {
        this.page = 1
        var date = new Date();
        var seperator1 = "-";
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        if (month >= 1 && month <= 9) {
          month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
          strDate = "0" + strDate;
        }
        var date = year + seperator1 + month + seperator1 + strDate;
        doGet(`${API_HOST}/api/inventory/InventoryMonitor/getInventoryCount`,{
        authToken:localStorage.authToken,fieldId:this.null,nowDate:this.datefile,page:this.page,limit:6}).then(res => {
          if (res.data.errcode =='200') {
            // console.log(res.images)
            loading.close();
            // this.picfontlist = res.data.images
            // this.pigcode=res.data.images[0].pigsNumber
            // this.pigkg = res.data.images[0].weightData 
            // this.pigtime = res.data.images[0].createTime
            const  that = this
            that.dataList = []
            res.data.images.forEach(function(val,arr){
              that.dataList.push(val.imageUrl)
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
        this.pantime = this.dataListindex[index].inventoryTime
        // this.pignumber = this.dataListindex[index].inventoryTotal
        this.piglancode = this.dataListindex[index].fieldCode
        this.pigage = this.dataListindex[index].bornDay
        // this.num = this.dataListindex[index].inventoryTotal
        this.picurl = this.dataListindex[index].imageUrl
        this.forid = this.dataListindex[index].fieldId
        if(this.dataListindex[0].inventoryState == 1){
            this.pignumber = this.dataListindex[0].afterNumber
            this.num = this.dataListindex[0].afterNumber
            this.showdonepan = true
          } else {
            this.pignumber = this.dataListindex[0].inventoryTotal
            this.num = this.dataListindex[0].inventoryTotal
            this.showdonepan = false
          }
          this.pignumberinput = this.pignumber
        // loading.close();
        // this.$forceUpdate();
  },
    handleCurrentChange(val){
      this.currentRow = val
    },
    getRowClass ({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        return 'background:#030c1b;border:1px solid #365595!important'
      } else {
        return 'background:#030c1b;border:1px solid #365595!important'
      }
    },
    rowstyle({ row, column, rowIndex, columnIndex }){
      // if (rowIndex === 0) {
      return 'background:#030c1b;border:1px solid #365595!important'
      // } else {
        // return 'background:#101239'
      // }
    },
    tocodehome(){
      this.$router.push({path: '/'})
    },
    tohome(){
      // console.log(1111111)
      this.$router.push({path: '/pannumber'})
    },
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
}
</script>
<style>
body{
  margin: 0px;
}
.clickpic{
  width:140px;height:100px;padding:4px;border:1px solid #fff;
}
el-table tbody tr:hover>td { 
    background-color:#3c3c3c!important
}
/* .el-table--border::after, .el-table--group::after, .el-table::before{
  background-color: #000 !important;
} */
.el-table__body-wrapper::-webkit-scrollbar {
     /*width: 0;宽度为0隐藏*/
    width: 0px !important;
  }
  .el-table td.gutter, .el-table th.gutter {
    width: 0px !important;

}
.el-table--border, .el-table--group, .el-table td, .el-table th.is-leaf{
    border-color: #365595;
}
.el-table--border:after, .el-table--group:after, .el-table:before{
    background-color: #365595;
    content: "";
    position: absolute;
    z-index: 1;
}
.current-row > td {
   background: #02274c !important;
}
.el-table tbody tr:hover>td  /deep/{ 
    background-color:#02274c!important
}
/* .dv-border-box-1 {
  width: 500px;
  height: 320px;
}
.nameTextStyle {
  fill: '#fff',

}
.dv-scroll-board{
  width:320px;
  height: 180px;
} 
.dv-border-box-7 {

  width: 490px;
  height: 320px;
}

#myPlayer{
  margin-top: 20px;
}
#myPlayer1{
  margin-top: 20px;

} */
.backg{
  background-image:url(./img/background.png)!important;width: 1920px;height: 1080px;
}
.el-input__inner{
    -webkit-appearance: none;
    background-color: #32549e;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #DCDFE6;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    color: #fff;
    display: inline-block;
    font-size: 35px!important;
    height: 110px!important;
    line-height: 40px!important;
    outline: 0;
    padding: 0 15px;
    -webkit-transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    width: 100%;
}
.el-input-number {
    position: relative;
    display: inline-block;
    width: 180px;
    line-height: 108px;
}
.el-input-number__decrease, .el-input-number__increase {
    position: absolute;
    z-index: 1;
    top: 1px;
    width: 40px;
    height: auto;
    text-align: center;
    background: #32549e;
    color: #fff;
    cursor: pointer;
    font-size: 13px;
}
</style>