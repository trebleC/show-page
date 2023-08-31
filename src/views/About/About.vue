<template>
    <div class="banner">
        <div class="common-title">ABOUT US</div>
    </div>
    <div class="about-wrapper">

        <div class="content" v-html="content"></div>

        <div class="photo-wall">
            <img class="large" :src="imgArr[1]" alt="">
            <div class="small-box">
                <img class="small" :src="imgArr[1]" alt="">
                <img class="small" :src="imgArr[2]" alt="">
            </div>
        </div>

    </div>
</template>
    
<script>
import { ref, reactive, onMounted } from 'vue'
export default {
    name: 'About',
    components: {},
    setup() {
        const content = ref('')
        content.value = `Guangzhou Vitas Lace Co., Ltd. founded in 2015, is an industrial & trade integrated company with solid strength in R&D, designing and customized.

Vitas Lace has focused on the high-end embroidery fabric industry for more than 6 years with main products like: embroidery lace, wedding accessories, veil, etc.. Her products have been widely used in high-end wedding dresses, gowns, apparel, home textile and so on. Moreover, her products have been exported to many countries and regions around the world.

With senior embroidery teams, outstanding design groups and strongest sale department, could be meet with different request in R&D, producting, shipping and after service.

Vitas Lace has official import and export licensen to make sure each cooperation in safety.

Being innovative has always been Vitas Lace core designing concept. By emphasizing product development, now her successively been one of the pioneers in embroidery lace industry . With insistence in "CUSTOMER FIRST" service conception and strictly control on product quality as well as delivery time, she has won unanimous applause from local and foreign customers. Vitas Lace believe integrity cooperation creates win-win future. Looking forward to working with you.`

        let imgArr = reactive([])

        imgArr = ['http://localhost:4000/song/14556-20230727043345.jpg',
            'http://localhost:4000/song/14549-20230726065344.jpg',
            'http://localhost:4000/song/14549-20230726065344.jpg'
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