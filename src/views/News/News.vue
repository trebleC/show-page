<template>
    <div class="banner">
        <div class="common-title">NEWS</div>
    </div>
    <div class="news-wrapper">


        <div class="news-list">
            <div class="news" v-for="(item, index) in news" :key="'news' + index">
                <div class="info">
                    <div>
                        <div class="name" @click="jumpPage(item)">{{ item.name }}</div>
                        <div class="desc">{{ item.desc }}</div>
                    </div>

                    <div class="desc">{{ item.pubDate }}</div>
                </div>
                <img v-if="item.imageUrl" :src="item.imageUrl" alt="" class="img" @click="jumpPage(item)">

            </div>
        </div>
    </div>
</template>
    
<script>
import { ref, reactive, onMounted } from 'vue'
export default {
    name: 'NewsList',
    components: {},
    setup() {
        let news = reactive([{
            name: 'ashion brand to open up social media marketing just out of fear and obsession',
            imageUrl: 'http://localhost:4000/song/14556-20230727043345.jpg',
            url: 'https://www.baidu.com/',
            desc: 'XX advertising is still leading the fashion luxury brand and retail site traffic and affect the consumer to buy the standard, but the major brands have also opened up a variety of feasible advertising channels such as social networks. XX according to its reported second quarter revenue of 2.91 billion US dollars, the main source is advertising, followed by XX, XX, XX, and XX also followed. Social media for the time being no t',
            pubDate: '2022-08-08'
        },
        {
            name: 'ashion brand to open up social media marketing just out of fear and obsession',
            imageUrl: 'http://localhost:4000/song/14549-20230726065344.jpg',
            url: 'https://www.baidu.com/',
            desc: 'XX advertising is still leading the fashion luxury brand and retail site traffic and affect the consumer to buy the standard, but the major brands have also opened up a variety of feasible advertising channels such as social networks. XX according to its reported second quarter revenue of 2.91 billion US dollars, the main source is advertising, followed by XX, XX, XX, and XX also followed. Social media for the time being no t',
            pubDate: '2022-08-08'
        },
        {
            name: 'ashion brand to open up social media marketing just out of fear and obsession',
            // imageUrl: 'http://localhost:4000/song/14549-20230726065344.jpg',
            url: 'https://www.baidu.com/',
            desc: 'XX advertising is still leading the fashion luxury brand and retail site traffic and affect the consumer to buy the standard, but the major brands have also opened up a variety of feasible advertising channels such as social networks. XX according to its reported second quarter revenue of 2.91 billion US dollars, the main source is advertising, followed by XX, XX, XX, and XX also followed. Social media for the time being no t',
            pubDate: '2022-08-08'
        }
        ])

        const jumpPage = (item) => {
            //window.open(item.url)
        }
        return {
            news,
            jumpPage,

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
    * {
        font-family: 'TrajanPro-Regular', Arial;
    }

    margin-top: 80px;
    padding: 16px 40px;
    box-sizing: border-box;



    .news {
        margin-bottom: 40px;
        padding-bottom: 20px;
        box-sizing: border-box;
        border-bottom: 1px solid #ebebeb;
        display: flex;
        &:last-child{
            border: 0;
        }
        .name {
            font-size: 20px;
            font-weight: bold;
            cursor: pointer;
        }

        .desc {
            width: 100%;
            margin-top: 14px;
            color: #999;
            overflow: hidden;
            word-break: break-all;
            text-overflow: ellipsis;
            display: -webkit-box; //使用自适应布局
            -webkit-line-clamp: 2; //设置超出行数，要设置超出几行显示省略号就把这里改成几
            -webkit-box-orient: vertical;

        }

        .info {

            display: flex;
            flex-direction: column;
            justify-content: space-between;
            flex: 1;
        }

        .img {
            width: 150px;
            height: 150px;
            margin-left: 50px;
            overflow: hidden;
            object-fit: cover;
            transition-duration: .5s;
            cursor: pointer;
        }

        &:hover {
            .img {
                scale: 1.05;
            }

            .name {
                color: #d4ad6a;
            }
        }
    }

}
</style>