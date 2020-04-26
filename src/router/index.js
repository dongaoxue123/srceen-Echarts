import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Video from '@/pages/video'
import Text from '@/pages/text'
import Text1 from '@/pages/text1'
import login from '@/pages/login'
import HelloWorldcf from '@/components/HelloWorldcf'
import videoMonitoring from '@/pages/videoMonitoring'
import pictureMonitoring from '@/pages/pictureMonitoring'
import Em from '@/pages/emptyPage'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },   
    
    {
      path: '/cf',
      name: 'HelloWorldcf',
      component: HelloWorldcf
    },{
      path: '/video',
      name: 'Video',
      component: Video
    },    {
      path: '/text',
      name: 'Text',
      component: Text
    },    {
      path: '/text1',
      name: 'Text1',
      component: Text1
    },    {
      path: '/login',
      name: 'login',
      component: login
    }, {
      path: '/videoMonitoring',
      name: 'videoMonitoring',
      component: videoMonitoring
    },    {
      path: '/pictureMonitoring',
      name: 'pictureMonitoring',
      component: pictureMonitoring
    },    {
      path: '/emptyPage',
      name: 'Em',
      component: Em
    }
  ]
})
