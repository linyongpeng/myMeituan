<template>
    <div class="m-istyle">
       <dl @mouseover="over" :class="nav.class">
      <dt>{{nav.title}}</dt>
      <dd
        v-for="(item, index) in nav.list"
        :key="index"
        :class="{active: kind == item.tab}"
        :data-type="item.tab"
      >{{item.text}}</dd>
    </dl>
        <ul class="ibody">
            <li v-for="(item, index) in resultsData[kind]" :key='index'>
                <el-card :body-style="{ padding: '0px' }" shadow='never'>
                    <img :src="item.image" class="image">
                    <div  class="cbody">
                        <div class="title" :title="item.title">{{ item.title }}</div>
                        <div class="sub-title" :title="item.sub_title">{{ item.sub_title }}</div>

                        <!-- 未抢光的状态 -->
                        <div class="price-info" >
                            <span class="current-price-wrapper">
                                <span class="price-symbol numfont">￥</span>
                                <span class="current-price numfont">{{ item. price }}</span>
                            </span>
                            <span class="old-price">门市价：￥{{ item. price }}</span>
                            <span class="sold bottom-right-info">{{ item.address }}</span>
                        </div>

                        <!-- 抢光的状态
                        <div class="price-info" v-else-if="!item.rentNum">
                             <span class="current-price-wrapper">
                                <span class="price-symbol numfont">￥</span>
                                <span class="current-price numfont">抢光了</span>
                            </span>
                        </div>

                          人均
                        <div class="price-info" v-else>
                            <span class="current-price-wrapper">
                                    <span class="price-symbol numfont">￥</span>
                                    <span class="current-price numfont">{{ item.price_info.avg_price }}/{{item.price_info.units }}</span>
                                </span>
                        </div> -->
                    </div>
                </el-card>
            </li>
        </ul>
    </div>
</template>


<script>
import api from '@/api/index.js'
export default {
    data() {
        return {
            kind:'', //选择的 全部 还是其他
            resultsData: {},
            list:[]
        }
    },
    created() {
        api.resultsByKeywords()
            .then( res =>{
                // console.log(res.data.data);
                this.resultsData = res.data.data
            })

        //出来的默认显示全部
        this.kind = this.nav.list[0].tab;
    },
    methods: {
        over(e){
            let target = e.target;
            let tagName = target.tagName.toLowerCase();
            if(tagName !== 'dd'){
                return false;
            }

            this.kind = target.getAttribute('data-type');
            //动态获取数据 ajax请求
        }
    },
    props:['nav']
}
</script>

<style lang="scss">
    @import "@/assets/css/index/artistic.scss";
</style>