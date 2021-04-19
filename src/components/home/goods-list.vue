<template>
  <div class="goods-list">
    <div class="shang" v-for='item in list' :key='item.id'>
      <img :src="item.img_url" alt="">
      <h3>{{ item.title }}</h3>
      <div class="ite">
          <p class="i"><span class="i-o">￥{{ item.sell_price }}</span><span class="i-t">{{ item.market_price }}</span></p>
        <p class="te"><span class="te-o">热卖中</span><span class="te-t">库存还有：{{ item.stock_quantity }}</span></p>
      </div>
    </div>
  </div>
</template>
<script>
import {listObj} from '../../server'
export default {
  name:'goods-list',
  data(){
      return {
        list:[]
      }
  },
  methods:{
    getgoodslist(){
      listObj.getgoods().then(res =>{
        this.list = res.message;
        console.log(res)
      })
    }
  },
  mounted(){
    this.getgoodslist()
  }
};
</script>
<style lang="less">
  .goods-list{
    width:100%;
    height:100vh;
    font-size: .15rem;
    padding:.1rem;
    .shang{
     column-count: 2;
     box-shadow: 1px 1px 4px #888888;
     margin:.2rem;
      img{
        width: 1.5rem;
        height: 1.6rem;
      }
      h3{
        margin: .1rem 0;
        line-height: .2rem;
      }
      p{
        margin-bottom: .04rem;
        margin:.08rem;
        
      }
      .ite{
        background-color: gray;
        padding:.05rem;
        .i{
          .i-o{
            color: red;
          }
          .i-t{
            font-size: .14rem;
            margin-left: .2rem;
            text-decoration: line-through;
          }
        }
      }
     
    }
    // .goods-item {
    //   font-size: 12px;
    //   column-count: 2;
    // }
    // .goods-item img {
    //   width: 100px;
    //   height: 100px;
    // }
    // .qwe {
    //   box-shadow: 1px 1px 2px #888888;
    //   margin: 0.1rem;
    //   text-align: center;
    // }
  }
</style>
