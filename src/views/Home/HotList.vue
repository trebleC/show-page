<template>
    <div class="hot-list">
        <div class="list" :style="{ width: cardListWidth }" ref="hostlist">
            <div class="card" v-for="(item, index) in cardList" :key="'card' + index" @click="jumpPage(item)">
                <ImageShow class="card-img" contain :path="item.imageUrl" alt="" srcset="" />
                <div class="name">{{ item.name }}</div>
            </div>
        </div>
        <PageMng :count="paginationCount" @onChangePage="onChangePage" />
    </div>
</template>
    
<script>
import { ref, reactive, onMounted, computed } from 'vue'
import { queryHotGoodList } from '@/api/common'
import PageMng from '@/components/PageMng.vue'
import ImageShow from '@/components/ImageShow.vue'
import { BASR_URL } from "@/config";
import { useRouter } from 'vue-router';

export default {
    name: 'PostList',
    components: { PageMng, ImageShow },
    setup(props, ctx) {
        const router = new useRouter()
        let pageNo = ref(0)
        let cardList = ref([])

        let paginationCount = ref(0)
        const jumpPage = (item) => {
            router.push('/detail/' + item.goodId)
        }
        const cardListWidth = ref('100%')
        onMounted(() => {
            queryHotGoodList().then(res => {
                cardList.value = res.data.map(item => {
                    item.imageUrl = item.attachments.length ? BASR_URL + item.attachments[0].url : ''
                    return item
                })
                cardListWidth.value = (cardList.value.length * 477) + 'px'
                paginationCount.value = Math.floor(cardList.value.length / 2)
            })



        })
       
        const onChangePage = (index) => {
            pageNo.value = index
            hostlist.value.style.transitionDuration = `0.5s`
            hostlist.value.style.transform = `translate3d(-${index * 1300}px, 0,0)`
        }
        let hostlist = ref(null)



        return {
            cardList,
            jumpPage,
            cardListWidth,
            pageNo,
            paginationCount,
            onChangePage,
            hostlist
        }
    }
}
</script>
    
<style lang="less" scoped>
.hot-list {
    width: 100%;
    overflow-x: hidden; //隐藏水平滚动条
    transition-duration: 0.5s;
    position: relative;

    .list {
        padding: 0 40px;
        box-sizing: border-box;
        height: auto;

        &::after {
            content: '';
            width: 0;
            height: 0;
            display: table;
            clear: both;
        }
    }

    .card {
        float: left;
        width: 420px;
        margin-right: 16px;
        cursor: pointer;

        .card-img {
            width: 100%;
            height: 359px;
            object-fit: cover;
            cursor: pointer;
        }

        .name {
            margin-top: 22px;
            line-height: 30px;
            text-align: center;
            font-size: 16px;
            font-family: 'Montserrat-Light';
            color: #111;
        }
    }


}
</style>