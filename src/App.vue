<template>
  <div>
    <h1>这是 App 组件</h1>

    <mt-button type="danger" icon="more" @click="show">default</mt-button>
    <mt-button type="danger" size="large" plain>default</mt-button>
    <mt-button type="danger" size="small" disabled>default</mt-button>
    <button type="button" class="mui-btn mui-btn-royal">
					紫色
		</button>
    <mybtn type="primary">123443</mybtn>
    <router-link to="/account">Account</router-link>
    <router-link to="/goodslist">Goodslist</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import {Toast} from "mint-ui";
  export default{
    data(){
      return {
        toasInstanse:null
      };
    },
    created(){
      this.getList()
    },
    methods:{
      getList(){
        this.show();
        setTimeout(() =>{
          this.toasInstanse.close()
        },3000);
      },
      show(){
       var toasInstanse = Toast({
          message:'提示信息',
          duration:-1,//如果是-1弹出后不消失
          position:'top',
          iconClass:'glyphicon glyphicon-heart',//设置图标的类
          classname:'mytoast'//为Toast添加样式，需要自己提供类名
        });
      }
    }
  }
</script>


<style>

</style>
