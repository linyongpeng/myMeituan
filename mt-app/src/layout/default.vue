<template>
    <!-- 上中下的模板 -->
    <div class="layout-default">
        <!-- 上模板 -->
        <el-container>
            <el-header height='100%'>
                <my-header/>
            </el-header>
            <el-main>
                <!-- 中间部分 -->
                <router-view></router-view>
                <!-- <index /> -->
            </el-main>
            <!-- 下模板 -->
            <el-footer height='0'>
                <my-footer/>
            </el-footer>
        </el-container>
    </div>
</template>

<script>
import MyHeader from '@/components/headerPage/index.vue'
import MyFooter from '@/components/footer/index.vue'
import Index from '@/page/index.vue'
export default {
    components:{
        MyHeader,
        MyFooter,
        Index
    }
}
</script>

<style lang="scss">
    @import '@/assets/css/public/layout.scss';
</style>