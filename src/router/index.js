import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    component: ()=> import('@/views/Index.vue'),
    children:[
      {
        path:'',
        component:()=>import('@/views/Home/Home')
      },
      {
        path:'/home',
        component:()=>import('@/views/Home/Home')
      },
      {
        path:'/product',
        component:()=>import('@/views/Product/Product')
      },
      {
        path:'/news',
        component:()=>import('@/views/News/News')
      },
      {
        path:'/newsDetail',
        component:()=>import('@/views/News/NewsDetail')
      },
      {
        path:'/contact',
        component:()=>import('@/views/Contact/Contact')
      },
      {
        path:'/about',
        component:()=>import('@/views/About/About')
      },
      {
        path:'/detail/:goodId',
        component:()=>import('@/views/Product/Detail')
      }
    ]
  },
  {
    path: '/Poster',
    name: 'poster',
    component: ()=> import('@/views/Poster/PosterList.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// router.beforeEach((to, from) => {
//   // ...
//   // 返回 false 以取消
 
//   let path = to.path.replace(/[\/0-9]/g,'')
//   // console.log('path',path,to);
  
//   const whiteList = ['home','product','about','news','contact','detail']
//   window.pageYOffset = 0
//   document.documentElement.scrollTop = 0
//   document.body.scrollTop = 0
//   if(whiteList.indexOf(path) > -1){
//     return true
//   }else{
//     console.log('404')
//   }

// })

export default router
