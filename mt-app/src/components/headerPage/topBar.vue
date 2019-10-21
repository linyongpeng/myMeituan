<template>
    <div >
        <!-- 导航区域 -->
        <el-row class="m-header-topbar m-header">
            <!-- :span 100%  加起来是24  -->
            <el-col :span='10'>
                <geo />
            </el-col>
            <el-col :span='14'>
               <my-nav />
            </el-col>
        </el-row>
    </div>
</template>

<script>
import MyNav from './nav.vue'
import geo from './geo.vue'
export default {
    components:{
        MyNav,
        geo
    }
}
</script>

<style lang="scss">
     @import "@/assets/css/public/header/topbar.scss";
</style>