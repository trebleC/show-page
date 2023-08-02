<template>
    <div class="tab-bar">

        <div class="tabs">
            <img class="logo" src="../../assets/logo.png" alt="" srcset="">
            <div class="tab" v-for="(item, index) in tabs" :key="index" @click="onNav(item)">{{ item.name }}</div>
            <div class="options">

                <el-input v-model="searchContent" class="input-box" size="large" placeholder="SEARCH KEYWORD">
                    <template #suffix>
                        <el-icon color="#000" size="18" class="o-icon" @click="onSearch">
                            <Search />
                        </el-icon>
                    </template>

                </el-input>
            </div>
        </div>
    </div>
</template>
<script>
import { Search } from "@element-plus/icons-vue";
import { ref, onMounted, onUnmounted, reactive } from 'vue'
export default {
    name: 'TabBar',
    components: { Search },
    setup(props, ctx) {
        const tabs = reactive([{
            name: 'HOME',
            key: 'home'
        },
        {
            name: 'PRODUCT',
            key: ''
        },
        {
            name: 'ABOUT US',
            key: ''
        },
        {
            name: 'NEWS',
            key: ''
        }, {
            name: 'CONTACT US',
            key: ''
        }])
        let searchContent = ref('')
        const onSearch = ()=>{
            console.log("???")
        }
        const onNav = (nav) => {
            ctx.emit('navChang',nav.key)
        }
        return {
            tabs,
            searchContent,
            Search,
            onSearch,
            onNav
        }
    }
}
</script>
<style lang="less">
.tab-bar {
    *{
        font-family: 'TrajanPro-Regular',Arial;
    }
    padding: 0 100px;
    width: 100%;
    height: 67px;
    background-color: #000;
    display: flex;
    box-sizing: border-box;

    .logo {
        width: 67px;
        height: 67px;
        position: relative;
        right: 50px;
    }

    .tabs {
        flex: 1;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        .tab {
            white-space: nowrap;
            color: #fff;
            padding: 0 50px;
            box-sizing: border-box;
            cursor: pointer;
            font-weight: bolder;
            font-size: 14px;
        }
    }

    .options {
        // width: 100px;
        display: flex;
        align-items: center;
        justify-content: flex-end;

        .o-icon {
            cursor: pointer;
        }

        .input-box {
            width: 220px;
        }
    }
}
</style>