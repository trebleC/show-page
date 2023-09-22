<template>
    <div class="home">
        
        <div class="carousel-box" ref="carouselBox">
            <el-carousel trigger="click" :height="carouselHeight">
                <el-carousel-item v-for="item in carouselList" :key="item">
                    <img class="carousel-img" :src="item.imageUrl" alt="" srcset="" @click="jumpPage(item)">
                </el-carousel-item>
            </el-carousel>
        </div>

        <div class="dept">
            <div class="dept-name">GUANGZHOU QIQI TEXTILE CO.,LTD </div>
            <div class="dept-desc-box">
                <div class="dept-desc" v-html="deptDesc"></div>
                <div class="btn-more" @click="showCmpMore">READ MORE</div>
            </div>
        </div>
        <div class="content-box">
            <div class="common-title">FEATURED COLLECTION</div>
            <feat-list />
        </div>
        <div class="content-box">
            <div class="common-title">HOT PRODUCTIONS</div>
            <hot-list />
        </div>

        <div class="content-box">
            <div class="common-title">NEW & EVENTS</div>
            <news />
        </div>


    </div>
</template>
    
<script>
import { ref, reactive, onMounted } from 'vue'
import { ElCarousel, ElCarouselItem } from 'element-plus'
import HotList from '@/views/Home/HotList'
import News from '@/views/Home/News'
import FeatList from '@/views/Home/FeatList'
import { useRouter } from 'vue-router'
import { BASR_URL } from "@/config";
export default {
    name: 'PostList',
    components: { ElCarousel, ElCarouselItem, HotList, News, FeatList },
    setup(props, ctx) {
        const router = new useRouter()
        let carouselBox = ref(null)
        let carouselHeight = ref('400px')
        let carouselList = reactive([{
            imageUrl: BASR_URL+'/logo/banner1.jpg',
            url: ''
        },
        {
            imageUrl: BASR_URL+ '/upload/banner2.png',
            url: ''
        }
        ])
        onMounted(() => {


            if (carouselBox && carouselBox.value) {
                carouselHeight.value = parseInt(6 * carouselBox.value.offsetWidth / 16) + 'px'
            }



        })
        const jumpPage = (item) => {
            if(!item.url)return
            window.open(item.url)
        }

        let deptDesc = ref('')
        deptDesc.value = `QiQi Textiles Co.,Ltd. is an enterprise integrating designs,customization,production and sales.\n
We have a wide range of production lines,the main products are lace,fabric,satin.And some materials used to make wedding and evening dresses.\n
  Our company is with Taiwan's production technology and production process,Our product elements follow the fashion,and the styles designs are updated frequently.\n
  We focus on steady quality,competitive price and excellent service all the time.We exported to all over the world, Europe, South and North American ,Mid-east and South East Asia etc.\n
We are keen to provide different ideas to customers and create value for them.`



        const showCmpMore = () => {
            router.push('/about')
        }

        return {
            carouselBox,
            carouselHeight,
            carouselList,
            jumpPage,
            deptDesc,
            showCmpMore
        }
    }
}
</script>
    
<style lang="less" scoped>
.home {
    width: 100%;
    overflow: hidden;
    margin: 0 auto 100px;
    max-width: 100%;

    .carousel-box {
        .carousel-img {
            width: 100%;
            object-fit: cover;
            cursor: pointer;
        }
    }

    .el-carousel__item h3 {
        color: #475669;
        opacity: 0.75;
        line-height: 150px;
        margin: 0;
        text-align: center;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n + 1) {
        background-color: #d3dce6;
    }


    .dept {
        display: flex;
        justify-content: space-between;
        margin-top: 95px;
        margin-bottom: 60px;
        width: 1200px;
        margin: 0 auto;
        zoom: 1;
        margin-top: 80px;

        .dept-name {
            width: 30%;
            font-family: 'TrajanPro-Regular', Arial;
            position: relative;
            color: #111;
            line-height: 57px;
            font-size: 40px;
            font-weight: bold;
            text-transform: uppercase;
        }

        .dept-desc-box {
            width: 60%;
        }

        .dept-desc {

            margin-bottom: 30px;
            font-family: 'Montserrat-Light';
            line-height: 30px;
            white-space: pre-line;
            font-size: 14px;
        }

        .btn-more {
            display: inline-block;
            width: 190px;
            height: 55px;
            line-height: 55px;
            background: #111;
            text-align: center;
            color: #fff;
            text-transform: uppercase;
            max-width: 100%;
            font-family: 'TrajanPro-Regular', Arial;
            cursor: pointer;
        }

    }

    .content-box {
        text-align: center;

    }
}

.common-title {
    position: relative;
    text-align: center;
    font-size: 40px;
    color: #111;
    font-weight: bold;
    font-family: 'TrajanPro-Regular', Arial;
    margin-bottom: 80px;
    margin-top: 80px;

    &::after {
        content: '';
        position: absolute;
        width: 35px;
        height: 4px;
        background: #111;
        bottom: -22px;
        left: 50%;
        margin-left: -17.5px;
    }
}
</style>