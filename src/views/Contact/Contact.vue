<template>
    <div class="banner">
        <div class="common-title">CONTACT US</div>
    </div>
    <div class="news-wrapper">

        <div style="width: 100%;">

            <div class="title">Get in touch</div>
            <el-form :model="form" :rules="rules" ref="ruleFormRef">
                <div class="first-box">
                    <el-form-item size="large" prop="name">
                        <el-input v-model="form.name" placeholder="Name" />
                    </el-form-item>
                    <el-form-item size="large"  prop="email">
                        <el-input v-model="form.email" placeholder="Email" />
                    </el-form-item>
                </div>
                <el-form-item size="large"  prop="phone">
                    <el-input v-model="form.phone" placeholder="Phone Number" />
                </el-form-item>
                <el-form-item size="large">
                    <el-input v-model="form.desc" type="textarea" :rows="5" placeholder="Comment" />
                </el-form-item>
                <el-form-item size="large">
                    <el-button type="primary" @click="onSubmit(ruleFormRef)">Send Message</el-button>
                </el-form-item>
            </el-form>
        </div>

    </div>
</template>
    
<script>
import { ref, reactive, onMounted } from 'vue'
import { saveDemand } from '@/api/common'
import { ElMessage } from 'element-plus'

export default {
    name: 'NewsList',
    components: {},
    setup() {

        const jumpPage = (item) => {
            //window.open(item.url)
        }
        const ruleFormRef = ref(null)
        const form = reactive({
            name: '',
            email: '',
            phone: '',
            desc: ''
        })
        const rules = reactive({
            name: [{ required: true }],
            email: [
                { required: true },{
                type: 'email',
                message: 'Please input correct email address',
                trigger: ['blur', 'change'],
            }],
            // phone: [{ required: true },{
            //     pattern:/^((0\d{2,3}-\d{7,8})|(1[3584]\d{9}))$/,
            //     message: 'Please input correct phone number',
            //     trigger: ['blur', 'change'],
            // }],
        })
        const onSubmit = async (formEl) => {
            if (!formEl) return
            let valid = await formEl.validate().catch((err) => { return false })
            if (valid) {
                saveDemand(form).then(res => {
                    ElMessage({
                        showClose: true,
                        message: '恭喜你，这是一条成功消息',
                        type: 'success'
                    });
                })
            }

        }

        return {
            jumpPage,
            form,
            rules,
            onSubmit,
            ruleFormRef

        }
    }
}
</script>
    
<style lang="less" scoped>
.banner {
    width: 100%;
    height: 170px;
    background: url(~@/assets/banner.png) no-repeat top / 100%;
    ;
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


    .title {
        padding: 40px 0;
        box-sizing: border-box;
        font-size: 20px;
        font-weight: bold;
    }

    display: block;
    width:900px;
    height: 700px;
    margin-top: 80px;
    padding: 16px 40px;
    box-sizing: border-box;
    text-align: center;
    display: flex;
    justify-content: center;
    margin: auto;

    .first-box {
        display: flex;
        justify-content: space-between;

        :deep(.el-form-item) {
            width: 48%;
        }
    }

    :deep(.el-form-item) {
        ::placeholder {
            font-family: 'TrajanPro-Regular', Arial;
        }

        .el-button {
            background-color: #000;
        }
    }
}</style>