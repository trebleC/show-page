<template>
    <div class="layout">
        <tab-bar ></tab-bar>
        <div :class="['content','tab-bar-margin']">
            <router-view/>
        </div>
        <Footer></Footer>
        <el-backtop target=".content" :right="100" :bottom="100" />

    </div>
</template>
<script>
import { ref,onMounted,onUnmounted } from 'vue'
import TabBar from './TabBar.vue'
import Footer from './Footer.vue'
import PosterList from '@/views/Poster/PosterList'
export default {
    name:"Layout",
    components:{
        TabBar,
        Footer,
        PosterList,
    },
    setup(){

        return {
        
        }
    }
}
</script>
<style lang="less" scoped>
    .layout{
        max-width: 1920px;
        min-width: 1200px;
        width: 100vw;
        height: 100%;
        background-color: #fff;
        overflow-x: hidden;
       
        .content{
            position: relative;
            flex:1;
        }
    }
    .tab-bar-margin{
        margin-top: 67px;
    }
</style>