<template>
    <div >
        <span class="name">按省份选择</span>
        <my-select 
        :list="provinceList"
        title="省份"
        :value='province'
        :showWrapperActive='provinceActive'
        @change_active="changeProvinceActive"
        @change='changeProvince'
        className='province'></my-select>
        <my-select 
         :list="cityList"
          title="城市" 
          :value='city'
         :showWrapperActive='cityActive' 
          @change_active="changeCityActive"
          @change="changeCity"
          :disabled="cityDisabled"
          className='city'></my-select>
        <span>直接搜索</span>
        <!-- 城市所搜栏 -->
         <el-select
            v-model="searchWord"
            filterable
            remote
            reserve-keyword
            placeholder="请输入关键词"
            :remote-method="remoteMethod"
            :loading="loading">
            <el-option
            v-for="item in searchList"
            :key="item"
            :label="item"
            :value="item"
            >
        </el-option>
  </el-select>
    </div>
</template>

<script>
import MySelect from './select.vue'
import api from '@/api/index.js'
export default {
    data() {
        return {
            provinceList:[],
            province: "省份",
            cityList: [],
            city:'城市',
            provinceActive: false,
            cityActive: false,
            searchList: [],
            searchWord: '',
            loading: false,     //是否正在从远程获取数据
            cityDisabled: true
        }
    },
    created() {
        api.getprovince()
            .then(res =>{
                this.provinceList = res.data.data.map( item => {
                    item.name = item.provinceName
                     console.log(item)
                    return item
                })

            })
    },
    components:{
        MySelect
    },
    methods: {
    changeProvinceActive(flag) {
      this.provinceActive = flag;
      if (flag) {
        this.cityActive = false;
      }
    //   console.log( this.provinceActive, this.cityActive)
    },
    changeCityActive(flag) {
      this.cityActive = flag;
      if (flag) {
        this.provinceActive = false;
      }
    //    console.log(this.provinceActive, this.cityActive)
    },
    //切换省份
    changeProvince(value){
        this.province = value.name;
        //当改变省份的时候 城市不可选
        this.cityDisabled = false;
        // console.log(value.cityInfoList[name])
        this.cityList = value.cityInfoList;
    },
    //切换城市
    changeCity(value){
        this.city = value.name;
        //切换城市 把数据传去vuex
        this.$store.dispatch('setPosition', value);
        this.$router.push({name:'index'})
    },
    //远程搜索方法
    remoteMethod(e){
        //可以直接获取输入框里面的值 然后发给后端 请求后端接口

    }
    },
}
</script>

<style lang="scss">
    @import "@/assets/css/changeCity/iselect.scss";
</style>