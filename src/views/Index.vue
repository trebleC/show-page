<template>
  <div class="index">
    <Layout></Layout>
  </div>
</template>

<script>
import Layout from '@/views/Layout/Index.vue'

export default {
  name: 'Index',
  components: {
    Layout
  }
}
</script>
<style lang="less">
.index{
  display: flex;
  justify-content: center;
}
</style>
