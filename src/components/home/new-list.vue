<template>
  <div class="news-list">
   <van-card
      v-for="item in list" :key='item.id'
        :desc="item.zhaiyao"
        :title="item.title"
        :thumb="item.img_url"
        @click="newDetails(item.id)"
    >
      <template #bottom>
            <span>{{ item.add_time | sliceTime }}</span>&nbsp;&nbsp;
            <span>点击次数：{{ item.click }}</span>&nbsp;&nbsp;
            <span>ID：{{ item.id }}</span>
        </template>
    </van-card>
  </div>
</template>
<script>
import { listObj } from '../../server'
export default {
  name:'news-list',
  data(){
      return {
          list:[]
      }
  },
  
  methods:{
    getnews(){
      listObj.getnews().then(res =>{
        this.list=res.message;
      })
    },
    newDetails(id){
          this.$router.push({
              name:'new-list-details',
              params:{newsid:id}
          })
      }
  },
  filters:{
    sliceTime(val){
      return val.slice(0,10);
    }
  },
  mounted(){
    this.getnews()
  }
};
</script>
<style lang="less">
  .news-list{
    width:100%;
    height:100vh;
  }
 
</style>
