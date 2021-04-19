<template>
  <div class="home">
    <van-nav-bar title="标题" left-text="返回" right-text="按钮" left-arrow />
    <div class="loop">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img v-lazy="image.img" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div>
      <van-grid :column-num="3">
        <router-link v-for="(value,index) in arr" :to="{path:value.path}" :key="index">
            <van-grid-item :icon="value.icon" :text="value.alias" />
          </router-link>
      </van-grid>
    </div>
    <!-- <div class="n">
      <childen :lists="list"></childen>
    </div> -->
  </div>
</template>
<script>
// import childen from './child/childen';
import { listObj } from './server';
export default {
  name: "home",
  data() {
    return {
      images:[],
      arr:[
          {
            path:'/new-list',
            icon:'location-o',
            alias:'新闻资讯'
          },
          {
            path:'/photo-list',
            icon:'coupon-o',
            alias:'图片分享'
          },
          {
            path:'/goods-list',
            icon:'shopping-cart-o',
            alias:'商品列表'
          },
          {
            path:'/new-list',
            icon:'location-o',
            alias:'新闻资讯'
          },
          {
            path:'/photo-list',
            icon:'coupon-o',
            alias:'图片分享'
          },
          {
            path:'/goods-list',
            icon:'shopping-cart-o',
            alias:'商品列表'
          },
        ],
      list:[]
    };
  },
  components:{
    // childen
  },
  methods:{
    getNewsLoop(){
      listObj.getLoopNews().then(res=>{
        this.images = res.message;
      })
    },
    getNavdate(){
      listObj.getnavDate().then(res =>{
        this.list=res;
        // console.log(res);
      })
    }
  },
  mounted() {
    this.getNewsLoop();
    this.getNavdate()
  },
};
</script>
<style lang="less">
.home {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  flex-flow: column nowrap;
  .van-nav-bar{
    height: .8rem;
    background:pink;
  }
  .loop{
    width: 100%;
    height: 2rem;
    .van-swipe{
      width: 100%;
      height: 100%;
    }
    .van-swipe-item{
      width: 100%;
      height: 100%;
    }
    img{
      width: 100%;
      height: 100%;
    }
  }
  // .head{
  //   width: 100%;
  //   height: 1rem;
  //   background: gold;
  // }
  // .content{
  //   width: 100%;
  //   flex:1;
  //   background: pink;
  //   font-size: 22px;
  // }
  // .foot{
  //   width: 100%;
  //   height: 1rem;
  //   background: gold;
  // }
  .n{
    width:100%;
    height:4rem;
  }
}

</style>
