<template>
    <div class="news-list">
        <div class="list" :style="{ width: dataListWidth }" ref="newslist">
                <div class="news" v-for="(item, index) in dataList" :key="'card' + index">
                <ImageShow  class="event-img" :path="item.imageUrl"  @click="jumpPage(item)" />
                <div class="txt">
                    <div class="time">
                        {{formatDate(item.date)}}  
                        <span class="month">/ {{ formatDateMonth(item.date) }}</span>
                    </div>
                    <div class="title">{{ item.name }}</div>
                    <div class="brief">super executive power</div>
                </div>
            </div>
          

        </div>
        <PageMng :count="paginationCount" @onChangePage="onChangePage" />
    </div>
</template>
    
<script>
import { ref, reactive, onMounted, computed } from 'vue'
import PageMng from '@/components/PageMng.vue'
import ImageShow from '@/components/ImageShow.vue'
import dayjs from 'dayjs'

export default {
    name: 'PostList',
    components: { PageMng,ImageShow },
    setup(props, ctx) {
        let pageNo = ref(0)
        let dataList = reactive([{
            imageUrl: 'http://localhost:4000/song/14556-20230727043345.jpg',
            url: 'https://www.baidu.com/',
            date:1691033871036,
            name: 'Heavy beaded sequins embroidered for wedding bridal dress embroidery lace fabricVIEW'
        },
        {
            imageUrl: 'http://localhost:4000/song/14549-20230726065344.jpg',
            url: 'https://www.baidu.com/',
            date:1691033871036,
            name: 'Heavy beaded sequins embroidered for wedding bridal dress embroidery lace fabricVIEW'
        },{
            imageUrl: 'http://localhost:4000/song/14556-20230727043345.jpg',
            url: 'https://www.baidu.com/',
            date:1691033871036,
            name: 'Heavy beaded sequins embroidered for wedding bridal dress embroidery lace fabricVIEW'
        },
        {
            imageUrl: 'http://localhost:4000/song/14549-20230726065344.jpg',
            url: 'https://www.baidu.com/',
            date:1691033871036,
            name: 'Heavy beaded sequins embroidered for wedding bridal dress embroidery lace fabricVIEW'
        },{
            imageUrl: 'http://localhost:4000/song/14556-20230727043345.jpg',
            url: 'https://www.baidu.com/',
            date:1691033871036,
            name: 'Heavy beaded sequins embroidered for wedding bridal dress embroidery lace fabricVIEW'
        },
        {
            imageUrl: 'http://localhost:4000/song/14549-20230726065344.jpg',
            url: 'https://www.baidu.com/',
            date:1691033871036,
            name: 'Heavy beaded sequins embroidered for wedding bridal dress embroidery lace fabricVIEW'
        },
        ])

        const jumpPage = (item) => {
            //window.open(item.url)
        }
        const dataListWidth = ref('100%')
        
        onMounted(() => {
            dataListWidth.value = (dataList.length * 100) + '%'
        })


        let paginationCount = computed(() => {
            return Math.floor(dataList.length)
        })
        const onChangePage = (index) => {
            pageNo.value = index
            newslist.value.style.transitionDuration = `0.5s`
            newslist.value.style.transform = `translate3d(-${100/dataList.length * index}%, 0,0)`
        }
        let newslist = ref(null)
    
        const formatDate = (value) => {
            return dayjs(value).format('DD')
        }
        const formatDateMonth = (value)=>{
            return dayjs(value).format('MMM')
        }


        return {
            dataList,
            jumpPage,
            dataListWidth,
            pageNo,
            paginationCount,
            onChangePage,
            newslist,
            formatDate,
            formatDateMonth
        }
    }
}
</script>
    
<style lang="less">
.news-list {
    width: 100%;
    overflow-x: hidden; //隐藏水平滚动条
    transition-duration: 0.5s;
    position: relative;

    .list {
        display: flex;
        height: auto;
        .wrapper{
            width: 100%;
            padding: 0 100px;
            box-sizing: border-box;
        }
    }

    .news {
        width: 100%;
        display: flex;

        flex-wrap: nowrap;
        padding: 0 100px;
        box-sizing: border-box;
        .event-img {
            width: 370px;
            height: 250px;
            margin-right: 100px;
        }

        .txt {
            flex: 1;
            text-align: left;

            .time {
                margin-top: 14px;
                margin-bottom: 27px;
                color: #d4ad6a;
                font-size: 26px;
                font-family: 'Montserrat-Light';
            }

            .title {
                display: block;
                margin-bottom: 17px;
                font-size: 26px;
                color: #111;
                font-family: 'Montserrat-Light';
                overflow: hidden;
                word-break: break-all;
                cursor: pointer;
            }

            .brief {
                line-height: 28px;
                font-family: 'Montserrat-Light';
                font-size: 14px;
                color: #666;
            }
            .month{
                font-family: 'TrajanPro-Regular',Arial;
                font-size: 14px;
            }
        }
    }


}
</style>