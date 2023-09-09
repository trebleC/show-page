<template>
    <div class="news-list">
        <div class="list" :style="{ width: dataListWidth }" ref="newslist">
            <div class="news" v-for="(item, index) in dataList" :key="'card' + index">
                <ImageShow class="event-img" :path="item.imageUrl" @click="jumpPage(item)" />
                <div class="txt" @click="jumpPage(item)">
                    <div class="time">
                        {{ formatDate(item.date) }}
                        <span class="month">/ {{ formatDateMonth(item.date) }}</span>
                    </div>
                    <div class="title">{{ item.name }}</div>
                    <div class="brief">{{ item.author }}</div>
                </div>
            </div>


        </div>
        <PageMng :count="paginationCount" @onChangePage="onChangePage" />
    </div>
</template>
    
<script>
import { ref, reactive, onMounted, computed } from 'vue'
import {BASR_URL} from '@/config'
import { queryNewsList } from '@/api/common'
import PageMng from '@/components/PageMng.vue'
import ImageShow from '@/components/ImageShow.vue'
import dayjs from 'dayjs'
import { useRouter } from 'vue-router'

export default {
    name: 'PostList',
    components: { PageMng, ImageShow },
    setup(props, ctx) {
        const router = new useRouter()
        let pageNo = ref(0)
        let dataList = ref([])



        const jumpPage = (item) => {
            router.push('/newsDetail?newsId='+item.newsId)
        }
        const dataListWidth = ref('100%')




        let paginationCount = ref(0)
        const onChangePage = (index) => {
            pageNo.value = index
            newslist.value.style.transitionDuration = `0.5s`
            newslist.value.style.transform = `translate3d(-${100 / dataList.value.length * index}%, 0,0)`
        }
        let newslist = ref(null)

        const formatDate = (value) => {
            return dayjs(value).format('DD')
        }
        const formatDateMonth = (value) => {
            return dayjs(value).format('MMM')
        }

        onMounted(() => {
            queryNewsList().then(res => {
                dataList.value = res.data.map(item => {
                    return {
                        imageUrl: item.attachments.length ? BASR_URL+item.attachments[0].url : '',
                        url: 'https://www.baidu.com/',
                        date: item.updateTime,
                        name: item.title,
                        newsId: item.newsId,
                        author: item.author
                    }
                })
                dataListWidth.value = (dataList.value.length * 100) + '%'
                paginationCount.value = Math.floor(dataList.value.length)
            })

        })
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
    
<style lang="less" scoped>
.news-list {
    width: 100%;
    overflow-x: hidden; //隐藏水平滚动条
    transition-duration: 0.5s;
    position: relative;

    .list {
        display: flex;
        height: auto;

        .wrapper {
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

            .month {
                font-family: 'TrajanPro-Regular', Arial;
                font-size: 14px;
            }
        }
    }


}</style>