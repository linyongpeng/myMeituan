<template>
    <div class="m-geo">
        <!-- 左侧地址系列 -->
        <div class="position">
            <i class="el-icon-location" />
            {{ this.$store.state.position.name}}
            <router-link class="changeCity" :to="{name: 'changeCity'}">切换城市</router-link>
            [
             <a href="#" style="color:#999" v-for="(item, index) in nearCity" :key="index" > {{ item.name }} </a>
            ]
           
        </div>
        <!-- 判断是否 已经登录  存在就不展示  不存在就展示 登录 或 注册-->
        <div class="m-user" v-if="!$store.state.userName">
            <router-link class="login" :to="{name:'login'}" style="color:#FE8C00">立即登录</router-link>
            <router-link class="register" :to="{name:'register'}">注册</router-link>
        </div>


    </div>
</template>

<script>
import api from '@/api/index.js'
export default {
    data(){
        return {
            nearCity:[]
        }
    },
    created(){
        api.getCurPosition()
            .then(res =>{
                //api获取当前位置信息 传给vuex 修改仓库信息
                this.$store.dispatch('setPosition',res.data.data);
                //修改本地信息
                this.nearCity = res.data.data.nearCity
            })

    },
    //监听器
    watch: {
        //监听 $store.state.position 监听到修改 也连同本地数据一起修改
        "$store.state.position":function (){
            this.nearCity = this.$store.state.position.nearCity;
        }
    }
}
</script>