<template>
    <div class="banner">
        <div class="common-title">Product Detail</div>
    </div>
    <div class="good-wrapper">

        <GoodImage :images="imgArr" class="imgs-box" />
        <div class="title-box">
            <div class="title">Super heavy glitter beaded sequins embroidered for wedding bridal dress embroidery lace
                fabric</div>
            <div class="desc">Item No.: VL-1256014</div>
            <div class="btn-box">
                <div class="btn active">Request Quote</div>
                <div class="btn">Contact Us</div>
            </div>
        </div>
    </div>
    <div class="desc-box">

        <div class="large-title-box">
        <span class="large-title">Description</span>
    </div>
    <div class="common-box">
        <div class="label">SPECIFICATION</div>
        <div class="content" v-html="dataInfo.specification"></div>
    </div>
    <div class="common-box">
        <div class="label">{{ 'PRODUCTS'+'\n'+'DESCRIPTION' }}</div>
        <div class="content" v-html="dataInfo.desc"></div>
    </div>
    </div>

</template>
    
<script>
import { ref, reactive, onMounted } from 'vue'
import GoodImage from '@/components/GoodImage.vue'
export default {
    name: 'About',
    components: { GoodImage },
    setup() {
        const content = ref('')
        content.value = `Guangzhou Vitas Lace Co., Ltd. founded in 2015, is an industrial & trade integrated company with solid strength in R&D, designing and customized.

Vitas Lace has focused on the high-end embroidery fabric industry for more than 6 years with main products like: embroidery lace, wedding accessories, veil, etc.. Her products have been widely used in high-end wedding dresses, gowns, apparel, home textile and so on. Moreover, her products have been exported to many countries and regions around the world.

With senior embroidery teams, outstanding design groups and strongest sale department, could be meet with different request in R&D, producting, shipping and after service.

Vitas Lace has official import and export licensen to make sure each cooperation in safety.

Being innovative has always been Vitas Lace core designing concept. By emphasizing product development, now her successively been one of the pioneers in embroidery lace industry . With insistence in "CUSTOMER FIRST" service conception and strictly control on product quality as well as delivery time, she has won unanimous applause from local and foreign customers. Vitas Lace believe integrity cooperation creates win-win future. Looking forward to working with you.`

        let imgArr = reactive([])

        imgArr = ['https://ueeshop.ly200-cdn.com/u_file/UPAT/UPAT535/2209/products/23/caed734518.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800',
            'http://localhost:4000/song/14549-20230726065344.jpg',
            'http://localhost:4000/song/14549-20230726065344.jpg'
        ]

        let dataInfo = reactive({
            specification: `Width:135-140cm
Length MOQ:14 Meters`,
            desc: `Material : 60% Rayon+ 40% Nylon
Characteristic : Embroidered
Customized service : Support Color / Style Custom`
        })
        return {
            content,
            imgArr,
            dataInfo


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

.good-wrapper {
    width: 1200px;
    padding: 50px 40px 0 40px;
    box-sizing: border-box;
    margin: 0 auto;
    display: flex;

    .imgs-box {
        width: 500px;
        // height: 500px;
    }
}

.title-box {
    width: 50%;

    .title {
        font-weight: bold;
        font-size: 20px;
        margin-bottom: 10px;
        margin-bottom: 20px;
    }

    .desc {
        font-family: 'TrajanPro-Regular', Arial;
        font-size: 14px;
        margin-bottom: 20px;
    }

    .btn-box {
        display: flex;

        .btn {
            font-size: 16px;
            cursor: pointer;
            width: 200px;
            text-align: center;
            line-height: 48px;
            height: 48px;
            border: 1px solid #7d6f51;
            border-color: #7d6f51;
            color: #7d6f51;
            border-radius: 4px;
            margin-right: 20px;
        }

        .active {
            background-color: #7d6f51;
            border-color: #7d6f51;
            color: #ffffff;
        }
    }
}
.desc-box{
    width: 1200px;
    padding: 20px 40px 40px 40px;
    box-sizing: border-box;
    margin: 0 auto;
}
.large-title-box {
    margin-top: 30px;
    border-bottom: 1px #ebebeb solid;
    .large-title {
        display: inline-block;
        margin-bottom: 3px;
        font-family: 'TrajanPro-Regular', Arial;
        font-size: 24px;
        border-bottom: 3px solid #333333;
        color: #333333;
        padding: 0;
        margin-right: 15px;
        padding-bottom: 4px;
        overflow: hidden;
    }
}
.common-box{
    display: flex;
    border-bottom: 1px #ebebeb solid;
    padding: 30px 0;
    box-sizing: border-box;
    .label{
        width: 35.41667%;
        font-family: 'TrajanPro-Regular';
        font-weight: bold;
        font-size: 20px;
        color: #c99688;
        line-height: 28px; 
        white-space: pre-wrap; 
    }
    .content{
        flex:1;
        font-size: 15px;
        color: #333333;
        line-height: 28px;
        font-family: 'Arial';
        white-space: pre-wrap;
    }


}
</style>