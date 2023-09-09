<template>
    <div :class="['tab-bar']" :style="[tabStyle]">
        <div class="tabs">
            <img class="logo" src="../../assets/logo.png" alt="" srcset="">
            <div :class="['tab', { active: isActive(item.key) }]" v-for="(item, index) in tabs" :key="index"
                @click="onNav(item)">{{ item.name }}</div>
            <div class="options" v-if="activeKey == 'home'">

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
import { ref, onMounted, onUnmounted, reactive, watch,nextTick } from 'vue'
import { useRouter } from 'vue-router'
import {useStore} from "vuex"
export default {
    name: 'TabBar',
    components: { Search },
    setup(props, ctx) {
        const store = useStore();
        const router = new useRouter()
        const activeKey = ref(router.currentRoute.value.path.replace('/', '').toLowerCase() || 'home')
        const tabs = reactive([{
            name: 'HOME',
            key: 'home'
        },
        {
            name: 'PRODUCT',
            key: 'product'
        },
        {
            name: 'ABOUT US',
            key: 'about'
        },
        {
            name: 'NEWS',
            key: 'news'
        }, {
            name: 'CONTACT US',
            key: 'contact'
        }])
        let searchContent = ref('')
        const onSearch = () => {
            // store.commit('setName',searchContent.value)
            if(!searchContent.value)return
           let name = searchContent.value
           searchContent.value = ''
            router.push('/product?name='+name)
        }
        const onNav = (nav) => {
            activeKey.value = nav.key

            window.scrollTo(0, 0)
            router.push('/' + activeKey.value)
        }
        let tabStyle = ref('')
        onMounted(() => {
            window.addEventListener('scroll', () => {
                let scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
                tabStyle.value = document.documentElement.scrollTop > 100 ? 'max-width:unset;left:0' : ''
            })
        })
        const isActive = (key)=>{
            return activeKey.value.indexOf(key) >-1
        }
        watch(
            () => router.currentRoute.value,
             async (newValue) => {
              
                activeKey.value = router.currentRoute.value.path.replace('/', '').toLowerCase()
                setTimeout(()=>{
                    window.scrollTop= 0
                    document.body.scrollTop=0
                    document.documentElement.scrollTop = 0
                },0)
        
            },
            { immediate: true }
        )
        return {
            tabs,
            searchContent,
            Search,
            onSearch,
            onNav,
            tabStyle,
            activeKey,
            isActive
        }
    }
}
</script>
<style lang="less" scoped>
.tab-bar {
    * {
        font-family: 'TrajanPro-Regular', Arial;
    }

    animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
    transform: translate3d(0, 0, 0);

    position:fixed;
    top: 0;
    // left: 0;
    // max-width:1920px;
    min-width: 1200px;
    width: 100%;
    z-index: 999;
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
            line-height: 50px;
            position: relative;
            width: 170px;
            display: flex;
            justify-content: center;

            &:hover::after {
                content: '';
                display: inline-block;
                width: 40%;
                height: 1px;
                background-color: #fff;
                position: absolute;
                bottom: 8px;
                display: flex;
                justify-content: center;
                animation: mymove .1s linear forwards;
            }
        }

        .active {
            &::after {
                content: '';
                display: inline-block;
                width: 40%;
                height: 1px;
                background-color: #fff;
                position: absolute;
                bottom: 8px;
                display: flex;
                justify-content: center;
            }
        }
    }

    @keyframes mymove {
        from {
            width: 0px;
        }

        to {
            width: 50%;
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