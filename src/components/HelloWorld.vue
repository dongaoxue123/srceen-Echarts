<template>
  <div class="backimg" style="width: 1920px;height: 1080px;background: #000;">
    <h2 @click="alertmune" style="color: #fff;position: absolute;top: 20px;left:800px;z-index: 200;font-size:40px;font-weight:500;letter-spacing:8px">守望者监控平台</h2>
    <div style="position: absolute;top: 20px;left:50px;z-index: 200;"><img style="width: 200px;height: 50px;" src="../pages/img/logo.png" alt=""></div>
   <!-- <div  style="color: #fff;position: absolute;top: 20px;left:300px;z-index: 200;font-size: 20px;">{{groupName}}</div> -->
    <el-popover
      placement="bottom"
      style="position: absolute;top: 20px;left:1750px;z-index: 200;"
      width="200"
      trigger="click">
      <div style="padding: 5px;">
        集团：{{groupName}}
      </div>
      <div style="padding: 5px;">
       角色：{{roleName}}
      </div>
      <div style="padding: 5px;" @click="tologin">
        <a>退出</a>
      </div>
      <el-button style="background: #000;border: 1px solid #000;" slot="reference">
      <div style="position: absolute;top: 0px;left:0px;z-index: 300;width: 40px;height: 40px;background: #fff;border-radius: 50%;line-height: 40px;"><i style="font-size: 24px;" class="el-icon-user-solid"></i></div>
    </el-button>
    </el-popover>
    <!-- <div class="amap-page-container">
    <el-amap vid="amap" :plugin="plugin"  class="amap-demo" :center="center" style="width: 1000px;height: 500px;">
    </el-amap> 
    <el-dialog
    title="提示"
    :visible.sync="dialogVisible"
    width="30%"
    >
    <div>
    <el-button @click="toCf" plain style="width: 80%;height: 50px;">CF猪场数据监控平台</el-button>
    <el-button plain style="width: 80%;height: 50px;margin:0;margin-top: 20px;">CF数据采集监控平台</el-button>
    <el-button @click="tomp4" plain style="width: 80%;height: 50px;margin:0;margin-top: 20px;">CF转栏监控平台</el-button>
    </div> 
    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
    </span>
    </el-dialog> -->
  <div style="width: 1920px;height: 1080px;background: #000;opacity: 0.8;position: absolute;top: 0;left: 0;z-index: 200;" v-if="ispop" >
    <div  style="width: 360px;height: 225px;background: #3e568f;opacity: 0.8;position: absolute;left: 750px;top: 250px;z-index: 200;border-radius: 10px;">
      <div style="width: 340px;height: 40px;background: #1378ed;z-index: 250;opacity: 1;border-radius: 10px;display: flex;justify-content: space-between;align-items: center;padding-left: 10px;padding-right: 10px;">
      <div style="color: #fff;font-size: 14px;">平台切换</div>
      <i @click="closePop" style="color: #fff;font-size: 18px;" class="el-icon-close"></i>
      </div>
      <button @click="toCf"  style="width: 240px;height: 35px;margin-top: 20px;background: #09276e;border: 0;border-radius: 5px;color: #fff;">CF数据采集监控平台</button>
      <button @click="toDIS" plain style="width:240px;height: 35px;margin:0;margin-top: 20px;background: #09276e;border: 0;border-radius: 5px;color: #fff;">守望者监控平台</button>
      <button @click="tomp4" style="width: 240px;height: 35px;margin:0;margin-top: 20px;background: #09276e;border: 0;border-radius: 5px;color: #fff;">猪场生产管理监控平台</button>
      <!-- <button style="width: 200px;height: 50px;background:#4f4850 ;border: 2px solid #303136;margin-top: 100px;border-radius: 10px;color: #aba9b0;font-size: 18px;">CF数据监控平台</button> -->
    </div>
  </div>
  <!-- <dv-border-box-7 :color="['#4f484f', '#fff']" v-if="ispop" style="height:310px;width: 400px;position: absolute;left: 750px;top: 500px;z-index: 200;">
  <button style="width: 200px;height: 50px;background:#4f484f ;border: 2px solid #303136;margin-top: 100px;border-radius: 10px;color: #aba9b0;font-size: 18px;">CF数据监控平台</button>
  </dv-border-box-7> -->
  <div class="echarts">
    <div :style="{height:'800px',width:'100%'}"  ref="myEchart"></div>
  </div>
  <div style="position: absolute;top: 140px;right: 100px;">
    <el-table
      :data="tableList1"
      :header-cell-style="getRowClass"
      class="abbe"
      :cell-style="rowstyle"
      @row-click = "clickrow"
      highlight-current-row
      @current-change="handleCurrentChange"
      height="180"
      border
      style="width: 300px;background: #000;border:1px solid #fff!important">
    <el-table-column
      v-if=false
      prop="id"
      label=""
      width="0">
    </el-table-column>
    <el-table-column
    v-if=false
    prop="farmIds"
    label=""
    width="0">
  </el-table-column>
    <el-table-column
      prop="date"
      label="序号"
      width="50">
    </el-table-column>
    <el-table-column
      prop="name"
      label="猪场名称"
      width="150">
    </el-table-column>
    <el-table-column
      prop="address"
      width="110"
      label="地区">
    </el-table-column>
    </el-table>
  </div>
  <div style="position: absolute;top: 400px;right: 100px;">
    <el-table
    :data="tableList2"
    :header-cell-style="getRowClass"
    :cell-style="rowstyle"
    class="abbe"
    @row-click = "clickrowtopage"
    @current-change="handleCurrentChange"
    height="218"
    border
    style="width: 300px;background: #000;border:1px solid #fff !important">
    <el-table-column
      v-if=false
      prop="id"
      label=""
      width="0">
    </el-table-column>
    <el-table-column
    v-if=false
    prop="type"
    label=""
    width="0">
    </el-table-column>
    <el-table-column
    v-if=false
    prop="a"
    label=""
    width="0">
    </el-table-column>
    <el-table-column
    v-if=false
    prop="urla"
    label=""
    width="0">
    </el-table-column>
    <el-table-column
    v-if=false
    prop="urlb"
    label=""
    width="0">
    </el-table-column>
    <el-table-column
      prop="date"
      label="序号"
      width="50">
    </el-table-column>
    <el-table-column
      prop="name"
      label="栋舍名称"
      width="150">
    </el-table-column>
    <el-table-column
      prop="address"
      label="设备名称"
      width="150">
    </el-table-column>
    </el-table>
  </div>
  <div>
  <div style="display: flex;justify-content: space-between;align-items: center;padding-left: 50px;padding-right: 80px;margin-top: -20px;">
      <dv-border-box-10 :color="['#000000', '#00b8de']" style="width: 400px;height: 250px;margin: 10px;">
        <!-- <dv-charts style="width:400px;height:250px;margin-left:20px" :option="optionone" /> -->
        <div id="chartLineBoxmain" style="width: 100%;height: 250px;"> </div>
      </dv-border-box-10>
      <dv-border-box-10 :color="['#000000', '#00b8de']" style="width: 400px;height: 250px;margin: 10px;">
        <!-- <dv-charts style="width:400px;height:250px;margin-left:20px" :option="optiontwo" /> -->
        <div id="chartLineBoxmain1" style="width: 100%;height:250px;"> </div>
      </dv-border-box-10>
      <dv-border-box-10 :color="['#000000', '#00b8de']" style="width: 400px;height: 250px;margin: 10px;">
        <div id="chartLineBox2" style="width: 100%;height:250px;"> </div>
        <!-- <dv-charts style="width:400px;height:250px;margin-left:20px" :option="optionth" /> -->
      </dv-border-box-10>
      <dv-border-box-10 :color="['#000000', '#00b8de']" style="width: 400px;height: 250px;margin: 10px;">
        <dv-active-ring-chart :config="configround" style="width:200px;height:200px;margin-left: 90px;" />
      </dv-border-box-10>
  </div>
  </div>
</div>
</div>
</template>
<script>
import Vue from 'vue'
import echarts from "echarts"
import { AMapManager } from 'vue-amap'
import VueAMap from 'vue-amap'
import Amap from 'vue-amap'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
Vue.use(Amap)
Vue.use(VueAMap)
import { lazyAMapApiLoaderInstance } from 'vue-amap'
import { doGet }  from '../api/index.js'
import { API_HOST }  from '../api/api.js'
import dataV from '@jiaminghi/data-view'
import { scrollBoard } from '@jiaminghi/data-view'
Vue.use(dataV)
import '../../node_modules/echarts/map/js/china.js' // 引入中国地图数据
export default {
  name: "echarts",
  props: ["userJson"],
  data() {
    return {
      chart: null,
      center: [121.59996, 31.197646],
      plugin:{},
      optionone:{},
      optiontwo:{},
      optionth:{},
      showtable:true,
      congig:{},
      obj:{},
      newarr:[],
      option:{},
      option1:{},
      option2: {},
      configround:{},
      namejingwei:[],
      namejingwei1:[],
      numberlist1:[],
      numberlist2:[],
      numberlist3:[],
      numberRound:[],
      tableList2:[],
      tableList1:[],
      ispop:false,
      groupName:localStorage.groupName,
      roleName:localStorage.roleName,
      dialogVisible:false,
    }
  },
  mounted () {
    // this.$router.push('/emptyPage')
    this.showtable = true
    console.log(sessionStorage.getItem('user'))
    
    if (!localStorage.authToken) {
      // loading.close()
      this.$router.push({path: '/login'})
    }
    if (localStorage.authToken =='undefined') {
      // loading.close()
      this.$router.push({path: '/login'})
    }
    doGet(`${API_HOST}/api/datav/currencyController/getLineCharNumber`,{authToken:localStorage.authToken,lineChartType:'deviceList'}).then(res => {
      let that = this
      if (res.data.errcode == 200) {
        // console.log(res.data)
        res.data.dataSource.list.forEach(function(val,arr){
          that.numberlist1.push(parseInt(val.number))
          // console.log(that.numberlist1)
        })
        that.echarline()
        that.optionone = {
          title: {
            text: '守望者联网数量',
            style: {
              fill: '#73aae5',
              fontSize: 14,
            }
          },
          legend: {
            data: ['系列A']
          },
          xAxis: {
            name: '',
            data: ['一月','二月', '三月', '四月','五月','六月', '七月', '八月','九月','十月', '十一月'],
            nameTextStyle: {
              fill: '#fff',
              fontSize: 10
            },
            splitLine:{
              show:false
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
            name: '',
            data: 'value',
            nameTextStyle: {
              fill: '#fff',
              fontSize: 10
            },
            splitLine:{
              show:false
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
          series: [
            {
              name: '系列A',
              data: that.numberlist1,
              type: 'line',
              stack: 'a',
              fill: {
                show: true
              }
            }
          ]
        }
        //   res.data.dataSource.list.forEach(function(val,arr){
        //   that.tableList1.push({id:val.id,date:arr+1,name:val.name,address: val.city})
        // });
        // console.log(that.tableList1)
        // this.newarr.concat(this.namejingwei)
        // 
      } else {
        // alert('登录账号密码错误')
      }
    })
    doGet(`${API_HOST}/api/datav/currencyController/getLineCharNumber`,{authToken:localStorage.authToken,lineChartType:'pigList'}).then(res => {
      let that = this
      if (res.data.errcode == 200) {
        // console.log(res.data)
        res.data.dataSource.list.forEach(function(val,arr){
          that.numberlist2.push(Number(val.number))
        });
        that.echarline1()
        this.optiontwo = {
          title: {
            text: '监测母猪头数',
            style: {
              fill: '#73aae5',
              fontSize: 14,
            }
          },
          legend: {
            data: ['系列A']
          },
          xAxis: {
            name: '',
            data: ['一月','二月', '三月', '四月','五月','六月', '七月', '八月','九月','十月', '十一月'],
            nameTextStyle: {
              fill: '#fff',
              fontSize: 10
            },
            splitLine:{
              show:false
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
            name: '',
            data: 'value',
            nameTextStyle: {
              fill: '#fff',
              fontSize: 10
            },
            splitLine:{
              show:false
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
          series: [
            {
              name: '系列A',
              data: that.numberlist2,
              type: 'line',
              stack: 'a',
              fill: {
                show: true
              },
              lineArea: {
                show: true
              }
            }
          ]
        }
      }
    })
    doGet(`${API_HOST}/api/datav/currencyController/getLineCharNumber`,{authToken:localStorage.authToken,lineChartType:'hogList'}).then(res => {
      let that = this
      if (res.data.errcode == 200) {
        // console.log(res.data)
        res.data.dataSource.list.forEach(function(val,arr){
          that.numberlist3.push(Number(val.number))
        })
        that.echarline2()
        this.optionth = {
          title: {
            text: '监测肥猪头数',
            style: {
              fill: '#73aae5',
              fontSize: 14,
            }
          },
          legend: {
            data: ['系列A']
          },
          xAxis: {
            name: '',
            data: ['一月','二月', '三月', '四月','五月','六月', '七月', '八月','九月','十月', '十一月'],
            nameTextStyle: {
              fill: '#fff',
              fontSize: 10
            },
            splitLine:{
              show:false
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
            name: '',
            data: 'value',
            nameTextStyle: {
              fill: '#fff',
              fontSize: 10
            },
            splitLine:{
              show:false
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
          series: [
            {
              name: '系列A',
              data: that.numberlist3,
              type: 'line',
              stack: 'a',
              fill: {
                show: true
              },
              lineArea: {
                show: true
              }
            }
          ]
        }
      }
    })
    doGet(`${API_HOST}/api/datav/currencyController/getLineCharNumber`,{authToken:localStorage.authToken,lineChartType:'interfaceList'}).then(res => {
      let that = this
      if (res.data.errcode == 200) {
        // console.log(res.data)
        res.data.dataSource.list.forEach(function(val,arr){
          that.numberRound.push({name:val.interfaceName,value:Number(val.number)})
        })
       // console.log(that.numberRound)
        that.configround = {
          digitalFlopStyle: {
            fontSize: 15,
            fill: '#fff'
          },
          color:['#37a2da', '#32c5e9', '#67e0e3', '#9fe6b8', '#ffdb5c', '#ff9f7f', '#fb7293'],
          data: that.numberRound,
        }
      }
    })
    const loading = this.$loading({
      lock: true,
      text: 'Loading',
      spinner: 'el-icon-loading',
      background: 'rgba(0, 0, 0, 0.7)'
    })
    doGet(`${API_HOST}/api/system/farm/getListPage?page=0&limit=0`,{authToken:localStorage.authToken,id:localStorage.farm_id}).then(res => {
      let that = this
      if (res.data.errcode == 200) {
        res.data.dataSource.list.forEach(function(item,arr){
          // console.log(item)
          // this.namejingwei.push (item.latitude,item.longitude)
          // res.data.dataSource.list.forEach(function(val,arr){
          //  that.tableList1.push({id:item.id,date:arr+1,name:item.name,address: item.city})
          //  console.log(that.tableList1)
          // });
          // if (res) {
          //   res.data.dataSource.list.forEach(function(val,arr){
          // that.tableList1.push({id:item.id,date:arr+1,name:item.name,address: item.city})
          // console.log(that.tableList1)
          // });
          loading.close()
          if(item.latitude == '' || item.longitude==''){
            console.log('')
          } else {
            var name = item.name
            var value = [item.longitude,item.latitude]
            that.obj[name] = value
            // console.log(this.obj)
          }
          // console.log(this.obj)
          if(item.latitude == '' || item.longitude==''){
            console.log('')
          } else {
            var arr = {name:item.name,value:item.farmPigValue}
            that.namejingwei.push (arr)
          }
        })
        // console.log(this.namejingwei)
        that.chinaConfigure()
      } else {
        loading.close()
        // alert('登录账号密码错误')
      }
    })
    doGet(`${API_HOST}/api/system/farm/getListPage?page=0&limit=0`,{authToken:localStorage.authToken,id:localStorage.farm_id}).then(res => {
      let that = this
      if (res) {
        res.data.dataSource.list.forEach(function(val,arr){
          return that.tableList1.push({id:val.id,date:arr+1,name:val.name,address: val.city})
        })
        doGet(`${API_HOST}/api/datav/currencyController/getFarmHouseList?page=0&limit=0`,{authToken:localStorage.authToken,farmId:res.data.dataSource.list[0].id}).then(res => {
        if (res.data.errcode == 200) {
          console.log(res.data)
          res.data.dataSource.list.forEach(function(val,arr){
            that.tableList2.push({id:val.houseId,type:val.houseType,a:val.deviceCode,urla:val.deviceVideoUrl,urlb:val.ysVideoUrl,date:arr+1,name:val.houseName,address: val.deviceName,farmIds:val.farmId})
          })
          // this.newarr.concat(this.namejingwei)
          //
        } else {
          // alert('登录账号密码错误')
        }
      })
        loading.close()
      // console.log(that.tableList1)
      // this.newarr.concat(this.namejingwei)
      // 
      } else {
        // alert('登录账号密码错误')
      }
    })
  },
  beforeDestroy() {
    if (!this.chart) {
      return;
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    // mapclick(){
    //   console.log('111')
    //   // this.showtable= false
    // },
    echarline(){
      this.chartLine = echarts.init(document.getElementById('chartLineBoxmain'));
 
        // 指定图表的配置项和数据
        var option = {
            tooltip: {              //设置tip提示
                trigger: 'axis'
            },
            legend: {               //设置区分（哪条线属于什么）
                data:['守望者联网数量'],
                textStyle:{
                  color:'#73aae5',
                  fontSize: 12,
                }
            },
            color: ['#23c6f9'],       //设置区分（每条线是什么颜色，和 legend 一一对应）
            xAxis: {                //设置x轴
                type: 'category',
                boundaryGap: false,     //坐标轴两边不留白
                data:  ['一月','二月', '三月', '四月','五月','六月', '七月', '八月','九月','十月', '十一月'],
                name: 'DATE', 
                splitLine:{
              show:false
            },          //X轴 name
                nameTextStyle: {        //坐标轴名称的文字样式
                    color: '#fffff',
                    fontSize: 10,
                    padding: [0, 0, 0, 20]
                },
                axisLine: {             //坐标轴轴线相关设置。
                    lineStyle: {
                        color: '#ffffff',
                    }
                }
            },
            yAxis: {
                name: '',
                nameTextStyle: {
                    color: '#ffffff',
                    fontSize: 10,
                    padding: [0, 0, 10, 0]
                },
                axisLine: {
                    lineStyle: {
                        color: '#ffffff',
                    }
                },
                splitLine:{
                  show:false
                },
                type: 'value'
            },
            series: [
              {
                name: '守望者联网数量',
                data:  this.numberlist1,
                type: 'line',               // 类型为折线图
                lineStyle: {                // 线条样式 => 必须使用normal属性
                    normal: {
                        color: '#23c6f9',
                    }
                },
                areaStyle: {
                normal: {
                  color: {
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: "#1c526e" // 0% 处的颜色
                      }, {
                        offset: 0.7,
                        color: "#1c526e" // 100% 处的颜色
                      }],
                        globalCoord: false // 缺省为 false
                      }
                    }
                  }
              }
          ]
        };
 
        // 使用刚指定的配置项和数据显示图表。
        this.chartLine.setOption(option);
    },
    echarline1(){
      this.chartLine = echarts.init(document.getElementById('chartLineBoxmain1'));
 
        // 指定图表的配置项和数据
        var option = {
            tooltip: {              //设置tip提示
                trigger: 'axis'
            },
            legend: {               //设置区分（哪条线属于什么）
                data:['监测母猪头数'],
                textStyle:{
                  color:'#73aae5',
                  fontSize: 12,
                }
            },
            color: ['#23c6f9'],       //设置区分（每条线是什么颜色，和 legend 一一对应）
            xAxis: {                //设置x轴
                type: 'category',
                boundaryGap: false,     //坐标轴两边不留白
                data:  ['一月','二月', '三月', '四月','五月','六月', '七月', '八月','九月','十月', '十一月'],
                name: 'DATE', 
                splitLine:{
              show:false
            },          //X轴 name
                nameTextStyle: {        //坐标轴名称的文字样式
                    color: '#fffff',
                    fontSize: 10,
                    padding: [0, 0, 0, 20]
                },
                axisLine: {             //坐标轴轴线相关设置。
                    lineStyle: {
                        color: '#ffffff',
                    }
                }
            },
            yAxis: {
                name: '',
                nameTextStyle: {
                    color: '#ffffff',
                    fontSize: 10,
                    padding: [0, 0, 10, 0]
                },
                axisLine: {
                    lineStyle: {
                        color: '#ffffff',
                    }
                },
                splitLine:{
                  show:false
                },
                type: 'value'
            },
            series: [
              {
                name: '监测母猪头数',
                data:  this.numberlist2,
                type: 'line',               // 类型为折线图
                lineStyle: {                // 线条样式 => 必须使用normal属性
                    normal: {
                        color: '#23c6f9',
                    }
                },
                areaStyle: {
                normal: {
                  color: {
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: "#1c526e" // 0% 处的颜色
                      }, {
                        offset: 0.7,
                        color: "#1c526e" // 100% 处的颜色
                      }],
                        globalCoord: false // 缺省为 false
                      }
                    }
                  }
              }
          ]
        };
 
        // 使用刚指定的配置项和数据显示图表。
        this.chartLine.setOption(option);
    },
    
    echarline2(){
      this.chartLine = echarts.init(document.getElementById('chartLineBox2'));
 
        // 指定图表的配置项和数据
        var option = {
            tooltip: {              //设置tip提示
                trigger: 'axis'
            },
            legend: {               //设置区分（哪条线属于什么）
                data:['监测肥猪头数'],
                textStyle:{
                  color:'#73aae5',
                  fontSize: 12,
                }
            },
            color: ['#23c6f9'],       //设置区分（每条线是什么颜色，和 legend 一一对应）
            xAxis: {                //设置x轴
                type: 'category',
                boundaryGap: false,     //坐标轴两边不留白
                data:  ['一月','二月', '三月', '四月','五月','六月', '七月', '八月','九月','十月', '十一月'],
                name: 'DATE', 
                splitLine:{
              show:false
            },          //X轴 name
                nameTextStyle: {        //坐标轴名称的文字样式
                    color: '#fffff',
                    fontSize: 10,
                    padding: [0, 0, 0, 20]
                },
                axisLine: {             //坐标轴轴线相关设置。
                    lineStyle: {
                        color: '#ffffff',
                    }
                }
            },
            yAxis: {
                name: '',
                nameTextStyle: {
                    color: '#ffffff',
                    fontSize: 10,
                    padding: [0, 0, 10, 0]
                },
                axisLine: {
                    lineStyle: {
                        color: '#ffffff',
                    }
                },
                splitLine:{
                  show:false
                },
                type: 'value'
            },
            series: [
              {
                name: '监测肥猪头数',
                data:  this.numberlist3,
                type: 'line',               // 类型为折线图
                lineStyle: {                // 线条样式 => 必须使用normal属性
                    normal: {
                        color: '#23c6f9',
                    }
                },
                areaStyle: {
                normal: {
                  color: {
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: "#1c526e" // 0% 处的颜色
                      }, {
                        offset: 0.7,
                        color: "#1c526e" // 100% 处的颜色
                      }],
                        globalCoord: false // 缺省为 false
                      }
                    }
                  }
              }
          ]
        };
 
        // 使用刚指定的配置项和数据显示图表。
        this.chartLine.setOption(option);
    },
    tologin () {
      this.$router.push({path:'/login'})
    },
    tomp4 () {
      this.$router.push({path:'/video'})
    },
    toCf () {
      this.$router.push({path:'/cf'})
    },
    toDIS () {
      this.$router.push({path:'/'})
    },
    alertmune () {
      // this.dialogVisible = true
      this.ispop = true
    },
    clickrow (event) {
      console.log(event)
      let that = this
      that.tableList2= []
      localStorage['forname'] = event.name
      localStorage['idd'] = event.id
      doGet(`${API_HOST}/api/datav/currencyController/getFarmHouseList?page=0&limit=0`,{authToken:localStorage.authToken,farmId:event.id}).then(res => {
        if (res.data.errcode == 200) {
          console.log(res.data)
          res.data.dataSource.list.forEach(function(val,arr){
            that.tableList2.push({id:val.houseId,type:val.houseType,a:val.deviceCode,urla:val.deviceVideoUrl,urlb:val.ysVideoUrl,date:arr+1,name:val.houseName,address: val.deviceName,farmIds:event.id})
          })
          // this.newarr.concat(this.namejingwei)
        } else {
          // alert('登录账号密码错误')
        }
      })
    },
    clickrowtopage (event) {
      // console.log(event)
      localStorage['housename'] = event.name
      localStorage['urla'] = event.urla 
      localStorage['urlb'] = event.urlb
      localStorage['code'] = event.a
      localStorage['idd'] = event.farmIds
      this.eventid = event.id
      this.eventhouseType = event.type
      if(event.type == '00059'){
        this.$router.push({path:'/Text',
          query: {
            houseId: this.eventid,
            houseType: this.eventhouseType ,
          }
        })
      } else {
        this.$router.push({path:'/Text1',
          query: {
            houseId: this.eventid,
            houseType:this.eventhouseType,
          }
        })
      }
      // this.$router.push({path:'/Text',
      // query: {
      //   houseId: event.id,
      //   houseType: event.type,
      //   }
      // })
    },
    handleCurrentChange (val) {
      this.currentRow = val
    },
    getRowClass ({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        return 'background:#006b92;color:#fff;border:1px solid #fff'
      } else {
        return 'background:#006b92;color:#fff;border:1px solid #fff'
      }
    },
    rowstyle ({ row, column, rowIndex, columnIndex }) {
      // if (rowIndex === 0) {
      return 'background:#000;color:#fff;border:1px solid #fff'
      // } else {
        // return 'background:#101239'
      // }
    },
    click () {
      this.$router.push({path: '/video'})
    },
    closePop () {
      this.ispop = false
    },
    click1 () {
      this.$router.push({path: '/text'})
    },
    chinaConfigure () {
      // console.log(this.namejingwei)
      // console.log(this.namejingwei)
      let myChart = echarts.init(this.$refs.myEchart)//这里是为了获得容器所在位置
      myChart.setOption(this.option)
      var data = this.namejingwei
      var geoCoordMap = this.obj
      var convertData = function (data) {
        var res = [];
        // console.log(data)
        // console.log(data.length)
        for (var i = 0; i < data.length; i++) {
          var geoCoord = geoCoordMap[data[i].name];
          // console.log(geoCoord)
          if (geoCoord) {
            res.push({
              name: data[i].name,
              value: geoCoord.concat(data[i].value)
            })
          }
        }
        return res
      }
      // console.log(convertData(data))
      window.onresize = myChart.resize;
      myChart.setOption({ // 进行相关配置
        backgroundColor: "#000000",
        tooltip: {
          trigger: 'item',
          formatter:function(params){
            // console.log(params)
            return params.name
          }
      },// 鼠标移到图里面的浮动提示框
        hoverable: false,
        dataRange: {
          show: false,
          min: 0,
          max: 1000,
          text: ['High', 'Low'],
          realtime: true,
          calculable: true,
            symbolSize: 20,
            icon : 'circle',
          color: ['#711d8e']
        },
        //     tooltip : {
        //     trigger: 'item',
        //     formatter: '{b}',
        //     backgroundColor:'#ffffff'
        // },
        geo: { // 这个是重点配置区
          map: 'china', // 表示中国地图
          hoverable: false,
          roam: false,
          //    symbolSize: 20,
          //   icon : 'circle',
          // label: {
          //   normal: {
          //     show: false, // 是否显示对应地名
          //     textStyle: {
          //       color: '#000'
          //     }
          //   }
          // },
          emphasis: { // 对应的鼠标悬浮效果
            show: false,
            // textStyle: {
            //     color: "#00a0c9",
            //     background:'$'
            // }
            background:'#000000'
          },
          itemStyle: {
            normal: {
              borderColor: 'rgba(0, 0, 0, 0.2)',
              backgroundColor: 'rgba(0,0,0)',
            }
          }
        },
        
        series: [{
            type: 'effectScatter',
            coordinateSystem: 'geo' ,// 对应上方配置
            data:convertData(data),
            symbolSize: 16,
            // effectScatter:type,
            // data:       [{	
            //   name: 'pp',    // 数据项名称，在这里指地区名称
            //   value: [        // 数据项值
            //     116.46,     // 地理坐标，经度
            //     39.92,      // 地理坐标，纬度
            //     340         // 北京地区的数值
            //   ]},{	
            //   name: '55',    // 数据项名称，在这里指地区名称
            //   value: [        // 数据项值
            //     116.46,     // 地理坐标，经度
            //     39.92,      // 地理坐标，纬度
            //     340         // 北京地区的数值
            //   ]}],
            label: {
              normal: {
                show: false
              },
              emphasis: {
                show: false
              }
            },
            //series样式
            itemStyle: {
              normal: {
                color: '#711d8e',
                // size:300
              }
            },
            // },
            // {
            // name: '',// 浮动框的标题
            // type: 'map',
            // showLegendSymbol: false,
            // geoIndex: 0,
            // symbolSize: 20,
            // icon : 'circle',
            // zoom:1.5,
            // label: {
            //    normal: {
            //        formatter: '{b}',
            //        position: 'right',
            //        show: false
            //    },
            //    emphasis: {
            //        show: false
            //    }
          //  },
          //  itemStyle: {
          //      normal: {
          //           color: '#000'
          //      }
          //  },
            // data: [
            //   {	name: '北京',    // 数据项名称，在这里指地区名称
            //   value: [        // 数据项值
            //     116.46,     // 地理坐标，经度
            //     39.92,      // 地理坐标，纬度
            //     340         // 北京地区的数值
            //   ]}
            // ]
          },
        ]
        //  myChart.setOption(option, true);
      })
      // myChart.setOption(option, true);
      try{
      myChart.on("mousemove", function (params){
            // if(params.data.value == undefined){
            //     mapChart.dispatchAction({
            //     type: 'downplay'
            //     });
            // }
            // console.log(params.event.topTarget.__hoverStl)
            if(params.event.topTarget.__hoverStl==undefined){
              console.log('map')
            } else{
              params.event.topTarget.__hoverStl.fill = 'rgba(238,238,238)'
            }
          }
          // params.event.event.srcElement.style.background='#000000'
          // console.log(params.event.event.srcElement.style.background)
        )
      }
        catch(err){
          console.log('map')
        }
         let that = this
         that.tableList2= []
         myChart.on('click', function (params) {
         console.log(params)
         that.tableList1=[]
         that.tableList2= []
         doGet(`${API_HOST}/api/system/farm/getListPage?page=0&limit=0`,{authToken:localStorage.authToken,name:params.name}).then(res => {
      
          if (res.data.errcode == 200) {
          res.data.dataSource.list.forEach(function(val,arr){
          return that.tableList1.push({id:val.id,date:arr+1,name:val.name,address: val.city})
        });
        // this.newarr.concat(this.namejingwei)
        // 
      } else {
        // alert('登录账号密码错误')
      }
    })
    // console.log(that.tableList1)
        //  alert(params.value[2])
        //  this.showtable = true
        // //  
        //  console.log(this.showtable)
     });
    //  this.$forceUpdate()
    console.log(that.tableList1)
    }
  }
}
</script>
<style>
.dv-scroll-board{
  width:320px;
  height: 180px;
} 
.amap-demo {
      height: 700px;
    }
.current-row > td {
   background: #3c3c3c !important;
}
.el-table tbody tr:hover>td { 
    background-color:#3c3c3c!important
}
    /* .el-table--border::after, .el-table--group::after, .el-table::before{
  background-color: #000 !important;
} */
.el-table__body-wrapper::-webkit-scrollbar{
     /*width: 0;宽度为0隐藏*/
    width: 0px !important;
  }
  .el-table td.gutter, .el-table th.gutter {
    width: 0px !important;

}
.abbe.el-table--border, .el-table--group, .el-table td, .el-table th.is-leaf {
    border-color: #fff;
}
.abbe.el-table--border:after, .el-table--group:after, .el-table:before {
    background-color: #fff  ;
    content: "";
    position: absolute;
    z-index: 1;
}
.el-table td, .el-table th {
    padding: 8px 0 !important;
    min-width: 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    text-overflow: ellipsis;
    vertical-align: middle;
    position: relative;
    text-align: left;
}
/* .backimg{ */
  /* background-image: url(./background.png); */
/* } */
  </style>