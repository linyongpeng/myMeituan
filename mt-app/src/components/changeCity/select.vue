<template>
                                             <!-- 自定义事件 -->
    <div :class="['choose-wrap', disabled?'disabled':'']" @click='showWrapper' v-document-click='documentClick'>
        <div class="choose">
            <span>{{ value }}</span>
            <i class="el-icon-caret-bottom"></i>
                <div :class="{'mt-content': true, 'active': showWrapperActive}">
                <h2>{{ title }}</h2>
                <div :class="['wrapper', className]">
                    <div class="col" v-for="(listData, index) in rederList" :key="index">
                        <span :class="{'mt-item':true, 'active':item.name == value}" v-for="(item, index) in listData" :key="index" @click='changeValue(item)'>{{ item.name }}</span>
                    </div>                
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:['list', 'value', 'title', 'showWrapperActive','disabled','className'],

    methods: {
        showWrapper(e){
            e.stopPropagation();
                if(!this.disabled){
                    this.$emit('change_active', true)
                }
        },
        documentClick(e){
            // console.log(1)
            this.$emit('change_active', false)
        },
        changeValue(item){
            this.$emit('change', item);
        }
    },
    computed: {
        //各省份的分类
        rederList: function() {
            // 计算每一类有12个
            let col = Math.ceil(this.list.length / 12) ;
            let resultList = [];
            for (var i = 0; i < col; i ++) {
                let data = this.list.slice(i * 12, i * 12 + 12);
                resultList.push(data);
            }
            // console.log(resultList)
            return resultList;
        }
    },
}
</script>

<style lang="scss">
    @import "@/assets/css/changecity/select.scss";
</style>