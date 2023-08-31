<template>
    <div class="hot-list">
        <div class="list" :style="{width:cardListWidth}" ref="hostlist">
            <div class="card" v-for="(item, index) in cardList" :key="'card' + index">
                <ImageShow class="card-img" contain :path="item.imageUrl" alt="" srcset="" @click="jumpPage(item)" />
                <div class="name">{{ item.name }}</div>
            </div>
        </div>
        <PageMng :count="paginationCount" @onChangePage="onChangePage" />
    </div>
</template>
    
<script>
import { ref, reactive, onMounted,computed } from 'vue'
import PageMng from '@/components/PageMng.vue'
import ImageShow from '@/components/ImageShow.vue'
export default {
    name: 'PostList',
    components:{PageMng,ImageShow},
    setup(props, ctx) {
        let pageNo = ref(0)
        let cardList = reactive([{
            imageUrl: 'http://localhost:4000/song/14556-20230727043345.jpg',
            url: 'https://www.baidu.com/',
            name:'Heavy beaded sequins embroidered for wedding bridal dress embroidery lace fabricVIEW'
        },
        {
            imageUrl: 'http://localhost:4000/song/14549-20230726065344.jpg',
            url: 'https://www.baidu.com/',
            name:'Heavy beaded sequins embroidered for wedding bridal dress embroidery lace fabricVIEW'
        },
        {
            imageUrl: 'http://localhost:4000/song/14549-20230726065344.jpg',
            url: 'https://www.baidu.com/',
            name:'Heavy beaded sequins embroidered for wedding bridal dress embroidery lace fabricVIEW'
        },{
            imageUrl: 'http://localhost:4000/song/14556-20230727043345.jpg',
            url: 'https://www.baidu.com/',
            name:'Heavy beaded sequins embroidered for wedding bridal dress embroidery lace fabricVIEW'
        },
        {
            imageUrl: 'http://localhost:4000/song/14549-20230726065344.jpg',
            url: 'https://www.baidu.com/',
            name:'Heavy beaded sequins embroidered for wedding bridal dress embroidery lace fabricVIEW'
        },
        {
            imageUrl: 'http://localhost:4000/song/14549-20230726065344.jpg',
            url: 'https://www.baidu.com/',
            name:'Heavy beaded sequins embroidered for wedding bridal dress embroidery lace fabricVIEW'
        }
        ])

        const jumpPage = (item) => {
            //window.open(item.url)
        }
        const cardListWidth = ref('100%')
        onMounted(()=>{
            cardListWidth.value = (cardList.length * 477) + 'px'
        })
     
        let paginationCount = computed(()=>{
            return Math.floor(cardList.length/3)
        })
        const onChangePage = (index)=>{
            pageNo.value = index
            hostlist.value.style.transitionDuration = `0.5s`
            hostlist.value.style.transform = `translate3d(-${index*1300}px, 0,0)`
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
    overflow-x:hidden; //隐藏水平滚动条
    transition-duration: 0.5s;
    position: relative;
    .list {
        padding: 0 40px;
        box-sizing: border-box;
        height: auto;

        &::after{
            content:'';
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