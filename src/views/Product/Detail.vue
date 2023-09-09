<template>
    <div class="banner">
        <div class="common-title">Product Detail</div>
    </div>
    <div class="good-wrapper">
        <el-space direction="vertical" alignment="flex-start" style="width: 100%;">
            <el-skeleton style="width: 100%;" class="list" :loading="!infoData.name" animated :count="1">
                <template #template>
                    <div style="display: flex;">
                        <el-skeleton-item variant="image" style="width: 500px;height: 500px;" />
                        <div style="width: 500px; margin-left: 50px;">
                            <el-skeleton-item variant="h3" style="width: 50%" />
                            <div>
                                <div style="
                                width: 100%;
                                        display: flex;
                                        align-items: center;
                                        justify-items: space-between;
                                        margin-top: 16px;
                                        height: 16px;
                                        ">
                                    <el-skeleton-item variant="text" style="margin-right: 16px" />
                                    <el-skeleton-item variant="text" style="width: 30%" />
                                </div>
                                <div style="
                                width: 100%;
                                        display: flex;
                                        align-items: center;
                                        justify-items: space-between;
                                        margin-top: 16px;
                                        height: 16px;
                                        ">
                                    <el-skeleton-item variant="text" style="margin-right: 16px" />
                                    <el-skeleton-item variant="text" style="width: 30%" />
                                </div>
                                <el-skeleton-item variant="text" style="width: 70%;margin: 14px 0;" />
                                <el-skeleton-item variant="text" style="width: 70%;margin: 14px 0;" />
                                <el-skeleton-item variant="text" style="width: 70%;margin: 14px 0;" />
                                <el-skeleton-item variant="text" style="width: 70%;margin: 14px 0;" />

                            </div>

                        </div>
                    </div>




                </template>
                <template #default>
                    <GoodImage :images="imgArr" class="imgs-box" />
                    <div class="title-box">
                        <div class="title">{{ infoData.name }}</div>
                        <div class="desc" v-if="infoData.goodNo">Item No.: {{ infoData.goodNo }}</div>
                        <div class="desc">{{ infoData.desc }}</div>
                        <div class="btn-box">
                            <div class="btn active" @click="jumpPage(infoData.goodId)">Request Quote</div>
                            <div class="btn" @click="jumpPage('')">Contact Us</div>
                        </div>

                    </div>
                </template>
            </el-skeleton>
        </el-space>


    </div>
    <div class="desc-box">
        <div class="large-title-box">
            <span class="large-title">Description</span>
        </div>
        <div class="table" v-if="infoData">
            <table>
                <template v-for="(item, index) in infoData.specification" :key="index">
                    <tr v-if="item.label">
                        <td>{{ item.label }}</td>
                        <td>{{ item.value }}</td>
                    </tr>
                </template>

            </table>
        </div>
    </div>

    <!-- <div class="desc-box">

        <div class="large-title-box">
            <span class="large-title">Description</span>
        </div>
        <div class="common-box">
            <div class="label">SPECIFICATION</div>
            <div class="content" v-html="dataInfo.specification"></div>
        </div>
        <div class="common-box">
            <div class="label">{{ 'PRODUCTS' + '\n' + 'DESCRIPTION' }}</div>
            <div class="content" v-html="dataInfo.desc"></div>
        </div>
    </div> -->
</template>
    
<script>
import { ref, reactive, onMounted, } from 'vue'
import GoodImage from '@/components/GoodImage.vue'
import { queryGood } from '@/api/common'
import { useRouter } from "vue-router";
import { BASR_URL } from '@/config';
export default {
    name: 'About',
    components: { GoodImage },
    setup() {

        let imgArr = ref([])

        let dataInfo = reactive({
            specification: `Width:135-140cm
Length MOQ:14 Meters`,
            desc: `Material : 60% Rayon+ 40% Nylon
Characteristic : Embroidered
Customized service : Support Color / Style Custom`
        })
        const router = new useRouter()

        const infoData = ref({})

        queryGood({ goodId: router.currentRoute.value.params.goodId }).then(res => {
            imgArr.value = res.data.attachments.map(item => {
                return BASR_URL + item.url
            })
            infoData.value = res.data
        })
        const jumpPage = (goodId) => {
            let query = goodId ? '?goodId=' + goodId : ''
            router.push('/contact' + query)
        }
        return {
            imgArr,
            dataInfo,
            infoData,
            jumpPage


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
    min-height: 500px;
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

.desc-box {
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

.common-box {
    display: flex;
    border-bottom: 1px #ebebeb solid;
    padding: 30px 0;
    box-sizing: border-box;

    .label {
        width: 35.41667%;
        font-family: 'TrajanPro-Regular';
        font-weight: bold;
        font-size: 20px;
        color: #c99688;
        line-height: 28px;
        white-space: pre-wrap;
    }

    .content {
        flex: 1;
        font-size: 15px;
        color: #333333;
        line-height: 28px;
        font-family: 'Arial';
        white-space: pre-wrap;
    }


}

.table {
    padding-top: 20px;
    width: 100%;
    font-family: 'TrajanPro-Regular';

    table {
        width: 100%;
        border-collapse: collapse;

        td {
            border: 1px solid #7d6f51;
            padding: 10px 10px;
            box-sizing: border-box;
        }

        td:nth-child(1) {
            width: 30%;
            font-weight: bold;
        }

        td:nth-child(2) {
            width: 370%;
            word-wrap: break-word;
            white-space: pre-wrap;
            word-break: break-all;
            color: #333;
        }
    }
}
/deep/ .el-space__item{
    width: 100%;
}
</style>