<template>
  <div class="backgtttrrr">
    <h1 @click="tocodehome" style="color:yellow;font-size: 36px;padding-top: 40px;width: 500px;margin: 0 auto;">{{forname}}</h1>
    <div style="color:#4a90e2;margin-left:1000px;font-weight: 600;font-size:25px;width: 200px;">{{housename}}</div>
    <div style="display: flex;justify-content: space-between;align-items: center;margin-left:80px;">
      <div style="color:#fff;margin-left:40px;font-weight: 500;font-size: 24px;">守望者编号：{{code}}</div>
      <div style="display: flex;justify-content: space-between;align-items: center;margin-left:40px;">
        <div style="color:#fff;font-weight: 500;font-size: 24px;margin: 40px;">
          <i style="color: red;font-size: 24px;" class="el-icon-c-scale-to-original"></i>栏位:{{lanwei}}个</div>
        <div style="color:#fff;font-weight: 500;font-size: 24px;margin: 40px;"><i style="color: red;font-size: 24px;" class="el-icon-coordinate"></i>头数:{{toushu}}头</div>
        <div style="color:#fff;font-weight: 500;font-size: 24px;margin: 40px;"><i style="color: red;font-size: 26px;" class="iconfont">&#xe659;</i>温度:{{wendu}}℃</div>
        <div style="color:#fff;font-weight: 500;font-size: 24px;margin: 40px;padding-right: 80px;"><i style="color: red;font-size: 26px;" class="iconfont">&#xeb22;</i>噪音：{{zaoyin}}dB</div>
      </div>
    </div>
    <div style="display: flex;justify-content: center;align-items: center;margin-top:20px">
      <dv-border-box-1 style="width:555px;height:375px;margin: 10px;overflow: hidden;">
        <div :style="page1style">
        <video
        id="myPlayer"
        style="width: 520px;height: 330px;"
        :src="http_url"
        controls playsinline webkit-playsinline autoplay=true>
        </video>
      </div>
      <div :style="page2style">
        <video
        id="myPlayer3"
        style="width: 520px;height: 330px;"
        :src="http_url3"
        controls playsinline webkit-playsinline autoplay=true>
        </video>
      </div>
      </dv-border-box-1>
      <div style="display: flex;justify-content: center;align-items: center;position: absolute;top: 650px;left: 130px;">
      <button @click="page1" style="background:#4a90e2 ;border: 0;border: 1px solid #fff;border-radius: 2px;color: #fff;">1</button>
      <button @click="page2" style="background:#4a90e2 ;border: 0;border: 1px solid #fff;border-radius: 2px;margin-left: 5px;color: #fff;">2</button>
    </div>
      <dv-border-box-1 style="width:555px;height:375px;margin: 10px;">
        <video
        id="myPlayer1"
        style="width: 520px;height: 330px;"
        :src="http_url1"
        controls playsinline webkit-playsinline autoplay=true>
        </video>
        <!-- <img style="width: 520px;height: 330px;margin-top: 20px;" v-if="!showvideo" :src=imgsrc alt=""> -->
      </dv-border-box-1>
      <dv-border-box-1 style="width:555px;height:375px;margin: 10px;">
        <div id="chartLineBox" style="width: 100%;height: 350px;"> </div>
        <!-- <dv-charts style="width:550px;height:350px;margin-left:20px" :option="option" /> -->
      </dv-border-box-1>
    </div>
    <div style="display: flex;justify-content: center;align-items: center;margin-top:50px">
      <dv-border-box-7 :color="['#151849', '#fff']" style="width:555px;height:300px;margin: 10px;">
        <div style="display: flex;justify-content:space-between;align-items: center;color: #fff;font-size: 22px;padding: 20px;margin-top: 16px;font-weight: 700;">
        <div style="font-weight: 700;text-indent: 0;">
          <i style="color: red;font-size: 24px;" class="el-icon-c-scale-to-original"></i>当前栏位：{{fieldCode}}
        </div>
        <div><i style="color: red;font-size: 24px;" class="iconfont">&#xe607;</i>耳号：{{strainName}}</div>
      </div>
      <div style="display: flex;justify-content: space-between;align-items: center;color: #fff;font-size: 22px;padding: 20px;margin-top: 16px;">
        <div style="font-weight: 700;"><i style="color: red;font-size: 24px;" class="el-icon-timer"></i>母猪重量：{{weightData}}KG</div>
        <div><i style="color: red;font-size: 24px;" class="el-icon-orange"></i>胎次：{{pigVarietyName}}</div>
      </div>
      <div style="display: flex;justify-content: space-between;align-items: center;color: #fff;font-size: 22px;padding: 20px;margin-top: 16px;">
        <div style="font-weight: 700;"><i style="color: red;font-size: 24px;" class="el-icon-pie-chart"></i>母猪背膘：{{pigsNumber}}mm</div>
        <div><i style="color: red;font-size: 24px;" class="iconfont">&#xe607;</i>配种：{{bornDay}}天</div>
      </div>
      </dv-border-box-7>
      <dv-border-box-7 :color="['#151849', '#fff']" style="width:555px;height:300px;margin: 10px;">
        <dv-scroll-board :config="lunbolist"  style="width: 490px;height: 280px;margin-top: 10px;margin-left: 30px;" />
      </dv-border-box-7>
      <dv-border-box-7 :color="['#151849', '#fff']" style="width:555px;height:300px;margin: 10px;">
        <div id="chartLineBox1" style="width: 100%;height: 330px;"></div>
          <!-- <dv-charts style="width:580px;height:300px;margin-left:20px" :option="option2" /> -->
      </dv-border-box-7>
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
//import '../../node_modules/echarts/map/js/world.js'
import '../../node_modules/echarts/map/js/china.js'
export default {
  name: "Text",
  data() {
    return {
      option:{},
      http_url:'',
      option2:{},
      forname:localStorage.farmNamex,
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
      widthlist1:[],
      dateList:[],
      listtt1:[],
      http_url3:'',
      page2style:'margin-top:40px',
      page1style:'',
      // show1:true
    };
  },
  updated () {
    if(this.rtmp_url!=""){
      this.player = new EZUIPlayer('myPlayer');
      this.player = new EZUIPlayer('myPlayer1');
      this.player = new EZUIPlayer('myPlayer3');
    }
  },
  mounted () {
    // console.clear()
    // this.http_url3 = 'http://hls01open.ys7.com/openlive/ce49201d5ffd4d748f28ad5a50603b2c.hd.m3u8'
    console.log(localStorage.forname)
    doGet(`${API_HOST}/api/datav/currencyController/getHouseFieldAndHogPigNumber`,{authToken:localStorage.authToken,houseId:this.$route.query.houseId,houseType:this.$route.query.houseType}).then(res => {
      // let that = this
      if (res.data.errcode == 200) {
        console.log(res.data)
        this.lanwei = res.data.dataSource.list[0].fieldNumber
        this.toushu= res.data.dataSource.list[0].pigNumber
      }
    })
    doGet(`${API_HOST}/api/datav/currencyController/getHouseEnvironment`,{authToken:localStorage.authToken,houseId:this.$route.query.houseId,houseType:this.$route.query.houseType}).then(res => {
      // let that = this
      if (res.data.errcode == 200) {
        console.log(res.data)
        this.wendu = res.data.dataSource.list[0].temperature
        this.zaoyin= res.data.dataSource.list[0].noise
      }
    })
    this.http_url=localStorage.urlb
    this.http_url3=localStorage.urla
    console.log(this.http_url)
    // this.http_url1=localStorage.urlb
    doGet(`${API_HOST}/api/system/screen/getDeviceLiveUrlList?page=1&limit=1`,{authToken:localStorage.authToken,deviceCode:localStorage.code,type:"00121"}).then(res => {
      // let that = this
      if (res.data.errcode == 200) {
        console.log(res.data)
        this.http_url1=res.data.dataSource.list[0].pullUrl
      }
    })
    window.setInterval(() => {
        // setTimeout(
          doGet(`${API_HOST}/api/datav/pigScreenConntroller/getDevicePositionPig`,{authToken:localStorage.authToken,houseId:this.$route.query.houseId,deviceCode:localStorage.code,farmId:localStorage.idd}).then(res => {
            if (res.data.errcode == "200") {
              console.log(res.data)
              this.fieldCode = res.data.dataSource.list[0].fieldCode
              this.strainName = res.data.dataSource.list[0].pigsNumber
              this.weightData = res.data.dataSource.list[0].weightData
              this.pigVarietyName = res.data.dataSource.list[0].parity
              this.pigsNumber = res.data.dataSource.list[0].backfatData
              this.bornDay = res.data.dataSource.list[0].days
            } if (res.data.errcode == "10016"){
              this.fieldCode = ''
              this.strainName = ''
              this.weightData = ''
              this.pigVarietyName = ''
              this.pigsNumber = ''
              this.bornDay = ''
            }
          })
        // , 0)
      }, 5000)
      this.timelist1 = []
      window.setInterval(() => {
        setTimeout(  
          this.timelist1 = [],
          doGet(`${API_HOST}/api/datav/pigScreenConntroller/getFieldPigBackAndWeightList`,{authToken:localStorage.authToken,deviceCode:localStorage.code,farmId:localStorage.idd}).then(res => {
            let that = this
            console.log(res.data.errcode)
            if (res.data.errcode == "200") {
              console.log(res.data)
              res.data.dataSource.list.forEach(function(val,arr){
                let index = val.date
                that.timelist = [index]
                that.timelist.push(val.weight)
                that.timelist.push(val.backfat)
                that.timelist1.push(that.timelist)
              })
              that.lunbolist={
                header: ['<div style="color:#62a4fb;font-weight:700;width:200px">时间</div>', '<span style="color:#62a4fb;font-weight:700;">体重（KG）</span>', '<span style="color:#62a4fb;font-weight:700;">背膘（mm）</span>'],
                headerBGC:'rgb(0,0,0,0)',
                oddRowBGC:'#253c64',
                evenRowBGC:'rgb(0,0,0,0)',
                data:that.timelist1,
                rowNum:5,
                waitTime:5000,
                carousel: 'page',
                columnWidth:[200]
              }
            } if (res.data.errcode == "10016") {
              console.log('text')
              that.lunbolist={
                header: ['<div style="color:#62a4fb;font-weight:700;width:200px">时间</div>', '<span style="color:#62a4fb;font-weight:700;">体重（KG）</span>', '<span style="color:#62a4fb;font-weight:700;">背膘（mm）</span>'],
                headerBGC:'rgb(0,0,0,0)',
                oddRowBGC:'#253c64',
                evenRowBGC:'rgb(0,0,0,0)',
                data:[],
                rowNum:5,
                waitTime:5000,
                carousel: 'page',
                columnWidth:[200]
              }
            }
          })
        , 0)
      }, 6000)
      let yy = new Date().getFullYear();
      let mm = new Date().getMonth()+1;
      let dd = new Date().getDate();
      let hh = new Date().getHours();
      let mf = new Date().getMinutes()<10 ? '0'+new Date().getMinutes() : new Date().getMinutes();
      let ss = new Date().getSeconds()<10 ? '0'+new Date().getSeconds() : new Date().getSeconds();
      let gettime = yy+'-'+mm+'-'+dd+' '+hh+':'+mf+':'+ss;
      // this.widthlist = []
      // that.widthlist = []
      // that.daylist= []
      window.setInterval(() => {
        setTimeout(
      doGet(`${API_HOST}/api/datav/pigScreenConntroller/getFieldPigBackFatAndWeightList`,
      {authToken:localStorage.authToken,deviceCode:localStorage.code,farmId:localStorage.idd,type:'weight',pointTime:gettime}).then(res => {
        let that = this
        if (res.data.errcode == 200) {
          console.log(res.data)
          that.listtt1 = res.data.dataSource.list[0].dateList
          console.log(that.listtt1)
          return that.listtt1
          
        }
      })
      , 0)
      }, 5000)
      window.setInterval(() => {
        setTimeout(
          this.widthlist = [],
          // that.widthlist = [],
          // that.daylist= [],
          doGet(`${API_HOST}/api/datav/pigScreenConntroller/getFieldPigBackFatAndWeightList`,
    {authToken:localStorage.authToken,deviceCode:localStorage.code,farmId:localStorage.idd,type:'weight',pointTime:gettime}).then(res => {
      let that = this
 
      if (res.data.errcode == "200") {
        console.log(res.data)
        // res.data.dataSource.list.forEach(function(val,arr){
        //   let day = val.date.substring(0,10)
        //   let day1 =  day.substring(5)
        //   console.log(day.substring(5))
        //   that.daylist.push(day1)
        //   that.widthlist.push(Number(val.weight))
        // })
        console.log(that.listtt1)
        that.listtt1 = res.data.dataSource.list[0].dateList
        that.widthlist = res.data.dataSource.list[0].monthWeightInfo
        this.echarline1()
    
      }if (res.data.errcode == "10016") {
        that.widthlist = []
        this.echarline1()
      }
      })
        , 0)
      }, 6000)   
  
    // let yy = new Date().getFullYear();
    //   let mm = new Date().getMonth()+1;
    //   let dd = new Date().getDate();
    //   let hh = new Date().getHours();
    //   let mf = new Date().getMinutes()<10 ? '0'+new Date().getMinutes() : new Date().getMinutes();
    //   let ss = new Date().getSeconds()<10 ? '0'+new Date().getSeconds() : new Date().getSeconds();
    //   let gettime = yy+'-'+mm+'-'+dd+' '+hh+':'+mf+':'+ss;
      this.widthlist1=[]
      window.setInterval(() => {
        setTimeout(
      doGet(`${API_HOST}/api/datav/pigScreenConntroller/getFieldPigBackFatAndWeightList`,
    {authToken:localStorage.authToken,deviceCode:localStorage.code,farmId:localStorage.idd,type:'backFat',pointTime:gettime}).then(res => {
      let that = this
      if (res.data.errcode == 200) {
        console.log(res.data)
        // res.data.dataSource.list.forEach(function(val,arr){
        //   // let day = val.date.substring(0,10)
        //   let day = val.date.substring(0,10)
        //   let day1 =  day.substring(5)
        //   console.log(day.substring(5))
        //   that.daylist1.push(day1)
        //   // that.daylist1.push(day)
        //   that.widthlist1.push(Number(val.backfat))
        // })
        that.listtt = res.data.dataSource.list[0].dateList
        console.log(that.listtt)
        return that.listtt 
      }
    })
    , 0)
      }, 5000)
      window.setInterval(() => {
        this.widthlist1=[],
        
        setTimeout(  
          doGet(`${API_HOST}/api/datav/pigScreenConntroller/getFieldPigBackFatAndWeightList`,
    {authToken:localStorage.authToken,deviceCode:localStorage.code,farmId:localStorage.idd,type:'backFat',pointTime:gettime}).then(res => {
      let that = this
      if (res.data.errcode == "200") {
        console.log(res.data)
        // console.log(this.listtt)
        // res.data.dataSource.list.forEach(function(val,arr){
        //   // let day = val.date.substring(0,10)
        //   let day = val.date.substring(0,10)
        //   let day1 =  day.substring(5)
        //   console.log(day.substring(5))
        //   that.daylist1.push(day1)
        //   // that.daylist1.push(day)
        //   that.widthlist1.push(Number(val.backfat))
        // })
        that.listtt = res.data.dataSource.list[0].dateList
        that.widthlist1 = res.data.dataSource.list[0].monthFatInfo
        // console.log(that.widthlist1)
        // var datalist = this.listtt
        this.echarline()
        console.log(that.widthlist1)
   
      }if (res.data.errcode == "10016") {
        that.widthlist1 = []
        this.echarline()
      }
    })
        , 0)
      }, 6000)

  },
  methods: {
    page1(){
      this.page1style ='margin-top:0px'
    },
    page2(){
      // console.log(this.page1style)
      // this.page2style = 'width: 520px;height: 130px;'
      this.page1style ='margin-top:-370px'
      // console.log(this.page1style)
      // this.show1=false
    },
    tocodehome(){
      this.$router.push({path: '/'})
    },
    echarline(){
      this.chartLine = echarts.init(document.getElementById('chartLineBox'));
 
        // 指定图表的配置项和数据
        // var list120 = []
        // for (var i= 0;i<120;i++) {
        //   list120.push(i)
        //   // console.log(i)
        // }
        // console.log( this.listtt)
        var option = {
            tooltip: {              //设置tip提示
              trigger: 'axis'
            },
            legend: {               //设置区分（哪条线属于什么）
              data:['测膘历史数据'],
              textStyle:{
                color:'red',
                fontSize: 12,
              }
            },
            color: ['#23c6f9'],       //设置区分（每条线是什么颜色，和 legend 一一对应）
            xAxis: {                //设置x轴
                type: 'category',
                boundaryGap: false,     //坐标轴两边不留白
                data: this.listtt,
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
                max: function(value) {
                  // console.log(parseInt(value.max))
                    return parseInt(value.max) + 10;
                }, 
                // min: function(value) {
                //     return value.min -20;
                // },
                splitLine:{
                  show:false
                },
                type: 'value',
                // data: ['0','5','10','15','20','25'],
            },
            series: [
              {
                name: '测膘历史数据',
                data:  this.widthlist1,
                type: 'line',               // 类型为折线图
                lineStyle: {                // 线条样式 => 必须使用normal属性
                    normal: {
                        color: 'red',
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
      this.chartLine = echarts.init(document.getElementById('chartLineBox1'));
      console.log(this.dateList)
        // 指定图表的配置项和数据
        // var list120 = []
        // for (var i= 0;i<120;i++) {
        //   list120.push(i)
        //   // console.log(i)
        // }
        var option = {
            tooltip: {              //设置tip提示
                trigger: 'axis'
            },
            legend: {               //设置区分（哪条线属于什么）
                data:['测重历史数据'],
                textStyle:{
                  color:'red',
                  fontSize: 12,
                }
            },
            color: ['#23c6f9'],       //设置区分（每条线是什么颜色，和 legend 一一对应）
            xAxis: {                //设置x轴
                type: 'category',
                boundaryGap: false,     //坐标轴两边不留白
                data: this.listtt1,
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
                max: function(value) {
                  return value.max + 40;
                },
                // data: 'value',
                type: 'value'
            },
            series: [
              {
                name: '测重历史数据',
                data:  this.widthlist,
                type: 'line',               // 类型为折线图
                lineStyle: {                // 线条样式 => 必须使用normal属性
                    normal: {
                        color: 'red',
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
.backgtttrrr{
  background-image:url(./img/background.png)!important;width: 1920px;height: 1080px;
}
#myPlayer{
  margin-top: 20px;
}
#myPlayer1{
  margin-top: 20px;
}
</style>