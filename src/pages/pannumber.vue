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
      <div style="display: flex;justify-content: flex-start;align-items: center;padding: 10px;margin-left: 20px;margin-top: 20px;">
        <div>
          <div style="color:#0392ca;margin-left:15px;font-size:24px;font-weight:600;letter-spacing:3px;position: absolute;top:150px;left: 1500px;">{{gettime}}</div>
      <div style="width: 580px;height: 386px;border: 1px dashed #365595;">
        <div style="color: #0190d7;font-size: 28px;font-weight: 600;width: 180px;">猪只统计</div>

        <div style="display: flex;justify-content: space-between;align-items: center;margin-top: -50px;">
        <div style="flex-wrap: wrap;margin-top: -100px;display: flex;justify-content: flex-start;align-items: flex-start;">
        <div @click="houseindex(item)" v-for="(item,index) in houseType" 
          style="border: 0;height: 35px;color: #0190d7;margin-left: 35px;font-size: 22px;font-weight: 600;text-indent: 0px;">
          {{item.houseTypeName}}:{{item.houseTypeTotal}}</div>
        </div>
          <div id="main1" style="float:left;width:70%;height: 420px" />
        <!-- <dv-charts style="margin-left:20px;width: 100%;height: 100%;" :option="optionbing" /> -->
      </div>
    </div>
    <div style="width:580px;border: 1px dashed #365595;margin-top: 20px;height: 394px;">
      <div style="display: flex;justify-content: flex-start;align-items: center;padding: 5px;">
      <div style="font-size: 28px;font-weight: 700;margin-left: 20px;color: #0190d7;">{{houseTypeName}}</div><div style="margin-left: 20px;font-size: 28px;font-weight: 700;color: #0190d7;">在栏:{{houseTotal}}头</div>
    </div>
      <el-table
      :data="tableData"
      height="300"
      @row-click = "clickrow"
      :header-cell-style="getRowClass"
      :cell-style="rowstyle"
      highlight-current-row
      @current-change="handleCurrentChange"
      border
      style="width: 500px;margin-left: 30px;background:#030c1b;color:#8db6d4;border-color: #365595!important;overflow: hidden;">
      <el-table-column
      prop="houseId"
      v-if=false
      label="序号"
      width="0">
    </el-table-column>
      <el-table-column
        prop="date"
        label="序号"
        width="125">
      </el-table-column>
      <el-table-column
        prop="name"
        label="栋舍名称"
        width="125">
      </el-table-column>
      <el-table-column
        prop="address"
        width="125"
        label="猪只头数">
      </el-table-column>
      <el-table-column
        prop="buttonclick"
        label="操作">
      </el-table-column>
    </el-table>
  </div>
</div>
<div class="content" style="width: 1580px;height: 826px;display: flex;justify-content: flex-start;align-items: flex-start;flex-wrap: wrap;overflow-x: hidden;overflow-y: scroll;margin-left: 10px;">
    <div @click="topicpage(item)"  v-for="(item,index) in piclist" style="display: flex;justify-content: center;align-items: center;flex-wrap: wrap;width: 580px;border: 1px dashed #365595;margin: 10px;height: 390px;">
      <img style="width: 580px;height: 320px;" :src="item.imageUrl" alt="">
      <div style="display: flex;justify-content: center;align-items: center;">
        <div style="margin-left: 4px;font-size: 20px;font-weight: 600;color: #0190d7;">{{item.houseName}}</div>
        <div style="margin-left: 10px;font-size: 20px;font-weight: 600;color: #0190d7;">{{item.fieldCode}}栏</div>
        <div style="margin-left: 10px;font-size: 20px;font-weight: 600;color: #0190d7;">日龄{{item.bornDay}}天</div>
        <div style="margin-left: 10px;font-size: 20px;font-weight: 600;color: #0190d7;">{{item.fieldTotal}}头</div>
      </div>
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
import { doGet }  from '../api/index.js'
import { API_HOST }  from '../api/api.js'
Vue.use(dataV)
import '../../node_modules/echarts/map/js/china.js'
export default {
  name: "pannumber",
  data () {
    return {
      forname:localStorage.farmNamex,
      housename:localStorage.groupName,
      optionbing:{},
      houseType:[],
      tableData:[],
      piclist:[],
      houseTypeName:'',
      houseTotal:'',
      bingtu:[],
      idfirst:'',
      gettime:''
    }
  },
  mounted() {
    console.log(localStorage.groupName)
    try{
      window.setInterval(() => {
        setTimeout(  this.getTime() , 0)
      }, 1000)
    } catch(err) {
      console.log('时间')
    }
    doGet(`${API_HOST}/api/inventory/InventoryMonitor/getHouseTypeCount`,{authToken:localStorage.authToken,type:0,farmId:localStorage.farm_id}).then(res => {
      let that = this
      if (res.data.errcode == 200) {
        // console.log(res.data.dataSource.list[0])
        that.houseTypeName = res.data.dataSource.list[0].houseTypeName
        that.houseTotal = res.data.dataSource.list[0].houseTotal
        that.houseType = res.data.dataSource.list
        doGet(`${API_HOST}/api/inventory/InventoryMonitor/getHouseCount`,
        {authToken:localStorage.authToken,type:res.data.dataSource.list[0].houseType,farmId:localStorage.farm_id}).then(res => {
          let that = this
          if (res.data.errcode == 200) {
            // console.log(res.data.dataSource)
            // console.log(res.data.dataSource.list[0])
            this.idfirst = res.data.dataSource.list[0].id
            doGet(`${API_HOST}/api/inventory/InventoryMonitor/getFieldCount`,
            {authToken:localStorage.authToken,houseId:res.data.dataSource.list[0].id}).then(res => {
              let that = this
              if (res.data.errcode == 200) {
                // console.log(res.data.dataSource)
                // res.data.dataSource.list.forEach(function(val,arr){
                //   that.tableData.push({date:arr+1,name:val.houseName,address:val.houseTotal,buttonclick: '操作',houseId:val.id})
                // });
                // this.houseType = res.data.dataSource.list             
                this.piclist = res.data.dataSource.list
              }
            })
            res.data.dataSource.list.forEach(function(val,arr){
              that.tableData.push({date:arr+1,name:val.houseName,address:val.houseTotal,buttonclick: '查看',houseId:val.id})
            })
            // this.houseType = res.data.dataSource.list
          }
        })
        res.data.dataSource.list.forEach(item => {
          let pigtou = item.houseTypeName+':'+item.houseTotal+'头'
          that.bingtu.push({name:pigtou,value:item.houseTotal})
        })
        this.initData()
      }
    })
  },
  methods: {
    topicpage(item){
      // localStorage['item'] = item
      console.log(item)
      localStorage['houseId_id'] = item.houseId
      localStorage.setItem('item', JSON.stringify(item))
      this.$router.push({path: '/picpan',
      // query: {
      //       item: item,
      //       houseTotal: this.houseTotal
      //     }
      })
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
    initData() {
      // 基于准备好的dom，初始化echarts实例
      const myChart = echarts.init(document.getElementById('main1'))
        myChart.setOption({
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} ' // 具体a b c d 代表的属性看下面注释啦
        },
        series: [
          {
            name: '头数', // formatter 中的a
            type: 'pie',
            radius: '50%',
            center: ['50%', '60%'],
            data: this.bingtu, // data 中的name为formatter中的 b；data中的value呢就是formatter中c；至于d就是Echarts计算出来的百分比啦；itemStyle:为饼图每个扇形的颜色；label为指示线后面的文字的样式，labelLine为指示线的颜色 
            color: ['#4B96E8','#635299','#883b4f'],
            label: {
              normal: {
                show: true,
                textStyle: {
                  fontWeight: 400,
                  fontSize: 12 // 文字的字体大小
                },
                formatter: '{b}' // 这里为指示线后面的提示信息，这里的换行要用\n 与上面tooltips中的formatter换行不同滴
              }
            },
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      })
      window.onresize = myChart.resize  //自适应浏览器窗口的大小
    },
    tocodehome(){
      this.$router.push({path: '/'})
    },
    houseindex(item){
      this.tableData = []
      this.piclist = []
      this.houseTypeName = item.houseTypeName
      this.houseTotal = item.houseTotal
      localStorage['type'] = item.houseType
      doGet(`${API_HOST}/api/inventory/InventoryMonitor/getHouseCount`,{authToken:localStorage.authToken,type:item.houseType,farmId:localStorage.farm_id}).then(res => {
      let that = this
      if (res.data.errcode == 200) {
        console.log(res.data.dataSource)
        res.data.dataSource.list.forEach(function(val,arr){
          that.tableData.push({date:arr+1,name:val.houseName,address:val.houseTotal,buttonclick: '查看',houseId:val.id})
        })
        this.idfirst = res.data.dataSource.list[0].id
            doGet(`${API_HOST}/api/inventory/InventoryMonitor/getFieldCount`,
            {authToken:localStorage.authToken,houseId:res.data.dataSource.list[0].id}).then(res => {
              let that = this
              if (res.data.errcode == 200) {
                // console.log(res.data.dataSource)
                // res.data.dataSource.list.forEach(function(val,arr){
                //   that.tableData.push({date:arr+1,name:val.houseName,address:val.houseTotal,buttonclick: '操作',houseId:val.id})
                // });
                // this.houseType = res.data.dataSource.list
                this.piclist = res.data.dataSource.list
              }
            })
        // this.houseType = res.data.dataSource.list
      }
    })
    },
    clickrow(event){
      this.piclist = []
      console.log(event)
      // this.idfirst = event.houseId
      console.log(this.idfirst)
      
      doGet(`${API_HOST}/api/inventory/InventoryMonitor/getFieldCount`,{authToken:localStorage.authToken,houseId:event.houseId}).then(res => {
        let that = this
        if (res.data.errcode == 200) {
          console.log(res.data.dataSource)
          // res.data.dataSource.list.forEach(function(val,arr){
          //   that.tableData.push({date:arr+1,name:val.houseName,address:val.houseTotal,buttonclick: '操作',houseId:val.id})
          // });
          // this.houseType = res.data.dataSource.list
          this.piclist = res.data.dataSource.list
        }
      })
    },
    tohome(){
      // console.log(1111111)
      this.$router.push({path: '/cf'})
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
  }
}
</script>
<style>
body{
  margin: 0px;
}
.content::-webkit-scrollbar {
  display: none;/*隐藏滚动条*/
}
.backg{
  background-image:url(./img/background.png)!important;width: 1920px;height: 1080px;
}
el-table tbody tr:hover>td { 
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
    border-color: #365595;
}
.el-table--border:after, .el-table--group:after, .el-table:before {
    background-color: #365595 ;
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
.el-table--border::after, .el-table--group::after, .el-table::before  /deep/{
    content: '';
    position: absolute;
    background-color: #365595;
    z-index: 1;
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
</style>