<template>
    <div class="goods-image">
      <!-- 大图 -->
      <div v-show="show" class="large" :style="[{backgroundImage:`url(${images[currIndex]})`}, largePosition]"></div>
      
      <!-- 小图 -->
      <ul class="small">
        <li v-for="(item, i) in images" :key="item" :class="{active: currIndex===i}">
          <img @mouseenter="currIndex=i" :src="item" alt="">
        </li>
      </ul>

      <!-- 中图 -->
      <div class="middle" ref="target">
        <img :src="images[currIndex]" alt="">
        <!-- 遮罩色块 -->
        <div v-show="show" class="layer" :style="layerPosition"></div>
      </div>
      
    </div>
  </template>
   
  <script>
  import { reactive, ref, watch } from 'vue'
  import { useMouseInElement } from '@vueuse/core'
  export default {
    name: 'GoodsImage',
    props: {
      images: {
        type: Array,
        default: () => []
      }
    },
    setup (props) {
      const currIndex = ref(0)
   
      // 1. 是否显示遮罩和大图
      const show = ref(false)
   
      // 2. 遮罩的坐标(样式)
      const layerPosition = reactive({
        top: 0,
        left: 0
      })
   
      // 3. 大图的背景坐标(样式)
      const largePosition = reactive({
        backgroundPositionX: 0,
        backgroundPositionY: 0
      })
   
      // 4. 获取监听元素的实例对象, 使用useMouseInElement函数进行获取坐标
      const target = ref(null)
      const { elementX, elementY, isOutside } = useMouseInElement(target)
   
      // 5. 监听元素坐标值的变化
      watch([elementX, elementY, isOutside], () => {
        show.value = !isOutside.value
        const position = { X: 0, Y: 0 }
   
        if (elementX.value < 100) position.X = 0
        else if (elementX.value > 300) position.X = 200
        else position.X = elementX.value - 100
   
        if (elementY.value < 100) position.Y = 0
        else if (elementY.value > 300) position.Y = 200
        else position.Y = elementY.value - 100
   
        layerPosition.left = position.X + 'px'
        layerPosition.top = position.Y + 'px'
        largePosition.backgroundPositionX = -2 * position.X + 'px'
        largePosition.backgroundPositionY = -2 * position.Y + 'px'
      })
   
      return { currIndex, show, layerPosition, largePosition, target }
    }
  }
  </script>
   
  <style scoped lang="less">
  .goods-image {
    img{
      width: 100%;
      height: 100%;
    }
    width: 480px;
    height: 400px;
    position: relative;
    display: flex;
    z-index: 500;
    .large {
      position: absolute;
      top: 0;
      left: 490px;
      width: 400px;
      height: 400px;
      box-shadow: 0 0 10px rgba(0,0,0,0.1);
      background-repeat: no-repeat;
      background-size: 800px 800px;
      background-color: #f8f8f8;
    }
    .middle {
      width: 400px;
      height: 400px;
      background: #f5f5f5;
      position: relative;
      cursor: move;
      img{
        object-fit:cover;
      }
      .layer {
        width: 200px;
        height: 200px;
        background: rgba(0,0,0,.2);
        left: 0;
        top: 0;
        position: absolute;
      }
    }
    ol,ul{
      margin: 0;
      padding: 0;
      list-style: none;
    }
    .small {

      width: 80px;
      li {
        border: 2px solid transparent;
        width: 68px;
        height: 68px;
        margin-right: 12px;
        margin-bottom: 15px;
        cursor: pointer;
        &:hover,&.active {
          border: 2px solid #d4ad6a;
        }
      }
    }
  }
  </style>