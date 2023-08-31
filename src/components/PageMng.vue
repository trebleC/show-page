<template>
     <div class="pagination-box">
            <div class="pagination" v-for="(item,index) in paginationCount" :key="'page'+index">
                <div  :class="['pagi-item',{active:index == pageNo}]" @click="onChangePage(index)"></div>
            </div>
        </div>
</template>
    
<script>
import { ref, reactive, onMounted,computed } from 'vue'

export default {
    name: 'PageMng',
    props:{
        count:Number
    },
    setup(props, ctx) {
        let pageNo = ref(0)

        const jumpPage = (item) => {
            //window.open(item.url)
        }

        let paginationCount = ref(props.count)
        const onChangePage = (index)=>{
            pageNo.value = index
            ctx.emit('onChangePage',index)
        }
        return {
            pageNo,
            paginationCount,
            onChangePage
        }
    }
}
</script>
    
<style lang="less" scoped>
    .pagination-box{
        display: flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        margin: 40px 0;
        .pagi-item{
            background-color: #666;
            width: 12px;
            height: 12px;
            border-radius: 50%;
            cursor: pointer;


            &:hover{
                width: 20px;
                height: 20px;
                background-color: #fff;
                border: 3px solid #d4ad6a;
                box-sizing: border-box;
            }
  
        }
        .active{
                width: 20px;
                height: 20px;
                background-color: #fff;
                border: 3px solid #d4ad6a;
                box-sizing: border-box
            }
    }
    .pagination{
        width: 34px;
        height: 20px;
        margin-right: 10px;
        vertical-align: middle;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;

    }
</style>