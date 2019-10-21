<template>
    <div class="page-changeCity">
        <el-row>
            <province/>
        </el-row>
        <el-row>
            <my-hot title="热门城市:" :list='hotList'></my-hot>
        </el-row>
        <el-row>
            <my-hot title="最近搜索:" :list='rencentList'/>
        </el-row>
        <el-row>
            <category />
        </el-row>
    </div>
</template>

<script>
import province from '@/components/changeCity/province.vue'
import MyHot from '@/components/changeCity/hot.vue'
import category from '@/components/changeCity/category.vue'
import api from '@/api/index.js'
export default {
    data() {
        return {
            hotList:[],
            rencentList:[]
        }
    },
    created() {
        api.getHotCity()
            .then( res =>{
                // console.log(res);
                this.hotList = res.data.data.map( item => item.name)
            }),
        api.getRecentCity()
            .then( res => {
                console.log(res);
                this.rencentList = res.data.data.map( item => item.name)
            })
    },
    components:{
        province,
        MyHot,
        category
    }
}
</script>

<style lang="scss">
    @import "@/assets/css/changeCity/hot.scss"
</style>