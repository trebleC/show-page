<template>
    <div class="post-list">
        <div class="filter">搜索</div>
        <div class="list-box">
            <div class="list" v-for="(item, index) in songList" :key="index">
                <img class="post-img" @click="showDetail(item)" :src="item.thumbnail_image_url" alt="" srcset="">
                <div class="name" @click="copyName(item.song_name)">{{ item.song_name }}</div>
                <div class="singer desc" @click="">{{ item.singer }}</div>
                <div class="desc">{{ item.publish_at }}</div>
            </div>
        </div>

        <el-dialog v-model="dialogFormVisible" title="Shipping address">
            <el-form :model="form">
                <el-form-item label="Promotion name" :label-width="formLabelWidth">
                    <el-input v-model="form.name" autocomplete="off" />
                </el-form-item>
                <el-form-item label="Zones" :label-width="formLabelWidth">
                    <el-select v-model="form.region" placeholder="Please select a zone">
                        <el-option label="Zone No.1" value="shanghai" />
                        <el-option label="Zone No.2" value="beijing" />
                    </el-select>
                </el-form-item>
            </el-form>
            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="dialogFormVisible = false">Cancel</el-button>
                    <el-button type="primary" @click="dialogFormVisible = false">
                        Confirm
                    </el-button>
                </span>
            </template>
        </el-dialog>
    </div>
</template>
    
<script>
import useClipboard from 'vue-clipboard3'
import { getSongList } from '@/api/poster'
import { ref,reactive } from 'vue'
import { ElMessage } from 'element-plus'
export default {
    name: 'PostList',
    setup(props, ctx) {
        const { toClipboard } = useClipboard()
        const copyName = async (name) => {
            await toClipboard(name)
            ElMessage({
                message: '已复制',
                type: 'success',
            })
        }



        const dialogFormVisible = ref(false)
        const formLabelWidth = '140px'

        const form = reactive({
            name: '',
            region: '',
            date1: '',
            date2: '',
            delivery: false,
            type: [],
            resource: '',
            desc: '',
        })




        let songList = ref([])
        getSongList().then(res => {
            songList.value = res.data
        })

        const showDetail = (item)=>{
            dialogFormVisible.value = true
        }
        return {
            copyName,
            songList,
            dialogFormVisible,
            formLabelWidth,
            form,
            showDetail
        }
    }
}
</script>
    
<style lang="less" scoped>
.post-list {
    // display: flex;
    // justify-content: center;
    position: relative;
    padding: 16px;
    box-sizing: border-box;
    width: 100%;
    height: 100%;


    .list-box {
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
        background-color: #fff;
        padding: 40px;
        box-sizing: border-box;
        border-radius: 4px;
        width: 1100px;

        .list {
            width: 234px;
            margin-bottom: 20px;
            margin-right: 28px;
            box-sizing: border-box;

            &:nth-child(4n) {
                margin-right: 0;
            }
        }
    }

    .post-img {
        width: 100%;
        height: 234px;

    }

    .name {
        color: #000;
        font-size: 14px;
        cursor: pointer;
    }

    .singer {
        cursor: pointer;
    }

    .desc {
        color: #999;
        font-size: 14px;
    }
}
</style>