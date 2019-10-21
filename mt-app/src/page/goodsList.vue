<template>
        <!-- 标题区域 -->
    <div class="page-product">
        <el-row class="m-crumbs">
            <crumbs />
        </el-row>

          <!-- 产品展示 -->
        <el-row>
            <el-col :span="19">
                <el-row>
                    <!-- 商品页 分类 -->
                    <categroy />
                </el-row>
                <el-row >
                    <list />
                </el-row>
            </el-col>
            <el-col :span="5">
                <!-- map + fav -->
            </el-col>
        </el-row>
    </div>
</template>

<script>
import crumbs from '@/components/products/crumbs.vue'
import categroy from '@/components/products/categroy.vue'
import List from '@/components/products/list.vue'
export default {
    components:{
        crumbs,
        categroy,
        List
    }
}
</script>

<style lang="scss">
    @import '@/assets/css/products/index.scss';
</style>