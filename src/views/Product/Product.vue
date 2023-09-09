<template>
    <div class="product-wrapper">
        <div class="wrapper">
            <div class="sidebar">
                <div class="pro-menu">
                    <div class="title">Products</div>
                    <div class="content">
                        <div :class="['pro', item.categoryId == activeId ? 'pro-active' : '']"
                            v-for="(item, index) in cateList" :key="'cate_' + index" @click="onSelectMenu(item)">
                            {{ item.categoryName }}
                        </div>
                    </div>
                </div>
                <div class="pro-menu hot">
                    <div class="title">Hot Products</div>
                    <div class="content">
                        <div class="hots">
                            <div class="hot-item" v-for="(item, index) in hotList" @click="jumpPage(item.goodId)">
                                <img :src="item.imageUrl" class="img" alt="" srcset="" />
                                <div class="pro-name">{{ item.name }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="list-box">
                <div class="head">{{ activeName }}</div>

                <el-space direction="vertical" alignment="flex-start">
                    <el-skeleton style="width: 100%;" class="list" :loading="loading" animated :count="9">
                        <template #template>
                            <div class="skeleton-product">
                           
                                <el-skeleton-item variant="image" style="width: 100%;height: 70%;"/>
                                <div style="padding: 14px 0">
                                    <el-skeleton-item variant="h3" style="width: 50%" />
                                    <div style="
                                        display: flex;
                                        align-items: center;
                                        justify-items: space-between;
                                        margin-top: 16px;
                                        height: 16px;
                                        ">
                                        <el-skeleton-item variant="text" style="margin-right: 16px" />
                                        <el-skeleton-item variant="text" style="width: 30%" />
                                    </div>
                                </div>
                          
                        </div>

                        </template>
                        <template #default>
                            <div class="list">
                                <div class="product" v-for="(item, index) in productList" :key="'p' + index">
                                    <img :src="item.imageUrl" class="img" alt="" />
                                    <div class="title">{{ item.name }}</div>
                                    <div style="text-align: center">
                                        <div class="btn-show" @click="jumpPage(item.goodId)">
                                            View More
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </template>
                    </el-skeleton>
                </el-space>


                <!-- <div class="pagination-wrapper">
                    <div class="pagination-box">

                        <div class="btn btn-pre" :style="pageNo == 1 ? 'cursor:not-allowed' : ''"
                            @click="onPageChange(pageNo - 1)">{{ "<<" }}
                        </div>

                        <div :class="['btn', 'btn-page', item == pageNo ? 'btn-active' : '']" v-for="item in total"
                            @click="onPageChange(item)">
                            {{ item }}
                        </div>
                        <div class="btn btn-pre" :style="pageNo == total ? 'cursor:not-allowed' : ''"
                            @click="onPageChange(pageNo + 1)">
                            {{ ">>" }}
                        </div>

                        PAGE:<input v-model="pageSize" />
                        <div class="btn btn-go" @click="onPageChange(pageSize)">GO</div>

                    </div>
                </div> -->
            </div>
        </div>
    </div>
</template>
<script>
import {
    queryCategoryMap,
    queryGoodList,
    queryHotGoodList,
} from "@/api/common";
import { ref, reactive, onMounted, computed, watch } from "vue";
import { useRouter } from "vue-router";
import { BASR_URL } from "@/config";
import { useStore } from "vuex"
export default {
    name: "ProductList",
    components: {},
    props: {
        path: String,
        contain: {
            type: Boolean,
            default: false,
        },
    },
    setup(props, ctx) {
        const store = useStore();
        const router = new useRouter();
        let cateList = ref([]);
        let hotList = ref([]);
        const activeName = ref("");
        const pageNo = ref(1);
        const total = ref(3);
        const pageSize = ref(1);
        let name = router.currentRoute.value.query.name

        const loading = ref(true)



        let activeId = ref(router.currentRoute.value.query.categoryId || 'all');
        const cateNameChange = () => {
            cateList.value.map((item) => {
                if (item.categoryId == activeId.value) {
                    activeName.value = item.categoryName;
                } else {
                    activeName.value = "";
                }
            });
        };
        const getList = () => {
            let query = {
                categoryId: activeId.value == 'all' ? '' : activeId.value,
                pageNo: pageNo.value,
                pageSize: pageSize.value,
            }
            if (name) {
                query.name = name
            }
            queryGoodList(query).then((res) => {
                loading.value = false
                productList.value = res.data.map((item) => {
                    item.imageUrl = item.attachments.length
                        ? BASR_URL + item.attachments[0].url
                        : "";
                    return item;
                });
            });
        };

        queryCategoryMap().then((res) => {
            cateList.value = res.data;

            cateList.value.unshift({ categoryId: 'all', categoryName: "All" });
            cateList.value.push({ categoryId: null, categoryName: "Other" });
            cateList.value.map((item) => {
                if (activeId.value == item.categoryId) {
                    activeName.value = item.categoryName;
                }
            });
            if (!activeName.value && activeName.value != 'all') {
                activeName.value = cateList.value[0].categoryName;
                activeId.value = cateList.value[0].categoryId;
            }
            getList();
        });

        const jumpPage = (goodId) => {
            router.push("/detail/" + goodId);
        };

        queryHotGoodList().then((res) => {
            hotList.value = res.data.slice(0, 4).map((item) => {
                item.imageUrl = item.attachments.length
                    ? BASR_URL + item.attachments[0].url
                    : "";
                return item;
            });
        });

        let productList = ref([]);

        const onSelectMenu = (item) => {
            name = ''
            activeId.value = item.categoryId;
            activeName.value = item.categoryName;
            getList();
        };
        const onPageChange = (page) => {
            if (page <= total.value && page > 0) {
                pageNo.value = page;
                getList();
            }
        };

        watch(() => store.state.name, () => {
            // console.log('?????',store.state.name);
            // getList()
        })


        return {
            cateList,
            hotList,
            activeId,
            activeName,
            productList,
            jumpPage,
            onSelectMenu,
            pageNo,
            pageSize,
            onPageChange,
            total,
            loading
        };
    },
};
</script>
<style lang="less" scoped>
.product-wrapper {
    margin: 0 auto;
    background: #f7f7f7;
    overflow: hidden;

    .wrapper {
        padding-top: 30px;
        padding-bottom: 4.5%;
        width: 1200px;
        margin: 0 auto;
        zoom: 1;

        display: flex;
        justify-content: space-between;
    }

    .sidebar {
        width: 278px;

        .pro-menu {
            background-color: #fff;
            width: 100%;
            padding: 16px 0;
            box-sizing: border-box;

            .title {
                position: relative;
                padding: 0 25px 36px;
                height: 48px;
                line-height: 48px;
                background: url(~@/assets/cate_title_icon.png) no-repeat center bottom;
                font-size: 24px;
                color: #202528;
                font-family: "Glosa-Bold";
                text-align: center;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
            }

            .content {
                margin-top: 16px;

                .pro {
                    font-size: 14px;
                    color: #7a7a7a;
                    font-family: "Opensans-Regular";
                    padding: 10px 20px;
                    box-sizing: border-box;
                    cursor: pointer;

                    &:hover {
                        background: #f7f7f7;
                        color: #d4ad6a;
                    }

                    &::before {
                        content: "";
                        width: 4px;
                        height: 7px;
                        background: url(~@/assets/cate_item_icon.png) no-repeat center;
                        display: inline-block;
                        margin-right: 10px;
                    }
                }

                .pro-active {
                    background: #f7f7f7;
                    color: #d4ad6a;
                }
            }
        }

        .hot {
            margin-top: 40px;

            .hots {
                padding: 20px;
                box-sizing: border-box;

                .hot-item {
                    display: flex;
                    justify-content: space-between;
                    padding: 30px 0;
                    box-sizing: border-box;
                    border-bottom: 1px solid #d4ad6a;
                    cursor: pointer;

                    .img {
                        transition: opacity 0.6s;
                        width: 59px;
                        height: 106px;
                        object-fit: cover;
                    }

                    &:first-child {
                        padding-top: 0;
                    }

                    &:last-child {
                        padding-bottom: 0;
                        border: 0;
                    }

                    .pro-name {
                        flex: 1;
                        font-family: "TrajanPro-Regular", Arial;
                        font-size: 14px;
                        margin-left: 16px;
                    }

                    &:hover {
                        .pro-name {
                            color: #d4ad6a;
                        }
                    }
                }
            }
        }
    }

    .list-box {
        width: 900px;

        .head {
            padding: 0 30px;
            width: 100%;
            height: 50px;
            line-height: 50px;
            background: #fff;
            font-size: 18px;
            color: #202528;
            font-family: "Opensans-Regular";
            box-sizing: border-box;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .list {
            display: flex;
            flex-wrap: wrap;
            margin-top: 30px;
        }

        .product {
            background: #fff;
            width: calc(100% / 3 - 15px);
            margin-right: 20px;
            margin-bottom: 20px;
            overflow: hidden;

            &:nth-child(3n) {
                margin-right: 0;
            }

            .img {
                width: 100%;
                height: 235px;
                object-fit: cover;
            }

            .title {
                margin-top: 16px;
                width: 100%;
                height: 48px;
                line-height: 24px;
                text-align: center;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;
                font-family: "TrajanPro-Regular", Arial;
            }

            .btn-show {
                display: inline-block;
                height: 36px;
                line-height: 40px;
                border: 1px solid #acbac1;
                font-size: 14px;
                color: #a6b5bd;
                text-align: center;
                border-radius: 20px;
                transition: all 0.5s;
                padding: 0 22px;
                font-family: "TrajanPro-Regular", Arial;
                margin-bottom: 30px;
                cursor: pointer;
            }

            &:hover {
                .btn-show {
                    background-color: #d4ad6a;
                    border-color: transparent;
                    color: #fff;
                }

                .img {
                    transform: scale(1.05);
                    transition: all 0.5s;
                }
            }
        }
    }

    .pagination-wrapper {
        width: 100%;
        display: flex;
        justify-content: right;
    }

    .pagination-box {
        font-family: "TrajanPro-Regular", Arial;
        display: flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        margin: 40px 0;

        .btn {
            background: #fff;
            color: #555;
            font-size: 18px;
            min-width: 54px;
            height: 54px;
            margin-right: 10px;
            text-align: center;
            line-height: 54px;
            cursor: pointer;
        }

        .btn-page {
            cursor: pointer;

            &:hover {
                background-color: #d4ad6a;
                color: #fff;
            }
        }

        .btn-active {
            cursor: pointer;
            background-color: #d4ad6a;
            color: #fff;
        }

        input {
            width: 100px;
            height: 54px;
            border: 1px solid #ebebeb;
            padding: 0 16px;
            box-sizing: border-box;
            font-size: 18px;
            font-family: "TrajanPro-Regular", Arial;
        }

        .btn-go {
            margin-left: 10px;
            cursor: pointer;
        }
    }
}
.skeleton-product{
    margin-right: 15px;
    width: 290px; 
    height: 267px;
    &:nth-child(3n){
        margin-right: 0;
    }
}
</style>
