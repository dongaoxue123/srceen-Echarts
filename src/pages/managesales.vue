<template>
  <div>
    <div class="backimg">
      <div style="display: flex;justify-content: space-between;align-items: center;padding-top: 10px;padding-top: 12px;">
        <!-- <dv-decoration-11 @click="tohome" style="width:546px;height:106px;color:#237df5;font-size:40px;font-weight:700;letter-spacing:8px"> -->
          <dv-decoration-8 style="width:650px;height:50px;" />
          <div @click="tohome" style="width:546px;color:#237df5;font-size:40px;font-weight:700;letter-spacing:8px">
            CF生产管理监控平台
          </div>
        <dv-decoration-8 :reverse="true" style="width:650px;height:50px;" />
    </div>
    <div style="display: flex;justify-content: center;align-items: center;">
      <img src="./img/微信截图_20200326141835.png" alt="">
    </div>
      <div style="display: flex;justify-content: center;align-items: center;">
        <div style="width: 590px;height: 300px;border: 1px dashed #365595;">
          
        </div>
        <div style="width: 590px;height: 300px;border: 1px dashed #365595;margin: 30px;">
          
        </div>
        <div style="width: 590px;height: 300px;border: 1px dashed #365595;">
          
        </div>
      </div>
      <div style="display: flex;justify-content: center;align-items: center;">
        <div style="width: 1080px;height: 300px;border: 1px dashed #365595;">
          
        </div>
        <div style="width: 720px;height: 300px;border: 1px dashed #365595;margin-left: 30px;">
          
        </div>
      </div>
      <div style="display: flex;justify-content: center;align-items: center;margin-top: 30px;">
        <div style="width: 1080px;height: 213px;border: 1px dashed #365595;">
           
        </div>
        <div style="width: 720px;height: 213px;border: 1px dashed #365595;margin-left: 30px;">
          
        </div>
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
    name: "managesales",
    inject: ["reload"],
    data() {
      return {

      }
    },
    mounted() {

    },
    methods:{
      tohome(){
        // console.log(111)
        this.$router.push({path: '/'})
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

  .backimg{
    background-image: url(./img/background.png);
    width: 1920px;
    height: 1080px;
  }
  </style>