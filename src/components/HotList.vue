<template>
    <div class="hot-list">
        <div class="list" :style="{width:cardListWidth}">
            <div class="card" v-for="(item, index) in cardList" :key="'card' + index">
                <img class="card-img" :src="item.imageUrl" alt="" srcset="" @click="jumpPage(item)">
                <div class="name">{{ item.name }}</div>
            </div>
        </div>
    </div>
</template>
    
<script>
import { ref, reactive, onMounted } from 'vue'

export default {
    name: 'PostList',
    setup(props, ctx) {
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
            window.open(item.url)
        }
        const cardListWidth = ref('100%')
        cardListWidth.value = (cardList.length * 359) + 'px'
        
        return {
            cardList,
            jumpPage,
            cardListWidth
        }
    }
}
</script>
    
<style lang="less">
.hot-list {
    width: 100%;
    .list {
        padding: 0 40px;
        box-sizing: border-box;
        clear: both;
    }

    .card {
        float: left;
        width: 359px;
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
            height: 60px;
            text-align: center;
            font-size: 16px;
            font-family: 'Montserrat-Light';
            color: #111;
        }
    }
}</style>