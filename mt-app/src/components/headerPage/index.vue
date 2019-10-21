<template>
    <div class="m-header">
        <!-- 上半部分区域  搜索 + 导航区域 -->
        <el-row>
            <to-bar/>
        </el-row>
        <el-row>
            <search-bar/>
        </el-row>
    </div>
</template>

<script>
import toBar from './topBar'
import searchBar from './searchBar'
export default {
    components:{
        toBar,
        searchBar
    }
}
</script>

<style lang="scss">
    @import '@/assets/css/public/header/index.scss';
</style>