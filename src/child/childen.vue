<template>
  <div class="childen">
        <div class="childen-item" v-for="(item,index) in lists" :key="index">
            <div class="item">
                <van-icon :name="item.icon" />
                <span>{{item.name}}</span>
            </div>
            <div v-if="item.children">
                <childen :lists="item.children"></childen>
            </div>
        </div>
  </div>
</template>
<script>
export default {
    name:"childen",
    props: ['lists'],
};
</script>
<style lang="less">
.childen{
  width :100%;
  height: 100vh;
  font-size: .22rem;
  .childen-item{
      width:100%;
    //   height: .4rem;
      padding-left: .2rem;
      .item{
          height:.4rem;
      }
  }
}
</style>