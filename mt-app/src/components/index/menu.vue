<template>
    <div class="m-menu">
        <dl class="nav" @mouseleave="menuLeave" >
            <dt>全部分类</dt>
            <dd v-for="(item, index) in menuList" :key="index" @mouseenter="menuEnter(item)">
                <i :class="item.type"></i>
                {{ item.name}}
                <span class='arrow'></span>
            </dd>
        </dl>
        <div class="detail" v-if="curDetail"  @mouseenter="curseenter" @mouseleave="curLeave">
            <template v-for="(item, index) in curDetail.items" >
                <h4 :key="index" style='color:black'>{{ item.title }}</h4>
                <span v-for="(v, i) in item.items" :key=" v + '_' + i" >{{ v }}</span>
            </template>
        </div>
    </div>
</template>

<script>
import api from '@/api/index.js'
export default {
    data() {
        return {
            curDetail: null,
            menuList:[]
        }
    },
    created() {
        api.getMenuList()
            .then( res => {
                // console.log(res.data.data);
                this.menuList = res.data.data;
            })
    },
    methods: {
        menuEnter(item){
            this.curDetail = item;
            console.log(this.curDetail)
        },
        menuLeave(){
            var self = this
            this.timer = setTimeout(function (){
                self.curDetail = null;
            },500)
        },
        curseenter(){
            clearTimeout(this.timer)
        },
        curLeave(){
            this.curDetail = null;
        }
    },
}
</script>

