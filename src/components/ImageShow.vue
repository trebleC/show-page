<template>
    <div class="image-show">
        <img class="img" :style="{
            'object-fit': contain ? 'contain' : 'cover',
            'cursor': contain ? 'default' : 'pointer'
        }" :src="path" alt="" srcset="">
        <div class="mask mask-hover" v-if="contain">
            <div class="btn-mask">VIEW MORE</div>
        </div>
    </div>
</template>
    
<script>
import { ref, reactive, onMounted, computed } from 'vue'

export default {
    name: 'ImageShow',
    props: {
        path: String,
        contain: {
            type: Boolean,
            default: false
        }
    },
    setup(props, ctx) {

        return {

        }
    }
}
</script>
    
<style lang="less">
.image-show {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;

    .img {
        width: 100%;
        height: 100%;
        object-fit: cover; // contain
        transition: all .5s;

        &:hover {
            transform: scale(1.05);
        }
    }

    .mask {
        opacity:0;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, .5);
        transition: all 300ms ease 0s;
        .btn-mask {
            color: #000;
            background-color: #fff;
            width: 190px;
            height: 55px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: trajanpro-regular, Arial;
        }
    }

    &:hover {
        .mask {
            opacity:1;
            
        }
        .img{
            transform: scale(1.05);
        }
    }

}
</style>