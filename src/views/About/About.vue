<template>
    <div class="banner">
        <div class="common-title">ABOUT US</div>
    </div>
    <div class="about-wrapper">

        <div class="content" v-html="content"></div>

        <div class="photo-wall">
            <img class="large" :src="imgArr[0]" alt="">
            <div class="small-box">
                <img class="small" :src="imgArr[1]" alt="">
                <img class="small" :src="imgArr[2]" alt="">
            </div>
        </div>

    </div>
</template>
    
<script>
import { ref, reactive, onMounted } from 'vue'
import { BASR_URL } from '@/config';
export default {
    name: 'About',
    components: {},
    setup() {
        const content = ref('')
        content.value = `<p>QiQi Textiles Co.,Ltd. is an enterprise integrating designs, customization, production and sales.</p>
        <p>We have a wide range of production lines, the main products are lace,fabric, satin. And some materials used to make wedding and evening dresses.</p>
            <p>Our company is with Taiwan's production technology and production process, Our product elements follow the fashion,and the styles designs are updated frequently.</p>
                <p>We focus on steady quality, competitive price and excellent service all the time.We exported to all over the world, Europe, South and North American, Mid-east and South East Asia etc.</p>
                    <p>We are keen to provide different ideas to customers and create value for them.`

        let imgArr = reactive([])

        imgArr = [BASR_URL+'/logo/fa1.jpg',
        BASR_URL+'/logo/fa2.jpg',
        BASR_URL+'/logo/fa3.jpg'
        ]


        return {
            content,
            imgArr,


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

.about-wrapper {
    width: 1200px;
    margin-top: 80px;
    padding: 100px 40px 400px 40px;
    box-sizing: border-box;
    margin: 0 auto;

    display: flex;
    justify-content: space-between;
    .content{
        flex:1;
        text-indent: 32px;word-break: keep-all;
    }
    .photo-wall{
        img{
            object-fit: cover;
        }
        width: 40%;
        margin-left: 50px;
        .large{
            width: 100%;
            height: 300px;
            margin-bottom: 5px;
        }
        .small-box{
            display: flex;
            justify-content: space-between;
        }
        .small{
            &:nth-child(1){
                margin-right: 5px;
            }
            width: calc(100% / 2 - 5px);
            height: 120px;
        }
    }
}
</style>