<template>
    <div  class="search-panel">
        <!-- 搜索区域 -->
        <el-row class="m-header-searchbar">
            <el-col :span='3' class="left" style="cursor: pointer;">
                        <img src="//s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png" alt="美团" @click='imgClick'>
            </el-col>
            <el-col :span='15' class="center">
                <div class="wrapper">
                    <el-input v-model="searchWord" placeholder="请输入火锅" @focus="focus" @blur="blur" @input="input"></el-input>
                    <el-button type="primary" icon="el-icon-search"></el-button>
                    <dl class="hotPlace" v-if="isHotPlace">
                        <!-- 输入框没内容时候的热门搜素 -->
                        <dt>热门搜索</dt>
                        <dd v-for="(item, i) in hotPlaceList" :key="i">
                            <router-link :to="{name:'goods', params: {name:item}}">{{item}}</router-link>
                        </dd>
                        
                    </dl>
                    <!-- 输入框有内容时候的热门搜索 -->
                    <dl class="searchList" v-if="isSearchList" >
                        <dd v-for="(item, i) in searchList" :key="i">
                             <router-link :to="{name:'goods', params: {name:item}}">{{item}}</router-link>
                        </dd>
                    </dl>
                </div>
                <p class="suggest">
                     <a href="#"  v-for="(item, i) in suggestList" :key="i">{{ item }}</a>    
                </p>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import api from '@/api/index.js'
export default {
    data() {
        return {
            searchWord:'',
            isFocus: false,     //搜索框获取光标
            hotPlaceList:[],
            searchList:[],
            suggestList:[]
        }
    },
    created() {
        api.searchHotWords()
           .then( (res)=>{
            // console.log(res)
            this.hotPlaceList = res.data.data;
            this.suggestList = res.data.data;
        },(err)=>{
            // console.log(err)
        })
    },
     computed: {
        //计算属性 监听这两个输入框的热门搜索
        isHotPlace(){
            //确认聚焦的状态为true  并且  文本框的值为空
            return this.isFocus && !this.searchWord;
        },
        isSearchList(){
            return this.isFocus && this.searchWord;
        }
    },
    methods: {
        focus(){
            this.isFocus = true;
        },
        blur(){
            let self = this;
            //因为点击热门搜索的时候 就会立即触发光标离开事件 导致点击了热门搜索无效
            setTimeout(function(){
                self.isFocus = false;
            },500)
        },
        input(){
           api.getsearchList()
            .then( res =>{
                // console.log(res);
                let value  = this.searchWord;
                this.searchList = res.data.data.list.filter((item, index) => {
                    return item.indexOf(value) > -1;
                })
            }, err =>{
                console.log(err)
            })
        },
        imgClick(){
            this.$router.push({
                name:'index'
            })
        }
    }

}
</script>

<style lang="scss">
    @import '@/assets/css/public/header/search.scss';   
</style>