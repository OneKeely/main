<template>
  <div class="goods-list">
    <div class="tit">
      {{ cont.title }}
    </div>
    <div class="titt">
        <span class="oe"> {{ cont.add_time | sliceTime }}</span>
        <span>点击次数:&nbsp;&nbsp;{{ cont.click }}</span>
    </div>
    <div class="content" v-html="cont.content">
    </div> 
    <!-- 发表评论 -->
    <div class="scu">
      <h5>发表评论</h5>
      <p class="inp">
        <input type="text" v-model="con" >
     <button @click='pasdiscuss(con)' >发表评论</button>
      </p>
    </div>
    <div class="foot" v-for='(item,index) in cuss' :key='index'>
      <p class="use" >精彩评论 用户:{{ item.user_name }} <span class="ooo">发表时间：{{ item.add_time | sliceTime }}</span></p>
      <p>{{ item.content }}</p>
    </div>
    <!-- <input type="text" v-model="cont">
    <button @click="pasgrabble(cont)">搜索</button> -->
  </div>
</template>
<script>

import { listObj } from '../../server';
export default {
  data(){
      return {
          oneid:this.$route.params.newsid,
          con:'',
          cont:'',
          cuss:''
      }
  },
  methods:{
     getnewsDetails(){
          listObj.newsDetails(this.oneid).then(res =>{
              this.cont=res.message[0];
              console.log(this.cont)
          })
      },
      // 图片列表
    //   getPhotolist(){
    //    listObj.getphoto(this.oneid).then(res =>{
    //     //  console.log(res)
    //    })
    //  },
// 评论方法
     pasdiscuss(con){
       listObj.discuss(this.oneid,con).then(res=>{
         console.log(res)
       }),
       this.getdiscuss()
     },
// 获取评论
      getdiscuss(id){
        listObj.getdiscuss(this.oneid).then(res =>{
          this.cuss=res.message;
          console.log(res.message)
        })
      }
// 搜索
    //  pasgrabble(){
    //    listObj.grabble(this.cont).then(res =>{
    //      console.log(res)
    //    })
    //  }
  },
  filters:{
    sliceTime(val){
      return val.slice(0,10);
    }
  },
  mounted(){
      this.getnewsDetails();
      // this.getPhotolist()
      this.getdiscuss()
  }
  
};
</script>
<style lang="less">
.goods-list{
  padding:.2rem .05rem;
  width :100%;
  height: 100vh;
  font-size: 15px;
  .tit{
    font-size: .16rem;
    color: red;
    margin-bottom: .2rem;
    text-align: center;
  }
  .titt{
    padding-bottom: .10rem;
    color:#0076B8;
    border-bottom: 2px solid #9A9A9A;
    .oe{
      margin-right: 2rem;
    }
  }
  .content{
    font-size: .14rem;
    color: #8f8f94;
    p{
      // text-indent: 2em
      padding: .1rem 0;
    }
  }
  .scu{
    margin-top:.1rem;
    height:.7rem;
    width: 100%;
    // border-bottom: 1px solid #9A9A9A;
    h5{
      font-size:.22rem;
      // margin-bottom:.1rem;
    }
    .inp{
      margin-top: .1rem;
      // border-top: 1px solid #9A9A9A;
    }
  }
  .foot{
    height:.5rem;
    width:100%;
    .use{
      background:thistle;
    }
    p{
      padding:.05rem 0;
    }
    .ooo{
      margin-left: .2rem;
    }
  }
}
</style>
