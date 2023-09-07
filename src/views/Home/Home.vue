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
            <div class="dept-name">GUANGZHOU VITAS LACE CO.,LTD</div>
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
export default {
    name: 'PostList',
    components: { ElCarousel, ElCarouselItem, HotList, News, FeatList },
    setup(props, ctx) {
        const router = new useRouter()
        let carouselBox = ref(null)
        let carouselHeight = ref('400px')
        let carouselList = reactive([{
            imageUrl: 'https://img-va.myshopline.com/image/store/2001134635/1655137411465/d6d28aec907d4c01aea67761aedcd688_1728x.jpeg?w=1920&h=750',
            url: 'https://www.baidu.com/'
        },
        {
            imageUrl: 'https://img-va.myshopline.com/image/store/2001134635/1655137411465/d6d28aec907d4c01aea67761aedcd688_1728x.jpeg?w=1920&h=750',
            url: 'https://www.baidu.com/'
        }
        ])
        onMounted(() => {


            if (carouselBox && carouselBox.value) {
                carouselHeight.value = parseInt(6 * carouselBox.value.offsetWidth / 16) + 'px'
            }



        })
        const jumpPage = (item) => {
            window.open(item.url)
        }

        let deptDesc = ref('')
        deptDesc.value = `Established in 2015,GUANGZHOU VITAS LACE CO.,LTD., is a comprehensive enterprise integrating R&D, design, production and sale. Specialized in wedding dress fabric, we are fully commited to producing high-quality wedding fabric which involved in wedding dress, fashion, home textiles and other fields.\n
With a wide variety of products and good after-sales service, our products sell well in domestic and intermational market,such as Europe, USA, the Middle East and other countries.\n

We have our own design teams which master in embroidery.With more than 40pcs lace producing machines and strict process quality control,our quality and delivery time could be assured well.We pursue the tenet of "Quality fitst,Service is supreme.We sincerely welcome customers from all over the world to contact us for future business relationships and achieve mutual success!`



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