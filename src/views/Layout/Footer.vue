<template>
    <div class="footer">
        <div class="wrapper">
            <div class="content-box" style="width: 300px;">
                <div class="title">PRODUCTS</div>
                <div class="content" @click="openPath('product')" style="cursor: pointer;">
                    HOT PRODUCTS
                </div>
            </div>
            <div class="content-box" style="width: 300px;">
                <div class="title">ABOUT US</div>
                <div class="content" @click="openPath('about')" style="cursor: pointer;">
                    ABOUT US
                </div>
            </div>
            <div class="content-box">
                <div class="title">Contact Us</div>
                <div class="content">
                    <div class="item">
                        <el-icon>
                            <Printer />
                        </el-icon>
                        <span href="javascript:void(0)">Tel: {{ dataInfo.tel }}</span>
                    </div>
                    <div class="item">
                        <el-icon>
                            <Iphone />
                        </el-icon>
                        <a :href="'tel:' + dataInfo.phone">Phone: {{ dataInfo.phone }}</a>
                    </div>
                    <div class="item">
                        <el-icon>
                            <Message />
                        </el-icon>
                        <a :href="'mailto:' + dataInfo.email">Email: {{ dataInfo.email }}</a>
                    </div>
                    <div class="item">
                        <el-icon>
                            <Location />
                        </el-icon>
                        <span href="javascript:void(0)">Address: {{ dataInfo.address }}</span>
                    </div>
                </div>
            </div>


        </div>
        <div class="icon-box">
            <template v-for="(item, index) in iconList" :key="'icon-'+index">
                <div v-if="item.url" class="icons" :style="{ 'background-position': '0 ' + (index * -40) + 'px' }">
                </div>
            </template>

        </div>

    </div>
    <div class="desc">All rights reserved： GUANGZHOU QIQI TEXTILE CO.,LTD </div>
</template>
<script>
import { reactive, ref } from 'vue'
import { Printer, Iphone, Message, Location } from '@element-plus/icons-vue'
import { useRouter } from "vue-router";
export default {
    name: 'ProductShopFooter',
    components: {
        Printer, Iphone, Message, Location
    },
    setup() {
        const router = new useRouter()
        const openPath = (path) => {
            router.push('/' + path)
        }
//         Tel:  13173896881
// Email:qiqitex@outlook.com
// Address:  A138, No 585，Airport Rd,Tangjing Street,Baiyun District,Guangzhou,Guangdong,China
        let dataInfo = ref({
            tel: '13173896881',
            phone: '+86 13173896881',
            email: 'qiqitex@outlook.com',
            address: 'A138, No 585，Airport Rd,Tangjing Street,Baiyun District,Guangzhou,Guangdong,China'
        })
        let iconList = reactive([
            {
                name: 'fb',
                url: '',
            },
            {
                name: 'tw',
                url: '',
            },
            {
                name: 'pi',
                url: '',
            },
            {
                name: 'li',
                url: '',
            },
            {
                name: 'yt',
                url: '',
            },
            {
                name: 'go',
                url: '',
            },
            {
                name: 'vk',
                url: '',
            },
            {
                name: 'in',
                url: '',
            },
        ])
        return {
            openPath,
            dataInfo,
            iconList
        }
    }
};
</script>
<style lang="less" scoped>
.footer {
    padding: 40px;
    min-height: 300px;
    width: 100%;
    background-color: #000;
    box-sizing: border-box;

    .wrapper {
        display: flex;
    }

    .content-box {
        padding: 0 20px;
        box-sizing: border-box;
        width: 700px;
        min-height: 200px;
        border-right: 1px rgba(255, 255, 255, 0.296) solid;

        &:last-child {
            border: 0;
        }

    }

    .title {
        font-family: 'TrajanPro-Regular', Arial;
        position: relative;
        padding-bottom: 5px;
        width: 100%;
        line-height: 38px;
        font-size: 18px;
        color: #fff;
        font-weight: bold;

    }

    .content {
        display: block;
        width: 100%;
        line-height: 31px;
        font-size: 14px;
        color: #999;
        font-family: 'Montserrat-Light';

        .el-icon {
            font-size: 26px;
        }

        .item {
            display: flex;
            align-items: center;
            margin-bottom: 20px;
        }

        a,
        span {
            text-decoration: none;
            color: #fff;
            outline: none;
            display: block;
            margin-left: 10px;
            font-size: 16px;
        }
    }

}

.desc {
    width: 100%;
    font-size: 14px;
    color: #666;
    padding: 20px 40px;
    // font-family: 'TrajanPro-Regular',Arial;
    background: #141414;
}

.icon-box {
    margin-top: 40px;
    width: 100%;
    display: flex;
}

.icons {
    width: 40px;
    height: 40px;
    margin-right: 10px;
    background-image: url('~@/assets/icon_follow.svg');
    background-repeat: no-repeat;
    background-size: 100%;
    cursor: pointer;
}</style>