<template>
<!-- 首页  -->
    <div class="page-index">
        <el-row>       
            <el-col :span='5' class="page-index">
                  <!-- 左侧导航条 -->
                <my-menu />
            </el-col>
            <el-col :span='19'>
                <!-- 首页中间部分 -->
                <my-life />
            </el-col>
        </el-row>
        <el-row>
            <el-row :span='24'>
                <container :nav="iStyle"/>
            </el-row>
        </el-row>

        <!-- 电影模块 -->
         <el-row>
            <el-row :span='24'>
                <container :nav="recomment" />
            </el-row>
        </el-row>
    </div>
</template>

<script>
import MyMenu from '@/components/index/menu.vue'
import MyLife from '@/components/index/life.vue'
import Container from '@/components/index/container.vue'
export default {
    data() {
        return {
            iStyle:{
                class: 'istyle',
                title:'有格调',
                list:[{
                text: '全部',
                tab: 'all',
                },{
                    text: '约会聚餐',
                    tab: 'food'
                },{
                    text: '正规SPA',
                    tab: 'spa'
                },{
                    text: '电影演出',
                    tab: 'movie'
                },{
                    text: '品质出游',
                    tab: 'travel'
                }]
            },
            recomment:{
                class: 'youhui',
                title: '很优惠',
                list:[{
                text: '全部',
                tab: 'all',
                },{
                    text: '美食',
                    tab: 'food'
                },
                {
                    text: '休闲',
                    tab: 'xiuxian'
                }]
            }
        }
    },
    components:{
        MyMenu,
        MyLife,
        Container
    }
}
</script>

<style lang="scss">
    @import '@/assets/css/index/index.scss';
</style>