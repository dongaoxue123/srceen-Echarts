<template>
  <div class="backg"  >
      <h1 @click="tocodehome" style="color:yellow;font-size: 36px;padding-top: 40px">{{forname}}</h1>
      <div style="color:#4a90e2;margin-left:1000px;font-weight: 600;font-size:25px;width: 200px;">{{housename}}</div>
      <div style="display: flex;justify-content: space-between;align-items: center;margin-left:80px;">
      <div style="color:#fff;margin-left:40px;font-weight: 500;font-size: 24px;">守望者编号：{{code}}</div>
      <div style="display: flex;justify-content: space-between;align-items: center;margin-left:40px;">
      <div style="color:#fff;font-weight: 500;font-size: 24px;margin: 40px;"><i style="color: red;font-size: 24px;" class="el-icon-c-scale-to-original"></i>栏位:{{lanwei}}个</div>
      <div style="color:#fff;font-weight: 500;font-size: 24px;margin: 40px;"><i style="color: red;font-size: 24px;" class="el-icon-coordinate"></i>头数:{{toushu}}头</div>
      <div style="color:#fff;font-weight: 500;font-size: 24px;margin: 40px;"><i style="color: red;font-size: 26px;" class="iconfont">&#xe659;</i>温度:{{wendu}}℃</div>
      <div style="color:#fff;font-weight: 500;font-size: 24px;margin: 40px;padding-right: 80px;"><i style="color: red;font-size: 26px;" class="iconfont">&#xeb22;</i>噪音：{{zaoyin}}dB</div>
    </div>
    </div>
    <!-- <div style="width:490px;height:360px;background:rgba(0, 0, 0, 0.4);
    display: flex;justify-content: center;align-items: center;"> -->
    <div style="display: flex;justify-content: center;align-items: center;margin-top:20px">
    <dv-border-box-1 style="width:555px;height:375px;margin: 10px;">
      <video
      id="myPlayer"
      style="width: 520px;height: 330px;"
      :src="http_url"
      controls playsinline webkit-playsinline autoplay=true>
       </video>
    </dv-border-box-1>
    <dv-border-box-1 style="width:555px;height:375px;margin: 10px;">
      <video
      id="myPlayer1"
      style="width: 520px;height: 330px;margin-top: 30px;"
      :src="http_url1"
      controls playsinline webkit-playsinline autoplay=true>
       </video>
       <!-- <img style="width: 520px;height: 330px;margin-top: 20px;" v-if="!showvideo" :src=imgsrc alt=""> -->
    </dv-border-box-1>
    <dv-border-box-1 style="width:555px;height:375px;margin: 10px;">
      <dv-charts style="width:550px;height:350px;margin-left:20px" :option="option" />
    </dv-border-box-1>
    </div>
    
    <div style="display: flex;justify-content: center;align-items: center;margin-top:50px">
    <dv-border-box-7 :color="['#151849', '#fff']" style="width:555px;height:300px;margin: 10px;">
      <div style="display: flex;justify-content:flex-start;align-items: center;color: #fff;font-size: 22px;padding: 20px;margin-top: 16px;font-weight: 700;">
      <div style="font-weight: 700;">
        
        <i style="color: red;font-size: 24px;" class="el-icon-c-scale-to-original"></i>当前栏位：{{fieldCode}}</div>
      <div style="margin-left: 150px;"><i style="color: red;font-size: 24px;" class="iconfont">&#xe607;</i>耳号：{{strainName}}</div>
    </div>
    <div style="display: flex;justify-content: flex-start;align-items: center;color: #fff;font-size: 22px;padding: 20px;margin-top: 16px;">
      <div ><i style="color: red;font-size: 24px;" class="el-icon-timer"></i>母猪重量：{{weightData}}KG</div>
      <div style="margin-left: 150px;"><i style="color: red;font-size: 24px;" class="el-icon-orange"></i>胎次：{{pigVarietyName}}</div>
    </div>
    <div style="display: flex;justify-content: flex-start;align-items: center;color: #fff;font-size: 22px;padding: 20px;margin-top: 16px;">
      <div><i style="color: red;font-size: 24px;" class="el-icon-pie-chart"></i>母猪背膘：{{pigsNumber}}</div>
      <div style="margin-left: 150px;"><i style="color: red;font-size: 24px;" class="iconfont">&#xe607;</i>配重：{{bornDay}}天</div>
    </div>
       <!-- <dv-scroll-board :rowNum=12 :config="congig" style="width:470px;height:320px;margin-left:20px" /> -->
    </dv-border-box-7>
      <dv-border-box-7 :color="['#151849', '#fff']" style="width:555px;height:300px;margin: 10px;" >
        <!-- <dv-charts style="width:580px;height:300px;margin-left:20px" :option="optionlangs" /> -->
        <dv-scroll-board :config="lunbolist"  style="width: 490px;height: 280px;margin-top: 10px;margin-left: 30px;" />
    </dv-border-box-7>
      <dv-border-box-7 :color="['#151849', '#fff']" style="width:555px;height:300px;margin: 10px;">
        <dv-charts style="width:580px;height:300px;margin-left:20px" :option="option2" />
    </dv-border-box-7>
    </div>
  <!-- </div> -->
</div>
</template>
<script>
import Vue from 'vue'
import echarts from "echarts";
import Charts from '@jiaminghi/charts'
import dataV from '@jiaminghi/data-view'
import './iconfont.css'
import { scrollBoard } from '@jiaminghi/data-view'
import { changeDefaultConfig } from '@jiaminghi/charts'
import { doGet }  from '../api/index.js'
import { API_HOST }  from '../api/api.js'
Vue.use(dataV)
//import '../../node_modules/echarts/map/js/world.js'
import '../../node_modules/echarts/map/js/china.js' // 引入中国地图数据
export default {
  name: "Text",
  data() {
    return {
      option:{},
      http_url:'',
      congig:{},
      optionlangs:{},
      option2:{},
      forname:localStorage.forname,
      lanwei:'',
      housename:localStorage.housename,
      toushu:'',
      code:localStorage.code,
      showvideo:false,
      imgsrc:'',
      wendu:'',
      zaoyin:'',
      lanweinow:'',
      pinxi:'',
      fieldCode:'',
      strainName:'',
      weightData:'',
      pigVarietyName:'',
      pigsNumber:'',
      bornDay:'',
      lunbolist:{},
      timelist:[],
      timelist1:[],
      daylist:[],
      widthlist:[],
      daylist1:[],
      widthlist1:[]

    };
  },
  updated() {
   if(this.rtmp_url!=""){
    //如果在mounted中声明，直播地址还未取到，导致视频不显示。所以放在了这里
    this.player = new EZUIPlayer('myPlayer');
    this.player = new EZUIPlayer('myPlayer1');
   }
  },
  mounted() {
    console.log(localStorage.forname)
    doGet(`${API_HOST}/api/datav/currencyController/getHouseFieldAndHogPigNumber`,{authToken:localStorage.authToken,houseId:this.$route.query.houseId,houseType:this.$route.query.houseType,}).then(res => {
      // let that = this
      if (res.data.errcode == 200) {
        console.log(res.data)
        this.lanwei = res.data.dataSource.list[0].fieldNumber
        this.toushu= res.data.dataSource.list[0].pigNumber
      }
    })
    doGet(`${API_HOST}/api/datav/currencyController/getHouseEnvironment`,{authToken:localStorage.authToken,houseId:this.$route.query.houseId}).then(res => {
          // let that = this
      if (res.data.errcode == 200) {
        console.log(res.data)
        this.wendu = res.data.dataSource.list[0].temperature
        this.zaoyin= res.data.dataSource.list[0].noise
      }
    })

    this.http_url=localStorage.urla
    this.http_url1=localStorage.urlb

      this.optionlangs = {
  title: {
    text: '周销售额趋势'
  },
  xAxis: {
    name: '第一周',
    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
  },
  yAxis: {
    name: '销售额',
    data: 'value'
  },
  series: [
    {
      data: [1200, 2230, 1900, 2100, 3500, 4200, 3985],
      type: 'bar',
      gradient: {
        color: ['#37a2da', '#67e0e3']
      }
    }
  ]
}

      this.congig = {
                    header: ['时间', '数量', '其他'],
  data: [
    ['19.2-1', '120.1', '1.1kg'],
    ['19.2-2', '111.1', '2.2kg'],
    ['19.2-3', '111.2', '3.3kg'],
    ['19.2-4', '444.2', '行4列3'],
    ['19.2-5', '312.3', '3.3kg'],
    ['19.2-6', '222.2', '行6列3'],
    ['19.2-7', '444', '行7列3'],
    ['19.2-8', '444', '3.3kg'],
    ['19.2-9', '444', '3.3kg'],
    ['19.2-10', '102', '行10列3']
  ],
  oddRowBGC: '2b4064',
  headerBGC:'2b4064',
  index: true,
  columnWidth: [50],
  align: ['center']
      }

    doGet(`${API_HOST}/api/datav/pigScreenConntroller/getDevicePositionPig`,{authToken:localStorage.authToken,houseId:this.$route.query.houseId,deviceCode:localStorage.code,farmId:localStorage.idd}).then(res => {
//       // let that = this
      if (res.data.errcode == 200) {
        console.log(res.data)
        this.fieldCode = res.data.dataSource.list[0].fieldCode
        this.strainName = res.data.dataSource.list[0].pigsNumber
        this.weightData = res.data.dataSource.list[0].weightData
        this.pigVarietyName = res.data.dataSource.list[0].parity
        this.pigsNumber = res.data.dataSource.list[0].backfatData
        this.bornDay = res.data.dataSource.list[0].days
  }
})
doGet(`${API_HOST}/api/datav/pigScreenConntroller/getFieldPigBackAndWeightList`,{authToken:localStorage.authToken,deviceCode:localStorage.code,farmId:localStorage.idd}).then(res => {
      let that = this
      if (res.data.errcode == 200) {
        console.log(res.data)
        res.data.dataSource.list.forEach(function(val,arr){
          let index = arr+1
          that.timelist = ['<div style="color:#fff;background: #4a90e2;border-radius: 50%;width:30px;height:30px;font-weight:700;text-align: center;line-height: 30px;margin-top: 10px;">'+index]
          that.timelist.push(val.date)
          that.timelist.push(val.weight)
          that.timelist1.push(that.timelist)
      // that.tableList1.push({id:val.id,date:arr+1,name:val.name,address: val.city})
    });
    that.lunbolist={
      header: ['<span style="color:#62a4fb;font-weight:700;">序号</span>', '<span style="color:#62a4fb;font-weight:700;">时间</span>', '<span style="color:#62a4fb;font-weight:700;">重量（KG）</span>'],
      headerBGC:'rgb(0,0,0,0)',
      oddRowBGC:'#253c64',
      evenRowBGC:'rgb(0,0,0,0)',
 data:that.timelist1,
//  code:this.code,
//  oddRowBGC:'#101239',
//  evenRowBGC:'#101239',
 rowNum:5,
 carousel: 'page',
 columnWidth:[100]

}
  }
})
doGet(`${API_HOST}/api/datav/pigScreenConntroller/getFieldPigBackFatAndWeightList`,{authToken:localStorage.authToken,deviceCode:localStorage.code,farmId:localStorage.idd,type:'weight'}).then(res => {
      let that = this
      if (res.data.errcode == 200) {
        console.log(res.data)
        res.data.dataSource.list.forEach(function(val,arr){
          that.daylist.push(val.date)
          that.widthlist.push(Number(val.weight))
        })
        that.option2 = {
    title: {
      text: '测重历史数据',
      style: {
        fill: 'red',
        fontSize: 14,
      }
    },
  xAxis: {
    name: ' ',
    data: that.daylist,
    splitLine:{
      show:false
    },
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
      name: '',
      data: 'value',
      splitLine:{
        show:false
      },
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
  series: [
    {
      data: that.widthlist,
      type: 'line',
      lineArea: {
        // show: true
      }
    }
  ]
}
        // this.fieldCode = res.data.dataSource.list[0].fieldCode
        // this.strainName = res.data.dataSource.list[0].strainName
        // this.weightData = res.data.dataSource.list[0].weightData
        // this.pigVarietyName = res.data.dataSource.list[0].pigVarietyName
        // this.pigsNumber = res.data.dataSource.list[0].pigsNumber
        // this.bornDay = res.data.dataSource.list[0].bornDay
  }
})
doGet(`${API_HOST}/api/datav/pigScreenConntroller/getFieldPigBackFatAndWeightList`,{authToken:localStorage.authToken,deviceCode:localStorage.code,farmId:localStorage.idd,type:'backFat'}).then(res => {
      let that = this
      if (res.data.errcode == 200) {
        console.log(res.data)
        res.data.dataSource.list.forEach(function(val,arr){
          that.daylist1.push(val.date)
          that.widthlist1.push(Number(val.weight))
        })
        console.log(that.widthlist1)
        that.option = {
    title: {
      text: '测膘历史数据',
      style: {
        fill: 'red',
        fontSize: 14,
      }
    },
  xAxis: {
    name: ' ',
    data: that.daylist1,
    splitLine:{
      show:false
    },
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
      name: '',
      data: 'value',
      splitLine:{
        show:false
      },
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
  series: [
    {
      data: that.widthlist1,
      type: 'line',
      lineArea: {
        // show: true
      }
    }
  ]
}
        // this.fieldCode = res.data.dataSource.list[0].fieldCode
        // this.strainName = res.data.dataSource.list[0].strainName
        // this.weightData = res.data.dataSource.list[0].weightData
        // this.pigVarietyName = res.data.dataSource.list[0].pigVarietyName
        // this.pigsNumber = res.data.dataSource.list[0].pigsNumber
        // this.bornDay = res.data.dataSource.list[0].bornDay
  }
})
    },
    methods: {
      tocodehome(){
        this.$router.push({path: '/'})
      }
    },
}
</script>
<style>
body{
    margin: 0px;
}
.dv-border-box-1 {
    /* position: relative; */
    width: 500px;
    height: 320px;
    /* margin-bottom:  */
}
.nameTextStyle {
  fill: '#fff',
  /* fontSize: 10 */
}
.dv-scroll-board{
  width:320px;
  height: 180px;
} 
.dv-border-box-7 {
    /* position: relative; */
    width: 490px;
    height: 320px;
}
.backg{
  background-image:url(./img/background-88VwuczRK2Rx8iRx.jpg);width: 1920px;height: 1080px;
}
#myPlayer{
  margin-top: 20px;
}
#myPlayer1{
  margin-top: 20px;
}
</style>