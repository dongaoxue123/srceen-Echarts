<template>
  <div style="background:#000;width: 1920px;height: 1080px;">
    <h2 @click="alertmune" style="color: #fff;position: absolute;top: 20px;left:850px;z-index: 200;">守望者监控平台</h2>
   <div  style="color: #fff;position: absolute;top: 20px;left:150px;z-index: 200;font-size: 20px;">{{groupName}}</div>
    <el-popover
      placement="bottom"
      style="position: absolute;top: 20px;left:1600px;z-index: 200;"
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
      <el-button style="background: #000;
      border: 1px solid #000;" slot="reference">
      <div style="position: absolute;top: 0px;left:0px;z-index: 300;width: 40px;height: 40px;background: #fff;border-radius: 50%;line-height: 40px;"><i style="font-size: 24px;" class="el-icon-user-solid"></i></div>
    </el-button>
    </el-popover>
    <!-- <div class="amap-page-container">
    <el-amap vid="amap" :plugin="plugin"  class="amap-demo" :center="center" style="width: 1000px;height: 500px;">
  </el-amap> -->
  <el-dialog
  title="提示"
  :visible.sync="dialogVisible"
  width="30%"
  >
  <div>
  <el-button plain style="width: 80%;height: 50px;">CF猪场数据监控平台</el-button>
  <el-button plain style="width: 80%;height: 50px;margin:0;margin-top: 20px;">CF数据采集监控平台</el-button>
  <el-button @click="tomp4" plain style="width: 80%;height: 50px;margin:0;margin-top: 20px;">CF转栏监控平台</el-button>
</div>
  <!-- <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span> -->
</el-dialog>
  <div class="echarts">
    <div :style="{height:'800px',width:'100%'}"  ref="myEchart"></div>
  </div>
  <div style="position: absolute;top: 200px;right: 100px;">
    <el-table
    :data="tableList1"
    :header-cell-style="getRowClass"
    :cell-style="rowstyle"
    @row-click = "clickrow"
    highlight-current-row
    @current-change="handleCurrentChange"
    height="200"
    border
    style="width: 300px;background: #000;">
    <el-table-column
    v-if=false
    prop="id"
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
  <div style="position: absolute;top: 430px;right: 100px;">
    <el-table
    :data="tableList2"
    :header-cell-style="getRowClass"
    :cell-style="rowstyle"
    @row-click = "clickrowtopage"
    @current-change="handleCurrentChange"
    height="200"
    border
    style="width: 300px;background: #000;">
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
    <div style="display: flex;justify-content: center;align-items: center;">
      <dv-border-box-10 :color="['#000000', '#00b8de']" style="width: 400px;height: 250px;margin: 10px;">
        <dv-charts style="width:400px;height:250px;margin-left:20px" :option="optionone" />
      </dv-border-box-10>
      <dv-border-box-10 :color="['#000000', '#00b8de']" style="width: 400px;height: 250px;margin: 10px;">
        <dv-charts style="width:400px;height:250px;margin-left:20px" :option="optiontwo" />
      </dv-border-box-10>
      <dv-border-box-10 :color="['#000000', '#00b8de']" style="width: 400px;height: 250px;margin: 10px;">
        <dv-charts style="width:400px;height:250px;margin-left:20px" :option="optionth" />
      </dv-border-box-10>
      <dv-border-box-10 :color="['#000000', '#00b8de']" style="width: 300px;height: 250px;margin: 10px;">
        <dv-active-ring-chart :config="configround" style="width:200px;height:200px;margin-left: 20px;" />
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
// import { scrollBoard } from '@jiaminghi/data-view'
Vue.use(Amap);
Vue.use(VueAMap);
import { lazyAMapApiLoaderInstance } from 'vue-amap'
import { doGet }  from '../api/index.js'
import { API_HOST }  from '../api/api.js'
import dataV from '@jiaminghi/data-view'
import { scrollBoard } from '@jiaminghi/data-view'
Vue.use(dataV)
//import '../../node_modules/echarts/map/js/world.js'
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
      groupName:localStorage.groupName,
      roleName:localStorage.roleName,
      dialogVisible:false,
      header: ['列1'],
        data: [
        ['行1列1', '行1列2', '行1列3'],
        ['行2列1', '行2列2', '行2列3'],
        ['行3列1', '行3列2', '行3列3'],
        ['行4列1', '行4列2', '行4列3'],
        ['行5列1', '行5列2', '行5列3'],
        ['行6列1', '行6列2', '行6列3'],
        ['行7列1', '行7列2', '行7列3'],
        ['行8列1', '行8列2', '行8列3'],
        ['行9列1', '行9列2', '行9列3'],
        ['行10列1', '行10列2', '行10列3']
        ],    
        data1: [
        ['行1列1', '行1列2', '行1列3'],
        ['行2列1', '行2列2', '行2列3'],
        ['行3列1', '行3列2', '行3列3'],
      ]
    };
  },
  mounted () {
    this.showtable = true
    // this.tableList1 = []
    if (!localStorage.authToken) {
      this.$router.push({path: '/login'})
    }
doGet(`${API_HOST}/api/datav/currencyController/getLineCharNumber`,{authToken:localStorage.authToken,lineChartType:'deviceList'}).then(res => {
      let that = this
      if (res.data.errcode == 200) {
        // console.log(res.data)
        res.data.dataSource.list.forEach(function(val,arr){
          that.numberlist1.push(Number(val.number))
    });
    // console.log(that.numberlist1)
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
    this.optiontwo = {
      title: {
        text: '检测母猪头数',
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
        console.log(res.data)
        res.data.dataSource.list.forEach(function(val,arr){
          that.numberlist3.push(Number(val.number))
    });
    this.optionth = {
      title: {
        text: '检测肥猪头数',
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
        name: '销售额',
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
    });
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
        });
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
    
          if(item.latitude == '' || item.longitude==''){
            console.log('')
          }else {
          var name = item.name
          var value = [item.longitude,item.latitude]
          that.obj[name] = value
          // console.log(this.obj)
          }
       
          // console.log(this.obj)
          if(item.latitude == '' || item.longitude==''){
            console.log('')
          } else{
            var arr = {name:item.name,value:item.farmPigValue}
            that.namejingwei.push (arr)
          }
        });
        // console.log(this.namejingwei)
        that.chinaConfigure();
        // this.newarr.concat(this.namejingwei)
        // console.log(this.newarr)
      } else {
        alert('登录账号密码错误')
      }
    })
 
    doGet(`${API_HOST}/api/system/farm/getListPage?page=0&limit=0`,{authToken:localStorage.authToken,id:localStorage.farm_id}).then(res => {
  let that = this
      if (res) {
      res.data.dataSource.list.forEach(function(val,arr){
      return that.tableList1.push({id:val.id,date:arr+1,name:val.name,address: val.city})
    });
    loading.close();
    console.log(that.tableList1)
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
    this.chart = null;
  },
  methods: {
    // mapclick(){
    //   console.log('111')
    //   // this.showtable= false
    // },
    tologin(){
      this.$router.push({path:'/login',
      })
    },
    tomp4(){
      this.$router.push({path:'/video',
      })
    },
    toCf(){
      this.$router.push({path:'/cf',
      })
    },
    alertmune(){
      this.dialogVisible = true
    },
    clickrow(event){
      console.log(event)
      let that = this
      that.tableList2= []
      localStorage['forname'] = event.name
      localStorage['idd'] = event.id
      doGet(`${API_HOST}/api/datav/currencyController/getFarmHouseList?page=0&limit=0`,{authToken:localStorage.authToken,farmId:event.id}).then(res => {
      
      if (res.data.errcode == 200) {
        console.log(res.data)
      res.data.dataSource.list.forEach(function(val,arr){

      that.tableList2.push({id:val.houseId,type:val.houseType,a:val.deviceCode,urla:val.deviceVideoUrl,urlb:val.ysVideoUrl,date:arr+1,name:val.houseName,address: val.deviceName})
    });
    // this.newarr.concat(this.namejingwei)
    // 

    } else {
    // alert('登录账号密码错误')
      }
    })
    },
    clickrowtopage(event){
      console.log(event)
      localStorage['housename'] = event.name
      localStorage['urla'] = event.urla
      localStorage['urlb'] = event.urlb
      localStorage['code'] = event.a
      if(event.type == '00059'){
        this.$router.push({path:'/Text',
      query: {
        houseId: event.id,
        houseType: event.type,
        }
      })
    } else {
      this.$router.push({path:'/Text1',
      query: {
        houseId: event.id,
        houseType: event.type,
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
    handleCurrentChange(val){
      this.currentRow = val
    },
    getRowClass ({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        return 'background:#0086b6;color:#fff'
      } else {
        return 'background:#0086b6;color:#fff'
      }
    },
    rowstyle({ row, column, rowIndex, columnIndex }){
      // if (rowIndex === 0) {
      return 'background:#000;color:#fff'
      // } else {
        // return 'background:#101239'
      // }
    },
    click(){
      this.$router.push({path: '/video'})
    },
    click1(){
      this.$router.push({path: '/text'})
    },
    chinaConfigure () {
      // console.log(this.namejingwei)
    // console.log(this.namejingwei)
      let myChart = echarts.init(this.$refs.myEchart); //这里是为了获得容器所在位置
      myChart.setOption(this.option);
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
              // console.log(res)
            }
          }
          return res;
      };
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
        //  that.tableList1=[]
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
.el-table--border, .el-table--group, .el-table td, .el-table th.is-leaf {
    border-color: #fff !important;
}
.el-table--border:after, .el-table--group:after, .el-table:before {
    background-color: #fff !important;
    content: "";
    position: absolute;
    z-index: 1;
}
  </style>