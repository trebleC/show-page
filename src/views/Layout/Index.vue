<template>
    <div class="layout">
        <!-- <side-bar @navChang="onNavChange"></side-bar> -->
        <tab-bar @navChang="onNavChange"></tab-bar>
        <div class="content">
            <component :is="cpnTag" v-if="cpnTag"></component>
        </div>
        <el-backtop target=".content" :right="100" :bottom="100" />

    </div>
</template>
<script>
import { ref } from 'vue'
import SideBar from './SideBar.vue'
import TabBar from './TabBar.vue'
import PosterList from '@/views/Poster/PosterList'
import Home from '@/views/Home/Home'
export default {
    name:"Layout",
    components:{
        SideBar,
        TabBar,
        PosterList,
        Home
    },
    setup(){
        let cpnTag = ref('Home')
        const onNavChange = (key)=>{
            cpnTag.value = key
        }

        return {
            onNavChange,
            cpnTag
        }
    }
}
</script>
<style lang="less">
    .layout{
        max-width: 1920px;
        width: 100vw;
        height: 100vh;
        background-color: #ececec;
       
        .content{
            position: relative;
            flex:1;
            overflow: auto;
        }
    }
</style>