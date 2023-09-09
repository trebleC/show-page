<template>
    <div class="news-wrapper">

        <div class="title">{{ dataInfo.title }}</div>
        <div class="desc">
            <span>VIEWS: {{ dataInfo.views }}</span>
            <span>AUTHOR: {{ dataInfo.author }}</span>
            <span>UPDATE TIME: {{ dataInfo.updateTime }}</span>
        </div>
        <div class="content" v-html="dataInfo.content"></div>

    </div>
</template>
    
<script>
import { ref, reactive, onMounted } from 'vue'
import {BASR_URL} from '@/config'
import { newsDetail } from '@/api/common'
import dayjs from 'dayjs'
import { useRouter } from 'vue-router'
export default {
    name: 'NewsDetail',
    components: {},
    setup() {
        const router = new useRouter()
        let dataInfo = ref({})
        
        newsDetail({newsId:router.currentRoute.value.query.newsId}).then(res => {
            dataInfo.value = res.data
            dataInfo.value.updateTime = dayjs( dataInfo.value.updateTime).format('YYYY-MM-DD HH:mm')
        })
        
        return {
            dataInfo

        }
    }
}
</script>
    
<style lang="less" scoped>
  
.banner {


    width: 100%;
    height: 170px;
    background: url(~@/assets/banner.png) no-repeat top / 100%;
    
    display: flex;
    align-items: center;
    justify-content: center;
    .common-title {
        background-color: #000;
        position: relative;
        text-align: center;
        font-size: 40px;
        color: #fff;
        font-weight: bold;
        font-family: 'TrajanPro-Regular', Arial;
        margin-bottom: 80px;
        padding: 10px;
        top: 40px;

        &::after {
            content: '';
            position: absolute;
            width: 35px;
            height: 4px;
            background: #fff;
            bottom: -22px;
            left: 50%;
            margin-left: -17.5px;
            background-color: #000;
        }
    }
}

.news-wrapper {
    width: 1200px;
    margin: 0 auto;
    margin-top: 80px;
    padding: 16px 40px;
    padding-top: 40px;
    padding-bottom: 200px;
    box-sizing: border-box;


    .title{
        font-size: 20px;
        text-align: center;
        padding-bottom: 10px;
        color: #222;
        font-family: 'TrajanPro-Regular', Arial;
    }
    .desc{
        font-family: 'TrajanPro-Regular', Arial;
        text-align: center;
        font-size: 12px;
        span{
            margin-right: 20px;
        }
    }

}
</style>