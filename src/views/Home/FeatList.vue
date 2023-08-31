<template>
    <div class="feat-list">
        <div class="list">
            <div class="feat" v-for="(item, index) in cardList" :key="'feat' + index">
                <img :src="item.imageUrl" class="feat-img img" alt="" srcset="">
                <div class="mask">
                    <div class="content">
                        <div class="name">{{ item.name }}</div>
                        <div class="btn-click" @click="jumpPage(item)">VIEW MORE</div>
                    </div>

                </div>

            </div>
        </div>
    </div>
</template>
    
<script>
import { ref, reactive, onMounted, computed } from 'vue'
import ImageShow from '@/components/ImageShow.vue'
export default {
    name: 'FeatList',
    components: { ImageShow },
    setup(props, ctx) {
        let cardList = reactive([{
            imageUrl: 'http://localhost:4000/song/14556-20230727043345.jpg',
            url: 'https://www.baidu.com/',
            name: 'Heavy beaded'
        },
        {
            imageUrl: 'http://localhost:4000/song/14549-20230726065344.jpg',
            url: 'https://www.baidu.com/',
            name: 'Heavy beaded'
        },
        {
            imageUrl: 'http://localhost:4000/song/14549-20230726065344.jpg',
            url: 'https://www.baidu.com/',
            name: 'Heavy beaded'
        }, {
            imageUrl: 'http://localhost:4000/song/14556-20230727043345.jpg',
            url: 'https://www.baidu.com/',
            name: 'Heavy beaded '
        }
        ])

        const jumpPage = (item) => {
            //window.open(item.url)
        }

        onMounted(() => {

        })


        return {
            cardList,
            jumpPage
        }
    }
}
</script>
    
<style lang="less" scoped>
.feat-list {
    width: 100%;
    overflow-x: hidden; //隐藏水平滚动条
    transition-duration: 0.5s;
    position: relative;

    .list {
        box-sizing: border-box;
        display: flex;
    }

    .feat {
        width: 25%;
        height: 420px;
        overflow: hidden;
        position: relative;
        
        &:hover {
            .mask {
                background-color: unset;

            }

            .img {
                transition-duration: 0.5s;
                transform: scale(1.05);
            }
        }
        .feat-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .mask {
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, .3);
            position: absolute;
            top: 0;
            left: 0;
        }

        .content {
            position: absolute;
            top: 50.5%;
            padding: 0 7.5%;
            &:hover {
                .img {
                    transform: scale(1.05);
                }
            }
        }

        .name {
            font-size: 20px;
            line-height: 25px;
            height: 50px;
            overflow: hidden;
            margin-bottom: 15px;
            color: #fff;
            font-weight: bold;
            font-family: 'TrajanPro-Regular', Arial;
        }

        .btn-click {
            color: #000;
            background-color: #fff;
            width: 190px;
            height: 55px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: trajanpro-regular, Arial;
            cursor: pointer;
        }
    }


}</style>