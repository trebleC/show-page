<template>
    <div class="layout">
        <!-- <side-bar @navChang="onNavChange"></side-bar> -->
        <div class="content">
            <component :is="cpnTag" v-if="cpnTag"></component>
        </div>
        <el-backtop target=".content" :right="100" :bottom="100" />

    </div>
</template>
<script>
import { ref } from 'vue'
import SideBar from './SideBar.vue'
import PosterList from '@/views/Poster/PosterList'
import XhsPage from '@/views/Xhs/XhsPage'
export default {
    name:"Layout",
    components:{
        SideBar,
        PosterList,
        XhsPage
    },
    setup(){
        let cpnTag = ref('Xhs')
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
        width: 100vw;
        height: 100vh;
        background-color: #ececec;
        display: flex;
        .content{
            position: relative;
            flex:1;
            overflow: auto;
        }
    }
</style>